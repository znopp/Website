// theme-manager.js

// Immediately invoke this function to set the initial theme
(function() {
    if (localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
})();

// Theme toggle functionality
function setupThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    if (!themeToggleBtn || !themeToggleDarkIcon || !themeToggleLightIcon) {
        // If elements aren't loaded yet, wait and try again
        requestAnimationFrame(setupThemeToggle);
        return;
    }

    // Set initial icon state
    if (document.documentElement.classList.contains('dark')) {
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleDarkIcon.classList.add('hidden');
    } else {
        themeToggleLightIcon.classList.add('hidden');
        themeToggleDarkIcon.classList.remove('hidden');
    }

    // Remove any existing event listeners
    themeToggleBtn.removeEventListener('click', toggleTheme);

    // Add click event listener
    themeToggleBtn.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    // Toggle theme
    document.documentElement.classList.toggle('dark');

    // Toggle icons
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // Update localStorage
    localStorage.setItem('color-theme',
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
}

// Start setting up theme toggle as soon as DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupThemeToggle);
} else {
    setupThemeToggle();
}

// Expose a function to manually trigger setup (useful if navbar is loaded dynamically)
window.triggerThemeSetup = setupThemeToggle;