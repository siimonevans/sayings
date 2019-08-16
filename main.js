// Set quotes
const data = {
  quotes: {
    1: "<div>Abigail</div> I'm definitely a magician",
    2: "<div>Ben D</div> I genuinely think climbing and death metal conflict",
    3: "<div>Ben D</div> It sounds like someone choking a wookie",
    4: "<div>Ben D</div> It was like a koala pissing directly into your mouth",
    5: "<div>Ben T</div> If I was a millionaire I'd buy a massive space and just watch otters",
    6: "<div>Ben T</div> Have you seen that infinity gauntlet dildo?",
    7: "<div>Ben T</div> I’ll optimise you in a minute",
    8: "<div>Ben T</div> I love a good bruise",
    9: "<div>Ben T</div> Did you ever listen to Ultraspank?",
    10: "<div>Cameron</div> You can't cmd+r to trance",
    11: "<div>Chris</div> Move transition point of right ear",
    12: "<div>Chris</div> Gromit ears still isn’t in master",
    13: "<div>Chris</div> Looks like a horrible game of tetris",
    14: "<div>Chris</div> Ears update: Aardman still approving",
    15: "<div>Chris</div> What are these men doing",
    16: "<div>Chris</div> Grizzly bear is mad",
    17: "<div>Chris</div> We measured it with Todd's skirts",
    18: "<div>Chris</div> I feel like this big buck bunny video has followed me throughout my dev career",
    19: "<div>Chris</div> Claw the lock",
    20: "<div>Chris</div> Who the fuck has a palm pilot",
    21: "<div>Chris</div> Think I’m going to partially degrade soon",
    22: "<div>Chris</div> Can’t see the beans",
    23: "<div>Chris</div> How big is Simon's big toe to the nearest 2mm",
    24: "<div>Colin</div> I do like MSG",
    25: "<div>Colin</div> Anyone want a salty herring?",
    26: "<div>Mikalai</div> Ok, Simon. You are not allowed to touch soft balls anymore",
    27: "<div>Mikalai</div> Nick, have you heard of NWA?",
    28: "<div>Mikalai</div> Are you reviewing yourself?",
    29: "<div>Mikalai</div> I don't want to make decisions. I want to dance!",
    30: "<div>Mikalai</div> Hey, don’t touch my jobs!",
    31: "<div>Mikalai</div> I have no idea what you are doing, but I’m approving",
    32: "<div>Mikalai</div> Google is wrong",
    33: "<div>Mikalai</div> Your dirty bag on my table is not acceptable",
    34: "<div>Mikalai</div> Hello. I’m here to kill jQuery",
    35: "<div>Mikalai</div> Who the fuck you think we are, Simon? We are the nicest people in this cruel word!",
    36: "<div>Mikalai</div> Not so quick, cowboy",
    37: "<div>Mikalai</div> You created a very stupid conflict",
    38: "<div>Nick L</div> Anyone wearing a russian hat is russian",
    39: "<div>Nick L</div> When it gets fucked, it’s always impossible to unfuck it",
    40: "<div>Nick L</div> That table is as flat as something that isn’t flat",
    41: "<div>Nick L</div> It's like local local rather than local local",
    42: "<div>Nick L</div> Our servers are so fragile. I just uploaded favicons and it broke the server",
    43: "<div>Nick L</div> Hover on my penguin",
    44: "<div>Nick L</div> Front-end wouldn’t be fun if you knew it all really",
    45: "<div>Nick L</div> Everything looks so good in Sketch, it’s dangerous",
    46: "<div>Nick L</div> Do you ever find that copy and paste from chrome just doesn’t work?",
    47: "<div>Nick L</div> Lots of little sausages",
    48: "<div>Nick L</div> Iran are favourites, right?",
    49: "<div>Nick L</div> I’m not sure I trust lighthouse",
    50: "<div>Nick L</div> Every is now css grid",
    51: "<div>Nick L</div> What is my blob",
    52: "<div>Nick L</div> I find it really hard not to troll public channels",
    53: "<div>Nick L</div> Just going to eject and write some java man",
    54: "<div>Nick L</div> What you said, sounds like what I said",
    55: "<div>Nick L</div> I just installed husky lint-staged",
    56: "<div>Nick L</div> Chimney is such a weird word, sounds like it should be chimley",
    57: "<div>Nick L</div> My cats have bigger claws than any of them",
    58: "<div>Nick L</div> I can’t see past the pepper juice on my screen",
    59: "<div>Nick L</div> Nesta was globb",
    60: "<div>Nick L</div> My eyes have light bulbs in",
    61: "<div>Nick L</div> Those pink things are scary looking",
    62: "<div>Nick L</div> Maxing out the bongo on the autobahn",
    63: "<div>Nick L</div> This would be easier with 3 hands, really",
    64: "<div>Nick L</div> Could just be my eyes malfunctioning",
    65: "<div>Nick L</div> Hmm this doesn’t even work",
    66: "<div>Nick L</div> Smell releaser v1.33.7",
    67: "<div>Nick L</div> Subtle korma",
    68: "<div>Nick L</div> They should put some actual bears in the bear pit, that would make it a lot nicer",
    69: "<div>Nick L</div> Anyone have a spare usb finger warmer?",
    70: "<div>Nick L</div> Or coat the pole in vaseline",
    71: "<div>Nick L</div> Why do we have elves",
    72: "<div>Simon</div> It’s a puller downer for sure",
    73: "<div>Simon</div> Like areola but different",
    74: "<div>Simon</div> Getting laminated later",
    75: "<div>Simon</div> How quick is percy?",
    76: "<div>Simon</div> I have to say it’s rare for me to look at its bottom",
    77: "<div>Simon</div> Like being in an iframe 24/7",
    78: "<div>Simon</div> That’s why I always have a summer dress on underneath",
    79: "<div>Simon</div> That knob would get in my way",
    80: "<div>Todd</div> It's all just a bit messy",
    81: "<div>Todd</div> Turns out gifs are inadequate for proper communication",
    82: "<div>Todd</div> I’m currently confused but know exactly what’s going on",
    83: "<div>Tomasz</div> Do you think nsa employs css wizards",
    84: "<div>Tomasz</div> Dont worry, james already resourced me for the next 5 years",
    85: "<div>Chris</div> One arm buzzing, the other laminated",
    85: "<div>Nick L</div> If you do any hangouts it’ll look like you’re working from a prison",
    86: "<div>Thibaud</div> How often do you use gitlab and how often are you pissed off at it?",
    87: "<div>Nick L</div> ARGHHHHH it’s linted my html",
    88: "<div>Nick L</div> Thibaud, aka captain hook",
    89: "<div>Thibaud</div> I didn’t even get arrested crossing the border",
    90: "<div>Simon</div> Nice guys don’t overflow: hidden",
    91: "<div>Chris</div> gitlab search is tripe",
    92: "<div>Ben T</div> Slow, melodic, little bit sludgy but not scuzzy",
    93: "<div>Nick L</div> We’ll definitely have something",
    94: "<div>Chris</div> overflow hidden ftw",
    95: "<div>Todd</div> It’s just ended up as a hairy elephant",
    96: "<div>Ben T</div> randomly listened to 3 hours of car driving the other day",
    97: "<div>Thibaud</div> Lives in desk",
    98: "<div>Nick L</div> I'll add a notch"
  }
};

// Loopy looper
let dataMap = data.quotes;
let quote = document.getElementById("quote");

let values = Object.keys(dataMap).reduce(
  (valueArr, key) => [...valueArr, dataMap[key]],
  []
);

// Get a random quote
function randomQuote() {
  return values[Math.floor(Math.random() * values.length)];
}

// Update quote box
function updateQuote() {
  quote.innerHTML = randomQuote();
}

// Run on load
document.addEventListener("DOMContentLoaded", () => {
  updateQuote();
});

// Run on spacebar
document.addEventListener("keyup", event => {
  if (event.keyCode == 32) {
    updateQuote();
  }
});
