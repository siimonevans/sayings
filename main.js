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
  217: {
    author: "Cameron",
    saying: "I called it dirty-master",
  },
  218: {
    author: "Nick L",
    saying: "why is black, called black",
  },
  219: {
    author: "Tomasz",
    saying: "I can hear someone's noises",
  },
  220: {
    author: "Chris L",
    saying: "just watched as a guy broke in my car whilst eating a big mac",
  },
  221: {
    author: "Tomasz",
    saying: "I need some oxygen",
  },
  222: {
    author: "Abigail",
    saying: "hover is the enemy",
  },
  223: {
    author: "Abigail",
    saying: "this project would be enhanced by place-puppy",
  },
  224: {
    author: "Tomasz",
    saying: "CTA bingo",
  },
  225: {
    author: "Abigail",
    saying: "simon would you like to be the broccoli",
  },
  226: {
    author: "Nick L",
    saying: "you love a good fiddle",
  },
  227: {
    author: "Chris L",
    saying: "it’s the one and only T O double D",
  },
  228: {
    author: "Tomasz",
    saying: "thanks for being so agile, like a jaguar",
  },
  229: {
    author: "Abigail",
    saying: "I'm hoping to make friends with dolphins",
  },
  230: {
    author: "Nick L",
    saying: "my eyes are still trying to open",
  },
  231: {
    author: "Nick L",
    saying: "filthy grabber",
  },
  232: {
    author: "Abigail",
    saying: "you make an excellent note",
  },
  233: {
    author: "Chris",
    saying: "do you want to borrow my lobster costume for project kick off",
  },
  234: {
    author: "Tomasz",
    saying: "Can you stop misspelling Apple Pay or I'll kill you",
  },
  235: {
    author: "Tomasz",
    saying: "You don't have a beard, you don't understand",
  },
  236: {
    author: "Tomasz",
    saying: "hey wizards",
  },
  237: {
    author: "Chris L",
    saying: "oo oat cream",
  },
  238: {
    author: "Chris L",
    saying: "you just get paid in wands",
  },
  239: {
    author: "Nick L",
    saying: "person with the biggest wand wins",
  },
  240: {
    author: "Abigail",
    saying: "I'd love to see a goat on the beach drinking cocktails",
  },
  241: {
    author: "Simon",
    saying: "this goat needs optimising",
  },
  242: {
    author: "Nick L",
    saying: "just lie down and spam it into people",
  },
  243: {
    author: "Abigail",
    saying: "what about a life changing chicken?",
  },
  244: {
    author: "Chris L",
    saying: "show them your pimped out weapon",
  },
  245: {
    author: "Abigail",
    saying: "I wouldn't mind hearing a baby goat in the middle of the night",
  },
  246: {
    author: "Tomasz",
    saying: "I need to move your faces",
  },
  247: {
    author: "Tom D",
    saying: "I wouldn't fancy my chances against a crow",
  },
  248: {
    author: "Kevin",
    saying: "Where there's blame there's a claim",
  },
  249: {
    author: "Thibaud",
    saying:
      "you don’t even need to use english, you can describe things based on their very essence",
  },
  250: {
    author: "Cameron",
    saying: "sawceee",
  },
  251: {
    author: "Steve S",
    saying: "I could crush a rocket salad right now",
  },
  252: {
    author: "Simon",
    saying: "Storage Blob Data Contributor",
  },
  253: {
    author: "Tomasz",
    saying: "it's a sonarcloud curse",
  },
  254: {
    author: "Tomasz",
    saying: "I could do a sentence for harassment",
  },
  255: {
    author: "Nick L",
    saying: "motorised zorb",
  },
  256: {
    author: "Chris L",
    saying: "underground zorb museum",
  },
  257: {
    author: "Chris L",
    saying: "tickle your belly",
  },
  258: {
    author: "Nick L",
    saying: "head of beard growth",
  },
  259: {
    author: "Tomasz",
    saying: "there's way more PhD around than people think",
  },
  260: {
    author: "Will B",
    saying: "Snape would teach IE11 cross-compatibility",
  },
  261: {
    author: "Tomasz",
    saying: "I feel like a monkey in a circus",
  },
  262: {
    author: "Chris L",
    saying: "open gills on hover",
  },
  263: {
    author: "Nick V",
    saying: "I’m going to get it out and flop it on the table",
  },
  264: {
    author: "Devon",
    saying: "Do we need to keep David Cameron or can he be recycled?",
  },
  265: {
    author: "Nick L",
    saying: "that game where you have to put limbs in certain places",
  },
  266: {
    author: "Tomasz",
    saying: "Utter buzzword bollocks",
  },
  267: {
    author: "Nick L",
    saying: "can’t you see my crab",
  },
  268: {
    author: "Ben D",
    saying: "like being stamped to death by mammoths",
  },
  269: {
    author: "Nick L",
    saying: "no lobsters in the library",
  },
  270: {
    author: "Chris L",
    saying: "it’s a beast and it’s only just been born",
  },
  271: {
    author: "Thibaud",
    saying: "I just need to move to California",
  },
  272: {
    author: "Ben D",
    saying: "cross repository blob mount",
  },
  273: {
    author: "Abigail",
    saying: "I am a secret wizard",
  },
  274: {
    author: "Ben D",
    saying: "near the back of the kama sutra, that one",
  },
  275: {
    author: "Todd",
    saying: "everything is a blob",
  },
  276: {
    author: "Chris L",
    saying: "Bay Rans",
  },
  277: {
    author: "Tomasz",
    saying: "shark onesie is fine",
  },
  278: {
    author: "Nick L",
    saying: "wouldn’t worry, it does sometimes do weird things",
  },
  279: {
    author: "Tomasz",
    saying: "is it supposed to be satanist somehow?",
  },
  280: {
    author: "Chris L",
    saying: "I am the docs",
  },
  281: {
    author: "Chris L",
    saying: "told the whale to piss off and now fan is back to normal",
  },
  282: {
    author: "Chris L",
    saying: "as if a whale could swim with 6 shipping containers on it",
  },
  283: {
    author: "Colin",
    saying: "in the 1950s, the most popular type of banana was called big mike",
  },
  284: {
    author: "Nick L",
    saying: "always have a bow and arrow handy",
  },
  285: {
    author: "Nick L",
    saying: "pretty sure you’ve always been dead",
  },
  286: {
    author: "Chris L",
    saying: "on the zinsser",
  },
  287: {
    author: "Chris L",
    saying: "couple of zinssers",
  },
  288: {
    author: "Chris L",
    saying: "charge it through the nose",
  },
  289: {
    author: "Chris L",
    saying: "seed sensations is a quality loaf",
  },
  290: {
    author: "Chris L",
    saying: "might have a raz",
  },
  291: {
    author: "Nick L",
    saying: "I’m getting distracted by the smells",
  },
  292: {
    author: "Chris L",
    saying: "maybe I should just stop squashing",
  },
  293: {
    author: "Nick L",
    saying: "need detective pikachu",
  },
  294: {
    author: "Ben D",
    saying: "I’m shit at this but I’m not that shit",
  },
  295: {
    author: "Steve S",
    saying: "I deleted the repo so no one has any issues",
  },
  296: {
    author: "Nick L",
    saying: "plugged into the pineaptrix",
  },
  297: {
    author: "Chris L",
    saying: "what is that fatty gap about",
  },
  298: {
    author: "Chris L",
    saying: "Is it linting itself",
  },
  299: {
    author: "Chris L",
    saying: "I miss seeing all the variables",
  },
  300: {
    author: "Nick L",
    saying: "not seeing any kittens",
  },
  301: {
    author: "Tomasz",
    saying: "you owe me a cobra",
  },
  302: {
    author: "Steve S",
    saying: "I've had 5 amazing seizures this morning",
  },
  303: {
    author: "Chris L",
    saying: "just lob it all in a zorb",
  },
  304: {
    author: "Nick L",
    saying: "I’ll do it kneeless",
  },
  305: {
    author: "Chris L",
    saying: "can you not just behead the bird?",
  },
  306: {
    author: "Ben D",
    saying: "hunt and peck with one hand was faster",
  },
  307: {
    author: "Todd",
    saying: "somewhere it has to be deanonamisable",
  },
  308: {
    author: "Nick L",
    saying: "chief of conflict resolution",
  },
  309: {
    author: "Nick L",
    saying: "I’m head of headshots mate",
  },
  310: {
    author: "Simon",
    saying: "I’ll just get my sloth out",
  },
  311: {
    author: "Will B",
    saying:
      "If you love something, <strike>set it free</strike> deploy it on friday",
  },
  312: {
    author: "Ben D",
    saying:
      "I'm really looking to forward to trying to work out whether cameron is talking about thibaud or tibor",
  },
  313: {
    author: "Nick L",
    saying: "the borbonator",
  },
  314: {
    author: "Chris L",
    saying: "just whack some LEDs in the nana’s",
  },
  315: {
    author: "Chris L",
    saying: "does everything get it’s own zorb?",
  },
  316: {
    author: "Nick L",
    saying: "bourbon api only works with html",
  },
  317: {
    author: "Nick L",
    saying: "flown in via stork express",
  },
  318: {
    author: "Nick L",
    saying: "tactical pre-main puke",
  },
  319: {
    author: "Nick L",
    saying: "might accidentally bath the dj instead of the bird though",
  },
  320: {
    author: "Nick L",
    saying: "Chris loves a little sausage",
  },
  321: {
    author: "Nick L",
    saying: "I don’t think I’m functioning",
  },
  322: {
    author: "Nick L",
    saying: "magic sometimes has odd side effects",
  },
  323: {
    author: "Chris L",
    saying: "polyfill with cheese",
  },
  324: {
    author: "Chris L",
    saying: "get a lamp on it",
  },
  325: {
    author: "Chris L",
    saying: "woff woff",
  },
  326: {
    author: "Chris L",
    saying: "I just answer ‘egg’ to every question",
  },
  327: {
    author: "Thibaud",
    saying: "Oh, what I have done...",
  },
  328: {
    author: "Simon",
    saying: "it’s 250 lines of filth",
  },
  329: {
    author: "Nick L",
    saying: "best make them biteproof",
  },
  330: {
    author: "Nick L",
    saying: "Deirdre wants to see Alan’s large marrow",
  },
  331: {
    author: "Chris L",
    saying: "djyagtail",
  },
  332: {
    author: "Chris L",
    saying: "imagine being 300 years old",
  },
  333: {
    author: "Nick L",
    saying: "don’t want my bore hole running dry",
  },
  334: {
    author: "Nick L",
    saying: "would you like to vasaline his ears",
  },
  335: {
    author: "Nick L",
    saying: "right in the bhaji",
  },
  336: {
    author: "Chris L",
    saying: "they were eating it, getting wired and causing mayhem",
  },
  337: {
    author: "Chris L",
    saying: "sounded like I was in a foam sandwich",
  },
  338: {
    author: "Ben D",
    saying: "available in 'goth jizz burst'",
  },
  339: {
    author: "Nick L",
    saying:
      "it’s like two components, but with the same component twice inside",
  },
  340: {
    author: "Ben D",
    saying: "I’ve always had a good guitar gurn",
  },
  341: {
    author: "Ben D",
    saying: "like a bulldog eating wasps",
  },
  342: {
    author: "Chris L",
    saying: "did she pull out her oboe",
  },
  343: {
    author: "Will B",
    saying: "there's a bowl of crunch at the end for sure",
  },
  344: {
    author: "Chris L",
    saying: "house full of sheep",
  },
  345: {
    author: "Nick L",
    saying: "lord of the sprinkles",
  },
  346: {
    author: "Nick L",
    saying: "looking after your pastries",
  },
  347: {
    author: "Simon",
    saying: "if you clean a vacuum cleaner, you become a vacuum cleaner",
  },
  348: {
    author: "Nick L",
    saying: "deep nosing",
  },
  349: {
    author: "Nick L",
    saying: "is he refactoring his house into react",
  },
  350: {
    author: "Tomasz",
    saying: "she'll have you for breakfast",
  },
  351: {
    author: "Jane",
    saying: "I’m very limbic today",
  },
  352: {
    author: "Ben D",
    saying:
      "don't believe everything you think - believe everything jeff bezos thinks",
  },
  353: {
    author: "Jenny H",
    saying: "muscle is where the meat is",
  },
  354: {
    author: "Todd",
    saying: "feed their documentation fetish",
  },
  355: {
    author: "Ben D",
    saying: "I admire the shit out of it",
  },
  356: {
    author: "Ben D",
    saying: "Obviously I’m not a mother but I am a twin",
  },
  357: {
    author: "Will B",
    saying: "I'm trending",
  },
  358: {
    author: "Will B",
    saying: "I'll merge anything",
  },
  359: {
    author: "Nick L",
    saying: "gimp suit for your roof",
  },
  360: {
    author: "Tomasz",
    saying: "I've had some wine you can tell",
  },
  361: {
    author: "Nick L",
    saying: "did you not do it in Russian?",
  },
  362: {
    author: "Will B",
    saying: "You've got a level 2 poltergeist",
  },
  363: {
    author: "Nick L",
    saying: "printing heroku",
  },
  364: {
    author: "Nick L",
    saying: "I’ll release some snakes",
  },
  365: {
    author: "Chris L",
    saying: "even the can looks edible",
  },
  366: {
    author: "Ben D",
    saying: "syncopate 'til you herniate",
  },
  367: {
    author: "Nick L",
    saying: "I see your toaster matches your bike",
  },
  368: {
    author: "Chris L",
    saying: "they need to make more things in lichen green",
  },
  369: {
    author: "Steve S",
    saying: "Bean there done that",
  },
  370: {
    author: "Nick L",
    saying: "think it depends on your ears",
  },
  371: {
    author: "Chris L",
    saying: "what other animals are in dev that i don’t know about",
  },
  372: {
    author: "Chris L",
    saying: "the sprint sloth",
  },
  373: {
    author: "Chris L",
    saying: "the backlog bear",
  },
  374: {
    author: "Steve S",
    saying:
      "A portal will open up in my kitchen and I'll get to ascend into nugget utopia",
  },
  375: {
    author: "Tomasz",
    saying: "I think software should ask you to opt into the banter.",
  },
  376: {
    author: "Nick L",
    saying: "only a grand for an erection",
  },
  377: {
    author: "Simon",
    saying: "are you going round squeezing lots of wood",
  },
  378: {
    author: "Simon",
    saying: "can’t get enough lift from the ears",
  },
  379: {
    author: "Nick L",
    saying: "handy for catching door ticklers",
  },
  380: {
    author: "Simon",
    saying: "my ears start wtf’ing",
  },
  381: {
    author: "Will B",
    saying: "<code>$(fuck-that).upper()</code>",
  },
  382: {
    author: "Nick L",
    saying: "should have macaroned him in the face",
  },
  383: {
    author: "Steve S",
    saying: "My gangly fingers don’t work like they used to",
  },
  384: {
    author: "Chris L",
    saying: "the robot is acceptable",
  },
  385: {
    author: "Simon",
    saying: "like waking up in a hot bag",
  },
  386: {
    author: "Nick L",
    saying: "the humanwillbapeed",
  },
  387: {
    author: "Will B",
    saying: "I got munched",
  },
  388: {
    author: "Nick L",
    saying: "just switch the switch behind your right ear",
  },
  389: {
    author: "Chris L",
    saying: "use it as a mini foot-tickling window",
  },
  390: {
    author: "Will B",
    saying:
      "There's nothing he can't do with a pint in his right and his keyboard in his left",
  },
  391: {
    author: "Tomasz",
    saying: "its a bit like olives, takes time to like them",
  },
  392: {
    author: "Chris L",
    saying: "crouching tiger hidden cow",
  },
  393: {
    author: "Chris L",
    saying: "you’re basically doing a tour of my life",
  },
  394: {
    author: "Tomasz",
    saying: "I don't understand what you are doing here but if it feels right.",
  },
  395: {
    author: "Chris L",
    saying: "cloudy with a chance of tables",
  },
  396: {
    author: "Chris L",
    saying: "wish my fingers were made from bournville",
  },
  397: {
    author: "Chris L",
    saying: "I charge randomly",
  },
  398: {
    author: "Chris L",
    saying: "release the hounds!",
  },
  399: {
    author: "Will B",
    saying: "Resto in pesto",
  },
  400: {
    author: "Tomasz",
    saying: "you cant possibly satisfy me",
  },
  401: {
    author: "Nick L",
    saying: "it makes my right arm twitch when I hit my brain",
  },
  402: {
    author: "Will B",
    saying: "I'm a one man party",
  },
  403: {
    author: "Chris L",
    saying: "fast track to the biscuit window",
  },
  404: {
    author: "Tomasz",
    saying: "dont sarcasm me at this time",
  },
  405: {
    author: "Chris L",
    saying: "do paws work on touch id",
  },
  406: {
    author: "Steve S",
    saying: "it was like walking on chicken soup bouillon",
  },
  407: {
    author: "Steve S",
    saying:
      "It's like you’re trying to build a house in the forest and there's a chainsaw in the next shed over that you could use if you want",
  },
  408: {
    author: "Will B",
    saying: "I will be craving death after it",
  },
  409: {
    author: "Chris L",
    saying: "this fork seems alright",
  },
  410: {
    author: "Tomasz",
    saying: "do I look like a google expert to you",
  },
  411: {
    author: "Nick L",
    saying: "just smear it all over your body and see what parts get numb",
  },
  412: {
    author: "Nick L",
    saying: "the condescending operator does it for you",
  },
  413: {
    author: "Nick L",
    saying: "are you going to be my Todd",
  },
  414: {
    author: "Paul B",
    saying: "I'd love to do a roast potato tasting menu",
  },
  415: {
    author: "Tomasz",
    saying: "I've been doing a lot of self-inflicted DRF",
  },
  416: {
    author: "Nick L",
    saying: "didn’t get a chance to leech him",
  },
  417: {
    author: "Will B",
    saying: "I am the long purple brick in this game of Tetris",
  },
  418: {
    author: "Will B",
    saying: "Wanna hang out the back of my rocket",
  },
  419: {
    author: "Ben D",
    saying:
      "I think in his hands a spade with some dental floss on it would rip",
  },
  420: {
    author: "Will B",
    saying: "I want more beans",
  },
  421: {
    author: "Nick L",
    saying: "alexa hide me from the foxes",
  },
  422: {
    author: "Chris L",
    saying: "I’ll go bonkers on conkers",
  },
  423: {
    author: "Chris L",
    saying: "is it a festival, a coffee or a cheese?",
  },
  424: {
    author: "Chris L",
    saying: "why is it this complex labyrinth of tick boxes and magical lingo",
  },
  425: {
    author: "Mitch",
    saying: "Wizards are difficult",
  },
  426: {
    author: "Nick L",
    saying: "woodpecker on the nuts",
  },
  427: {
    author: "Nick L",
    saying: "the hunchback of bude",
  },
  428: {
    author: "Simon E",
    saying: "what is a hot deaker",
  },
  429: {
    author: "Steve S",
    saying: "nothing useful from me",
  },
  430: {
    author: "Simon",
    saying: "ostrich is best",
  },
  431: {
    author: "Olly W",
    saying: "karma jackpot",
  },
  432: {
    author: "Chris L",
    saying: "in trenchard I trod on a strongbow can with a knob straw in it",
  },
  433: {
    author: "Josh",
    saying: "I always appreciate succulent lattice feedback",
  },
  434: {
    author: "Nick L",
    saying: "hairy mic",
  },
  435: {
    author: "Chris L",
    saying: "Its sweated on itself",
  },
  436: {
    author: "Nick L",
    saying:
      "takes a lot of skill to poke two things in at once, one in the top and one of the bottom ones simultaneously",
  },
  437: {
    author: "Chris L",
    saying: "he could buy a cow",
  },
  438: {
    author: "Chris L",
    saying: "simon's developer nightmares",
  },
  439: {
    author: "Alex B",
    saying: "might just comment out the whole repo and go on sabbatical",
  },
  440: {
    author: "Nick L",
    saying: "warm front cold back",
  },
  441: {
    author: "Mel",
    saying: "don't yeet ur cat",
  },
  442: {
    author: "Chris L",
    saying: "end up in kebab-u-like at 3am",
  },
  443: {
    author: "Ben D",
    saying: "very 'fingery'",
  },
  444: {
    author: "Chris L",
    saying: "fastest finger first",
  },
  445: {
    author: "Chris L",
    saying: "would be a big bird on a 5xl",
  },
  446: {
    author: "Nick L",
    saying: "what's with the fingering",
  },
  447: {
    author: "Ellie",
    saying: "it gives my canoncial data preferences the absolute ick",
  },
  448: {
    author: "Nick L",
    saying: "maybe I should hook up all of the farmers cows",
  },
  449: {
    author: "Ben D",
    saying: "caffeinate then commiserate",
  },
  450: {
    author: "Ben D",
    saying: "I don't really care how the sausage is made",
  },
  451: {
    author: "Nick L",
    saying: "head of furry boom",
  },
  452: {
    author: "Chris L",
    saying: "mow the roof",
  },
  453: {
    author: "Simon",
    saying: "my trackpad is moist",
  },
  454: {
    author: "Steve S",
    saying:
      "I'd have the michael buble playing so loud that you'll never sleep again",
  },
  455: {
    author: "Chris L",
    saying: "you’ll find nemo in seconds",
  },
  456: {
    author: "Thibaud",
    saying:
      "It’s crazy how much more you can do in the summer with effective cooling",
  },
  457: {
    author: "Ben D",
    saying: "I love that pre-rain smell",
  },
  458: {
    author: "Simon",
    saying: "nothing like a bit of scouse lamination",
  },
  459: {
    author: "Simon",
    saying: "who needs the lotto when you can just steal shit",
  },
  460: {
    author: "James H",
    saying: "I could be a whisk, because I like to mix things up",
  },
  461: {
    author: "James H",
    saying: "You’ve got a lot of range with kitchen utensils",
  },
  462: {
    author: "Nick L",
    saying: "get in his tiger moth and machine gun the fuck out of you",
  },
  463: {
    author: "Will B",
    saying: "I will always disco",
  },
  464: {
    author: "Will B",
    saying: "you can put a beer in your kanga pouch and wiggle",
  },
  465: {
    author: "Kevin",
    saying: "up to my nuts in spice",
  },
  466: {
    author: "Chris L",
    saying: "do you ever pre-heat your office?",
  },
  467: {
    author: "Chris L",
    saying: "where’s the turkey?",
  },
  468: {
    author: "Steve S",
    saying: "tastes like liquid summer",
  },
  469: {
    author: "Steve S",
    saying: "they call me the tong king",
  },
  470: {
    author: "Chris L",
    saying: "have a bath with the loch ness monster",
  },
  471: {
    author: "Thibaud",
    saying: "it took me a few years but I know what G&T means now",
  },
  472: {
    author: "Dan B",
    saying: "I don’t have the capacity to be curious right now",
  },
  473: {
    author: "Chris L",
    saying: "I breathe triple A mate",
  },
  474: {
    author: "Helen C",
    saying:
      "If it’s not warm and furry and farting it can’t recreate the real experience…",
  },
  475: {
    author: "Chris L",
    saying: "I’m yet to tickle its tummy",
  },
  476: {
    author: "Nick L",
    saying: "are they canine crypto investors",
  },
  477: {
    author: "Chris L",
    saying: "mine a million then go for a margherita",
  },
  478: {
    author: "Will B",
    saying: "I want Jacob's Owl",
  },
  479: {
    author: "Will B",
    saying: "I need high ceilings and street wine",
  },
  480: {
    author: "Tomasz",
    saying: "Jesus Christ on a bendy bus!",
  },
  481: {
    author: "Nick L",
    saying: "Torchbox need to start paying for ear massages",
  },
  482: {
    author: "Chris L",
    saying: "I just want to write code and eat pringles",
  },
  483: {
    author: "Steve S",
    saying: "We are trying to collect 2 of every animal for this project",
  },
  484: {
    author: "Dan B",
    saying: "we had a funky Heisenbug on Upshot",
  },
  485: {
    author: "Dan B",
    saying: "Patsy != Lucy",
  },
  486: {
    author: "Kev",
    saying: "It was like walking through a headache",
  },
  487: {
    author: "Nick L",
    saying: "the goat is especially bad",
  },
  488: {
    author: "Chris L",
    saying: "now there’s fingers in all sorts of pies",
  },
  489: {
    author: "Chris L",
    saying: "as Celine Dion once said it’s all coming back to me",
  },
  490: {
    author: "Ellie",
    saying: "I'm a hand talker",
  },
  491: {
    author: "Steve S",
    saying: "My diet is vegetable and sadness",
  },
  492: {
    author: "Tomasz",
    saying: "Can't get more meaty meat than that",
  },
  493: {
    author: "Simon",
    saying: "air fryer shrine",
  },
  494: {
    author: "Dan B",
    saying: "there's beauty in both",
  },
  495: {
    author: "Chris L",
    saying: "get tanned like a barcode",
  },
  496: {
    author: "Tomasz",
    saying: "Acknowledging that we're not shit might be a good idea",
  },
  497: {
    author: "Simon",
    saying: "I’d need to see the curlies",
  },
  498: {
    author: "Will B",
    saying: "I just want to lift maxes and avoid taxes",
  },
  499: {
    author: "Ben E",
    saying: "There should always be a little sun",
  },
  500: {
    author: "Simon",
    saying: "I call it the house of pain",
  },
  501: {
    author: "Simon",
    saying: "smashing back the jam",
  },
  502: {
    author: "Chris L",
    saying: "need a sober comparison",
  },
  503: {
    author: "Chris L",
    saying: "deliciouszone",
  },
  504: {
    author: "Chris L",
    saying: "napping in the starter",
  },
  505: {
    author: "Tomasz",
    saying: "I love controversy. I love everyone.",
  },
  506: {
    author: "Steve S",
    saying: "I've never understood vests",
  },
  507: {
    author: "Ben D",
    saying: "he really is the zach braff of prog",
  },
  508: {
    author: "Simon",
    saying: "how can you eat katsu sauce without cutlery",
  },
  509: {
    author: "Anna P",
    saying: "we've got bigger potatoes",
  },
  510: {
    author: "Nick L",
    saying: "Stone Cold Steve in Austin",
  },
  511: {
    author: "Ben D",
    saying: "I would love to see a dog headbanging in 13/8",
  },
  512: {
    author: "Simon",
    saying: "all beer no pram",
  },
  513: {
    author: "Chris L",
    saying: "sausage infused shorts",
  },
  514: {
    author: "Will B",
    saying: "You can be my Brótogé",
  },
  515: {
    author: "Chris L",
    saying: "free shower tickles",
  },
  516: {
    author: "Nick L",
    saying: "2 soft closing, then 1 shocker",
  },
  517: {
    author: "Nick L",
    saying: "my elephant game is awesome",
  },
  518: {
    author: "Chris L",
    saying: "prepare for lamination",
  },
  519: {
    author: "Simon",
    saying: "npm install thibaud",
  },
  520: {
    author: "Chris L",
    saying: "death by dentures",
  },
  521: {
    author: "Simon",
    saying: "all disco no design",
  },
  522: {
    author: "Chris L",
    saying: "ear hoovers",
  },
  523: {
    author: "Jo F",
    saying: "Shout if you need extra poking",
  },
  524: {
    author: "Simon",
    saying: "imagine a 5k deer",
  },
  525: {
    author: "Chris L",
    saying: "WA5TAIL",
  },
  526: {
    author: "Helen W",
    saying: "We should all be branded with the flame",
  },
  527: {
    author: "Tomasz",
    saying: "this is some another level of softboi poetry going on here",
  },
  528: {
    author: "Steve S",
    saying: "you were in my dream last night",
  },
  529: {
    author: "Alex B",
    saying: "centralising the forks",
  },
  530: {
    author: "Steve S",
    saying: "I could taco bout tacos all day",
  },
  531: {
    author: "Simon",
    saying: "I need to try wood",
  },
  532: {
    author: "Joe H",
    saying: "These are from my big cave of collected goodness",
  },
  533: {
    author: "pv",
    saying: "All mouth and no trousers",
  },
  534: {
    author: "pv",
    saying: "well shit in a bag and punch it",
  },
  535: {
    author: "pv",
    saying: "if your aunty had balls she'd be your uncle",
  },
  536: {
    author: "Will B",
    saying: "It’s the same thing as anything",
  },
  537: {
    author: "Joe H",
    saying: "Laziness is the favourite of all my defaults",
  },
  538: {
    author: "Chris L",
    saying: "another day another div",
  },
  539: {
    author: "Simon",
    saying: "accessibility overlord jane™",
  },
  540: {
    author: "Will B",
    saying: "Soy Beta dev",
  },
  541: {
    author: "Tomasz",
    saying: "Japanese-dead-people-at-home kind of shrine",
  },
  542: {
    author: "Nick L",
    saying: "scrub me baby",
  },
  543: {
    author: "Chris L",
    saying: "dance floor full of molars",
  },
  544: {
    author: "Will B",
    saying: "my demons are funny",
  },
  545: {
    author: "Tom U",
    saying:
      "From now on I am only changing DNS records if I can get 11 people to watch me",
  },
  546: {
    author: "Ben D",
    saying: "I feel the fusion lust rising within me",
  },
  547: {
    author: "Chris L",
    saying: "it’ll be bats in a tropical rainforest tonight",
  },
  548: {
    author: "Helen W",
    saying: "My bored is bored",
  },
  549: {
    author: "Nick S",
    saying: "You're a simple man, Simon",
  },
  550: {
    author: "Cassidy",
    saying: "have to love a man that loves pineapples",
  },
  551: {
    author: "Simon",
    saying: "there’s just no going back from cat piss",
  },
  552: {
    author: "Dan B",
    saying: "I graduate every day",
  },
  553: {
    author: "Chris L",
    saying: "who leaks out of their nose when they’re sleepy",
  },
  554: {
    author: "Dan B",
    saying: "I know enough to be dangerous",
  },
  555: {
    author: "Chris S",
    saying: "chmod 007",
  },
  556: {
    author: "Joe H",
    saying: "Acey bongo!",
  },
  557: {
    author: "Simon",
    saying: "base64 encoded the fuck out of everything",
  },
  558: {
    author: "Joe H",
    saying: "Dip me in your Monday milk",
  },
  559: {
    author: "Andrew WS",
    saying: "Fear is a great motivator",
  },
  560: {
    author: "Kev",
    saying: "It's like an un-sponsored roundabout",
  },
  561: {
    author: "Tom U",
    saying: "maybe I just sound too much like an air conditioner",
  },
  562: {
    author: "Will B",
    saying: "It’s Britney bitch",
  },
  563: {
    author: "pv",
    saying: "Mainlining the nuts",
  },
  564: {
    author: "Nick L",
    saying: "free kipper with every estimate",
  },
  565: {
    author: "Ben D",
    saying: "I think it's just normal dread",
  },
  566: {
    author: "Ben D",
    saying: "webpack is awesome, but webpack is fucking heinous",
  },
  567: {
    author: "Chris L",
    saying: "we’re just spawning bugs",
  },
  568: {
    author: "Will B",
    saying: "Big dogs can't join the rat race",
  },
  569: {
    author: "Will B",
    saying: "I am filled with whimsy",
  },
  570: {
    author: "Chris L",
    saying: "he smelt like arson",
  },
  571: {
    author: "Will B",
    saying: "Physically, I'm here. Mentally, I am Christmas.",
  },
  572: {
    author: "Will B",
    saying: "Somewhere between a nap and 6 pints",
  },
  573: {
    author: "Simon",
    saying: "processprocess <i>process</i> <b>process PROCESS</b>",
  },
  574: {
    author: "Will B",
    saying: "I just want a meal deal and a vape",
  },
  575: {
    author: "Will B",
    saying: "Someone get him a gavel",
  },
  576: {
    author: "Nick L",
    saying: "you’d want some kind of nut detector",
  },
  577: {
    author: "Joe H",
    saying: "Preamble ramble",
  },
  578: {
    author: "Joe H",
    saying:
      "I've got a bee in my bonnet about the reports, not a bad bee, just a bee",
  },
  579: {
    author: "Ben D",
    saying: "don't discount the dog",
  },
  580: {
    author: "Dan B",
    saying: "prepare for the customary cringe",
  },
  581: {
    author: "Nick L",
    saying: "I’ll do an iron lotus for you",
  },
  582: {
    author: "Nick L",
    saying: "Elon Musk in a box",
  },
  583: {
    author: "Anna P",
    saying: "Like a chickenpox party",
  },
  584: {
    author: "Chris L",
    saying: "a slightly ripened dairylea",
  },
  585: {
    author: "Nick L",
    saying: "is he dripping in butter",
  },
  586: {
    author: "Kev",
    saying: "I KNEW it would be airports",
  },
  587: {
    author: "Chris L",
    saying: "espresso through the hosepipe",
  },
  588: {
    author: "Tomasz",
    saying: "I like drinking with my grandma",
  },
  589: {
    author: "Simon",
    saying: "my fingers have forgotten",
  },
  590: {
    author: "Nick L",
    saying: "want to join a zoom and watch me do nordschleife?",
  },
  591: {
    author: "pv",
    saying: "I’ve often been called an opinionated asset",
  },
  592: {
    author: "Steve S",
    saying: "I do the best bug fixes in my sleep",
  },
  593: {
    author: "Anna P",
    saying: "its all gravy on this train",
  },
  594: {
    author: "Nick L",
    saying: "my middle knob doesn’t work",
  },
  595: {
    author: "Chris L",
    saying: "then everyone spoke like chipmunks",
  },
  596: {
    author: "Will B",
    saying: "I wish I was your cats",
  },
  597: {
    author: "Anna P",
    saying: "there’s only so many flapjacks i can eat today",
  },
  598: {
    author: "Anon",
    saying:
      "That – I won’t give my opinion on that but we’ll get there one day",
  },
  599: {
    author: "Chris L",
    saying: "how do you restart the whales engine",
  },
  600: {
    author: "Lauren",
    saying:
      "anything from bodies under the patio to weaving jumpers out of cat hair",
  },
  601: {
    author: "James H",
    saying: "There are some scripts happening",
  },
  602: {
    author: "Simon",
    saying: "just banter and vibes",
  },
  603: {
    author: "Thibaud",
    saying: "Wagtail is big",
  },
  604: {
    author: "Chris L",
    saying: "had to detach my head to go back in time",
  },
  605: {
    author: "Chris L",
    saying: "he’s too busy with his threadpoolexecutor",
  },
  606: {
    author: "Steve S",
    saying: "it's all fun and games until deployment",
  },
  607: {
    author: "Steve S",
    saying: "our old is your new",
  },
  608: {
    author: "Chris L",
    saying: "thaw me out when it’s time for refinement",
  },
  609: {
    author: "Simon",
    saying: "I can hear them sponging outside my room",
  },
  610: {
    author: "Nick L",
    saying: "they’re still stuck in there weeing on your walls",
  },
  611: {
    author: "Chris L",
    saying: "backlog refinement in the bearpit",
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
