document.addEventListener("DOMContentLoaded", () => {
    const latestEpisodeGrid = document.getElementById("latest-episode-grid");
    const lastEpisodes = animeData["Last Episodes"];

    lastEpisodes.forEach(anime => {
        const card = document.createElement("div");
        card.className = "group relative cursor-pointer";

        card.innerHTML = `
      <div class="bg-white dark:bg-black rounded overflow-hidden shadow hover:shadow-lg transition-shadow">
        <div class="relative">
          <img src="${anime.image}" alt="${anime.title}" class="w-full h-48 object-cover group-hover:opacity-90 transition duration-300 group-hover:blur-sm">
          <!-- Video play icon (hidden by default, shows on hover) -->
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-play-fill text-lg" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
            </svg>
            </div>
          </div>
          <div class="absolute bottom-2 left-2 flex items-center gap-1 bg-purple-600/90 text-white text-xs px-2 py-1 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-badge-cc-fill" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm3.027 4.002c-.83 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05H7.36v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747C2.5 6.051 3.414 5 5.018 5c1.318 0 2.29.813 2.342 2v.11H6.213c-.048-.638-.505-1.108-1.186-1.108m6.14 0c-.831 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.318 1.727.69 0 1.139-.435 1.187-1.05H13.5v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.751 2.518-2.751 1.318 0 2.29.813 2.342 2v.11h-1.147c-.048-.638-.505-1.108-1.187-1.108z"/>
            </svg>
            <span>${anime.episodes}</span>
          </div>
        </div>
          
        </div>
        <div class="p-2">
          <h3 class="text-md font-semibold truncate text-gray-500 dark:text-purple-400 ">${anime.title}</h3>
          <p class="text-sm text-gray-400">${anime.type} • ${anime.status}</p>
        </div>
      </div>

      <!-- Tooltip with transparent blur effect -->
      <div class="invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute z-10 top-20 left-40 w-64 mt-2 bg-black/40 backdrop-blur-md text-white text-sm rounded-lg p-4 shadow-xl border border-gray-700">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-lg font-bold">${anime.title}</h3>
          <div class="flex items-center gap-1 text-gray-300">
            <span class="text-xs">HD</span>
            
             ${anime.episodes}</span>
             <span class="text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
          </div>
        </div>
        
        <div class="flex items-center gap-2 mb-3">
         
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-yellow-400" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <span class="text-white text-md">
         
          N/A
          </span>
        </div>
        
        <p class="text-gray-300 mb-3 text-xs">${anime.description || "Lingwu Continent is a world where spiritual power and martial spirit coexist."}</p>
        
        <div class="mb-3">
          <h4 class="text-sm font-semibold mb-1">${anime.title.split(' ')[0] || "Lingwu"} Con</h4>
          <ul class="text-xs text-gray-400 space-y-1">
            <li class="flex items-center gap-2">
              <strong>ONA</strong>
              <span>I0m</span>
            </li>
          </ul>
        </div>
        
        <ul class="text-xs text-gray-400 space-y-1 mb-4">
          <li><strong>Japanese:</strong> ${anime.japaneseTitle || "灵武大陆"}</li>
          <li><strong>Aired:</strong> ${anime.aired || "Jul 26, 2024"}</li>
          <li><strong>Status:</strong> <span class="text-green-400">${anime.status || "Currently Airing"}</span></li>
          <li><strong>Genres:</strong> ${anime.genres || "Action, Adventure, Fantasy"}</li>
        </ul>
        
        <button class="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded-md text-sm transition-colors duration-300">
          Watch now
        </button>
      </div>
    `;

        latestEpisodeGrid.appendChild(card);
    });
});