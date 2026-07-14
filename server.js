const { serve } = require('@hono/node-server');
const { serveStatic } = require('@hono/node-server/serve-static');
const { Hono } = require('hono');
const { cors } = require('hono/cors');

const app = new Hono();

// Enable CORS
app.use('/api/*', cors());

// Serve static files (HTML, CSS, JS)
app.use('/*', serveStatic({ root: './' }));

// URL Sanitization function
function sanitizeInstagramUrl(rawUrl) {
    if (typeof rawUrl !== 'string') return null;
    if (rawUrl.length > 300) return null; // Prevent oversized payload
    
    try {
        const parsedUrl = new URL(rawUrl);
        // Ensure it's an Instagram domain
        if (!['instagram.com', 'www.instagram.com'].includes(parsedUrl.hostname)) {
            return null;
        }
        
        // Strip out dangerous queries or fragments, just keep origin and pathname
        // and safely append any safe query if needed, but for IG reels, path is enough.
        return `${parsedUrl.origin}${parsedUrl.pathname}`;
    } catch (e) {
        return null;
    }
}

app.post('/api/download', async (c) => {
    try {
        const body = await c.req.json();
        const rawUrl = body.url;

        // Sanitize
        const cleanUrl = sanitizeInstagramUrl(rawUrl);
        
        if (!cleanUrl) {
            return c.json({ status: 'error', message: 'URL tidak valid atau berbahaya.' }, 400);
        }

        console.log(`[API] Memproses permintaan download untuk URL yang telah disanitasi: ${cleanUrl}`);

        try {
            // Import dinamis agar tidak error jika dijalankan di environment yang belum install
            const { igdl } = require('btch-downloader');
            
            const response = await igdl(cleanUrl);
            
            if (!response || !response.status || !response.result || response.result.length === 0) {
                throw new Error("Gagal mengambil media dari Instagram.");
            }

            // Menyesuaikan format data dengan frontend
            // Jika hasilnya array (seperti carousel atau single post)
            const resultData = response.result;
            
            if (resultData.length === 1) {
                return c.json({
                    status: 'success',
                    data: {
                        status: 'redirect',
                        url: resultData[0].url,
                        thumbnail: resultData[0].thumbnail
                    }
                });
            } else {
                // Carousel
                return c.json({
                    status: 'success',
                    data: {
                        status: 'picker',
                        picker: resultData.map(item => ({
                            url: item.url,
                            thumb: item.thumbnail
                        }))
                    }
                });
            }

        } catch (downloadErr) {
            console.error("Downloader API error:", downloadErr);
            return c.json({ status: 'error', message: 'Gagal mengekstrak media. Mungkin akun di-private atau link tidak valid.' }, 400);
        }

    } catch (error) {
        console.error(error);
        return c.json({ status: 'error', message: 'Terjadi kesalahan pada server.' }, 500);
    }
});

const port = 3000;
console.log(`Server Hono berjalan di http://localhost:${port}`);

serve({
    fetch: app.fetch,
    port
});
