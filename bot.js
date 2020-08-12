
// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

//This is a basic test of the bot. Users says Ping, bot says Pong.
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('**pong**');
  }
});

//Here is where both arrays for Gex functionality are defined
var randArr = [];
var gexArr = [
"Get your stinking paws off me you damn dirty ape!",
"Its tail time!",
"YYYEEESSS!",
"That\'s for 12 years of Full House!",
"Now that\'s what I call getting some tail.",
"All right! It\'s tail time!",
"My tail\'s gonna kick your butt!",
"Time to go postal!",
"Say hello to the floor!",
"Put that in your pipe and smoke it.",
"I\'m doing this for you!",
"Gecko-chop baby yeah!",
"Gecko-chop baby!",
"Karate-chop!",
"Watch me use my tail to kick your butt.",
"This is for Mr. Sinatra.",
"You\'re nothing see you\'re nothing!",
"I\'ll give you such a pinch!",
"Move like a butterfly sting like a gecko!",
"This is for all the angels in heaven.",
"Eat this!",
"File this under 'ouch'!",
"Judo-chop baby!",
"Judo-chop baby yeah!",
"You mean I'm not 99.9% clean?",
"Are you after that old sandwich in my pocket?",
"Hello there my secret friend!",
"I ain\'t gonna make!",
"I got a mate!",
"You are a secret friend!",
"Mmmm... buttery.",
"Tastes are licking and...ehhhhhhh we heard it.",
"Spock load the tongue.",
"Burp!",
"That\'s the sweet stuff darling.",
"Mmm... TVs instead of potatoes.",
"All right that\'s the spot.",
"3 more I have the whole set!",
"Oh gimme gimme gimme!",
"I\'ll take one of those and some of these.",
"If this weren\'t a video game I\'d be on my way to prison!",
"Sweet like candy!",
"Need it! Need it! Need it!",
"For me! You shouldn\'t have!",
"One for me and one for me!",
"Licking my way to the top!",
"A little tongue now a lot of tail later.",
"Pardon my tongue darling.",
"Slip of the tongue.",
"Slip of the tongue! Mhmhmh.",
"Slip of the tongue baby!",
"NOW CUT THAT OUT!",
"Warp core breach is imminent Captain!",
"Cut stunt gecko!",
"You never knocked me down!",
"Easy...",
"Damn it Jim I\'m a doctor not a pin cushion!",
"Cut my eyes I can\'t see!",
"THAT\'S NOT IN THE SCRIPT!",
"Um that\'s not in the script...",
"Must... regain... balance.",
"Uh someone yell cut!",
"Mental note: get a tetanus.",
"Body blow! Body blow!",
"It hurts!",
"Someone yell 'Cut'!",
"Stunt gecko!",
"Where\'s the stunt gecko?",
"You never knocked me down!",
"Easy...",
"NOW CUT THAT OUT!",
"Damn this pesky gravity!",
"Damn this pesky gravity to hell!",
"Prepare to abandon ship.",
"If I were real this would hurt.",
"Mr. Wizard!",
"Aaaaah!",
"Prepare to abandon ship.",
"Geronimo.",
"Geronimo!",
"Oh dear.",
"They call him Flipper Flipper.",
"SHARK!!!!",
"SHAAAAAAAAAAARRRRRRRRRKKKKKKK!!!",
"Piranhas? What Piranhas?",
"Piranhas? Huddle! Huddle! Huddle! Huddle! Huddle!",
"I hope my fake hip is rust-proof!",
"Is it just me or am I ENGULFED IN FLAMES?!",
"I'm flaming--in the manly way...",
"FLAME ON!",
"I am the god of hellfire!",
"Pepto...Bismol!",
"Indigestion!",
"Flame on!",
"I think I'm having a hot flush.",
"Indi...gestion!",
"Pepto...Bismol!",
"Woah.",
"WOAH!",
"ow.",
"OWOWOWOW!",
"Oh no I'm too young to have a second childhood!",
"The government told me that these experiments were over!",
"YOU\'RE DESPICABLE!",
"Note to self: Don\'t drink tap water at Jerry Garcia's.",
"Note to self: Don\'t step on any brown mushy rocks!",
"Note to self: Don\'t buy rocket sled made by ACME.",
"This is really about your father isn\'t it?",
"Damn IRS!",
"Will Cheech and/or Chong report to the front desk!",
"Hey! I feel like I\'m trapped in Boy George\'s pants!",
"Look I just wanted a gift shop in the bathroom.",
"My inner child is coming out and it hurts!",
"And remember kids never buy a marvolay from a guy with a top hat.",
"This is like a luau at Mel Blanc\'s house!",
"We\'re on the road to nowhere!",
"Have fun storming the castle!",
"What did you flunk out of nasty camp?",
"Ah to see the world as Keith Richards does.",
"Brought to you by up-Chuck Jones.",
"Ah to see the world as Keith Richards does.",
"This is about your father isn\'t it?",
"Note to self: Don\'t step on any brown mushy rocks!",
"I feel like I\'m in Boy George\'s pants!",
"Shouldn’t you be on a can of tuna?",
"This is no time for cartoon jokers!",
"That’s not all folks!",
"Has anyone seen Carol-Anne in here?",
"Bring out the gimp.",
"Hey cutie.",
"Hello pretty.",
"Bring out your dead!",
"I understand the head throwing but the dress?",
"Is your skull a metaphor?",
"Jimmy Hoffa white courtesy phone Jimmy Hoffa.",
"You my friend have an eating disorder.",
"Sorry Mr. Presley hahaha not yet thanks.",
"The imperial fleet would never follow us in to a floating furniture field.",
"Well that's real scary guys a floating toilet",
"The odds of navigating a floating furniture field are 3327 to 1.",
"Pat I'll take the floating chair for $200 and the rest on account?",
"Well we met our panel (chuckles) walls... panels heh...",
"You moved the headstones but you didn't move the bodies!",
"What are you Larry King's barber? Ha! Ha! You're alright!",
"Nice haircut when did we enlist",
"Red Side Story auditions are down the hall.",
"And stab and kick and 2!",
"Go stab someone your own size!",
"Let me guess: your parents don't understand you.",
"Carrot Top is that you",
"West Side Story auditions are down the hall",
"Benihana not hiring?",
"Hmm yes but can you make julienne fries?",
"And stab and kick and two!",
"Which one of you played Coco in Fame",
"Do I ammuse you? Like a clown?",
"I ain't afraid of no ghosts!",
"Ugly is as Ugly does.",
"No! No! No! I wanted the pit there and the pendulum there!",
"Reminds me of Halloween at Rip Taylor's.",
"Uh hi I'm here for the real-world interview?",
"It beats the Matterhorn what are you going to do?",
"Who forgot to pay the gravity bill?",
"This place is bigger than Drew Carey's bar tab.",
"Heeeeeeeere's Gexy!",
"Welcome to Under This Old House.",
"Man Hef has let his place go",
"The ad says Beverly Hills adjacent.",
"I hate these low budget b-levels.",
"This house is now clean.",
"Today is a good day to die!",
"Behind one of these doors is a brand new car!",
"Don't take career advice from Joe Piscopo.",
"Redrum Redrum!",
"Reminds me of my bother's dorm room.",
"Axe in the chest for Scatman Crothers.",
"This is what Tim Burton thinks about when he's in the tub.",
"So this is never-never land you'd never guess it from the outside.",
"FedEx for Roger Corman.",
"Lily have you seen grandpa?",
"The real estate wizardry of Tom Vu at work.",
"Welcome to the New York city mass transit system.",
"I am most certainly not in the vicinity of Kansas anymore.",
"You have the swan-like grace of a young Nixon.",
"Freddy Jason; Jason Freddy.",
"Believe me you smell like I feel.",
"Ladies and gentlemen Tom Arnold's acting coach.",
"Heeeeeeere's Gexy!",
"Now who would live in a room like this?",
"This place is bigger than Oliver Reed\'s bar tab...",
"Hey the ad said Beverly Hills adjacent!",
"I hate these low budget b-levels.",
"Shut down all the garbage mashers on the detention level!",
"Hmmm.... www.dork.com!",
"What is this? Outtakes from Deep Space 9!?",
"How did I get in Bill Gates\' head?",
"All this technology still can\'t explain why David Hasslehoff is so popular.",
"I love that guy. He\'s not housebroken.",
"This is like an all-nighter at Richard Simmons\' house.",
"The only thing this place doesn\'t have is a baby gap.",
"All this technology so fat guys can hear Rush Limbaugh?",
"All this technology and Shatner still can\'t get a good hairpiece.",
"Coming soon the Wizard of Oz 2000!",
"I feel like I\'m in the Wiz!",
"Boys Tron\'s not gonna work once. It\'s not gonna work twice!",
"Ehhh! I should have become a Maytag repair man!",
"Lady I don\'t know who wired this for you but none of this stuff is grounded.",
"Uh lady you gotta change your lint filter.",
"Let's see.... www.dork.com!",
"How\'d I get in Bill Gates\' head?",
"Boys Tron didn\'t work once. It\'s not working twice!",
"Welcome to Jurassic Park keep your eyes peeled for sleestaks and other bad special effects.",
"In a land before time when Saturday Night Live was funny.",
"WILMA!!!!",
"I\'ll take \'Places I Can Burn To Death\' for $100 Alex.",
"Marshall Will and Holly. On a routine expedition. (singing)",
"Add 1 million years two white tigers and we\'re in Siegfried and Roy!",
"One day soon it\'ll be a smoke belching factory here!",
"The difference between this and Hades is that there\'s no Kathy Lee Gifford.",
"Dr.Zaius would an ape make a human doll that talks?!",
"The natives will trade four of their women for the girl with the golden hair.",
"That\'s a spicy meatball.",
"GOODNESS GRACIOUS GREAT BALLS OF FIRE!!!",
"And this is just one of the forty thousand rooms in Aaron Spelling's house!",
"I haven\'t seen blasts like this since taco night at James Earl Jones\' house.",
"OK who\'s job was it to mow the lawn?",
"If Prince was a snail these would be his tracks.",
"There\'s a joke here about snail trails but I\'m not gonna tell it.",
"Evolve or get out of my way pal!",
"Hey it\'s my mother-in-law!",
"If this is the best they've got around here in six months we'll be running this planet",
"Gecko shall not kill gecko!",
"Soylent green is geckos!",
"I should\'ve come back here to fill my lava lamp hohoho!",
"I am the lizard king hear my roar!",
"Memo to Gilligan. Try building a raft.",
"A raft! How convenient! Those programmers think of everything.",
"Welcome to Jurassic Park",
"The natives will give you four of their women for the girl with the golden hair.",
"My name is Caine I seek water.",
"I\'m looking for the two small girls that sing for Mothra.",
"What\'s harder getting through this level or divvying up the check?",
"I\'ll beat this level but in an hour I\'ll be hungry for another.",
"I\'m Tom Vu you can be a millionaire!",
"Dr. Jones I\'ll never get all three Sankara Stones.",
"Ugh where\'s Short Round when you need him?",
"I\'m lost in Dick Dale\'s colon.",
"I knew I shouldn\'t have hired Margaret Cho as my landscaper.",
"With the level six you get egg roll.",
"Ahh ancient Chinese level.",
"Oh hoho no not the Hellraiser box.",
"Yes I\'m here to pick up my laundry.",
"This is going to be one expensive easter egg hunt (when breaking vases)",
"Domo arigato Mr. digital roboto domo.",
"Wax on wax off.",
"Nice robe Mr. Hefner.",
"Come on Jake it\'s Chinatown.",
"Yes I\'m here to pick up my laundry.",
"Why yes I\'m here to pick up my laundry.",
"You don\'t match the carpet and you have to go.",
"Ancient Chinese Secret huh?",
"Now listen to me grasshopper.",
"I\'m having \'Nam flashbacks and I wasn\'t even there!",
"Waiter? Just box up the evil I\'ll take it home.",
"Is this the Year of the Gecko?",
"I\'m looking for a man called Scaramanga.",
"Hmm reminds me of Jackie Chan\'s bathroom.",
"So this is where all the missing socks go.",
"Man this place smells like ducks.",
"The things I do for Mooshoo...",
"I\'m the ultimate weapon baby yeah!",
"Hi I\'m looking for the two small girls who sing for Mothra.",
"Akira to white courtesy phone Akira to white courtesy phone.",
"Where\'s Shortround when you need him?",
"Last time I was here I was dressed as a woman. Yes!",
"Wha\'s harder getting through this level or digging up the check?",
"Oh great the dream sequence from Brazil again.",
"Hey where\'s Tom Vu and the geishas?",
"Waiter just box up the evil and I'll take it home.",
"Captain they are a bizarre alien race that find Adam Sandler funny.",
"The princess is here in the detention level.",
"Has anyone seen Fox Mulder\'s sister?",
"There\'s a gecko on my tail R2 see what you can do with it!",
"First sign of an Ewok I\'m out of here.",
"Meet Gex gecko",
"Screw the Force who\'s got a grenade?",
"I feel like a walking dutch oven.",
"I don\'t think that\'s good air.",
"Spock can you read me?",
"This is major Gex to ground control",
"We don\'t serve you kind in here!",
"Are you related to the cartoon trash can at the movies?",
"Are you fluent in gettin\' your butt kicked?",
"You are unwise to lower your defenses.",
"Alright boys phasers on stun",
"Tell me again the difference between the future and Las Vegas.",
"I knew Roswell would open up a casino.",
"Scotty beam me into an Ivy League Sorority House.",
"Shouldn\'t I be wearing a lead apron?",
"Well I guess this means I can\'t have children.",
"Two to beam up.",
"Keep the dribbles I just want the quadrotriticale.",
"Aren\'t you a little short for a stormtrooper?",
"Well if it isn\'t Doctor Jellyfinger.",
"Is that a lightsaber are or you just happy to see me?",
"I can\'t see a thing in this helmet.",
"Daddy wants air! Daddy wants air!",
"Gexy wants new helmet! Gexy wants new helmet!",
"This is radio 3 erect signing off.",
"Out of the way Roseanne!",
"500 channels and still nothing on.",
"At least I\'m not at the DMV.",
"Terminator? Phone call for a Mr. Terminator.",
"Welcome to the only thing more evil than IRS Headquarters.",
"So this is where they decided to change Coke.",
"Looks like we got a fly in the spider\'s web",
"Screens up.",
"The horror!",
"Welcome to the only thing more evil than the Inland Revenue Headquarters.",
"And they said testing A-bombs on this island would have no effect.",
"Someone who is not me could stand to lose a few pounds.",
"I've got ten seconds to save the world.",
"Welcome to this week's episode of 'Touched By An Uncle'.",
"All that work and I\'m back where I started. It\'s just like college.",
"My god! This is New York! I lived here... Worked here.",
"Dead fly martini. Shaken not stirred.",
"I am the last gecko.",
"Gecko. Gex Gecko.",
"Shocking...",
"Tempt me darling.",
"This is the big one! I'm coming Elizabeth!",
"Ladies and gentlemen! The new Fall TV season!",
"So this is New Jersey.",
"Evening Mr. Picasso!",
"To boldly go...I\'m scared!",
"Oh William please... Give me a sponge bath.",
];

let peopleArr = [
"Donald Trump",
"Barack Obama",
"Greta Thunberg",
"Pope Francis",
"Osama Bin Laden",
"Tony Blair",
"Angela Merkel",
"J.K.Rowling",
"Kim Jong Un",
"Usain Bolt",
"Stephen Hawking",
"Linus Torvalds",
"George W. Bush",
"Jeb Bush",
"Joe Biden",
"Jimmy Wales",
"Steve Jobs",
"Hilary Clinton",
"Queen Elizabeth II",
"Jimmy Carter",
"George Clooney",
"Oprah Winfrey",
"Tim Berners-Lee",
"Lance Armstrong",
"Prince William",
"Kate Middleton",
"Messi",
"Alex Jones",
"Al Gore",
"Hilary Clinton",
"Emma Watson",
"Beyonce",
"Lady Gaga",
"Angelina Jolie",
"Vladimir Putin",
"David Cameron",
"Will Smith",
"Larry Page",
"Angelina Jolie",
"Ivanka Trump",
"Shakira",
"Serena Williams",
"Michael Bloomberg",
"Mark Zuckerberg",
"Elon Musk",
"Sacha Baron Cohen",
"Jon Stewart",
"Scarlett Johansson",
"Stephen Colbert",
"Prince Charles",
"Bashar Assad",
"E.L. James",
"Rihanna",
"Warren Buffett",
"Xi Jinping",
"Prince Harry",
"Meghan Markle",
];

let placeArr = [
"house",
"bar",
"dressing Room",
"Burger King",
"bedroom",
"living room",
"airport",
"apartment building",
"bank",
"barber shop",
"book store",
"bowling alley",
"bus stop",
"church",
"convenience store",
"department store",
"fire department",
"gas station",
"hospital",
"house",
"library",
"movie theater",
"museum",
"office building",
"post office",
"restaurant",
"school",
"mall",
"supermarket",
"train station",
"rally",
];

let actionArr = [
"sleeping",
"driving",
"Halloween",
"Christmas",
"Easter",
"Sunday School",
"watching TV",
"playing video games",
"working",
"reading Gex quotes",
"watching the History Channel",
"listening to Lo-Fi Beats",
"gambling",
"drinking",
"having a pleasant evening",
"dating",
"a wedding",
"smoking weed"
];




//Code to populate randArr array
for (var j=0;j<gexArr.length*2;j++) {
  var num = Math.floor(Math.random()*10)
  num = num*Math.floor(Math.random()*100)
  if (num < gexArr.length & num > 0){
    randArr.push(num);
  }
}

//This function handles user's pressing needs to get a Gex quote. 
client.on('message', msg => {
  if (msg.content.includes('gex')) {
    msg.channel.send("<:gx:742018954196811886> "+gexArr[randArr[Math.floor(Math.random()*10)]]);
  }
});

//I am playing around with different API functions here, this one just prints a message if a message has my name at the beginning
client.on('message',msg => {
	if (msg.content.startsWith('Andrew')) {
		msg.channel.send("Not a Gex Quote")
	}
});

//This is for the new gex quotes

client.on('message',msg => {
	if (msg.content.includes("newquote")) {
switch (Math.floor(Math.random()*10)) {
	case 1:
		//console.log("#1")
		msg.channel.send("<:gx:742018954196811886> "+"Has anyone seen "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+" in here?")
		break;
	case 2:
		//console.log("#2")
		msg.channel.send("<:gx:742018954196811886> "+"Note to self: don\'t go to a party at "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+"'s "+placeArr[Math.floor(Math.random()*placeArr.length)]+".");
		break;
	case 3:
		console.log("#3")
		msg.channel.send("<:gx:742018954196811886> "+"Reminds me of "+actionArr[Math.floor(Math.random()*actionArr.length)]+" at "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+"'s "+placeArr[Math.floor(Math.random()*placeArr.length)]+".")
		break;
	case 4:
		//console.log("#4")
		msg.channel.send("<:gx:742018954196811886> "+"Don't take career advice from "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+".")
		break;
	case 5:
		//console.log("#5")
		msg.channel.send("<:gx:742018954196811886> "+"Ladies and Gentlemen, I present "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+"!")
		break;
	case 6:
		//console.log("#6")
		msg.channel.send("<:gx:742018954196811886> "+"Is it just me or does anyone feel like "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+" is "+actionArr[Math.floor(Math.random()*actionArr.length)]+"?")
		break;
	case 7:
		//console.log("#7")
		msg.channel.send("<:gx:742018954196811886> "+"I feel like "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+" in a "+placeArr[Math.floor(Math.random()*placeArr.length)]+".");
		break;
	case 8:
		//console.log("#8")
		msg.channel.send("<:gx:742018954196811886> "+"This is like "+actionArr[Math.floor(Math.random()*actionArr.length)]+" at "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+"'s "+placeArr[Math.floor(Math.random()*placeArr.length)]+".")
		break;
	case 9:
		//console.log("#9")
		msg.channel.send("<:gx:742018954196811886> "+"This place is bigger than "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+"'s "+actionArr[Math.floor(Math.random()*actionArr.length)]+".")
		break;
	case 0:
		//console.log("#0")
		msg.channel.send("<:gx:742018954196811886> "+"This is worse than finding "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+" in a "+placeArr[Math.floor(Math.random()*placeArr.length)]+".")
		
		break;
}
		}
});
