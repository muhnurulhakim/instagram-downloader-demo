document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('ig-url');
    const downloadBtn = document.getElementById('download-btn');
    const loadingEl = document.getElementById('loading');
    const errorEl = document.getElementById('error-message');
    const errorText = document.getElementById('error-text');
    const resultContainer = document.getElementById('result-container');
    const mediaList = document.getElementById('media-list');

    downloadBtn.addEventListener('click', processUrl);
    urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') processUrl();
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
            // Simulasi network delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Karena Instagram memblokir request publik (termasuk Cobalt API), 
            // kita menggunakan mock data untuk demonstrasi UI.
            // Untuk production, ganti dengan fetch ke endpoint API berbayar Anda (misal RapidAPI).
            
            const data = {
                status: 'redirect',
                // Dummy video url (sample)
                url: 'https://www.w3schools.com/html/mov_bbb.mp4'
            };

            // Jika URL spesifik yang diminta user untuk dites
            if (url.includes('DZ58ItASnLi')) {
                console.log('Testing specific URL dari user');
            }

            displayResult(data);

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
            createMediaCard(data.url);
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
        const isVideo = url.includes('.mp4') || (thumbUrl !== null);
        
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
            img.src = url;
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
