// this my tailwind config file i created for my project
<script src="https://cdn.tailwindcss.com"></script>
module.exports = {
    darkMode: 'class', // This is essential for manual dark mode toggling
    content: [
        "./**/*.{html,js}", // Adjust this to match your project structure
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    600: '#7c3aed',
                    700: '#6d28d9',
                }
            },
            
            
        },
    },
    plugins: [],
}