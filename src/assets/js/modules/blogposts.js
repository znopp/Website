function loadBlogposts() {
    document.getElementById("blogposts").innerHTML = `
    <div class="grid grid-cols-1 gap-y-16 mb-6 max-w-5xl mx-auto mt-10">
    
    <div class="theme-cards">
            <div class="mx-auto max-w-2xl desktop:max-w-5xl">
                <h1 class="text-2xl mt-5">Mobile adjustment, polish & life update</h1>
                <div class="px-10 mx-auto">
                    <p class="theme-date mb-5">2024-10-26</p>
                    <p class="mb-5">Hello again! Very small update to the website this time :)</p>
                    
                    <p class="mb-5">
                    The main page now has a padding to stop the text on mobile from touching both sides of the screen.
                    I forgot to add it to the main page only, but that's been fixed now.
                    </p>
                    
                    <p class="mb-5">
                    The CSS classes most commonly used in the outermost layer have been consolidated into one class called
                    <span class="theme-highlight">content-base</span>.
                    This means less copy-paste and therefore fewer points of failure.
                    That is to say, each document could've been slightly different, but now I am guaranteed they will all have these base classes.
                    </p>
                    
                    <p class="mb-5">
                    Lastly I also changed the content description for most pages, as I realized they are what show up in an embed to my website.
                    </p>
                    
                    <p class="mb-10">
                    Actually, I just noticed that <span class="theme-highlight">theme-highlight</span> has the same color as the card background on light mode. Fixing it now!
                    </p>
                    
                    <p class="mb-5">So, how's life otherwise?</p>
                    
                    <p class="mb-5">
                    Well, I just got my first paycheck yesterday, so that's cool!
                    It's not much, but I also did not work a full month in September.
                    </p>
                    <p class="mb-5">
                    My cat, Shadow, is doing well. Cute and lovable as always. Though sometimes he has a tendency of being exactly in the way of my monitors.
                    I'm not sure how he does it, to be honest.
                    He's doing it right now, actually. It's hard to see what I'm typing. Buuut, I love him regardless. Always <3
                    </p>
                    
                    <p class="mb-5">
                    Yesterday, I also bought a new keyboard! The last one, which tragically suffered from the yoghurt incident of '24, <span class="italic">technically</span> does still work.
                    It's just that it feels... blegh.
                    The keys affected feel crunchy, more resistace than usual, and not in a good way like a heavy button could be.
                    </p>
                    
                    <p class="mb-5">
                    This new keyboard is actually very similar to the old one, as it is just a different sub-model.
                    The fallen soldier is a Cooler Master SK630, and the new one is an SK653.
                    The main differences are as follows:
                    </p>
                    <ol class="list-decimal list-inside">
                        <li class="mb-2">
                        It's white
                        </li>
                        
                        <li class="mb-2">
                        It can be both wired and wireless, with a USB stick/dongle to your device
                        </li>
                        
                        <li class="mb-2">
                        It has a numpad
                        </li>
                        
                        <li class="mb-20">
                        The keys are not entirely flat, instead slightly curved.
                        </li>
                        
                    </ol>
                    
                    <p class="mb-5 text-left">
                    Also, what do you think of the text being centered?
                    Maybe it should stick to the left instead, like normal text does.
                    It's probably better for readability, I just don't know how good it would look.
                    </p>
                    
                    <p class="mb-5 text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin vel maximus magna.
                    Integer dignissim at tellus quis ultricies.
                    Ut semper lectus vel quam egestas, ut cursus ligula facilisis.
                    Pellentesque efficitur mi ipsum.
                    Fusce posuere mi vel augue pretium, eu ultrices felis tincidunt.
                    </p>
                    
                    <p class="mb-5 text-left">
                    Nunc eu imperdiet metus.
                    Curabitur eget tellus posuere, mattis justo id, pretium ligula.
                    Quisque pretium ut velit nec tincidunt.
                    Suspendisse sapien nunc, sollicitudin vel urna in, interdum iaculis ipsum.
                    Aliquam congue at arcu faucibus mattis.
                    In turpis sapien, sollicitudin sed tortor non, tincidunt vestibulum odio. 
                    </p>
                    
                    <p class="mb-5 text-left">
                    You know, it doesn't look that bad...
                    </p>
                    
                    <p class="mb-5 text-left">
                    Maybe next update.
                    </p>
                    
                </div>
            </div>
        </div>
    
        <div class="theme-cards">
            <div class="mx-auto max-w-2xl desktop:max-w-5xl">
                <h1 class="text-2xl mt-5">Creatio Ex Nihilo</h1>
                <div class="px-10 mx-auto">
                    <p class="theme-date mb-5">2024-10-15</p>
                    <p class="mb-5">
                    If you've been here before, you probably noticed the massive overhaul. How do you like it?
                    </p>
                    
                    <p class="mb-5">
                    It's been a long time in the making, but I finally took the time to remake my website into something
                    that I'm much prouder with.
                    </p>
                    
                    <p class="mb-5">
                    It's sporting TailwindCSS, making it much easier to build lightweight yet feature-rich websites.
                    Moreover, the colors are based on a well-established theme called Nord, but extended and tweaked for
                    my use cases.
                    </p>
                    
                    <p class="mb-5">
                    Finally, I want to draw your attention to the new theme button in the top right.
                    Gone are the days of forced dark mode. Hallelujah!
                    </p>
                </div>
            </div>
        </div>        
    </div>
    `;

}
document.addEventListener("DOMContentLoaded", loadBlogposts);