
// Run dotenv
require('dotenv').config();
//Run axios?
const axios = require('axios')
const YOUTUBE_APIKEY = process.env.YOUTUBE_APIKEY

//require holy-bible
var bible = require('holy-bible');

const Discord = require('discord.js');
const client = new Discord.Client();

const gexArr = require('./gexArr.js')
const {peopleArr, actionArr, placeArr} = require("./activeArrs.js")

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

//This function handles user's pressing needs to get a Gex quote. 
client.on('message', msg => {
  if (msg.content.includes('gex')) {
    msg.channel.send("<:gx:743242684281389176> "+gexArr[Math.floor(Math.random()*gexArr.length)]);
  }
});


//This is for the new gex quotes
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

client.on('message',msg => {
	if (msg.content.includes('AndrewBot')){
		msg.channel.send(`🤖`)
	}
});


client.on('message',msg => {
	if(msg.content.startsWith('Matthew')) {
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