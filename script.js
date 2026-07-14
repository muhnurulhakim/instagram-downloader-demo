document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('ig-url');
    const downloadBtn = document.getElementById('download-btn');
    const loadingEl = document.getElementById('loading');
    const errorEl = document.getElementById('error-message');
    const errorText = document.getElementById('error-text');
    const resultContainer = document.getElementById('result-container');
    const mediaList = document.getElementById('media-list');
    const clearBtn = document.getElementById('clear-btn');

    downloadBtn.addEventListener('click', processUrl);
    urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') processUrl();
    });

    urlInput.addEventListener('input', () => {
        if (urlInput.value.length > 0) {
            clearBtn.classList.remove('hidden');
        } else {
            clearBtn.classList.add('hidden');
        }
    });

    clearBtn.addEventListener('click', () => {
        urlInput.value = '';
        clearBtn.classList.add('hidden');
        urlInput.focus();
    });

    async function processUrl() {
        const url = urlInput.value.trim();
        
        if (!url) {
            showError("Silakan masukkan URL Instagram.");
            return;
        }

        if (!url.includes('instagram.com')) {
            showError("URL tidak valid. Pastikan itu link Instagram.");
            return;
        }

        // Reset UI
        errorEl.classList.add('hidden');
        resultContainer.classList.add('hidden');
        mediaList.innerHTML = '';
        
        // Show Loading
        loadingEl.classList.remove('hidden');
        downloadBtn.disabled = true;

        try {
            const response = await fetch('/api/download', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: url })
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.message || 'API merespons dengan error.');
            }

            const data = await response.json();

            if (data.status === 'error') {
                throw new Error(data.message || "Terjadi kesalahan pada server pencari.");
            }

            displayResult(data.data);

        } catch (error) {
            console.error('Error fetching media:', error);
            showError("Gagal mengunduh media. Mungkin akun di-private atau terjadi kesalahan server.");
        } finally {
            loadingEl.classList.add('hidden');
            downloadBtn.disabled = false;
        }
    }

    function displayResult(data) {
        resultContainer.classList.remove('hidden');

        // Handle single video/photo
        if (data.status === 'redirect' || data.status === 'stream') {
            createMediaCard(data.url, data.thumbnail);
        } 
        // Handle carousel (multiple items)
        else if (data.status === 'picker') {
            data.picker.forEach(item => {
                createMediaCard(item.url, item.thumb);
            });
        }
    }

    function createMediaCard(url, thumbUrl = null) {
        const card = document.createElement('div');
        card.className = 'media-card';

        // Check if video or image by url extension or fallback
        // Karena rapidcdn app url mungkin tidak berakhiran .mp4, 
        // kita andalkan ketersediaan thumbnail atau link format mp4 untuk deteksi video.
        const isVideo = url.includes('.mp4') || (thumbUrl !== null && thumbUrl !== undefined);
        
        if (isVideo) {
            const video = document.createElement('video');
            video.className = 'media-preview';
            video.src = url;
            video.controls = true;
            if (thumbUrl) video.poster = thumbUrl;
            card.appendChild(video);
        } else {
            const img = document.createElement('img');
            img.className = 'media-preview';
            img.src = thumbUrl || url; // Jika thumbnail ada maka gunakan, jika tidak pakai sumber URL utama
            img.alt = 'Instagram Media';
            card.appendChild(img);
        }

        const a = document.createElement('a');
        a.className = 'download-link';
        a.href = url;
        a.target = '_blank';
        a.textContent = 'Unduh File';
        // HTML5 download attribute
        a.download = `IG_Media_${Date.now()}`;
        
        card.appendChild(a);
        mediaList.appendChild(card);
    }

    function showError(message) {
        errorText.textContent = message;
        errorEl.classList.remove('hidden');
        resultContainer.classList.add('hidden');
    }
});
