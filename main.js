// Quote list
const data = {
  1: {
    author: "Abigail",
    saying: "I'm definitely a magician",
  },
  2: {
    author: "Ben D",
    saying: "I genuinely think climbing and death metal conflict",
  },
  3: {
    author: "Ben D",
    saying: "It sounds like someone choking a wookie",
  },
  4: {
    author: "Ben D",
    saying: "It was like a koala pissing directly into your mouth",
  },
  5: {
    author: "Ben T",
    saying:
      "If I was a millionaire I'd buy a massive space and just watch otters",
  },
  6: {
    author: "Ben T",
    saying: "Have you seen that infinity gauntlet dildo?",
  },
  7: {
    author: "Ben T",
    saying: "I’ll optimise you in a minute",
  },
  8: {
    author: "Ben T",
    saying: "I love a good bruise",
  },
  9: {
    author: "Ben T",
    saying: "Did you ever listen to Ultraspank?",
  },
  10: {
    author: "Cameron",
    saying: "You can't cmd+r to trance",
  },
  11: {
    author: "Chris L",
    saying: "Move transition point of right ear",
  },
  12: {
    author: "Chris L",
    saying: "Gromit ears still isn’t in master",
  },
  13: {
    author: "Chris L",
    saying: "Looks like a horrible game of tetris",
  },
  14: {
    author: "Chris L",
    saying: "Ears update: Aardman still approving",
  },
  15: {
    author: "Chris L",
    saying: "What are these men doing",
  },
  16: {
    author: "Chris L",
    saying: "Grizzly bear is mad",
  },
  17: {
    author: "Chris L",
    saying: "We measured it with Todd's skirts",
  },
  18: {
    author: "Chris L",
    saying:
      "I feel like this big buck bunny video has followed me throughout my dev career",
  },
  19: {
    author: "Chris L",
    saying: "Claw the lock",
  },
  20: {
    author: "Chris L",
    saying: "Who the fuck has a palm pilot",
  },
  21: {
    author: "Chris L",
    saying: "Think I’m going to partially degrade soon",
  },
  22: {
    author: "Chris L",
    saying: "Can’t see the beans",
  },
  23: {
    author: "Chris L",
    saying: "How big is Simon's big toe to the nearest 2mm",
  },
  24: {
    author: "Colin",
    saying: "I do like MSG",
  },
  25: {
    author: "Colin",
    saying: "Anyone want a salty herring?",
  },
  26: {
    author: "Mikalai",
    saying: "Ok, Simon. You are not allowed to touch soft balls anymore",
  },
  27: {
    author: "Mikalai",
    saying: "Nick, have you heard of NWA?",
  },
  28: {
    author: "Mikalai",
    saying: "Are you reviewing yourself?",
  },
  29: {
    author: "Mikalai",
    saying: "I don't want to make decisions. I want to dance!",
  },
  30: {
    author: "Mikalai",
    saying: "Hey, don’t touch my jobs!",
  },
  31: {
    author: "Mikalai",
    saying: "I have no idea what you are doing, but I’m approving",
  },
  32: {
    author: "Mikalai",
    saying: "Google is wrong",
  },
  33: {
    author: "Mikalai",
    saying: "Your dirty bag on my table is not acceptable",
  },
  34: {
    author: "Mikalai",
    saying: "Hello. I’m here to kill jQuery",
  },
  35: {
    author: "Mikalai",
    saying:
      "Who the fuck you think we are, Simon? We are the nicest people in this cruel word!",
  },
  36: {
    author: "Mikalai",
    saying: "Not so quick, cowboy",
  },
  37: {
    author: "Mikalai",
    saying: "You created a very stupid conflict",
  },
  38: {
    author: "Nick L",
    saying: "Anyone wearing a russian hat is russian",
  },
  39: {
    author: "Nick L",
    saying: "When it gets fucked, it’s always impossible to unfuck it",
  },
  40: {
    author: "Nick L",
    saying: "That table is as flat as something that isn’t flat",
  },
  41: {
    author: "Nick L",
    saying: "It's like local local rather than local local",
  },
  42: {
    author: "Nick L",
    saying:
      "Our servers are so fragile. I just uploaded favicons and it broke the server",
  },
  43: {
    author: "Nick L",
    saying: "Hover on my penguin",
  },
  44: {
    author: "Nick L",
    saying: "Front-end wouldn’t be fun if you knew it all really",
  },
  45: {
    author: "Nick L",
    saying: "Everything looks so good in Sketch, it’s dangerous",
  },
  46: {
    author: "Nick L",
    saying:
      "Do you ever find that copy and paste from chrome just doesn’t work?",
  },
  47: {
    author: "Nick L",
    saying: "Lots of little sausages",
  },
  48: {
    author: "Nick L",
    saying: "Iran are favourites, right?",
  },
  49: {
    author: "Nick L",
    saying: "I’m not sure I trust lighthouse",
  },
  50: {
    author: "Nick L",
    saying: "Every is now css grid",
  },
  51: {
    author: "Nick L",
    saying: "What is my blob",
  },
  52: {
    author: "Nick L",
    saying: "I find it really hard not to troll public channels",
  },
  53: {
    author: "Nick L",
    saying: "Just going to eject and write some java man",
  },
  54: {
    author: "Nick L",
    saying: "What you said, sounds like what I said",
  },
  55: {
    author: "Nick L",
    saying: "I just installed husky lint-staged",
  },
  56: {
    author: "Nick L",
    saying: "Chimney is such a weird word, sounds like it should be chimley",
  },
  57: {
    author: "Nick L",
    saying: "My cats have bigger claws than any of them",
  },
  58: {
    author: "Nick L",
    saying: "I can’t see past the pepper juice on my screen",
  },
  59: {
    author: "Nick L",
    saying: "Nesta was globb",
  },
  60: {
    author: "Nick L",
    saying: "My eyes have light bulbs in",
  },
  61: {
    author: "Nick L",
    saying: "Those pink things are scary looking",
  },
  62: {
    author: "Nick L",
    saying: "Maxing out the bongo on the autobahn",
  },
  63: {
    author: "Nick L",
    saying: "This would be easier with 3 hands, really",
  },
  64: {
    author: "Nick L",
    saying: "Could just be my eyes malfunctioning",
  },
  65: {
    author: "Nick L",
    saying: "Hmm this doesn’t even work",
  },
  66: {
    author: "Nick L",
    saying: "Smell releaser v1.33.7",
  },
  67: {
    author: "Nick L",
    saying: "Subtle korma",
  },
  68: {
    author: "Nick L",
    saying:
      "They should put some actual bears in the bear pit, that would make it a lot nicer",
  },
  69: {
    author: "Nick L",
    saying: "Anyone have a spare usb finger warmer?",
  },
  70: {
    author: "Nick L",
    saying: "Or coat the pole in vaseline",
  },
  71: {
    author: "Nick L",
    saying: "Why do we have elves",
  },
  72: {
    author: "Simon",
    saying: "It’s a puller downer for sure",
  },
  73: {
    author: "Simon",
    saying: "Like areola but different",
  },
  74: {
    author: "Simon",
    saying: "Getting laminated later",
  },
  75: {
    author: "Simon",
    saying: "How quick is percy?",
  },
  76: {
    author: "Simon",
    saying: "I have to say it’s rare for me to look at its bottom",
  },
  77: {
    author: "Simon",
    saying: "Like being in an iframe 24/7",
  },
  78: {
    author: "Simon",
    saying: "That’s why I always have a summer dress on underneath",
  },
  79: {
    author: "Simon",
    saying: "That knob would get in my way",
  },
  80: {
    author: "Todd",
    saying: "It's all just a bit messy",
  },
  81: {
    author: "Todd",
    saying: "Turns out gifs are inadequate for proper communication",
  },
  82: {
    author: "Todd",
    saying: "I’m currently confused but know exactly what’s going on",
  },
  83: {
    author: "Tomasz",
    saying: "Do you think nsa employs css wizards",
  },
  84: {
    author: "Tomasz",
    saying: "Dont worry, james already resourced me for the next 5 years",
  },
  85: {
    author: "Chris L",
    saying: "One arm buzzing, the other laminated",
  },
  85: {
    author: "Nick L",
    saying:
      "If you do any hangouts it’ll look like you’re working from a prison",
  },
  86: {
    author: "Thibaud",
    saying:
      "How often do you use gitlab and how often are you pissed off at it?",
  },
  87: {
    author: "Nick L",
    saying: "ARGHHHHH it’s linted my html",
  },
  88: {
    author: "Nick L",
    saying: "Thibaud, aka captain hook",
  },
  89: {
    author: "Thibaud",
    saying: "I didn’t even get arrested crossing the border",
  },
  90: {
    author: "Simon",
    saying: "Nice guys don’t overflow: hidden",
  },
  91: {
    author: "Chris L",
    saying: "gitlab search is tripe",
  },
  92: {
    author: "Ben T",
    saying: "Slow, melodic, little bit sludgy but not scuzzy",
  },
  93: {
    author: "Nick L",
    saying: "We’ll definitely have something",
  },
  94: {
    author: "Chris L",
    saying: "overflow hidden ftw",
  },
  95: {
    author: "Todd",
    saying: "It’s just ended up as a hairy elephant",
  },
  96: {
    author: "Ben T",
    saying: "randomly listened to 3 hours of car driving the other day",
  },
  97: {
    author: "Thibaud",
    saying: "Lives in desk",
  },
  98: {
    author: "Nick L",
    saying: "I'll add a notch",
  },
  99: {
    author: "Colin",
    saying: "Use the nosniff header by default",
  },
  100: {
    author: "Mel",
    saying: "I call him the Baconator",
  },
  101: {
    author: "Nick L",
    saying: "mm fermented herring",
  },
  102: {
    author: "Nick L",
    saying: "is it orange squirrel or purple ufo",
  },
  103: {
    author: "Ben T",
    saying: "clean but a bit quirky in the legs",
  },
  104: {
    author: "Nick L",
    saying: "If i was a browser i’d go up and down 6 times",
  },
  105: {
    author: "Nick L",
    saying: "heard he’s a serial killer in his spare time",
  },
  106: {
    author: "Ben D",
    saying: "death is real",
  },
  107: {
    author: "Nick L",
    saying: "are you wearing odour du chum",
  },
  108: {
    author: "Simon",
    saying: "I don’t even know what project this is",
  },
  109: {
    author: "Nick L",
    saying: "I just pickled down my shorts",
  },
  110: {
    author: "Thibaud",
    saying: "aah it's just because I'm stupid",
  },
  111: {
    author: "Chris L",
    saying: "are you pressing the right button combinations?",
  },
  112: {
    author: "Thibaud",
    saying: "Welcome to the bridge",
  },
  113: {
    author: "Nick L",
    saying: "When will Chris stop smelling his trousers",
  },
  114: {
    author: "Chris L",
    saying: "too much carrot",
  },
  115: {
    author: "Chris L",
    saying: "have you installed all the pips?",
  },
  116: {
    author: "Nick L",
    saying: "everything doesn’t work",
  },
  117: {
    author: "Anon",
    saying: "It’s either django or react native",
  },
  118: {
    author: "Thibaud",
    saying: "Sorry I'm late and wet",
  },
  119: {
    author: "Chris L",
    saying: "my banana plants are getting battered",
  },
  120: {
    author: "Nick L",
    saying: "imagine a fox trying to eat a pineapple",
  },
  121: {
    author: "Nick L",
    saying: "my gran loves a bit of view source",
  },
  122: {
    author: "Chris L",
    saying: "the deer will steal it and use it for perfume",
  },
  123: {
    author: "Jenny H",
    saying: "Tactical bread?",
  },
  124: {
    author: "Chris L",
    saying:
      "I’m thinking zen fox next to a light bulb puzzle with a piece missing",
  },
  125: {
    author: "Thibaud",
    saying: "Do you know what noise zebras make?",
  },
  126: {
    author: "Thibaud",
    saying: "Do you want to use the sun?",
  },
  127: {
    author: "Thibaud",
    saying: "'least gross' is a good target",
  },
  128: {
    author: "Nick L",
    saying: "just had to smash my microphone then write a number on it",
  },
  129: {
    author: "Todd",
    saying: "It’s not HTML5'ing for some reason",
  },
  130: {
    author: "Thibaud",
    saying: "In France we call it 'the burial of the boy's life'",
  },
  131: {
    author: "Thibaud",
    saying: "I googled 'to chug'",
  },
  132: {
    author: "Thibaud",
    saying: "Can you see the beak?",
  },
  133: {
    author: "Nick S",
    saying: "This is me",
  },
  134: {
    author: "Chris L",
    saying: "might actually chain nick to the oval",
  },
  135: {
    author: "Thibaud",
    saying: "I’m more of the boose and fondue type",
  },
  136: {
    author: "Thibaud",
    saying: "we can go to Helsinki and all get naked together in a sauna",
  },
  137: {
    author: "Nick L",
    saying: "he will think your name is burglar",
  },
  138: {
    author: "Tomasz",
    saying: "new canteen serves tuna salad so that's good.",
  },
  139: {
    author: "Jenny H",
    saying: "he eats hot sauce on porridge",
  },
  140: {
    author: "Chris L",
    saying: "I probably would sleep in a bin to do that",
  },
  141: {
    author: "Nick L",
    saying: "must be so he can run away from the bees faster",
  },
  142: {
    author: "Nick L",
    saying: "My dongle is too heavy",
  },
  143: {
    author: "Todd",
    saying: "The thing is, frankincense is leading the charge",
  },
  144: {
    author: "Todd",
    saying: "You might even get to play on a welder",
  },
  145: {
    author: "Ben D",
    saying: "Christ, you do smell of beer",
  },
  146: {
    author: "Nick L",
    saying: "my weber started peeling",
  },
  147: {
    author: "Chris L",
    saying: "Lick Nee",
  },
  148: {
    author: "Chris L",
    saying: "I’m not a filofax",
  },
  149: {
    author: "Tom S",
    saying: "I thought someone was practising being an owl",
  },
  150: {
    author: "Anon",
    saying: "Todd not found.",
  },
  151: {
    author: "Chris L",
    saying: "get the hot toddies on the go",
  },
  152: {
    author: "Colin",
    saying: "Do you butter your beans?",
  },
  153: {
    author: "Chris L",
    saying: "imagine being .63 infected",
  },
  154: {
    author: "Simon",
    saying: "I’m not sure if I'm disgusted or impressed",
  },
  155: {
    author: "Ben E",
    saying: "Use the intermediate burger",
  },
  156: {
    author: "Nick L",
    saying: "I just cherry pick to master quick as fuck",
  },
  157: {
    author: "Nick L",
    saying: "Todd’s got his sausage out",
  },
  158: {
    author: "Nick L",
    saying: "head of transporting the sausage",
  },
  159: {
    author: "Chris L",
    saying: "unleash the gorilla",
  },
  160: {
    author: "Nick L",
    saying: "this is another case where Zorbs are the answer",
  },
  161: {
    author: "Nick L",
    saying: "please stop super-spreading",
  },
  162: {
    author: "Chris L",
    saying: "just call me head of aria-atomic",
  },
  163: {
    author: "Thibaud",
    saying: "Dick is Bob?",
  },
  164: {
    author: "Thibaud",
    saying: "Dick is Richard?",
  },
  165: {
    author: "Will B",
    saying: "I used mine for a pihole",
  },
  166: {
    author: "Abigail",
    saying: "Buttercream not fondant",
  },
  167: {
    author: "Simon",
    saying: "I have a very egg-shaped head",
  },
  168: {
    author: "Nick L",
    saying: "You almost feel disabled when you use an android phone",
  },
  169: {
    author: "Nick L",
    saying: "lorem welshum",
  },
  170: {
    author: "Simon",
    saying: "Last ditch yank",
  },
  171: {
    author: "Chris L",
    saying: "deadly yet polite",
  },
  172: {
    author: "Todd",
    saying: "It's not but it is",
  },
  173: {
    author: "Nick L",
    saying: "It's like an aquarium tank, but you can eat it",
  },
  174: {
    author: "Abigail",
    saying: "The brownie food group",
  },
  175: {
    author: "Abigail",
    saying: "what a pansy",
  },
  176: {
    author: "Abigail",
    saying: "I think I'm a good seal",
  },
  177: {
    author: "Will H",
    saying: "It's foamy",
  },
  178: {
    author: "Abigail",
    saying: "savoury pancakes are like the devils pancakes",
  },
  179: {
    author: "Chris L",
    saying: "damn you you moreish little tongue shaped crisp",
  },
  180: {
    author: "Ben D",
    saying: "the code's a bit whiffy",
  },
  181: {
    author: "Chris L",
    saying: "the bongo bangers",
  },
  182: {
    author: "Chris L",
    saying: "my nose is already sweating",
  },
  183: {
    author: "Chris L",
    saying:
      "reckon they’ll do a spin off of coronation street called coronavirus street?",
  },
  184: {
    author: "Simon",
    saying: "only if you spread it on his device",
  },
  185: {
    author: "Tomasz",
    saying: "We'll hip-hop on the slopes",
  },
  186: {
    author: "Todd",
    saying: "where is here",
  },
  187: {
    author: "Todd",
    saying: "here is where",
  },
  188: {
    author: "Abigail",
    saying: "The smaller the baby, the easier it is to take on a plane",
  },
  189: {
    author: "Nick L",
    saying: "automatically outputs my ascii face on any build",
  },
  190: {
    author: "Cameron",
    saying: "I guess imma get it from a dutty gabba slag",
  },
  191: {
    author: "Abigail",
    saying: "just keep adding in the mays",
  },
  192: {
    author: "Tom R",
    saying: "Don't rub your pubs in my face",
  },
  193: {
    author: "Chris L",
    saying: "I think i’d rather wrestle fifty bears, blindfolded",
  },
  194: {
    author: "Ben D",
    saying: "people are too confused to mosh",
  },
  195: {
    author: "Tomasz",
    saying: "it works sexy",
  },
  196: {
    author: "Simon",
    saying: "send the lobster",
  },
  197: {
    author: "Chris L",
    saying: "how much bart can you take",
  },
  198: {
    author: "Simon",
    saying: "rate my bourbon",
  },
  199: {
    author: "Tomasz",
    saying: "do you compete with the elders in the family?",
  },
  200: {
    author: "Todd",
    saying: "suns out guns out",
  },
  201: {
    author: "Anon",
    saying: "I’d give birth for a year off",
  },
  202: {
    author: "Tomasz",
    saying: "pipes of peace",
  },
  203: {
    author: "Chris L",
    saying: "should probably expunge some of my code",
  },
  204: {
    author: "Chris L",
    saying: "nick in a codebase sandwich",
  },
  205: {
    author: "Abigail",
    saying: "I have no idea what he's doing",
  },
  206: {
    author: "Simon",
    saying: "Cameron always brings the fun",
  },
  207: {
    author: "Tomasz",
    saying: "Sandbox is not real life",
  },
  208: {
    author: "Chris L",
    saying: "sleep under his nose",
  },
  209: {
    author: "Nick L",
    saying: "grab my arrow disabler",
  },
  210: {
    author: "Abigail",
    saying: "professional is boring",
  },
  211: {
    author: "Simon",
    saying: "I’m confident you can google it more quickly",
  },
  212: {
    author: "Tomasz",
    saying: "you need patience young man",
  },
  213: {
    author: "Tomasz",
    saying: "I think I'm just going to show my parma ham",
  },
  214: {
    author: "Abigail",
    saying: "fancy being a guinea pig chris?",
  },
  215: {
    author: "Chris L",
    saying: "may as well just buy a cow",
  },
  216: {
    author: "Tom R",
    saying: "you are the feng to my shui",
  },
};

const quoteContainer = document.getElementById("quote");

const quotes = Object.keys(data).reduce(
  (quoteArray, key) => [...quoteArray, data[key]],
  []
);

// Get random quote
randomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

// Update DOM with quote
updateQuote = () => {
  const selectedQuote = randomQuote();
  quoteContainer.innerHTML = `
    <div>${selectedQuote.author}</div>
    ${selectedQuote.saying}
  `;
};

// On load
document.addEventListener("DOMContentLoaded", () => {
  updateQuote();
});

// On spacebar
document.addEventListener("keyup", (event) => {
  if (event.keyCode == 32) {
    updateQuote();
  }
});
