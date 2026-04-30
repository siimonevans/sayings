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
  86: {
    author: "Nick L",
    saying:
      "If you do any hangouts it’ll look like you’re working from a prison",
  },
  87: {
    author: "Thibaud",
    saying:
      "How often do you use gitlab and how often are you pissed off at it?",
  },
  88: {
    author: "Nick L",
    saying: "ARGHHHHH it’s linted my html",
  },
  89: {
    author: "Nick L",
    saying: "Thibaud, aka captain hook",
  },
  90: {
    author: "Thibaud",
    saying: "I didn’t even get arrested crossing the border",
  },
  91: {
    author: "Simon",
    saying: "Nice guys don’t overflow: hidden",
  },
  92: {
    author: "Chris L",
    saying: "gitlab search is tripe",
  },
  93: {
    author: "Ben T",
    saying: "Slow, melodic, little bit sludgy but not scuzzy",
  },
  94: {
    author: "Nick L",
    saying: "We’ll definitely have something",
  },
  95: {
    author: "Chris L",
    saying: "overflow hidden ftw",
  },
  96: {
    author: "Todd",
    saying: "It’s just ended up as a hairy elephant",
  },
  97: {
    author: "Ben T",
    saying: "randomly listened to 3 hours of car driving the other day",
  },
  98: {
    author: "Thibaud",
    saying: "Lives in desk",
  },
  99: {
    author: "Nick L",
    saying: "I'll add a notch",
  },
  100: {
    author: "Colin",
    saying: "Use the nosniff header by default",
  },
  101: {
    author: "Mel",
    saying: "I call him the Baconator",
  },
  102: {
    author: "Nick L",
    saying: "mm fermented herring",
  },
  103: {
    author: "Nick L",
    saying: "is it orange squirrel or purple ufo",
  },
  104: {
    author: "Ben T",
    saying: "clean but a bit quirky in the legs",
  },
  105: {
    author: "Nick L",
    saying: "If i was a browser i’d go up and down 6 times",
  },
  106: {
    author: "Nick L",
    saying: "heard he’s a serial killer in his spare time",
  },
  107: {
    author: "Ben D",
    saying: "death is real",
  },
  108: {
    author: "Nick L",
    saying: "are you wearing odour du chum",
  },
  109: {
    author: "Simon",
    saying: "I don’t even know what project this is",
  },
  110: {
    author: "Nick L",
    saying: "I just pickled down my shorts",
  },
  111: {
    author: "Thibaud",
    saying: "aah it's just because I'm stupid",
  },
  112: {
    author: "Chris L",
    saying: "are you pressing the right button combinations?",
  },
  113: {
    author: "Thibaud",
    saying: "Welcome to the bridge",
  },
  114: {
    author: "Nick L",
    saying: "When will Chris stop smelling his trousers",
  },
  115: {
    author: "Chris L",
    saying: "too much carrot",
  },
  116: {
    author: "Chris L",
    saying: "have you installed all the pips?",
  },
  117: {
    author: "Nick L",
    saying: "everything doesn’t work",
  },
  118: {
    author: "Anon",
    saying: "It’s either django or react native",
  },
  119: {
    author: "Thibaud",
    saying: "Sorry I'm late and wet",
  },
  120: {
    author: "Chris L",
    saying: "my banana plants are getting battered",
  },
  121: {
    author: "Nick L",
    saying: "imagine a fox trying to eat a pineapple",
  },
  122: {
    author: "Nick L",
    saying: "my gran loves a bit of view source",
  },
  123: {
    author: "Chris L",
    saying: "the deer will steal it and use it for perfume",
  },
  124: {
    author: "Jenny H",
    saying: "Tactical bread?",
  },
  125: {
    author: "Chris L",
    saying:
      "I’m thinking zen fox next to a light bulb puzzle with a piece missing",
  },
  126: {
    author: "Thibaud",
    saying: "Do you know what noise zebras make?",
  },
  127: {
    author: "Thibaud",
    saying: "Do you want to use the sun?",
  },
  128: {
    author: "Thibaud",
    saying: "'least gross' is a good target",
  },
  129: {
    author: "Nick L",
    saying: "just had to smash my microphone then write a number on it",
  },
  130: {
    author: "Todd",
    saying: "It’s not HTML5'ing for some reason",
  },
  131: {
    author: "Thibaud",
    saying: "In France we call it 'the burial of the boy's life'",
  },
  132: {
    author: "Thibaud",
    saying: "I googled 'to chug'",
  },
  133: {
    author: "Thibaud",
    saying: "Can you see the beak?",
  },
  134: {
    author: "Nick S",
    saying: "This is me",
  },
  135: {
    author: "Chris L",
    saying: "might actually chain nick to the oval",
  },
  136: {
    author: "Thibaud",
    saying: "I’m more of the boose and fondue type",
  },
  137: {
    author: "Thibaud",
    saying: "we can go to Helsinki and all get naked together in a sauna",
  },
  138: {
    author: "Nick L",
    saying: "he will think your name is burglar",
  },
  139: {
    author: "Tomasz",
    saying: "new canteen serves tuna salad so that's good.",
  },
  140: {
    author: "Jenny H",
    saying: "he eats hot sauce on porridge",
  },
  141: {
    author: "Chris L",
    saying: "I probably would sleep in a bin to do that",
  },
  142: {
    author: "Nick L",
    saying: "must be so he can run away from the bees faster",
  },
  143: {
    author: "Nick L",
    saying: "My dongle is too heavy",
  },
  144: {
    author: "Todd",
    saying: "The thing is, frankincense is leading the charge",
  },
  145: {
    author: "Todd",
    saying: "You might even get to play on a welder",
  },
  146: {
    author: "Ben D",
    saying: "Christ, you do smell of beer",
  },
  147: {
    author: "Nick L",
    saying: "my weber started peeling",
  },
  148: {
    author: "Chris L",
    saying: "Lick Nee",
  },
  149: {
    author: "Chris L",
    saying: "I’m not a filofax",
  },
  150: {
    author: "Tom S",
    saying: "I thought someone was practising being an owl",
  },
  151: {
    author: "Anon",
    saying: "Todd not found.",
  },
  152: {
    author: "Chris L",
    saying: "get the hot toddies on the go",
  },
  153: {
    author: "Colin",
    saying: "Do you butter your beans?",
  },
  154: {
    author: "Chris L",
    saying: "imagine being .63 infected",
  },
  155: {
    author: "Simon",
    saying: "I’m not sure if I'm disgusted or impressed",
  },
  156: {
    author: "Ben E",
    saying: "Use the intermediate burger",
  },
  157: {
    author: "Nick L",
    saying: "I just cherry pick to master quick as fuck",
  },
  158: {
    author: "Nick L",
    saying: "Todd’s got his sausage out",
  },
  159: {
    author: "Nick L",
    saying: "head of transporting the sausage",
  },
  160: {
    author: "Chris L",
    saying: "unleash the gorilla",
  },
  161: {
    author: "Nick L",
    saying: "this is another case where Zorbs are the answer",
  },
  162: {
    author: "Nick L",
    saying: "please stop super-spreading",
  },
  163: {
    author: "Chris L",
    saying: "just call me head of aria-atomic",
  },
  164: {
    author: "Thibaud",
    saying: "Dick is Bob?",
  },
  165: {
    author: "Thibaud",
    saying: "Dick is Richard?",
  },
  166: {
    author: "Will B",
    saying: "I used mine for a pihole",
  },
  167: {
    author: "Abigail",
    saying: "Buttercream not fondant",
  },
  168: {
    author: "Simon",
    saying: "I have a very egg-shaped head",
  },
  169: {
    author: "Nick L",
    saying: "You almost feel disabled when you use an android phone",
  },
  170: {
    author: "Nick L",
    saying: "lorem welshum",
  },
  171: {
    author: "Simon",
    saying: "Last ditch yank",
  },
  172: {
    author: "Chris L",
    saying: "deadly yet polite",
  },
  173: {
    author: "Todd",
    saying: "It's not but it is",
  },
  174: {
    author: "Nick L",
    saying: "It's like an aquarium tank, but you can eat it",
  },
  175: {
    author: "Abigail",
    saying: "The brownie food group",
  },
  176: {
    author: "Abigail",
    saying: "what a pansy",
  },
  177: {
    author: "Abigail",
    saying: "I think I'm a good seal",
  },
  178: {
    author: "Will H",
    saying: "It's foamy",
  },
  179: {
    author: "Abigail",
    saying: "savoury pancakes are like the devils pancakes",
  },
  180: {
    author: "Chris L",
    saying: "damn you you moreish little tongue shaped crisp",
  },
  181: {
    author: "Ben D",
    saying: "the code's a bit whiffy",
  },
  182: {
    author: "Chris L",
    saying: "the bongo bangers",
  },
  183: {
    author: "Chris L",
    saying: "my nose is already sweating",
  },
  184: {
    author: "Chris L",
    saying:
      "reckon they’ll do a spin off of coronation street called coronavirus street?",
  },
  185: {
    author: "Simon",
    saying: "only if you spread it on his device",
  },
  186: {
    author: "Tomasz",
    saying: "We'll hip-hop on the slopes",
  },
  187: {
    author: "Todd",
    saying: "where is here",
  },
  188: {
    author: "Todd",
    saying: "here is where",
  },
  189: {
    author: "Abigail",
    saying: "The smaller the baby, the easier it is to take on a plane",
  },
  190: {
    author: "Nick L",
    saying: "automatically outputs my ascii face on any build",
  },
  191: {
    author: "Cameron",
    saying: "I guess imma get it from a dutty gabba slag",
  },
  192: {
    author: "Abigail",
    saying: "just keep adding in the mays",
  },
  193: {
    author: "Tom R",
    saying: "Don't rub your pubs in my face",
  },
  194: {
    author: "Chris L",
    saying: "I think i’d rather wrestle fifty bears, blindfolded",
  },
  195: {
    author: "Ben D",
    saying: "people are too confused to mosh",
  },
  196: {
    author: "Tomasz",
    saying: "it works sexy",
  },
  197: {
    author: "Simon",
    saying: "send the lobster",
  },
  198: {
    author: "Chris L",
    saying: "how much bart can you take",
  },
  199: {
    author: "Simon",
    saying: "rate my bourbon",
  },
  200: {
    author: "Tomasz",
    saying: "do you compete with the elders in the family?",
  },
  201: {
    author: "Todd",
    saying: "suns out guns out",
  },
  202: {
    author: "Anon",
    saying: "I’d give birth for a year off",
  },
  203: {
    author: "Tomasz",
    saying: "pipes of peace",
  },
  204: {
    author: "Chris L",
    saying: "should probably expunge some of my code",
  },
  205: {
    author: "Chris L",
    saying: "nick in a codebase sandwich",
  },
  206: {
    author: "Abigail",
    saying: "I have no idea what he's doing",
  },
  207: {
    author: "Simon",
    saying: "Cameron always brings the fun",
  },
  208: {
    author: "Tomasz",
    saying: "Sandbox is not real life",
  },
  209: {
    author: "Chris L",
    saying: "sleep under his nose",
  },
  210: {
    author: "Nick L",
    saying: "grab my arrow disabler",
  },
  211: {
    author: "Abigail",
    saying: "professional is boring",
  },
  212: {
    author: "Simon",
    saying: "I’m confident you can google it more quickly",
  },
  213: {
    author: "Tomasz",
    saying: "you need patience young man",
  },
  214: {
    author: "Tomasz",
    saying: "I think I'm just going to show my parma ham",
  },
  215: {
    author: "Abigail",
    saying: "fancy being a guinea pig chris?",
  },
  216: {
    author: "Chris L",
    saying: "may as well just buy a cow",
  },
  217: {
    author: "Tom R",
    saying: "you are the feng to my shui",
  },
  218: {
    author: "Cameron",
    saying: "I called it dirty-master",
  },
  219: {
    author: "Nick L",
    saying: "why is black, called black",
  },
  220: {
    author: "Tomasz",
    saying: "I can hear someone's noises",
  },
  221: {
    author: "Chris L",
    saying: "just watched as a guy broke in my car whilst eating a big mac",
  },
  222: {
    author: "Tomasz",
    saying: "I need some oxygen",
  },
  223: {
    author: "Abigail",
    saying: "hover is the enemy",
  },
  224: {
    author: "Abigail",
    saying: "this project would be enhanced by place-puppy",
  },
  225: {
    author: "Tomasz",
    saying: "CTA bingo",
  },
  226: {
    author: "Abigail",
    saying: "simon would you like to be the broccoli",
  },
  227: {
    author: "Nick L",
    saying: "you love a good fiddle",
  },
  228: {
    author: "Chris L",
    saying: "it’s the one and only T O double D",
  },
  229: {
    author: "Tomasz",
    saying: "thanks for being so agile, like a jaguar",
  },
  230: {
    author: "Abigail",
    saying: "I'm hoping to make friends with dolphins",
  },
  231: {
    author: "Nick L",
    saying: "my eyes are still trying to open",
  },
  232: {
    author: "Nick L",
    saying: "filthy grabber",
  },
  233: {
    author: "Abigail",
    saying: "you make an excellent note",
  },
  234: {
    author: "Chris",
    saying: "do you want to borrow my lobster costume for project kick off",
  },
  235: {
    author: "Tomasz",
    saying: "Can you stop misspelling Apple Pay or I'll kill you",
  },
  236: {
    author: "Tomasz",
    saying: "You don't have a beard, you don't understand",
  },
  237: {
    author: "Tomasz",
    saying: "hey wizards",
  },
  238: {
    author: "Chris L",
    saying: "oo oat cream",
  },
  239: {
    author: "Chris L",
    saying: "you just get paid in wands",
  },
  240: {
    author: "Nick L",
    saying: "person with the biggest wand wins",
  },
  241: {
    author: "Abigail",
    saying: "I'd love to see a goat on the beach drinking cocktails",
  },
  242: {
    author: "Simon",
    saying: "this goat needs optimising",
  },
  243: {
    author: "Nick L",
    saying: "just lie down and spam it into people",
  },
  244: {
    author: "Abigail",
    saying: "what about a life changing chicken?",
  },
  245: {
    author: "Chris L",
    saying: "show them your pimped out weapon",
  },
  246: {
    author: "Abigail",
    saying: "I wouldn't mind hearing a baby goat in the middle of the night",
  },
  247: {
    author: "Tomasz",
    saying: "I need to move your faces",
  },
  248: {
    author: "Tom D",
    saying: "I wouldn't fancy my chances against a crow",
  },
  249: {
    author: "Kevin",
    saying: "Where there's blame there's a claim",
  },
  250: {
    author: "Thibaud",
    saying:
      "you don’t even need to use english, you can describe things based on their very essence",
  },
  251: {
    author: "Cameron",
    saying: "sawceee",
  },
  252: {
    author: "Steve S",
    saying: "I could crush a rocket salad right now",
  },
  253: {
    author: "Simon",
    saying: "Storage Blob Data Contributor",
  },
  254: {
    author: "Tomasz",
    saying: "it's a sonarcloud curse",
  },
  255: {
    author: "Tomasz",
    saying: "I could do a sentence for harassment",
  },
  256: {
    author: "Nick L",
    saying: "motorised zorb",
  },
  257: {
    author: "Chris L",
    saying: "underground zorb museum",
  },
  258: {
    author: "Chris L",
    saying: "tickle your belly",
  },
  259: {
    author: "Nick L",
    saying: "head of beard growth",
  },
  260: {
    author: "Tomasz",
    saying: "there's way more PhD around than people think",
  },
  261: {
    author: "Will B",
    saying: "Snape would teach IE11 cross-compatibility",
  },
  262: {
    author: "Tomasz",
    saying: "I feel like a monkey in a circus",
  },
  263: {
    author: "Chris L",
    saying: "open gills on hover",
  },
  264: {
    author: "Nick V",
    saying: "I’m going to get it out and flop it on the table",
  },
  265: {
    author: "Devon",
    saying: "Do we need to keep David Cameron or can he be recycled?",
  },
  266: {
    author: "Nick L",
    saying: "that game where you have to put limbs in certain places",
  },
  267: {
    author: "Tomasz",
    saying: "Utter buzzword bollocks",
  },
  268: {
    author: "Nick L",
    saying: "can’t you see my crab",
  },
  269: {
    author: "Ben D",
    saying: "like being stamped to death by mammoths",
  },
  270: {
    author: "Nick L",
    saying: "no lobsters in the library",
  },
  271: {
    author: "Chris L",
    saying: "it’s a beast and it’s only just been born",
  },
  272: {
    author: "Thibaud",
    saying: "I just need to move to California",
  },
  273: {
    author: "Ben D",
    saying: "cross repository blob mount",
  },
  274: {
    author: "Abigail",
    saying: "I am a secret wizard",
  },
  275: {
    author: "Ben D",
    saying: "near the back of the kama sutra, that one",
  },
  276: {
    author: "Todd",
    saying: "everything is a blob",
  },
  277: {
    author: "Chris L",
    saying: "Bay Rans",
  },
  278: {
    author: "Tomasz",
    saying: "shark onesie is fine",
  },
  279: {
    author: "Nick L",
    saying: "wouldn’t worry, it does sometimes do weird things",
  },
  280: {
    author: "Tomasz",
    saying: "is it supposed to be satanist somehow?",
  },
  281: {
    author: "Chris L",
    saying: "I am the docs",
  },
  282: {
    author: "Chris L",
    saying: "told the whale to piss off and now fan is back to normal",
  },
  283: {
    author: "Chris L",
    saying: "as if a whale could swim with 6 shipping containers on it",
  },
  284: {
    author: "Colin",
    saying: "in the 1950s, the most popular type of banana was called big mike",
  },
  285: {
    author: "Nick L",
    saying: "always have a bow and arrow handy",
  },
  286: {
    author: "Nick L",
    saying: "pretty sure you’ve always been dead",
  },
  287: {
    author: "Chris L",
    saying: "on the zinsser",
  },
  288: {
    author: "Chris L",
    saying: "couple of zinssers",
  },
  289: {
    author: "Chris L",
    saying: "charge it through the nose",
  },
  290: {
    author: "Chris L",
    saying: "seed sensations is a quality loaf",
  },
  291: {
    author: "Chris L",
    saying: "might have a raz",
  },
  292: {
    author: "Nick L",
    saying: "I’m getting distracted by the smells",
  },
  293: {
    author: "Chris L",
    saying: "maybe I should just stop squashing",
  },
  294: {
    author: "Nick L",
    saying: "need detective pikachu",
  },
  295: {
    author: "Ben D",
    saying: "I’m shit at this but I’m not that shit",
  },
  296: {
    author: "Steve S",
    saying: "I deleted the repo so no one has any issues",
  },
  297: {
    author: "Nick L",
    saying: "plugged into the pineaptrix",
  },
  298: {
    author: "Chris L",
    saying: "what is that fatty gap about",
  },
  299: {
    author: "Chris L",
    saying: "Is it linting itself",
  },
  300: {
    author: "Chris L",
    saying: "I miss seeing all the variables",
  },
  301: {
    author: "Nick L",
    saying: "not seeing any kittens",
  },
  302: {
    author: "Tomasz",
    saying: "you owe me a cobra",
  },
  303: {
    author: "Steve S",
    saying: "I've had 5 amazing seizures this morning",
  },
  304: {
    author: "Chris L",
    saying: "just lob it all in a zorb",
  },
  305: {
    author: "Nick L",
    saying: "I’ll do it kneeless",
  },
  306: {
    author: "Chris L",
    saying: "can you not just behead the bird?",
  },
  307: {
    author: "Ben D",
    saying: "hunt and peck with one hand was faster",
  },
  308: {
    author: "Todd",
    saying: "somewhere it has to be deanonamisable",
  },
  309: {
    author: "Nick L",
    saying: "chief of conflict resolution",
  },
  310: {
    author: "Nick L",
    saying: "I’m head of headshots mate",
  },
  311: {
    author: "Simon",
    saying: "I’ll just get my sloth out",
  },
  312: {
    author: "Will B",
    saying:
      "If you love something, <strike>set it free</strike> deploy it on friday",
  },
  313: {
    author: "Ben D",
    saying:
      "I'm really looking to forward to trying to work out whether cameron is talking about thibaud or tibor",
  },
  314: {
    author: "Nick L",
    saying: "the borbonator",
  },
  315: {
    author: "Chris L",
    saying: "just whack some LEDs in the nana’s",
  },
  316: {
    author: "Chris L",
    saying: "does everything get it’s own zorb?",
  },
  317: {
    author: "Nick L",
    saying: "bourbon api only works with html",
  },
  318: {
    author: "Nick L",
    saying: "flown in via stork express",
  },
  319: {
    author: "Nick L",
    saying: "tactical pre-main puke",
  },
  320: {
    author: "Nick L",
    saying: "might accidentally bath the dj instead of the bird though",
  },
  321: {
    author: "Nick L",
    saying: "Chris loves a little sausage",
  },
  322: {
    author: "Nick L",
    saying: "I don’t think I’m functioning",
  },
  323: {
    author: "Nick L",
    saying: "magic sometimes has odd side effects",
  },
  324: {
    author: "Chris L",
    saying: "polyfill with cheese",
  },
  325: {
    author: "Chris L",
    saying: "get a lamp on it",
  },
  326: {
    author: "Chris L",
    saying: "woff woff",
  },
  327: {
    author: "Chris L",
    saying: "I just answer ‘egg’ to every question",
  },
  328: {
    author: "Thibaud",
    saying: "Oh, what I have done...",
  },
  329: {
    author: "Simon",
    saying: "it’s 250 lines of filth",
  },
  330: {
    author: "Nick L",
    saying: "best make them biteproof",
  },
  331: {
    author: "Nick L",
    saying: "Deirdre wants to see Alan’s large marrow",
  },
  332: {
    author: "Chris L",
    saying: "djyagtail",
  },
  333: {
    author: "Chris L",
    saying: "imagine being 300 years old",
  },
  334: {
    author: "Nick L",
    saying: "don’t want my bore hole running dry",
  },
  335: {
    author: "Nick L",
    saying: "would you like to vasaline his ears",
  },
  336: {
    author: "Nick L",
    saying: "right in the bhaji",
  },
  337: {
    author: "Chris L",
    saying: "they were eating it, getting wired and causing mayhem",
  },
  338: {
    author: "Chris L",
    saying: "sounded like I was in a foam sandwich",
  },
  339: {
    author: "Ben D",
    saying: "available in 'goth jizz burst'",
  },
  340: {
    author: "Nick L",
    saying:
      "it’s like two components, but with the same component twice inside",
  },
  341: {
    author: "Ben D",
    saying: "I’ve always had a good guitar gurn",
  },
  342: {
    author: "Ben D",
    saying: "like a bulldog eating wasps",
  },
  343: {
    author: "Chris L",
    saying: "did she pull out her oboe",
  },
  344: {
    author: "Will B",
    saying: "there's a bowl of crunch at the end for sure",
  },
  345: {
    author: "Chris L",
    saying: "house full of sheep",
  },
  346: {
    author: "Nick L",
    saying: "lord of the sprinkles",
  },
  347: {
    author: "Nick L",
    saying: "looking after your pastries",
  },
  348: {
    author: "Simon",
    saying: "if you clean a vacuum cleaner, you become a vacuum cleaner",
  },
  349: {
    author: "Nick L",
    saying: "deep nosing",
  },
  350: {
    author: "Nick L",
    saying: "is he refactoring his house into react",
  },
  351: {
    author: "Tomasz",
    saying: "she'll have you for breakfast",
  },
  352: {
    author: "Jane",
    saying: "I’m very limbic today",
  },
  353: {
    author: "Ben D",
    saying:
      "don't believe everything you think - believe everything jeff bezos thinks",
  },
  354: {
    author: "Jenny H",
    saying: "muscle is where the meat is",
  },
  355: {
    author: "Todd",
    saying: "feed their documentation fetish",
  },
  356: {
    author: "Ben D",
    saying: "I admire the shit out of it",
  },
  357: {
    author: "Ben D",
    saying: "Obviously I’m not a mother but I am a twin",
  },
  358: {
    author: "Will B",
    saying: "I'm trending",
  },
  359: {
    author: "Will B",
    saying: "I'll merge anything",
  },
  360: {
    author: "Nick L",
    saying: "gimp suit for your roof",
  },
  361: {
    author: "Tomasz",
    saying: "I've had some wine you can tell",
  },
  362: {
    author: "Nick L",
    saying: "did you not do it in Russian?",
  },
  363: {
    author: "Will B",
    saying: "You've got a level 2 poltergeist",
  },
  364: {
    author: "Nick L",
    saying: "printing heroku",
  },
  365: {
    author: "Nick L",
    saying: "I’ll release some snakes",
  },
  366: {
    author: "Chris L",
    saying: "even the can looks edible",
  },
  367: {
    author: "Ben D",
    saying: "syncopate 'til you herniate",
  },
  368: {
    author: "Nick L",
    saying: "I see your toaster matches your bike",
  },
  369: {
    author: "Chris L",
    saying: "they need to make more things in lichen green",
  },
  370: {
    author: "Steve S",
    saying: "Bean there done that",
  },
  371: {
    author: "Nick L",
    saying: "think it depends on your ears",
  },
  372: {
    author: "Chris L",
    saying: "what other animals are in dev that i don’t know about",
  },
  373: {
    author: "Chris L",
    saying: "the sprint sloth",
  },
  374: {
    author: "Chris L",
    saying: "the backlog bear",
  },
  375: {
    author: "Steve S",
    saying:
      "A portal will open up in my kitchen and I'll get to ascend into nugget utopia",
  },
  376: {
    author: "Tomasz",
    saying: "I think software should ask you to opt into the banter.",
  },
  377: {
    author: "Nick L",
    saying: "only a grand for an erection",
  },
  378: {
    author: "Simon",
    saying: "are you going round squeezing lots of wood",
  },
  379: {
    author: "Simon",
    saying: "can’t get enough lift from the ears",
  },
  380: {
    author: "Nick L",
    saying: "handy for catching door ticklers",
  },
  381: {
    author: "Simon",
    saying: "my ears start wtf’ing",
  },
  382: {
    author: "Will B",
    saying: "<code>$(fuck-that).upper()</code>",
  },
  383: {
    author: "Nick L",
    saying: "should have macaroned him in the face",
  },
  384: {
    author: "Steve S",
    saying: "My gangly fingers don’t work like they used to",
  },
  385: {
    author: "Chris L",
    saying: "the robot is acceptable",
  },
  386: {
    author: "Simon",
    saying: "like waking up in a hot bag",
  },
  387: {
    author: "Nick L",
    saying: "the humanwillbapeed",
  },
  388: {
    author: "Will B",
    saying: "I got munched",
  },
  389: {
    author: "Nick L",
    saying: "just switch the switch behind your right ear",
  },
  390: {
    author: "Chris L",
    saying: "use it as a mini foot-tickling window",
  },
  391: {
    author: "Will B",
    saying:
      "There's nothing he can't do with a pint in his right and his keyboard in his left",
  },
  392: {
    author: "Tomasz",
    saying: "its a bit like olives, takes time to like them",
  },
  393: {
    author: "Chris L",
    saying: "crouching tiger hidden cow",
  },
  394: {
    author: "Chris L",
    saying: "you’re basically doing a tour of my life",
  },
  395: {
    author: "Tomasz",
    saying: "I don't understand what you are doing here but if it feels right.",
  },
  396: {
    author: "Chris L",
    saying: "cloudy with a chance of tables",
  },
  397: {
    author: "Chris L",
    saying: "wish my fingers were made from bournville",
  },
  398: {
    author: "Chris L",
    saying: "I charge randomly",
  },
  399: {
    author: "Chris L",
    saying: "release the hounds!",
  },
  400: {
    author: "Will B",
    saying: "Resto in pesto",
  },
  401: {
    author: "Tomasz",
    saying: "you cant possibly satisfy me",
  },
  402: {
    author: "Nick L",
    saying: "it makes my right arm twitch when I hit my brain",
  },
  403: {
    author: "Will B",
    saying: "I'm a one man party",
  },
  404: {
    author: "Chris L",
    saying: "fast track to the biscuit window",
  },
  405: {
    author: "Tomasz",
    saying: "dont sarcasm me at this time",
  },
  406: {
    author: "Chris L",
    saying: "do paws work on touch id",
  },
  407: {
    author: "Steve S",
    saying: "it was like walking on chicken soup bouillon",
  },
  408: {
    author: "Steve S",
    saying:
      "It's like you’re trying to build a house in the forest and there's a chainsaw in the next shed over that you could use if you want",
  },
  409: {
    author: "Will B",
    saying: "I will be craving death after it",
  },
  410: {
    author: "Chris L",
    saying: "this fork seems alright",
  },
  411: {
    author: "Tomasz",
    saying: "do I look like a google expert to you",
  },
  412: {
    author: "Nick L",
    saying: "just smear it all over your body and see what parts get numb",
  },
  413: {
    author: "Nick L",
    saying: "the condescending operator does it for you",
  },
  414: {
    author: "Nick L",
    saying: "are you going to be my Todd",
  },
  415: {
    author: "Paul B",
    saying: "I'd love to do a roast potato tasting menu",
  },
  416: {
    author: "Tomasz",
    saying: "I've been doing a lot of self-inflicted DRF",
  },
  417: {
    author: "Nick L",
    saying: "didn’t get a chance to leech him",
  },
  418: {
    author: "Will B",
    saying: "I am the long purple brick in this game of Tetris",
  },
  419: {
    author: "Will B",
    saying: "Wanna hang out the back of my rocket",
  },
  420: {
    author: "Ben D",
    saying:
      "I think in his hands a spade with some dental floss on it would rip",
  },
  421: {
    author: "Will B",
    saying: "I want more beans",
  },
  422: {
    author: "Nick L",
    saying: "alexa hide me from the foxes",
  },
  423: {
    author: "Chris L",
    saying: "I’ll go bonkers on conkers",
  },
  424: {
    author: "Chris L",
    saying: "is it a festival, a coffee or a cheese?",
  },
  425: {
    author: "Chris L",
    saying: "why is it this complex labyrinth of tick boxes and magical lingo",
  },
  426: {
    author: "Mitch",
    saying: "Wizards are difficult",
  },
  427: {
    author: "Nick L",
    saying: "woodpecker on the nuts",
  },
  428: {
    author: "Nick L",
    saying: "the hunchback of bude",
  },
  429: {
    author: "Simon E",
    saying: "what is a hot deaker",
  },
  430: {
    author: "Steve S",
    saying: "nothing useful from me",
  },
  431: {
    author: "Simon",
    saying: "ostrich is best",
  },
  432: {
    author: "Olly W",
    saying: "karma jackpot",
  },
  433: {
    author: "Chris L",
    saying: "in trenchard I trod on a strongbow can with a knob straw in it",
  },
  434: {
    author: "Josh",
    saying: "I always appreciate succulent lattice feedback",
  },
  435: {
    author: "Nick L",
    saying: "hairy mic",
  },
  436: {
    author: "Chris L",
    saying: "Its sweated on itself",
  },
  437: {
    author: "Nick L",
    saying:
      "takes a lot of skill to poke two things in at once, one in the top and one of the bottom ones simultaneously",
  },
  438: {
    author: "Chris L",
    saying: "he could buy a cow",
  },
  439: {
    author: "Chris L",
    saying: "simon's developer nightmares",
  },
  440: {
    author: "Alex B",
    saying: "might just comment out the whole repo and go on sabbatical",
  },
  441: {
    author: "Nick L",
    saying: "warm front cold back",
  },
  442: {
    author: "Mel",
    saying: "don't yeet ur cat",
  },
  443: {
    author: "Chris L",
    saying: "end up in kebab-u-like at 3am",
  },
  444: {
    author: "Ben D",
    saying: "very 'fingery'",
  },
  445: {
    author: "Chris L",
    saying: "fastest finger first",
  },
  446: {
    author: "Chris L",
    saying: "would be a big bird on a 5xl",
  },
  447: {
    author: "Nick L",
    saying: "what's with the fingering",
  },
  448: {
    author: "Ellie",
    saying: "it gives my canoncial data preferences the absolute ick",
  },
  449: {
    author: "Nick L",
    saying: "maybe I should hook up all of the farmers cows",
  },
  450: {
    author: "Ben D",
    saying: "caffeinate then commiserate",
  },
  451: {
    author: "Ben D",
    saying: "I don't really care how the sausage is made",
  },
  452: {
    author: "Nick L",
    saying: "head of furry boom",
  },
  453: {
    author: "Chris L",
    saying: "mow the roof",
  },
  454: {
    author: "Simon",
    saying: "my trackpad is moist",
  },
  455: {
    author: "Steve S",
    saying:
      "I'd have the michael buble playing so loud that you'll never sleep again",
  },
  456: {
    author: "Chris L",
    saying: "you’ll find nemo in seconds",
  },
  457: {
    author: "Thibaud",
    saying:
      "It’s crazy how much more you can do in the summer with effective cooling",
  },
  458: {
    author: "Ben D",
    saying: "I love that pre-rain smell",
  },
  459: {
    author: "Simon",
    saying: "nothing like a bit of scouse lamination",
  },
  460: {
    author: "Simon",
    saying: "who needs the lotto when you can just steal shit",
  },
  461: {
    author: "James H",
    saying: "I could be a whisk, because I like to mix things up",
  },
  462: {
    author: "James H",
    saying: "You’ve got a lot of range with kitchen utensils",
  },
  463: {
    author: "Nick L",
    saying: "get in his tiger moth and machine gun the fuck out of you",
  },
  464: {
    author: "Will B",
    saying: "I will always disco",
  },
  465: {
    author: "Will B",
    saying: "you can put a beer in your kanga pouch and wiggle",
  },
  466: {
    author: "Kevin",
    saying: "up to my nuts in spice",
  },
  467: {
    author: "Chris L",
    saying: "do you ever pre-heat your office?",
  },
  468: {
    author: "Chris L",
    saying: "where’s the turkey?",
  },
  469: {
    author: "Steve S",
    saying: "tastes like liquid summer",
  },
  470: {
    author: "Steve S",
    saying: "they call me the tong king",
  },
  471: {
    author: "Chris L",
    saying: "have a bath with the loch ness monster",
  },
  472: {
    author: "Thibaud",
    saying: "it took me a few years but I know what G&T means now",
  },
  473: {
    author: "Dan B",
    saying: "I don’t have the capacity to be curious right now",
  },
  474: {
    author: "Chris L",
    saying: "I breathe triple A mate",
  },
  475: {
    author: "Helen C",
    saying:
      "If it’s not warm and furry and farting it can’t recreate the real experience…",
  },
  476: {
    author: "Chris L",
    saying: "I’m yet to tickle its tummy",
  },
  477: {
    author: "Nick L",
    saying: "are they canine crypto investors",
  },
  478: {
    author: "Chris L",
    saying: "mine a million then go for a margherita",
  },
  479: {
    author: "Will B",
    saying: "I want Jacob's Owl",
  },
  480: {
    author: "Will B",
    saying: "I need high ceilings and street wine",
  },
  481: {
    author: "Tomasz",
    saying: "Jesus Christ on a bendy bus!",
  },
  482: {
    author: "Nick L",
    saying: "Torchbox need to start paying for ear massages",
  },
  483: {
    author: "Chris L",
    saying: "I just want to write code and eat pringles",
  },
  484: {
    author: "Steve S",
    saying: "We are trying to collect 2 of every animal for this project",
  },
  485: {
    author: "Dan B",
    saying: "we had a funky Heisenbug on Upshot",
  },
  486: {
    author: "Dan B",
    saying: "Patsy != Lucy",
  },
  487: {
    author: "Kev",
    saying: "It was like walking through a headache",
  },
  488: {
    author: "Nick L",
    saying: "the goat is especially bad",
  },
  489: {
    author: "Chris L",
    saying: "now there’s fingers in all sorts of pies",
  },
  490: {
    author: "Chris L",
    saying: "as Celine Dion once said it’s all coming back to me",
  },
  491: {
    author: "Ellie",
    saying: "I'm a hand talker",
  },
  492: {
    author: "Steve S",
    saying: "My diet is vegetable and sadness",
  },
  493: {
    author: "Tomasz",
    saying: "Can't get more meaty meat than that",
  },
  494: {
    author: "Simon",
    saying: "air fryer shrine",
  },
  495: {
    author: "Dan B",
    saying: "there's beauty in both",
  },
  496: {
    author: "Chris L",
    saying: "get tanned like a barcode",
  },
  497: {
    author: "Tomasz",
    saying: "Acknowledging that we're not shit might be a good idea",
  },
  498: {
    author: "Simon",
    saying: "I’d need to see the curlies",
  },
  499: {
    author: "Will B",
    saying: "I just want to lift maxes and avoid taxes",
  },
  500: {
    author: "Ben E",
    saying: "There should always be a little sun",
  },
  501: {
    author: "Simon",
    saying: "I call it the house of pain",
  },
  502: {
    author: "Simon",
    saying: "smashing back the jam",
  },
  503: {
    author: "Chris L",
    saying: "need a sober comparison",
  },
  504: {
    author: "Chris L",
    saying: "deliciouszone",
  },
  505: {
    author: "Chris L",
    saying: "napping in the starter",
  },
  506: {
    author: "Tomasz",
    saying: "I love controversy. I love everyone.",
  },
  507: {
    author: "Steve S",
    saying: "I've never understood vests",
  },
  508: {
    author: "Ben D",
    saying: "he really is the zach braff of prog",
  },
  509: {
    author: "Simon",
    saying: "how can you eat katsu sauce without cutlery",
  },
  510: {
    author: "Anna P",
    saying: "we've got bigger potatoes",
  },
  511: {
    author: "Nick L",
    saying: "Stone Cold Steve in Austin",
  },
  512: {
    author: "Ben D",
    saying: "I would love to see a dog headbanging in 13/8",
  },
  513: {
    author: "Simon",
    saying: "all beer no pram",
  },
  514: {
    author: "Chris L",
    saying: "sausage infused shorts",
  },
  515: {
    author: "Will B",
    saying: "You can be my Brótogé",
  },
  516: {
    author: "Chris L",
    saying: "free shower tickles",
  },
  517: {
    author: "Nick L",
    saying: "2 soft closing, then 1 shocker",
  },
  518: {
    author: "Nick L",
    saying: "my elephant game is awesome",
  },
  519: {
    author: "Chris L",
    saying: "prepare for lamination",
  },
  520: {
    author: "Simon",
    saying: "npm install thibaud",
  },
  521: {
    author: "Chris L",
    saying: "death by dentures",
  },
  522: {
    author: "Simon",
    saying: "all disco no design",
  },
  523: {
    author: "Chris L",
    saying: "ear hoovers",
  },
  524: {
    author: "Jo F",
    saying: "Shout if you need extra poking",
  },
  525: {
    author: "Simon",
    saying: "imagine a 5k deer",
  },
  526: {
    author: "Chris L",
    saying: "WA5TAIL",
  },
  527: {
    author: "Helen W",
    saying: "We should all be branded with the flame",
  },
  528: {
    author: "Tomasz",
    saying: "this is some another level of softboi poetry going on here",
  },
  529: {
    author: "Steve S",
    saying: "you were in my dream last night",
  },
  530: {
    author: "Alex B",
    saying: "centralising the forks",
  },
  531: {
    author: "Steve S",
    saying: "I could taco bout tacos all day",
  },
  532: {
    author: "Simon",
    saying: "I need to try wood",
  },
  533: {
    author: "Joe H",
    saying: "These are from my big cave of collected goodness",
  },
  534: {
    author: "pv",
    saying: "All mouth and no trousers",
  },
  535: {
    author: "pv",
    saying: "well shit in a bag and punch it",
  },
  536: {
    author: "pv",
    saying: "if your aunty had balls she'd be your uncle",
  },
  537: {
    author: "Will B",
    saying: "It’s the same thing as anything",
  },
  538: {
    author: "Joe H",
    saying: "Laziness is the favourite of all my defaults",
  },
  539: {
    author: "Chris L",
    saying: "another day another div",
  },
  540: {
    author: "Simon",
    saying: "accessibility overlord jane™",
  },
  541: {
    author: "Will B",
    saying: "Soy Beta dev",
  },
  542: {
    author: "Tomasz",
    saying: "Japanese-dead-people-at-home kind of shrine",
  },
  543: {
    author: "Nick L",
    saying: "scrub me baby",
  },
  544: {
    author: "Chris L",
    saying: "dance floor full of molars",
  },
  545: {
    author: "Will B",
    saying: "my demons are funny",
  },
  546: {
    author: "Tom U",
    saying:
      "From now on I am only changing DNS records if I can get 11 people to watch me",
  },
  547: {
    author: "Ben D",
    saying: "I feel the fusion lust rising within me",
  },
  548: {
    author: "Chris L",
    saying: "it’ll be bats in a tropical rainforest tonight",
  },
  549: {
    author: "Helen W",
    saying: "My bored is bored",
  },
  550: {
    author: "Nick S",
    saying: "You're a simple man, Simon",
  },
  551: {
    author: "Cassidy",
    saying: "have to love a man that loves pineapples",
  },
  552: {
    author: "Simon",
    saying: "there’s just no going back from cat piss",
  },
  553: {
    author: "Dan B",
    saying: "I graduate every day",
  },
  554: {
    author: "Chris L",
    saying: "who leaks out of their nose when they’re sleepy",
  },
  555: {
    author: "Dan B",
    saying: "I know enough to be dangerous",
  },
  556: {
    author: "Chris S",
    saying: "chmod 007",
  },
  557: {
    author: "Joe H",
    saying: "Acey bongo!",
  },
  558: {
    author: "Simon",
    saying: "base64 encoded the fuck out of everything",
  },
  559: {
    author: "Joe H",
    saying: "Dip me in your Monday milk",
  },
  560: {
    author: "Andrew WS",
    saying: "Fear is a great motivator",
  },
  561: {
    author: "Kev",
    saying: "It's like an un-sponsored roundabout",
  },
  562: {
    author: "Tom U",
    saying: "maybe I just sound too much like an air conditioner",
  },
  563: {
    author: "Will B",
    saying: "It’s Britney bitch",
  },
  564: {
    author: "pv",
    saying: "Mainlining the nuts",
  },
  565: {
    author: "Nick L",
    saying: "free kipper with every estimate",
  },
  566: {
    author: "Ben D",
    saying: "I think it's just normal dread",
  },
  567: {
    author: "Ben D",
    saying: "webpack is awesome, but webpack is fucking heinous",
  },
  568: {
    author: "Chris L",
    saying: "we’re just spawning bugs",
  },
  569: {
    author: "Will B",
    saying: "Big dogs can't join the rat race",
  },
  570: {
    author: "Will B",
    saying: "I am filled with whimsy",
  },
  571: {
    author: "Chris L",
    saying: "he smelt like arson",
  },
  572: {
    author: "Will B",
    saying: "Physically, I'm here. Mentally, I am Christmas.",
  },
  573: {
    author: "Will B",
    saying: "Somewhere between a nap and 6 pints",
  },
  574: {
    author: "Simon",
    saying: "processprocess <i>process</i> <b>process PROCESS</b>",
  },
  575: {
    author: "Will B",
    saying: "I just want a meal deal and a vape",
  },
  576: {
    author: "Will B",
    saying: "Someone get him a gavel",
  },
  577: {
    author: "Nick L",
    saying: "you’d want some kind of nut detector",
  },
  578: {
    author: "Joe H",
    saying: "Preamble ramble",
  },
  579: {
    author: "Joe H",
    saying:
      "I've got a bee in my bonnet about the reports, not a bad bee, just a bee",
  },
  580: {
    author: "Ben D",
    saying: "don't discount the dog",
  },
  581: {
    author: "Dan B",
    saying: "prepare for the customary cringe",
  },
  582: {
    author: "Nick L",
    saying: "I’ll do an iron lotus for you",
  },
  583: {
    author: "Nick L",
    saying: "Elon Musk in a box",
  },
  584: {
    author: "Anna P",
    saying: "Like a chickenpox party",
  },
  585: {
    author: "Chris L",
    saying: "a slightly ripened dairylea",
  },
  586: {
    author: "Nick L",
    saying: "is he dripping in butter",
  },
  587: {
    author: "Kev",
    saying: "I KNEW it would be airports",
  },
  588: {
    author: "Chris L",
    saying: "espresso through the hosepipe",
  },
  589: {
    author: "Tomasz",
    saying: "I like drinking with my grandma",
  },
  590: {
    author: "Simon",
    saying: "my fingers have forgotten",
  },
  591: {
    author: "Nick L",
    saying: "want to join a zoom and watch me do nordschleife?",
  },
  592: {
    author: "pv",
    saying: "I’ve often been called an opinionated asset",
  },
  593: {
    author: "Steve S",
    saying: "I do the best bug fixes in my sleep",
  },
  594: {
    author: "Anna P",
    saying: "its all gravy on this train",
  },
  595: {
    author: "Nick L",
    saying: "my middle knob doesn’t work",
  },
  596: {
    author: "Chris L",
    saying: "then everyone spoke like chipmunks",
  },
  597: {
    author: "Will B",
    saying: "I wish I was your cats",
  },
  598: {
    author: "Anna P",
    saying: "there’s only so many flapjacks i can eat today",
  },
  599: {
    author: "Anon",
    saying:
      "That – I won’t give my opinion on that but we’ll get there one day",
  },
  600: {
    author: "Chris L",
    saying: "how do you restart the whales engine",
  },
  601: {
    author: "Lauren",
    saying:
      "anything from bodies under the patio to weaving jumpers out of cat hair",
  },
  602: {
    author: "James H",
    saying: "There are some scripts happening",
  },
  603: {
    author: "Simon",
    saying: "just banter and vibes",
  },
  604: {
    author: "Thibaud",
    saying: "Wagtail is big",
  },
  605: {
    author: "Chris L",
    saying: "had to detach my head to go back in time",
  },
  606: {
    author: "Chris L",
    saying: "he’s too busy with his threadpoolexecutor",
  },
  607: {
    author: "Steve S",
    saying: "it's all fun and games until deployment",
  },
  608: {
    author: "Steve S",
    saying: "our old is your new",
  },
  609: {
    author: "Chris L",
    saying: "thaw me out when it’s time for refinement",
  },
  610: {
    author: "Simon",
    saying: "I can hear them sponging outside my room",
  },
  611: {
    author: "Nick L",
    saying: "they’re still stuck in there weeing on your walls",
  },
  612: {
    author: "Chris L",
    saying: "backlog refinement in the bearpit",
  },
  613: {
    author: "Simon E",
    saying: "they go mad when I pull out the hotdogs",
  },
  614: {
    author: "Nick L",
    saying: "I just had to catch a pheasant",
  },
  615: {
    author: "Chris L",
    saying: "time for a prune",
  },
  616: {
    author: "Nick L",
    saying: "wonder how big the glitter poo will be if i base64 encode it",
  },
  617: {
    author: "Chris D",
    saying: "I'm used to being the fun killer these days",
  },
  618: {
    author: "Ben D",
    saying: "it’s the right kind of unhinged",
  },
  619: {
    author: "Ben D",
    saying: "no-one's arguing with those calves",
  },
  620: {
    author: "Mark",
    saying: "they don’t have a strategy so don’t expect any logic",
  },
  621: {
    author: "Charmagne",
    saying: "I’d totally hands down win a rap-off",
  },
  622: {
    author: "Kev",
    saying: "I can send you a pregnant cow, or some yoghurts",
  },
  623: {
    author: "Kev",
    saying: "I've been eating yoghurts all day",
  },
  624: {
    author: "Mark",
    saying: "I’ve opened the agency bullshit dictionary",
  },
  625: {
    author: "Simon",
    saying: "thank god for danks",
  },
  626: {
    author: "Simon",
    saying:
      "hey look how much money you’ve spunked up the wall with third party GTM",
  },
  627: {
    author: "Chris L",
    saying: "share your lynx africa with loch ness",
  },
  628: {
    author: "Simon E",
    saying: "the bhaji is always inconsistent",
  },
  629: {
    author: "Ian",
    saying: "Ten days of Nick Lee would rock anybody's world",
  },
  630: {
    author: "Chris L",
    saying: "it's a cherry pickers delight",
  },
  631: {
    author: "Kev",
    saying: "I couldn't CEO a cat",
  },
  632: {
    author: "Helen C",
    saying: "I tell my husband off for being rude to alexa",
  },
  633: {
    author: "Kev",
    saying: "I'm usually 90% sense free",
  },
  634: {
    author: "Arran",
    saying: "I don’t like being out after 2pm on a Sunday",
  },
  635: {
    author: "Mark",
    saying: "going to live amongst the kangaroos",
  },
  636: {
    author: "Kev",
    saying: "sso good",
  },
  637: {
    author: "Nick L",
    saying: "so many anonymous otters",
  },
  638: {
    author: "Nick L",
    saying: "the otter is going wild",
  },
  639: {
    author: "Jenny H",
    saying: "It's a KitKat Chunky and it goes right in",
  },
  640: {
    author: "Simon E",
    saying: "bread on toast",
  },
  641: {
    author: "Simon E",
    saying: "my whole house is vibrating again",
  },
  642: {
    author: "Katriina",
    saying: "I’m a silly person with small hands and a big phone",
  },
  643: {
    author: "Joe H",
    saying: "Have a break, have a quick cat.",
  },
  644: {
    author: "Chris L",
    saying: "may as well be eating cardboard for every meal",
  },
  645: {
    author: "Chris L",
    saying: "proper shoehorner",
  },
  646: {
    author: "Abigail",
    saying: "Paul Vetch special",
  },
  647: {
    author: "Mandy",
    saying: "Everyone you speak to is like an exhausted pigeon",
  },
  648: {
    author: "Nick L",
    saying: "attach a defensive skunk to the package",
  },
  649: {
    author: "Simon",
    saying: "remember it's just pixels on a screen, no one really gives a shit",
  },
  650: {
    author: "Josh",
    saying: "they don't call me quick-draw mcmoji for nothing",
  },
  651: {
    author: "Anon",
    saying: "It’s cognitive tennis",
  },
  652: {
    author: "Helen C",
    saying: "Oh, I thought my cursor was your cursor. Mi cursor su cursor.",
  },
  653: {
    author: "Simon E",
    saying: "Now That's What I Call MegaBiscuit™ 2024",
  },
  654: {
    author: "Cassie",
    saying: "hi I'm here for the donuts",
  },
  655: {
    author: "Thibaud",
    saying: "It’s just another spreadsheet with words in it",
  },
  656: {
    author: "Arran",
    saying: "He should run 'how not to be a shit client' classes",
  },
  657: {
    author: "Peter H",
    saying: "I might need to start a cult as a side hustle",
  },
  658: {
    author: "Baptiste",
    saying: "Come on, they're paying me in brown cheese it's worth it",
  },
  659: {
    author: "John D",
    saying: "Real Housewives Of Torchbox",
  },
  660: {
    author: "Pete W",
    saying: "React doesn't do things when you tell it to, it does things when it feels like it",
  },
  661: {
    author: "John D",
    saying: "Nesting dolls of certainty",
  },
  662: {
    author: "Arran",
    saying: "Tentative naughty list",
  },
  663: {
    author: "Peter H",
    saying: "Hoang on",
  },
  664: {
    author: "Vicky",
    saying: "His priorities are a moveable feast",
  },
  665: {
    author: "Chris L",
    saying: "just turn all your servers off",
  },
  666: {
    author: "Mandy",
    saying: "Who even are we?",
  },
  667: {
    author: "Ania",
    saying: "i dont even know which way to bite it",
  },
  668: {
    author: "Josh",
    saying: "the mustard tiger always improves my day",
  },
  669: {
    author: "Mandy",
    saying: "Like a hot potato!",
  },
  670: {
    author: "Josh",
    saying: "It's like Brian Eno if he got high and watched 2001",
  },
  671: {
    author: "Nick L",
    saying: "obviously it depends on girth",
  },
  672: {
    author: "Rachel",
    saying: "That's the context crab",
  },
  673: {
    author: "Iona",
    saying: "it’s a juicy war zone",
  },
  674: {
    author: "Chris L",
    saying: "sausage roll sweetener",
  },
  675: {
    author: "John D",
    saying: "From regression to aggression",
  },
  676: {
    author: "Simon",
    saying: "run off clutching my woffs",
  },
  677: {
    author: "Mandy",
    saying: "Costa del Derbyshire",
  },
  678: {
    author: "Mark",
    saying: "need to sit down with a bottle of rum and a spreadsheet",
  },
  679: {
    author: "Alice",
    saying: "they call me Alice Wise Logan",
  },
  680: {
    author: "Chris L",
    saying: "half rice half chips",
  },
  681: {
    author: "Charmagne",
    saying: "Extra points for a giant trunk",
  },
  682: {
    author: "John D",
    saying: "Is it draughts or 3d chess?",
  },
  683: {
    author: "Josh",
    saying: "hang on, let me zoom to 300%",
  },
  684: {
    author: "Charmagne",
    saying: "He looks like a wormer to me",
  },
  685: {
    author: "Alice",
    saying: "a real scoffer",
  },
  686: {
    author: "Mitch",
    saying: "just undo everything",
  },
  687: {
    author: "Phil M",
    saying: "Dreams come at a cost",
  },
  688: {
    author: "John D",
    saying: "I don't want to live in a sweaty Lush",
  },
  689: {
    author: "Josh",
    saying: "prepare for an onslaught of ego-driven development",
  },
  690: {
    author: "Weylon",
    saying: "I’m just budget friendly",
  },
  691: {
    author: "Chris H",
    saying: "I’d rather have dead rats and heating",
  },
  692: {
    author: "Mandy",
    saying: "Very mondayish",
  },
  693: {
    author: "Mark",
    saying: "digging deep to remember why I live in the uk",
  },
  694: {
    author: "Mitch",
    saying: "Drive to Spain",
  },
  695: {
    author: "Simon",
    saying: "I'm dumb but not that dumb",
  },
  696: {
    author: "Chris L",
    saying: "your head my shoulders",
  },
  697: {
    author: "Lizzie",
    saying: "Life’s too short for bad food decisions",
  },
  698: {
    author: "Alice",
    saying: "this is not the last time I will be weird",
  },
  699: {
    author: "Simon",
    saying: "I'm too scared to tinker",
  },
  700: {
    author: "Ben T",
    saying: "in the armpit of the star",
  },
  701: {
    author: "Dave H",
    saying: "Late Night Tales with Dave Harris",
  },
  702: {
    author: "Ben E",
    saying: "bedtime snuggles with the OG paddington bear",
  },
  703: {
    author: "Simon",
    saying: "I can be destroyer of worlds",
  },
  704: {
    author: "Steve S",
    saying: "I'll play it on tin whistle standing by the glow of a golden bowl of soup",
  },
  705: {
    author: "Ellie",
    saying: "surthriving",
  },
  706: {
    author: "Chris L",
    saying: "I think the level of ranting is equivalent to the level of how preposterous that suggestion is",
  },
  707: {
    author: "Simon",
    saying: "I want to drown them in data",
  },
  708: {
    author: "Kev",
    saying: "feels like I'm carrying a birds nest on my face",
  },
  709: {
    author: "Nick L",
    saying: "i can’t get it to use my proper pigeon",
  },
  710: {
    author: "Ania",
    saying: "the thicker the more IQ, you know it",
  },
  711: {
    author: "pv",
    saying: "they have completely screwed the pooch",
  },
  712: {
    author: "Chris L",
    saying: "Stone Cold Steve Steinwand",
  },
  713: {
    author: "Mark",
    saying: "spiritually i’ve been mauled",
  },
  714: {
    author: "Nick L",
    saying: "cellotape a dog to it",
  },
  715: {
    author: "Dom",
    saying: "I live for the berrocas",
  },
  716: {
    author: "Dom",
    saying: "the orange ambulance",
  },
  717: {
    author: "Mitch",
    saying: "I have the memory of a bird so it didn’t happen.",
  },
  718: {
    author: "Maciej",
    saying: "looking forward to having my own claude code goose",
  },
  719: {
    author: "Claudia",
    saying: "you can call me the butcher",
  },
  720: {
    author: "Ellie",
    saying: "Not as good as Miles's ginormous spanner",
  },
  721: {
    author: "Chris L",
    saying: "i was just blasting arrows down the alley",
  },
  722: {
    author: "Bojan",
    saying: "I almost deleted my computer",
  },
  723: {
    author: "Nick L",
    saying: "why would I croissant a new employee",
  },
  724: {
    author: "Josh",
    saying: "Sometimes you do all the right things and the mould still wins",
  },
  725: {
    author: "Mitch",
    saying: "I am the flex",
  },
  726: {
    author: "Nick L",
    saying: "stomach feels dangerous",
  },
};

const quoteContainer = document.getElementById("quote");
const authorContainer = document.getElementById("author");

const quotes = Object.keys(data).reduce(
  (quoteArray, key) => [...quoteArray, data[key]],
  []
);

// Get the author from the URL query parameter
function getAuthorFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const author = urlParams.get('author')?.trim().toLowerCase(); // e.g., ?author=Author%20Name
  if (author) {
    return author;
  }
  return null;
}

// Filter quotes by the author specified in the URL
function filterQuotesByAuthor(author) {
  return quotes.filter(quote => quote.author.toLowerCase().includes(author));
}

// Get a random quote (with optional author filtering)
randomQuote = () => {
  const author = getAuthorFromURL();
  let filteredQuotes = quotes;

  if (author) {
    filteredQuotes = filterQuotesByAuthor(author);
  }

  return filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
}

// Update DOM with quote
updateQuote = () => {
  const selectedQuote = randomQuote();
  authorContainer.textContent = `${selectedQuote.author}`;
  quoteContainer.textContent = `${selectedQuote.saying}`;
};

// On load
document.addEventListener("DOMContentLoaded", () => {
  updateQuote();
});

// On space bar
document.addEventListener("keyup", (event) => {
  if (event.key == " ") {
    updateQuote();
  }
});

// On mobile button tap
document.querySelector("[data-button]").addEventListener("click", () => {
  updateQuote();
});
