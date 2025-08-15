// Function to render top anime
function renderTopAnime(animeList) {
  const container = document.getElementById('topAnimeList');
  
  if (!animeList || animeList.length === 0) {
    container.innerHTML = '<div class="text-center py-8 text-gray-500">No anime found</div>';
    return;
  }

  container.innerHTML = animeList.map((anime, index) => `
    <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
      <span class="text-lg font-bold text-purple-600 w-6">${(index + 1).toString().padStart(2, '0')}</span>
      <img src="${anime.image}" alt="${anime.title}" 
           class="w-12 h-12 object-cover rounded-lg border border-gray-200 dark:border-gray-700">
      <div class="flex-1 min-w-0">
        <h4 class="text-sm font-semibold text-gray-800 dark:text-white truncate">${anime.title}</h4>
        <div class="flex justify-between items-center mt-1">
          <div class="flex bg-green-600 px-2 py-0.5 text-white rounded-ss-md rounded-es-md text-xs sm:text-sm">
            <span>ep</span>
            <span> ${anime.episodes}</span>
          </div>
          <div class="flex bg-purple-600 px-2 py-0.5 text-white rounded-ee-md rounded-se-md text-xs sm:text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill mr-1" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <span>${anime.score.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Function to filter anime by time period
function filterTopAnime(period, element) {
  // Update active tab
  document.querySelectorAll('.top-anime-tab').forEach(tab => {
    tab.classList.remove('bg-purple-600', 'text-white');
    tab.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-gray-200');
  });
  element.classList.add('bg-purple-600', 'text-white');
  element.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-gray-200');

  // Get all anime
  const allAnime = animeData['Last Episodes'];
  
  // Get current date and calculate date ranges
  const today = new Date().toISOString().split('T')[0];
  const weekAgo = new Date(Date.now() - 86400000 * 7).toISOString().split('T')[0];
  const monthAgo = new Date(Date.now() - 86400000 * 30).toISOString().split('T')[0];

  // Filter and sort based on period
  let filteredAnime;
  switch(period) {
    case 'today':
      filteredAnime = allAnime
        .filter(anime => anime.updated === today)
        .sort((a, b) => b.score - a.score);
      break;
    case 'week':
      filteredAnime = allAnime
        .filter(anime => anime.updated >= weekAgo)
        .sort((a, b) => b.score - a.score);
      break;
    case 'month':
      filteredAnime = allAnime
        .filter(anime => anime.updated >= monthAgo)
        .sort((a, b) => b.score - a.score);
      break;
    default:
      filteredAnime = allAnime
        .sort((a, b) => b.score - a.score);
  }

  // If no results for time period, show top 10 overall
  if (filteredAnime.length === 0) {
    filteredAnime = allAnime
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  } else {
    // Limit to top 10
    filteredAnime = filteredAnime.slice(0, 10);
  }

  renderTopAnime(filteredAnime);
}

// Initialize with today's top anime
document.addEventListener('DOMContentLoaded', () => {
  // Set Today as active by default
  const todayTab = document.querySelector('.top-anime-tab[onclick*="today"]');
  todayTab.classList.add('bg-purple-600', 'text-white');
  todayTab.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-gray-200');
  
  // Load today's anime
  filterTopAnime('today', todayTab);
});