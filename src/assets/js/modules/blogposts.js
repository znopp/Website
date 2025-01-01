function loadBlogposts() {
    document.getElementById("blogposts").innerHTML = `
    <div class="grid grid-cols-1 gap-y-16 mb-6 max-w-5xl mx-auto mt-10">
    
    <div class="theme-cards">
        <div class="max-w-2xl desktop:max-w-5xl">
            <h1 class="text-2xl mt-5">To a new year</h1>
            <div class="px-10 text-left">
                <p class="theme-date text-center mb-5">2024-12-31</p>
                <p class="mb-20">Oh, man. It's been, what, 2 months?</p>
                
                <p class="mb-5">Hello again. I can't believe the year is already ending. Where did all the time go? I sure do have some things to talk about!</p>
                
                <p class="mb-5">So, where to start?</p>
                
                <p class="mb-5">
                    Well, first, I would like to apologize for some misinformation on my part.
                    So, in my previous post, I said that my new keyboard came with a dongle for the wireless functionality. That is false.
                    It turns out that the customer support rep from the company I bought it from <span class="italic font-bold underline">was wrong</span> about the keyboard having a dongle for the wireless functionality.
                </p>
                
                <p class="mb-20">
                    Now, for me personally, this didn’t matter that much. I didn't buy it for the wireless ability, I just wanted to know if it was going to be useful or not.
                    The reason I’m still upset about it is that I explicitly said in my previous post that it did have one, effectively becoming part of the problem.
                    So, I apologize for the misinformation. Hopefully nobody reading this bought that keyboard because of the wireless functionality.
                </p>
                
                <p class="mb-5">
                    Now, on to something more exciting. Guess who has a girlfriend?
                    Yep! It finally happened, after spending 2 years wondering how I was supposed to find someone special. Then it just... happened.
                    <br>The TL;DR: is one word: Coincidence.
                </p>
                
                <p class="mb-5">
                    One day I saw a video on YouTube about an indie game called <span class="theme-highlight">Lay of the Land</span>, and I asked my mother how she felt about sponsoring a month of Patreon pledging (I was short on fun money).
                    She agreed, and after pledging and joining their Discord server, I found a conversation between two people regarding a dual-CPU computer.
                </p>
                
                <p class="mb-5">
                    One of the two people was essentially telling the other that they didn’t know what they were doing, and that it wasn’t possible, or something like that.
                    A little while after the conversation had ended, I chimed in with "I'm pretty sure the person with the hardware knows what they are talking about," or something like that. It's since been removed, so I can't know for sure how the conversation transpired.
                </p>
                
                <p class="mb-5">
                    The naysayer messaged me in private to tell me more about how the other one was wrong, and I messaged the other person to tell them about the first guy. While Mr. Negative ultimately blocked me after realizing I wasn’t on their side, I was invited to Roxy's friend group Discord server.
                </p>
                
                <p class="mb-10 mt-10">
                    It was in this friend group that I found Evelyn.
                </p>
                
                <p class="mb-5">
                    I'm honestly not sure how to explain how it happened. At first, we knew each other in a very limited way, we didn’t talk to each other that much other than me giving encouragement and support when she was down.
                    After a while, we started talking more, and I realized that we were actually friends. I was very happy about that, and I was very proud of myself for reaching out and connecting with someone else.
                    I started talking to someone else, and through him found Evelyn in a completely different context. It redefined how I saw her.
                </p>
                
                <p class="mb-5">
                    After one particular night of talking for 6 hours, I realized I was fighting a battle in my head, two sides arguing over whether I should let myself say... "I love you."
                </p>
                
                <p class="mb-20">
                    On the 4th of January 2025, it will have been our first month together as girlfriend and girlfriend :)
                </p>
                
                <p class="mb-5">
                    So, what else has happened since last time? Well, I did run a game-dev marathon and nearly completed my Unity game, Untitled Ocean Game, adding the last features and polish I had been putting off for months.
                    I believe there's a bug in there somewhere, I'm gonna look at it. Later.
                </p>
                
                <p class="mb-5">
                    I also decided to get into making a Discord bot again! The Last time I did this was in '22, so it's been a while. I'm still getting the hang of it, but I made some nice progress.
                    This time, it's a bot used to create temporary voice channels locked from anyone to join (except the creator), with the ability to request permission to join.

                </p>
                
                <p class="mb-20">
                    Right now, I’m working on turning an ArrayList in the bot into a JSON file that can be read through on startup and loaded into the bot.
                    It's used to track which channels have been made by the bot, so that when the channel is empty for some time, it deletes the correct one.
                    Eventually I will add the permission request system, as right now it is just an open voice channel.
                </p>
                
                <p class="mb-5">
                    Rapid fire time:
                </p>
                
                <ul class="list-disc list-inside mb-20">
                    <li class="mb-2">
                        I got a new graphics card! I went from the Gigabyte GTX 1080 G1 Gaming to the Sapphire PULSE AMD Radeon RX 7900 XT. One hell of an upgrade!
                    </li>
                    
                    <li class="mb-2">
                        I got over 20 pairs of socks for Christmas, a very nice addition to my arsenal of clothing! They feel amazing, so I'm stoked about it.
                    </li>
                    
                    <li class="mb-5">
                        My room is a bit bigger now, not because the walls have been moved, but because the 4 giant bookshelves have been taken out. I can now have my bed in the actual corner of the room!
                    </li>
                </ul>
                
                <p class="mb-5">
                    And with that, I want to say thank you for reading. I hope you had a good year, or at least have a few good memories from it.
                </p>
                
                <p class="mb-5">
                    A new year, a new beginning.
                </p>
                 
            </div>
        </div>
    </div>
    
    <div class="theme-cards">
            <div class="mx-auto max-w-2xl desktop:max-w-5xl">
                <h1 class="text-2xl mt-5">Mobile adjustment, polish & life update</h1>
                <div class="px-10 text-left">
                    <p class="theme-date mb-5 text-center">2024-10-26</p>
                    <p class="mb-20">Hello again! Tiny update to the website this time :)</p>
                    
                    <p class="mb-5">
                    The main page now has a padding to stop the text on mobile from touching both sides of the screen.
                    I forgot to add it to the main page only, but that's been fixed now.
                    </p>
                    
                    <p class="mb-5">
                    The CSS classes most commonly used in the outermost layer have been consolidated into one class called
                    <span class="theme-highlight">content-base</span>.
                    This means less copy-paste and therefore fewer points of failure.
                    That is to say, each document could've been slightly different, but now I’m guaranteed they will all have these base classes.
                    </p>
                    
                    <p class="mb-5">
                    Lastly, I also changed the content description for most pages, as I realized they’re what show up in an embed to my website.
                    </p>
                    
                    <p class="mb-20">
                    Actually, I just noticed that <span class="theme-highlight">theme-highlight</span> has the same color as the card background on light mode. Fixing it now!
                    </p>
                    
                    <p class="mb-5">So, how's life otherwise?</p>
                    
                    <p class="mb-5">
                    Well, I just got my first paycheck yesterday, so that's cool!
                    It's not much, but I also didn’t work a full month in September.
                    </p>
                    <p class="mb-5">
                    My cat, Shadow, is doing well. Cute and lovable as always. Though sometimes, he tends to be exactly in the way of my monitors.
                    I'm not sure how he does it, to be honest.
                    He's doing it right now, actually. It's hard to see what I'm typing. Buuut, I love him regardless. Always <3
                    </p>
                    
                    <p class="mb-5">
                    Yesterday I also bought a new keyboard! The last one, which tragically suffered from the yoghurt incident of '24, <span class="italic">technically</span> does still work.
                    It's just that it feels... blegh.
                    The keys affected feel crunchy, more resistance than usual, and not in a good way like a heavy button could be.
                    </p>
                    
                    <p class="mb-5">
                    This new keyboard is actually very similar to the old one, as it is just a different submodel.
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
                        The keys aren’t entirely flat, instead slightly curved.
                        </li>
                    </ol>
                    
                    <p class="mb-5">
                    Also, what do you think of the text being centered?
                    Maybe it should stick to the left instead, like a normal text does.
                    It's probably better for readability; I just don't know how good it would look.
                    </p>
                    
                    <p class="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin vel maximus magna.
                    Integer dignissim at tellus quis ultricies.
                    Ut semper lectus vel quam egestas, ut cursus ligula facilisis.
                    Pellentesque efficitur mi ipsum.
                    Fusce posuere mi vel augue pretium, eu ultrices felis tincidunt.
                    </p>
                    
                    <p class="mb-5">
                    Nunc eu imperdiet metus.
                    Curabitur eget tellus posuere, mattis justo id, pretium ligula.
                    Quisque pretium ut velit nec tincidunt.
                    Suspendisse sapien nunc, sollicitudin vel urna in, interdum iaculis ipsum.
                    Aliquam congue at arcu faucibus mattis.
                    In turpis sapien, sollicitudin sed tortor non, tincidunt vestibulum odio. 
                    </p>
                    
                    <p class="mb-5">
                    You know, it doesn't look that bad...
                    </p>
                    
                    <p class="mb-5">
                    Maybe the next update.
                    </p>
                    
                </div>
            </div>
        </div>
    
        <div class="theme-cards">
            <div class="max-w-2xl desktop:max-w-5xl">
                <h1 class="text-2xl mt-5">Creatio Ex Nihilo</h1>
                <div class="px-10 text-left">
                    <p class="theme-date mb-5 text-center">2024-10-15</p>
                    <p class="mb-5">
                        If you've been here before, you probably noticed the massive overhaul. How do you like it?
                    </p>
                    
                    <p class="mb-5">
                        It's been on my list for a long time, but I finally sat down and began to remake my website into something
                        that I'm much prouder of.
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