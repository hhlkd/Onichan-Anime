const categoriesToShow = ["Top Airing ", "Most Popular", "Most Favorited", "Most Completed"];
const animeGrid = document.getElementById("anime-grid");

categoriesToShow.forEach(categoryName => {
    const category = animeData[categoryName];
    if (!category) return;

    const column = document.createElement("div");
    column.className = "space-y-4";

    // Category title
    const title = document.createElement("h3");
    title.className = "text-xl font-bold text-purple-400 mb-4";
    title.textContent = categoryName.trim();
    column.appendChild(title);

    // Anime list inside column
    category.forEach(anime => {
        const card = document.createElement("div");
        card.className = "flex items-start gap-3 p-4 featured-card";

        card.innerHTML = `
        <img src="${anime.image}" alt="${anime.title}" class="w-16 h-20 object-cover rounded-md shadow">
        <div class="flex-1">
          <h4 class="font-semibold text-gray-500 dark:text-white">${anime.title}</h4>

          <div class="flex items-center flex-wrap gap-2 text-sm mt-1">
          <div
                  class="hd bg-cyan-400 flex items-center text-white px-2 py-1 rounded-ss-md rounded-es-md text-xs sm:text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-badge-cc-fill mx-2" viewBox="0 0 16 16">
                    <path
                      d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm3.027 4.002c-.83 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05H7.36v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747C2.5 6.051 3.414 5 5.018 5c1.318 0 2.29.813 2.342 2v.11H6.213c-.048-.638-.505-1.108-1.186-1.108m6.14 0c-.831 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.318 1.727.69 0 1.139-.435 1.187-1.05H13.5v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.751 2.518-2.751 1.318 0 2.29.813 2.342 2v.11h-1.147c-.048-.638-.505-1.108-1.187-1.108z" />
                  </svg>
                  <span class="font-semibold h-full rounded-md ">${anime.episodes}</span>
                </div>
            
            
            <div
                  class="hd bg-rose-400  flex items-center text-white px-2 py-1 rounded-ee-md rounded-se-md  text-xs sm:text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-mic-fill" viewBox="0 0 16 16">
                    <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
                    <path
                      d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                  </svg>

                  <span class="font-semibold h-full rounded-md ">${anime.score}</span>
                </div>
            <span class="text-gray-400 text-xs">• ${anime.type}</span>
          </div>
        </div>
      `;

        column.appendChild(card);
    });

    animeGrid.appendChild(column);
});