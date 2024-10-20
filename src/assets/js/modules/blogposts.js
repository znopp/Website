function loadBlogposts() {
    document.getElementById("blogposts").innerHTML = `
    <div class="grid grid-cols-1 gap-y-16 mb-6 max-w-5xl mx-auto mt-10">
        <div class="theme-cards">
            <div class="mx-auto max-w-2xl desktop:max-w-5xl">
                <h1 class="text-2xl mt-5">Creatio Ex Nihilo</h1>
                <div class="px-10 mx-auto">
                    <p class="theme-date mb-5">2024-10-15</p>
                    <p class="mb-5">If you've been here before, you probably noticed the massive overhaul. How do you like it?</p class="mb-5">
                    <p class="mb-5">
                    It's been a long time in the making, but I finally took the time to remake my website into something
                    that I'm much prouder with.
                    </p>
                    <p class="mb-5">It's sporting TailwindCSS, making it much easier to build lightweight yet feature-rich websites.
                        Moreover, the colors are based on a well-established theme called Nord, but extended and tweaked for
                        my usecases.
                    </p>
                    <p class="mb-5">Finally, I want to draw your attention to the new theme button in the top right. Gone are the days of forced dark mode. Hallelujah!</p>
                </div>
            </div>
        </div>
    </div>
    `;

}
document.addEventListener("DOMContentLoaded", loadBlogposts);