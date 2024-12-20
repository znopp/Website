function loadNavbar() {
    document.getElementById("navbar").innerHTML = `
        <nav class="font-thin">
            <div class="mx-auto max-w-7xl px-10">
                <div class="flex h-20 items-center justify-between">

                    <!-- Left section (Logo) -->
                    <div class="flex-shrink-0 p-2">
                        <a href="/" aria-label="Homepage">
                            <img class="h-14 rounded-full" src="/assets/images/logo.png" alt="Logo">
                        </a>
                    </div>

                    <!-- Center section (Desktop links) and mobile hamburger button -->
                    <div class="flex items-center justify-center flex-grow">
                        <!-- Centered hamburger button for mobile -->
                        <div class="desktop:hidden">
                            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-light-1 focus:ring-dark-4 hover:bg-light-1 dark:hover:bg-dark-4" aria-controls="mobile-menu" aria-expanded="false">
                                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <!-- Desktop links (hidden on mobile) -->
                        <div class="hidden desktop:flex desktop:space-x-8 desktop:items-center flex-grow justify-center">
                            <a href="/" class="theme-hover px-3 py-2 rounded-lg text-2xl">Home</a>
                            <a href="/about" class="theme-hover px-3 py-2 rounded-lg text-2xl">About</a>
                            <a href="/contact" class="theme-hover px-3 py-2 rounded-lg text-2xl">Contact</a>
                            <a href="/projects" class="theme-hover px-3 py-2 rounded-lg text-2xl">Projects</a>
                            <a href="/blogposts" class="theme-hover px-3 py-2 rounded-lg text-2xl">Blogposts</a>
                        </div>
                    </div>

                    <!-- Right section (Theme toggle) -->
                    <div class="flex-shrink-0 p-2">
                        <button id="theme-toggle" type="button" class="theme-toggle-button focus:outline-none rounded-full text-sm p-2.5">
                            <svg id="theme-toggle-dark-icon" class="hidden w-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            <svg id="theme-toggle-light-icon" class="hidden w-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile menu -->
            <div class="hidden desktop:hidden theme-mobile-navbar text-xl" id="mobile-menu">
                <div class="space-y-1 px-12 py-2">
                    <a href="/" class="theme-hover block py-2 rounded-md">Home</a>
                    <a href="/about" class="theme-hover block py-2 rounded-md">About</a>
                    <a href="/contact" class="theme-hover block py-2 rounded-md">Contact</a>
                    <a href="/projects" class="theme-hover block py-2 rounded-md">Projects</a>
                    <a href="/blogposts" class="theme-hover block py-2 rounded-md">Blogposts</a>
                </div>
            </div>
        </nav>
`;

    // mobile navbar

    const menuButton = document.querySelector('button[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById("mobile-menu");
    const openIcon = menuButton.querySelector("svg.block");  // Hamburger icon
    const closeIcon = menuButton.querySelector("svg.hidden");  // X icon

    // Ensure the menu is closed by default and shows the open icon
    mobileMenu.classList.add("hidden");
    openIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");

    // Add a click event listener to the menu button
    menuButton.addEventListener("click", () => {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true" || false;

        // Toggle the aria-expanded attribute
        menuButton.setAttribute("aria-expanded", !isExpanded);

        // Toggle the visibility of the mobile menu
        mobileMenu.classList.toggle("hidden");

        // Swap between the open and close icons
        openIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
    });

    if (window.triggerThemeSetup) {
        window.triggerThemeSetup();
    }

}

document.addEventListener("DOMContentLoaded", loadNavbar);