document.addEventListener('DOMContentLoaded', function () {
  class HeroSlider {
    constructor() {
      this.slides = document.querySelectorAll('.slide');
      this.dots = document.querySelectorAll('.dot');
      if (!this.slides.length) return;

      this.currentSlide = 0;
      this.slideInterval = 5000;
      this.slideTimer = null;
      this.touchStartX = 0;
      this.touchEndX = 0;

      this.init();
    }

    init() {
      // Initialize slider
      this.showSlide(this.currentSlide);
      this.startSlider();

      // Add event listeners
      this.addEventListeners();

      // For debugging
      console.log('Slider initialized with', this.slides.length, 'slides');
    }

    showSlide(index) {
      // Validate index
      if (index < 0) index = this.slides.length - 1;
      if (index >= this.slides.length) index = 0;

      // Update slides
      this.slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
        slide.setAttribute('aria-hidden', i !== index);
      });

      // Update dots - with purple active state
      this.dots.forEach((dot, i) => {
        const isActive = i === index;
        dot.classList.toggle('bg-purple-500', isActive);  // Purple when active
        dot.classList.toggle('bg-gray-300', !isActive);   // Gray when inactive
        dot.setAttribute('aria-current', isActive);
      });

      this.currentSlide = index;
      this.dispatchSlideChangeEvent();
    }

    nextSlide() {
      this.showSlide((this.currentSlide + 1) % this.slides.length);
    }

    prevSlide() {
      this.showSlide((this.currentSlide - 1 + this.slides.length) % this.slides.length);
    }

    startSlider() {
      this.stopSlider(); // Clear any existing interval
      this.slideTimer = setInterval(() => this.nextSlide(), this.slideInterval);
    }

    stopSlider() {
      if (this.slideTimer) {
        clearInterval(this.slideTimer);
        this.slideTimer = null;
      }
    }

    handleDotClick(index) {
      this.stopSlider();
      this.showSlide(index);
      this.startSlider();
    }

    handleTouchStart(e) {
      this.touchStartX = e.changedTouches[0].screenX;
    }

    handleTouchEnd(e) {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    }

    handleSwipe() {
      const threshold = 50; // Minimum swipe distance in pixels

      if (this.touchStartX - this.touchEndX > threshold) {
        // Swipe left - next slide
        this.nextSlide();
      } else if (this.touchEndX - this.touchStartX > threshold) {
        // Swipe right - previous slide
        this.prevSlide();
      }
    }

    dispatchSlideChangeEvent() {
      const event = new CustomEvent('slideChange', {
        detail: {
          slideIndex: this.currentSlide,
          slideElement: this.slides[this.currentSlide]
        }
      });
      document.dispatchEvent(event);
    }

    addEventListeners() {
      // Mouse events for desktop
      const sliderContainer = document.getElementById('sliderContainer');
      if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => this.stopSlider());
        sliderContainer.addEventListener('mouseleave', () => this.startSlider());

        // Touch events for mobile
        sliderContainer.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        sliderContainer.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
      }

      // Dot navigation
      this.dots.forEach((dot, index) => {
        dot.addEventListener('click', () => this.handleDotClick(index));
        dot.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.handleDotClick(index);
          }
        });
      });

      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
          this.nextSlide();
        } else if (e.key === 'ArrowLeft') {
          this.prevSlide();
        }
      });
    }
  }

  // Initialize the slider
  new HeroSlider();
});

// trending slider
document.addEventListener('DOMContentLoaded', function () {
  const trendingContainer = document.querySelector('.trending-container');
  const prevBtn = document.querySelector('.trending-prev');
  const nextBtn = document.querySelector('.trending-next');
  const animeCards = document.querySelectorAll('.anime-card');

  // Calculate card width including margin
  const cardStyle = window.getComputedStyle(animeCards[0]);
  const cardWidth = animeCards[0].offsetWidth +
    parseInt(cardStyle.marginRight);

  // Variables for smooth scrolling and drag
  let isDragging = false;
  let startX;
  let scrollLeft;
  let animationId;
  let targetScroll = 0;
  let isAnimating = false;

  // Initialize
  checkButtons();

  // Improved next button click with smooth scroll
  nextBtn.addEventListener('click', () => {
    if (isAnimating) return;

    const maxScroll = trendingContainer.scrollWidth - trendingContainer.clientWidth;
    targetScroll = Math.min(trendingContainer.scrollLeft + (cardWidth * 3), maxScroll);
    smoothScrollTo(targetScroll);
  });

  // Improved prev button click with smooth scroll
  prevBtn.addEventListener('click', () => {
    if (isAnimating) return;

    targetScroll = Math.max(trendingContainer.scrollLeft - (cardWidth * 3), 0);
    smoothScrollTo(targetScroll);
  });

  // Smooth scroll function
  function smoothScrollTo(target) {
    isAnimating = true;
    const start = trendingContainer.scrollLeft;
    const distance = target - start;
    const duration = 500; // milliseconds
    let startTime = null;

    function animateScroll(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      trendingContainer.scrollLeft = start + distance * easeInOutQuad(progress);

      if (timeElapsed < duration) {
        animationId = requestAnimationFrame(animateScroll);
      } else {
        isAnimating = false;
        checkButtons();
      }
    }

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(animateScroll);
  }

  // Improved drag handling
  trendingContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    trendingContainer.classList.add('grabbing');
    startX = e.pageX - trendingContainer.offsetLeft;
    scrollLeft = trendingContainer.scrollLeft;
    cancelAnimationFrame(animationId);
    isAnimating = false;
  });

  trendingContainer.addEventListener('mouseleave', () => {
    if (isDragging) {
      endDrag();
    }
  });

  trendingContainer.addEventListener('mouseup', () => {
    if (isDragging) {
      endDrag();
    }
  });

  trendingContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - trendingContainer.offsetLeft;
    const walk = (x - startX) * 2.5; // Increased multiplier for better feel
    trendingContainer.scrollLeft = scrollLeft - walk;
  });

  // Touch events
  trendingContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    trendingContainer.classList.add('grabbing');
    startX = e.touches[0].pageX - trendingContainer.offsetLeft;
    scrollLeft = trendingContainer.scrollLeft;
    cancelAnimationFrame(animationId);
    isAnimating = false;
  });

  trendingContainer.addEventListener('touchend', () => {
    if (isDragging) {
      endDrag();
    }
  });

  trendingContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - trendingContainer.offsetLeft;
    const walk = (x - startX) * 2.5; // Increased multiplier for touch
    trendingContainer.scrollLeft = scrollLeft - walk;
  });

  function endDrag() {
    isDragging = false;
    trendingContainer.classList.remove('grabbing');

    // Snap to nearest card
    const cardIndex = Math.round(trendingContainer.scrollLeft / cardWidth);
    targetScroll = cardIndex * cardWidth;
    smoothScrollTo(targetScroll);
  }

  function enforceBoundaries() {
    const maxScroll = trendingContainer.scrollWidth - trendingContainer.clientWidth;
    if (trendingContainer.scrollLeft < 0) {
      trendingContainer.scrollLeft = 0;
    } else if (trendingContainer.scrollLeft > maxScroll) {
      trendingContainer.scrollLeft = maxScroll;
    }
    checkButtons();
  }

  function checkButtons() {
    const maxScroll = trendingContainer.scrollWidth - trendingContainer.clientWidth;

    prevBtn.disabled = trendingContainer.scrollLeft <= 10;
    nextBtn.disabled = trendingContainer.scrollLeft >= maxScroll - 10;

    updateButtonStyles();
  }

  function updateButtonStyles() {
    if (prevBtn.disabled) {
      prevBtn.classList.add('opacity-50', 'cursor-not-allowed');
      prevBtn.classList.remove('hover:bg-gray-300', 'dark:hover:bg-gray-600');
    } else {
      prevBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      prevBtn.classList.add('hover:bg-gray-300', 'dark:hover:bg-gray-600');
    }

    if (nextBtn.disabled) {
      nextBtn.classList.add('opacity-50', 'cursor-not-allowed');
      nextBtn.classList.remove('hover:bg-gray-300', 'dark:hover:bg-gray-600');
    } else {
      nextBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      nextBtn.classList.add('hover:bg-gray-300', 'dark:hover:bg-gray-600');
    }
  }

  // Handle window resize
  window.addEventListener('resize', function () {
    checkButtons();
  });
});
// Drag to scroll functionality (same as before)
const slider = document.getElementById('commentSlider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.style.cursor = 'grabbing';
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.style.cursor = 'grab';
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});
// show cmt
const toggle = document.getElementById('toggleComments');
const commentSection = document.getElementById('commentSlider');

toggle.addEventListener('change', function () {
  if (this.checked) {
    commentSection.style.display = 'block';
  } else {
    commentSection.style.display = 'none';
  }
});
document.addEventListener('DOMContentLoaded', function() {
  // Theme Toggle Logic
  const themeToggle = document.getElementById('themeToggle');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');
  
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  sunIcon.classList.toggle('hidden', savedTheme === 'dark');
  moonIcon.classList.toggle('hidden', savedTheme !== 'dark');

  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    sunIcon.classList.toggle('hidden', isDark);
    moonIcon.classList.toggle('hidden', !isDark);
  });

  // Date Carousel Logic
  const dateContainer = document.getElementById('dateContainer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Generate 60 days (30 before today, 30 after)
  const today = new Date();
  const allDays = [];
  for (let i = -30; i <= 30; i++) {
    const d = new Date();
    d.setDate(today.getDate() + i);
    allDays.push(d);
  }

  // Start with today centered in the view (3 days before today)
  let currentIndex = allDays.findIndex(day => 
    day.toDateString() === today.toDateString()
  ) - 3;

  function renderDays() {
    dateContainer.innerHTML = '';
    
    // Always show exactly 7 days
    const visibleDays = allDays.slice(currentIndex, currentIndex + 7);
    
    visibleDays.forEach(date => {
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      const dateText = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const isToday = date.toDateString() === today.toDateString();

      const dayElement = document.createElement('div');
      dayElement.className = `rounded-lg px-3 py-2 sm:px-4 sm:py-3 flex flex-col items-center text-center cursor-pointer ${
        isToday ? 'bg-purple-600 text-white' : 'bg-gray-100 dark:bg-gray-700 hover:bg-purple-500 hover:text-white'
      } transition text-xs sm:text-sm`;
      
      dayElement.innerHTML = `
        <span class="font-medium">${dayName}</span>
        <span class="${isToday ? 'text-white' : 'text-gray-500 dark:text-gray-400'} text-2xs sm:text-xs">${dateText}</span>
      `;
      dateContainer.appendChild(dayElement);
    });

    // Update button states
    updateButtonStates();
  }

  function updateButtonStates() {
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex + 7 >= allDays.length;
    
    // Visual feedback for disabled state
    prevBtn.classList.toggle('opacity-50', currentIndex <= 0);
    prevBtn.classList.toggle('cursor-not-allowed', currentIndex <= 0);
    nextBtn.classList.toggle('opacity-50', currentIndex + 7 >= allDays.length);
    nextBtn.classList.toggle('cursor-not-allowed', currentIndex + 7 >= allDays.length);
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderDays();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex + 7 < allDays.length) {
      currentIndex++;
      renderDays();
    }
  });

  // Real-time clock
  function updateClock() {
    const now = new Date();
    document.getElementById('currentTime').textContent = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Initial render
  renderDays();
});

// footer
