
// Sample data for 4 popular anime
const popularAnimeData = [
    {
        "title": "Tales of herding gods",
        "image": "/Assets/Images/tales_of_herding_gods.jpg",
        "score": 8.88,
        "episodes": 24,
        "status": "Airing",
        "type": "TV",
        "updated": new Date().toISOString().split('T')[0] // Today's date
    },
    {
        "title": "To be hero X",
        "image": "/Assets/Images/to_be_hero_X.jpg",
        "score": 8.66,
        "episodes": 12,
        "status": "Airing",
        "type": "TV",
        "updated": new Date(Date.now() - 86400000).toISOString().split('T')[0] // Yesterday
    },
    {
        "title": "Wind Breaker",
        "image": "/Assets/Images/Trending09.jpg",
        "score": 8.45,
        "episodes": 24,
        "status": "Airing",
        "type": "TV",
        "updated": new Date(Date.now() - 86400000 * 2).toISOString().split('T')[0] // 2 days ago
    },
    {
        "title": "The Beginning After the End",
        "image": "/Assets/Images/Trending02.jpg",
        "score": 9.12,
        "episodes": 16,
        "status": "Airing",
        "type": "TV",
        "updated": new Date(Date.now() - 86400000 * 3).toISOString().split('T')[0] // 3 days ago
    },
    {
        "title": "Boruto: Naruto Next Generations",
        "image": "/Assets/Images/Boruto.jpg",
        "score": 8.95,
        "episodes": 11,
        "status": "Airing",
        "type": "TV",
        "updated": new Date(Date.now() - 86400000 * 4).toISOString().split('T')[0] // 4 days ago
    },
    {
        "title": "Spy X Family",
        "image": "/Assets/Images/Spy_X_Family.jpg",
        "score": 8.78,
        "episodes": 25,
        "status": "Airing",
        "type": "TV",
        "updated": new Date(Date.now() - 86400000 * 5).toISOString().split('T')[0] // 5 days ago
    },
    {
        "title": "The Sword of Demon Hunter: Kijin Gentosho",
        "image": "/Assets/Images/Trending03.jpg",
        "score": 8.88,
        "episodes": 24,
        "status": "Airing",
        "type": "TV",
        "updated": new Date(Date.now() - 86400000 * 6).toISOString().split('T')[0] // 6 days ago
    },
    {
        "title": "The Children of Shiunji Family",
        "image": "/Assets/Images/Trending07.jpg",
        "score": 8.95,
        "episodes": 11,
        "status": "Airing",
        "type": "TV",
        "updated": new Date(Date.now() - 86400000 * 7).toISOString().split('T')[0] // 1 week ago
    },
    {
        "title": "Please Put Them On, Takamine-san",
        "image": "/Assets/Images/Trending08.jpg",
        "score": 9.12,
        "episodes": 16,
        "status": "Airing",
        "type": "TV",
        "updated": new Date(Date.now() - 86400000 * 10).toISOString().split('T')[0] // 10 days ago
    },
    {
        "title": "From Old Country Bumpkin to Master Swordsman",
        "image": "/Assets/Images/Trending06.jpg",
        "score": 8.88,
        "episodes": 24,
        "status": "Airing",
        "type": "TV",
        "updated": new Date(Date.now() - 86400000 * 21).toISOString().split('T')[0] // 3 weeks ago
    },
    {
        "title": "Beyblade X",
        "image": "/Assets/Images/beyblade_x.png",
        "score": 8.95,
        "episodes": 11,
        "status": "Airing",
        "type": "TV",
        "updated": new Date(Date.now() - 86400000 * 28).toISOString().split('T')[0] // 4 weeks ago
    },
    {
        "title": "Fire Force",
        "image": "/Assets/Images/fire_force.jpg",
        "score": 9.12,
        "episodes": 16,
        "status": "Airing",
        "type": "TV",
        "updated": new Date(Date.now() - 86400000 * 35).toISOString().split('T')[0] // 5 weeks ago
    },
    {
        "title": "Can boy and girl friendship hold up",
        "image": "/Assets/Images/can_boy_and_girl_friendship.jpg",
        "score": 8.88,
        "episodes": 24,
        "status": "Airing",
        "type": "TV",
        "updated": new Date(Date.now() - 86400000 * 42).toISOString().split('T')[0] // 6 weeks ago
    },
    {
        "title": "The Brillian healer",
        "image": "/Assets/Images/The_brillian_healer.jpg",
        "score": 8.95,
        "episodes": 11,
        "status": "Airing",
        "type": "TV",
        "updated": new Date(Date.now() - 86400000 * 49).toISOString().split('T')[0] // 7 weeks ago
    },
    {
        "title": "Yu-Gi-Oh! Cards Game",
        "image": "/Assets/Images/Yu_Gi_oh_cardgame.jpg",
        "score": 8.78,
        "episodes": 25,
        "status": "Airing",
        "type": "TV",
        "updated": new Date(Date.now() - 86400000 * 56).toISOString().split('T')[0] // 8 weeks ago
    },
    {
        "title": "Samurai 7",
        "image": "/Assets/Images/samurai_7.jpg",
        "score": 8.78,
        "episodes": 25,
        "status": "Airing",
        "type": "TV",
        "updated": new Date(Date.now() - 86400000 * 63).toISOString().split('T')[0] // 9 weeks ago
    },
    {
        "title": "Blue Lock",
        "image": "/Assets/Images/Blue_lock.jpg",
        "score": 9.12,
        "episodes": 16,
        "status": "Airing",
        "type": "TV",
        "updated": new Date(Date.now() - 86400000 * 70).toISOString().split('T')[0] // 10 weeks ago

    },

    {
        "title": "Black Clover",
        "image": "/Assets/Images/Black_clover.jpg",
        "score": 9.18,
        "episodes": 37,
        "status": "Airing",
        "type": "TV",
        "updated": new Date(Date.now() - 86400000 * 84).toISOString().split('T')[0] // 12 weeks ago
    }

];
document.addEventListener("DOMContentLoaded", () => {
    const popularAnimeGrid = document.getElementById("popular-anime-grid");
    const allAnimeGrid = document.getElementById("all-anime-grid");

    // Create custom top 4 anime in specific order
    const topAnime = [
        {
            "title": "One Piece",
            "image": "/Assets/Images/Trending01.jpg",
            "score": 9.45,
            "episodes": 1080,
            "status": "Airing",
            "type": "TV",
            "updated": "Recently updated",
            "description": "Follows the adventures of Monkey D. Luffy and his pirate crew as they search for the ultimate treasure, the One Piece.",
            "genres": "Action, Adventure, Comedy",
            "japaneseTitle": "ワンピース",
            "aired": "Oct 20, 1999"
        },
        {
            "title": "Naruto: Shippuden",
            "image": "/Assets/Images/Naruto.jpg",
            "score": 9.05,
            "episodes": 500,
            "status": "Completed",
            "type": "TV",
            "updated": "Recently updated",
            "description": "Naruto Uzumaki returns after two years of training, ready to face stronger enemies and protect his village.",
            "genres": "Action, Adventure, Martial Arts",
            "japaneseTitle": "NARUTO - ナルト - 疾風伝",
            "aired": "Feb 15, 2007"
        },
        {
            "title": "Bleach",
            "image": "/Assets/Images/bleach.jpg",
            "score": 8.95,
            "episodes": 366,
            "status": "Completed",
            "type": "TV",
            "updated": "Recently updated",
            "description": "Ichigo Kurosaki gains the powers of a Soul Reaper and must protect humans from evil spirits.",
            "genres": "Action, Supernatural, Adventure",
            "japaneseTitle": "ブリーチ",
            "aired": "Oct 5, 2004"
        },
        {
            "title": "Solo Leveling",
            "image": "/Assets/Images/solo_leveling.jpg",
            "score": 9.20,
            "episodes": 12,
            "status": "Airing",
            "type": "TV",
            "updated": "Recently updated",
            "description": "Sung Jin-Woo, the weakest hunter, gains the ability to level up and become the most powerful hunter.",
            "genres": "Action, Adventure, Fantasy",
            "japaneseTitle": "俺だけレベルアップな件",
            "aired": "Jan 7, 2024"
        }
    ];
    const totalPages = 9;
    const pagination = document.getElementById("pagination");

    function renderPagination(currentPage = 1) {
        pagination.innerHTML = ""; // Clear old buttons

        // Previous Button
        if (currentPage > 1) {
            const prevBtn = document.createElement("button");
            prevBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>`;
            prevBtn.className = "flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-purple-500 dark:hover:bg-purple-600 text-gray-700 dark:text-gray-300 transition-colors mx-1";
            prevBtn.addEventListener("click", () => renderPagination(currentPage - 1));
            pagination.appendChild(prevBtn);
        }

        // Page Buttons
        const maxVisible = 1; // Maximum buttons to show before/after current
        let startPage = Math.max(1, currentPage - maxVisible);
        let endPage = Math.min(totalPages, currentPage + maxVisible);

        // Show first page button if needed
        if (startPage > 1) {
            const firstBtn = createPageButton(1, currentPage);
            pagination.appendChild(firstBtn);
            if (startPage > 2) {
                const ellipsis = document.createElement("span");
                ellipsis.className = "mx-1 text-gray-500 dark:text-gray-400";
                ellipsis.textContent = "...";
                pagination.appendChild(ellipsis);
            }
        }

        // Main range of buttons
        for (let i = startPage; i <= endPage; i++) {
            pagination.appendChild(createPageButton(i, currentPage));
        }

        // Show last page button if needed
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                const ellipsis = document.createElement("span");
                ellipsis.className = "mx-1 text-gray-500 dark:text-gray-400";
                ellipsis.textContent = "...";
                pagination.appendChild(ellipsis);
            }
            const lastBtn = createPageButton(totalPages, currentPage);
            pagination.appendChild(lastBtn);
        }

        // Next Button
        if (currentPage < totalPages) {
            const nextBtn = document.createElement("button");
            nextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>`;
            nextBtn.className = "flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-purple-500 dark:hover:bg-purple-600 text-gray-700 dark:text-gray-300 transition-colors mx-1";
            nextBtn.addEventListener("click", () => renderPagination(currentPage + 1));
            pagination.appendChild(nextBtn);
        }
    }

    function createPageButton(page, currentPage) {
        const btn = document.createElement("button");
        btn.innerText = page;
        btn.className = `flex items-center justify-center w-10 h-10 rounded-full mx-1 transition-colors ${page === currentPage
                ? "bg-purple-600 dark:bg-purple-700 text-white font-bold shadow-lg shadow-purple-500/20 dark:shadow-purple-600/20"
                : "bg-gray-200 dark:bg-gray-800 hover:bg-purple-500 dark:hover:bg-purple-600 text-gray-700 dark:text-gray-300"
            }`;
        btn.addEventListener("click", () => renderPagination(page));
        return btn;
    }

    // Initial render
    renderPagination();

    // Display the custom top 4 anime in the popular grid with hover effects
    topAnime.forEach(anime => {
        const card = document.createElement("div");
        card.className = "group relative cursor-pointer";

        card.innerHTML = `
            <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
                <div class="relative">
                    <img src="${anime.image}" alt="${anime.title}" 
                         class="w-full h-64 object-cover group-hover:opacity-90 transition duration-300 group-hover:blur-sm">
                    
                    <!-- Play icon overlay -->
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" 
                             class="bi bi-play-fill text-white" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                        </svg>
                    </div>
                    
                    <!-- Episode badge -->
                    <div class="absolute bottom-2 left-2 flex items-center gap-1 bg-purple-600/90 text-white text-xs px-2 py-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" 
                             class="bi bi-badge-cc-fill" viewBox="0 0 16 16">
                            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm3.027 4.002c-.83 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05H7.36v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747C2.5 6.051 3.414 5 5.018 5c1.318 0 2.29.813 2.342 2v.11H6.213c-.048-.638-.505-1.108-1.186-1.108m6.14 0c-.831 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.318 1.727.69 0 1.139-.435 1.187-1.05H13.5v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.751 2.518-2.751 1.318 0 2.29.813 2.342 2v.11h-1.147c-.048-.638-.505-1.108-1.187-1.108z"/>
                        </svg>
                        <span>${anime.episodes}</span>
                    </div>
                    
                    <!-- Score badge -->
                    <div class="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="mr-1" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        ${anime.score}
                    </div>
                </div>
                
                <div class="p-3">
                    <h3 class="text-md font-semibold truncate text-gray-800 dark:text-gray-200">${anime.title}</h3>
                    <div class="flex justify-between items-center mt-1 text-xs text-gray-500 dark:text-gray-400">
                        <span>${anime.type}</span>
                        <span>${anime.updated}</span>
                    </div>
                </div>
            </div>

            <!-- Tooltip with transparent blur effect -->
            <div class="invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute z-10 top-0 left-0 w-64 mt-2 bg-black/40 backdrop-blur-md text-white text-sm rounded-lg p-4 shadow-xl border border-gray-700">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold">${anime.title}</h3>
                    <div class="flex items-center gap-1 text-gray-300">
                        <span class="text-xs">HD</span>
                        <span class="text-xs">${anime.episodes} eps</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                        </svg>
                    </div>
                </div>
                
                <div class="flex items-center gap-2 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-yellow-400" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <span class="text-white text-md">${anime.score}</span>
                </div>
                
                <p class="text-gray-300 mb-3 text-xs">${anime.description}</p>
                
                <div class="mb-3">
                    <h4 class="text-sm font-semibold mb-1">${anime.title.split(' ')[0]}</h4>
                    <ul class="text-xs text-gray-400 space-y-1">
                        <li class="flex items-center gap-2">
                            <strong>${anime.type}</strong>
                            <span>${anime.episodes} eps</span>
                        </li>
                    </ul>
                </div>
                
                <ul class="text-xs text-gray-400 space-y-1 mb-4">
                    <li><strong>Japanese:</strong> ${anime.japaneseTitle}</li>
                    <li><strong>Aired:</strong> ${anime.aired}</li>
                    <li><strong>Status:</strong> <span class="text-green-400">${anime.status}</span></li>
                    <li><strong>Genres:</strong> ${anime.genres}</li>
                </ul>
                
                <button class="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded-md text-sm transition-colors duration-300">
                    Watch now
                </button>
            </div>
        `;

        popularAnimeGrid.appendChild(card);
    });

    // Sort the remaining anime by score to get most popular first
    const sortedAnime = [...popularAnimeData]
        .filter(anime => !["One Piece", "Naruto: Shippuden", "Bleach", "Solo Leveling"].includes(anime.title))
        .sort((a, b) => b.score - a.score);

    // Display all anime in the all anime grid (6-column layout)
    sortedAnime.forEach(anime => {
        allAnimeGrid.appendChild(createAnimeCard(anime, false));
    });

    function createAnimeCard(anime, isPopular) {
        const card = document.createElement("div");
        card.className = "group relative cursor-pointer";

        // Different image height for popular vs regular cards
        const imageHeight = isPopular ? 'h-64' : 'h-48';

        card.innerHTML = `
        <div class="bg-white dark:bg-black rounded overflow-hidden shadow hover:shadow-lg transition-shadow">
            <div class="relative">
                <img src="${anime.image}" alt="${anime.title}" 
                     class="w-full ${imageHeight} object-cover group-hover:opacity-90 transition duration-300 group-hover:blur-sm">
                
                <!-- Play icon overlay -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" 
                             class="bi bi-play-fill text-white" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Episode badge -->
                <div class="absolute bottom-2 left-2 flex items-center gap-1 bg-purple-600/90 text-white text-xs px-2 py-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" 
                         class="bi bi-badge-cc-fill" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm3.027 4.002c-.83 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05H7.36v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747C2.5 6.051 3.414 5 5.018 5c1.318 0 2.29.813 2.342 2v.11H6.213c-.048-.638-.505-1.108-1.186-1.108m6.14 0c-.831 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.318 1.727.69 0 1.139-.435 1.187-1.05H13.5v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.751 2.518-2.751 1.318 0 2.29.813 2.342 2v.11h-1.147c-.048-.638-.505-1.108-1.187-1.108z"/>
                    </svg>
                    <span>${anime.episodes}</span>
                </div>
                
                <!-- Score badge -->
                <div class="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="mr-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    ${anime.score}
                </div>
            </div>
            
            <div class="p-2">
                <h3 class="text-md font-semibold truncate text-gray-500 dark:text-purple-400">${anime.title}</h3>
                <p class="text-sm text-gray-400">${anime.type} • ${anime.status}</p>
            </div>
        </div>

        <!-- Tooltip with transparent blur effect -->
        <div class="invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute z-10 top-20 left-40 w-64 mt-2 bg-black/40 backdrop-blur-md text-white text-sm rounded-lg p-4 shadow-xl border border-gray-700">
            <div class="flex justify-between items-start mb-2">
                <h3 class="text-lg font-bold">${anime.title}</h3>
                <div class="flex items-center gap-1 text-gray-300">
                    <span class="text-xs">HD</span>
                    <span class="text-xs">${anime.episodes}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                    </svg>
                </div>
            </div>
            
            <div class="flex items-center gap-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-yellow-400" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <span class="text-white text-md">${anime.score}</span>
            </div>
            
            <p class="text-gray-300 mb-3 text-xs">${anime.description || "No description available."}</p>
            
            <div class="mb-3">
                <h4 class="text-sm font-semibold mb-1">${anime.title.split(' ')[0] || "Anime"} Info</h4>
                <ul class="text-xs text-gray-400 space-y-1">
                    <li class="flex items-center gap-2">
                        <strong>${anime.type}</strong>
                        <span>${anime.episodes} eps</span>
                    </li>
                </ul>
            </div>
            
            <ul class="text-xs text-gray-400 space-y-1 mb-4">
                <li><strong>Japanese:</strong> ${anime.japaneseTitle || "N/A"}</li>
                <li><strong>Aired:</strong> ${anime.aired || "N/A"}</li>
                <li><strong>Status:</strong> <span class="text-green-400">${anime.status || "Unknown"}</span></li>
                <li><strong>Genres:</strong> ${anime.genres || "N/A"}</li>
            </ul>
            
            <button class="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded-md text-sm transition-colors duration-300">
                Watch now
            </button>
        </div>
    `;
        return card;
    }
});