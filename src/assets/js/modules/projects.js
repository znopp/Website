function loadProjects() {
    document.getElementById("projects").innerHTML = `
    <div class="grid grid-cols-1 gap-4 mb-6 max-w-5xl mx-auto desktop:grid-cols-3">
        <div class="theme-cards theme-hover">
            <a href="https://discord.gg/D6wRzcgGXN" target="_blank">
                <div class="mx-auto">
                    <h1 class="text-2xl mt-5 mb-5">Untitled Ocean Game</h1>
                    <div class="px-10 mx-auto">
                        <p class="mb-5">A small Unity game I've worked on in my free time. It's not finished, but maybe some day...</p>
                    </div>
                </div>
            </a>
        </div>

        <div class="theme-cards theme-hover">
            <a href="https://github.com/znopp/WYR" target="_blank">
                <div class="mx-auto">
                    <h1 class="text-2xl mt-5 mb-5">Would You Rather...?</h1>
                    <div class="px-10 mx-auto">
                        <p class="mb-5">A Discord bot meant to create discussion on topics, such as "Would you rather have super-speed or flight?"</p>
                    </div>
                </div>
            </a>
        </div>

        <div class="theme-cards theme-hover">
            <a href="https://github.com/SniconMC/Compass/tree/dev" target="_blank">
                <div class="mx-auto">
                    <h1 class="text-2xl mt-5 mb-5">Compass</h1>
                    <div class="px-10 mx-auto">
                        <p class="mb-5">A Minecraft server based on the Minestom architecture. It is the hub server for several minigames.</p>
                    </div>
                </div>
            </a>
        </div>

        <div class="theme-cards theme-hover desktop:grid-cols-subgrid desktop:col-start-1  desktop:col-span-3">
            <a href="https://github.com/znopp/mistor-time-java" target="_blank">
                <div class="px-10 mx-auto">
                    <h1 class="text-2xl mt-5 mb-5">Mr. Time</h1>
                    <p class="mb-5">Not sure what time it is? This Discord bot will tell you!</p>
                    <p class="mb-5">Constantly.</p>
                    <p class="mb-5">It was made for private use with inside jokes between friends, and served as my entry to Java programming.</p>
                    <p class="mb-5">You see, a great friend of mine, Geri, helped me out a lot in creating it - actually, it's a recreation from the old Python version.
                                    He's a great guy, and I recommend you <a href="https://geri.dev" target="_blank" class="theme-link">check him out!</a>
                    </p>
                </div>
            </a>
        </div>
    </div>
    `;

}
document.addEventListener("DOMContentLoaded", loadProjects);