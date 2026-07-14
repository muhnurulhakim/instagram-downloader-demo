export async function onRequestPost(context) {
    const { request } = context;

    try {
        const body = await request.json();
        const rawUrl = body.url;

        // Sanitize
        if (typeof rawUrl !== 'string' || rawUrl.length > 300) {
            return new Response(JSON.stringify({ status: 'error', message: 'URL tidak valid atau terlalu panjang.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        let cleanUrl = '';
        let platform = '';
        try {
            const parsedUrl = new URL(rawUrl);
            const hostname = parsedUrl.hostname.replace(/^www\./, '');
            
            if (hostname === 'instagram.com') {
                platform = 'instagram';
                cleanUrl = `${parsedUrl.origin}${parsedUrl.pathname}`;
            } else if (hostname === 'youtube.com' || hostname === 'youtu.be') {
                platform = 'youtube';
                cleanUrl = rawUrl; // YouTube URLs often need query params like ?v=
            } else {
                return new Response(JSON.stringify({ status: 'error', message: 'Hanya URL Instagram dan YouTube yang didukung saat ini.' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
        } catch (e) {
            return new Response(JSON.stringify({ status: 'error', message: 'Format URL tidak valid.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        console.log(`[Cloudflare API] Memproses download ${platform}: ${cleanUrl}`);

        let apiUrl = '';
        if (platform === 'instagram') {
            apiUrl = `https://backend1.tioo.eu.org/igdl?url=${encodeURIComponent(cleanUrl)}`;
        } else if (platform === 'youtube') {
            apiUrl = `https://backend1.tioo.eu.org/youtube?url=${encodeURIComponent(cleanUrl)}`;
        }
        
        const apiResponse = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'btch/6.0.37',
                'X-Client-Version': '6.0.37'
            }
        });

        if (!apiResponse.ok) {
             throw new Error(`API merespons dengan status: ${apiResponse.status}`);
        }

        const responseData = await apiResponse.json();

        if (platform === 'instagram') {
            if (!responseData || responseData.length === 0) {
                throw new Error("Gagal mengambil media dari Instagram.");
            }

            if (responseData.length === 1) {
                return new Response(JSON.stringify({
                    status: 'success',
                    data: {
                        platform: 'instagram',
                        status: 'redirect',
                        url: responseData[0].url || '',
                        thumbnail: responseData[0].thumbnail || ''
                    }
                }), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            } else {
                return new Response(JSON.stringify({
                    status: 'success',
                    data: {
                        platform: 'instagram',
                        status: 'picker',
                        picker: responseData.map(item => ({
                            url: item.url || '',
                            thumb: item.thumbnail || ''
                        }))
                    }
                }), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
        } else if (platform === 'youtube') {
            if (!responseData || !responseData.status) {
                throw new Error("Gagal mengambil media dari YouTube.");
            }
            
            return new Response(JSON.stringify({
                status: 'success',
                data: {
                    platform: 'youtube',
                    status: 'youtube_links',
                    title: responseData.title || 'YouTube Video',
                    thumbnail: responseData.thumbnail || '',
                    mp4: responseData.mp4 || '',
                    mp3: responseData.mp3 || ''
                }
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

    } catch (error) {
        console.error("Downloader API error:", error);
        return new Response(JSON.stringify({ status: 'error', message: 'Gagal mengekstrak media. Mungkin URL tidak valid atau server tujuan bermasalah.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
