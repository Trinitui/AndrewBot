//WAIT! Read these comments before moving on...
// The first section below has a lot of variables being initialized to get what 
// the bot needs from different dependencies. 
//
// The Bot is then logged in once everything is declared
//
// After that, There's a section with different Commands. A shortlist of commands is below:
// 1. Ping-Pong
// 2. Obtain a Gex Quote from a known array of them
// 3. Generate a new Gex Quote (why...)
// 4. Return a Nightcore song when asked
// 5. Return a robot emoji when AndrewBot is mentioned. This is to quickly check bot status
// 5.x AndrewBot sends out a crazed response from tragic Trump lawyer Rudy Giuliani
// 6. Playing around with new NPM Libraries, this time the holy-bible one for some reason.
// 7. Added SpaceX API integration, now you can type in some commands and get results.
//
//
// If you want to add something new, submit an issue first. 






// Run dotenv
require('dotenv').config();

//Run axios and get YT key
const axios = require('axios')
const YOUTUBE_APIKEY = process.env.YOUTUBE_APIKEY

//require holy-bible
var bible = require('holy-bible');

//Require and create Discord JS stuff
const Discord = require('discord.js');
const client = new Discord.Client();

//Import Arrays from other files. 
const gexArr = require('./gexArr.js')
const {peopleArr, actionArr, placeArr} = require("./activeArrs.js")

// Log Bot into discord
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);




//1. This is a basic test of the bot. Users says Ping, bot says Pong.
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('**pong**');
  }
});

//2. This function handles user's pressing needs to get a Gex quote. 
client.on('message', msg => {
  if (msg.content.includes('gex')) {
    msg.channel.send("<:gx:743242684281389176> "+gexArr[Math.floor(Math.random()*gexArr.length)]);
  }
});


//3. This is for the new gex quotes
client.on('message',msg => {
	if (msg.content.includes("newquote")) {
switch (Math.floor(Math.random()*10)) {
	case 1:
		msg.channel.send("<:gx:743242684281389176> "+"Has anyone seen "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+" in here?")
		break;
	case 2:
		msg.channel.send("<:gx:743242684281389176> "+"Note to self: don\'t go to a party at "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+"'s "+placeArr[Math.floor(Math.random()*placeArr.length)]+".");
		break;
	case 3:
		msg.channel.send("<:gx:743242684281389176> "+"Reminds me of "+actionArr[Math.floor(Math.random()*actionArr.length)]+" at "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+"'s "+placeArr[Math.floor(Math.random()*placeArr.length)]+".")
		break;
	case 4:
		msg.channel.send("<:gx:743242684281389176> "+"Don't take career advice from "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+".")
		break;
	case 5:
		msg.channel.send("<:gx:743242684281389176> "+"Ladies and Gentlemen, I present "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+"!")
		break;
	case 6:
		msg.channel.send("<:gx:743242684281389176> "+"Is it just me or does anyone feel like "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+" is "+actionArr[Math.floor(Math.random()*actionArr.length)]+"?")
		break;
	case 7:
		msg.channel.send("<:gx:743242684281389176> "+"I feel like "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+" in a "+placeArr[Math.floor(Math.random()*placeArr.length)]+".");
		break;
	case 8:
		msg.channel.send("<:gx:743242684281389176> "+"This is like "+actionArr[Math.floor(Math.random()*actionArr.length)]+" at "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+"'s "+placeArr[Math.floor(Math.random()*placeArr.length)]+".")
		break;
	case 9:
		msg.channel.send("<:gx:743242684281389176> "+"This place is bigger than "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+"'s "+actionArr[Math.floor(Math.random()*actionArr.length)]+".")
		break;
	case 0:
		msg.channel.send("<:gx:743242684281389176> "+"This is worse than finding "+peopleArr[Math.floor(Math.random()*peopleArr.length)]+" in a "+placeArr[Math.floor(Math.random()*placeArr.length)]+".")
		break;
		}
	}
	
	
});

// 4. This gets a nightcore song when the user asks for one, using !nightcore*
client.on('message', msg => {
  if (msg.content.startsWith('!nightcore')){
    let q = msg.content;
    //search yt for Nightcore+searchterm
      axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${q}&key=${YOUTUBE_APIKEY}`)
      .then(response => {
    //send output to channel
    let vid = response.data.items[0].id.videoId;
    msg.channel.send(`https://www.youtube.com/watch?v=${vid}`);
      })
    .catch(error => {
      console.log(error);
    })
  }
});

// 5. When AndrewBot is mentioned, return 🤖
client.on('message',msg => {
	if (msg.content.includes('AndrewBot')){
		msg.channel.send(`🤖`)
	}
});

//5.x Rudy functionality
client.on('message',msg => {
	if (msg.content.includes('Rudy')){
		switch (Math.floor(Math.random() * 7)) {
			case 1:
				msg.channel.send("'Those votes were from Mickey Mouse!'")
				break;
			case 2:
				msg.channel.send("'What does opacity mean? It probably means you can see.'",{ files: ["./Pictures/Rudy_2.jpeg"] });
				break;
			case 3:
				msg.channel.send("'ALL THE NETWORKS!!!'",{ files: ["./Pictures/Rudy_all.jpg"] })
				break;
			case 4:
				msg.channel.send("'This is not a fraud case'",{ files: ["./Pictures/Rudy_1.png"] })
				break;
			case 5:
				msg.channel.send("'I know crimes. I can smell them. You don’t have to smell this one. I can prove it to you 18 different ways.'",{ files: ["./Pictures/Rudy_3.png"]} )
				break;
			case 6:
				msg.channel.send("'There is nobody here that engages in fantasies'",{ files: ["./Pictures/Rudy_4.png"]})
				break;
			case 0: 
				msg.channel.send("'Oh Donald, you brute!'",{ files: ["./Pictures/Rudy_curse.jpg"] })
				break;
				}
	}
});

// 6. Playing around with the Bible NPM library. Might do more here but :shrug:
client.on('message',msg => {
	if(msg.content.startsWith('Matthew')) {
		//msg.content = Matthew 4:13 = "quote from Bible"
		bible.get(msg.toString())
		.then(function (res) {
			msg.channel.send(res.text)
		})
	}
	if(msg.content.startsWith('Mark')) {
		bible.get(msg.toString())
		.then(function (res) {
			msg.channel.send(res.text)
		})
	}
	if(msg.content.startsWith('Luke')) {
		bible.get(msg.toString())
		.then(function (res) {
			msg.channel.send(res.text)
		})
	}	
	if(msg.content.startsWith('John')) {
		bible.get(msg.toString())
		.then(function (res) {
			msg.channel.send(res.text)
		})
	}
	
})

// 7. SpaceX integration
client.on('message',msg => {
	if (msg.content.includes('SpaceX-latest')){
			axios.get(`https://api.spacexdata.com/v4/launches/latest`)
			.then(response => {
				msg.channel.send("Launch Name: "+response.data.name)
				msg.channel.send("Local time: "+response.data.date_local)
				let imageArr = []
				for (var i = 0; i<= response.data.links.flickr.original.length; i++) {
					imageArr.push(response.data.links.flickr.original[i])
				}
				msg.channel.send("Images from Launch: ")
				msg.channel.send(imageArr ? imageArr : "Sorry, no images at this time.")
			})
		}

	if (msg.content.includes('SpaceX-upcoming')) {
		axios.get('https://api.spacexdata.com/v4/launches/upcoming')
		.then(response => {
		    let a  = response.data[0].name
        let b = response.data[0].date_local
		msg.channel.send("Next Launch Name: "+a)
		msg.channel.send("Next Launch Date: "+b)
			})
	}
	})