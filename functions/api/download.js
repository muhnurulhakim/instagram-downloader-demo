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
        try {
            const parsedUrl = new URL(rawUrl);
            if (!['instagram.com', 'www.instagram.com'].includes(parsedUrl.hostname)) {
                return new Response(JSON.stringify({ status: 'error', message: 'Hanya URL Instagram yang didukung.' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
            cleanUrl = `${parsedUrl.origin}${parsedUrl.pathname}`;
        } catch (e) {
            return new Response(JSON.stringify({ status: 'error', message: 'Format URL tidak valid.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        console.log(`[Cloudflare API] Memproses download: ${cleanUrl}`);

        // Gunakan proxy API langsung yang digunakan oleh btch-downloader 
        // karena environment Cloudflare Workers tidak mendukung impor library node murni.
        const apiUrl = `https://backend1.tioo.eu.org/igdl?url=${encodeURIComponent(cleanUrl)}`;
        
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

        // Format return dari API ini adalah Array
        if (!responseData || responseData.length === 0) {
            throw new Error("Gagal mengambil media dari Instagram.");
        }

        if (responseData.length === 1) {
            return new Response(JSON.stringify({
                status: 'success',
                data: {
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

    } catch (error) {
        console.error("Downloader API error:", error);
        return new Response(JSON.stringify({ status: 'error', message: 'Gagal mengekstrak media. Mungkin akun di-private atau tautan tidak valid.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
