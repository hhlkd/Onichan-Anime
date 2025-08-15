// main.js
export function initializeTheme() {
  document.addEventListener('alpine:init', () => {
    Alpine.store('theme', {
      dark: window.matchMedia('(prefers-color-scheme: dark)').matches,

      init() {
        // Check for saved preference
        const saved = localStorage.getItem('darkMode');
        if (saved !== null) {
          this.dark = saved === 'true';
        }
        this.updateTheme();
      },

      toggle() {
        this.dark = !this.dark;
        localStorage.setItem('darkMode', this.dark);
        this.updateTheme();
      },

      updateTheme() {
        document.documentElement.classList.toggle('dark', this.dark);
      }
    });

    // Initialize immediately
    Alpine.store('theme').init();
  });
}
