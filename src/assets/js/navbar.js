document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('button[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = menuButton.querySelector('svg.block');  // Hamburger icon
    const closeIcon = menuButton.querySelector('svg.hidden');  // X icon

    // Ensure the menu is closed by default and shows the open icon
    mobileMenu.classList.add('hidden');
    openIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');

    // Add a click event listener to the menu button
    menuButton.addEventListener('click', () => {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true' || false;

        // Toggle the aria-expanded attribute
        menuButton.setAttribute('aria-expanded', !isExpanded);

        // Toggle the visibility of the mobile menu
        mobileMenu.classList.toggle('hidden');

        // Swap between the open and close icons
        openIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });
});
