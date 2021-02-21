/*
WAIT! Read these comments before moving on...
The first section below has a lot of variables being initialized to get what the bot needs from different dependencies. 
The Bot is then logged in once everything is declared

After that, There's a section with different Commands. A shortlist of commands is below:
1. Ping-Pong
2. Obtain a Gex Quote from a known array of them
4. Return a Nightcore song when asked
5. Return a robot emoji when AndrewBot is mentioned. This is to quickly check bot status
5.x AndrewBot sends out a crazed response from tragic Trump lawyer Rudy Giuliani
6. Playing around with new NPM Libraries, this time the holy-bible one for some reason.
7. Added SpaceX API integration, now you can type in some commands and get results.

If you want to add something new, submit an issue first. 
*/

// Initialize
require("dotenv").config();
const axios = require("axios");
const YOUTUBE_APIKEY = process.env.YOUTUBE_APIKEY;
const Discord = require("discord.js");
const client = new Discord.Client();
var bible = require("holy-bible");
const gexArr = require("./gexArr.js");
const bubsyArr = require("./bubsyArr")
const { peopleArr, actionArr, placeArr } = require("./activeArrs.js");

// Login
client.login(process.env.DISCORD_TOKEN);

// Ready Event
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


function timeConverter(timestamp){
  var a = new Date(timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

function arraytolist(array) {
	console.log(array)
	var results = ""
	for (var iii = 0; iii<array.length; iii++) {
		results = results + array[iii]+", "
}
	results = results.substring(0, results.length - 2);
  return results
}


// Message event (Commands)
client.on("message", async (msg) => {
  const msgContent = msg.content.toLowerCase();

  //1. This is a basic test of the bot. Users says Ping, bot says Pong.
  if (msgContent === "ping") msg.reply("**pong at AWS**");

  //2. This function handles user's pressing needs to get a Gex quote.
  if (msgContent.includes("gex")) {
    let i = Math.floor(Math.random() * 10);
    let pe = peopleArr[Math.floor(Math.random() * peopleArr.length)];
    let pl = placeArr[Math.floor(Math.random() * placeArr.length)];
    let ac = actionArr[Math.floor(Math.random() * actionArr.length)];
    let gexArray = [
      `Has anyone seen ${pe} in here?`,
      `Note to self: don't go to a party at ${pe}'s ${pl}.`,
      `Reminds me of ${ac} at ${pe}'s ${pl}."`,
      `Don't take career advice from ${pe}.`,
      `Ladies and Gentlemen, I present ${pe}!`,
      `Is it just me or does anyone feel like ${pe} is ${ac}.`,
      `I feel like ${pe} in a ${pl}.`,
      `This is like ${ac} at ${pe}'s ${pl}.`,
      `This place is bigger than ${ac}'s ${pl}.`,
      `This is worse than finding ${pe} in a ${pl}.`,
    ];
    await msg.channel.send(gexArray[i]);
  }

  // 4. This gets a nightcore song when the user asks for one, using !nightcore*
  if (msgContent.startsWith("!nightcore")) {
    let q = msg.content;
    //search yt for Nightcore+searchterm
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${q}&key=${YOUTUBE_APIKEY}`
      )
      .then((response) => {
        //send output to channel
        let vid = response.data.items[0].id.videoId;
        msg.channel.send(`https://www.youtube.com/watch?v=${vid}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // 5. When AndrewBot is mentioned, return 🤖
  if (msgContent.includes("andrewbot")) msg.channel.send(`🤖`);

  //5.x Rudy functionality
  if (msgContent.includes("rudy")) {
	const rudyArr = [
		"'Those votes were from Mickey Mouse!'",
		"'What does opacity mean? It probably means you can see.'",
		"'ALL THE NETWORKS!!!'",
    "'This is not a fraud case'",
		"'I know crimes. I can smell them. You don’t have to smell this one. I can prove it to you 18 different ways.'",
		"'There is nobody here that engages in fantasies'",
		"'Oh Donald, you brute!'",
	  ];
	  
    let i = Math.floor(Math.random() * rudyArr.length);
    let f;

    if (i === 0) f = "AndrewBot/Pictures/Rudy_curse.jpg";
    else if (i === 2) f = "AndrewBot/Pictures/Rudy_2.jpeg";
    else if (i === 3) f = "AndrewBot/Pictures/Rudy_all.jpg";
    else if (i === 4) f = "AndrewBot/Pictures/Rudy_1.png";
    else if (i === 5) f = "AndrewBot/Pictures/Rudy_3.png";
    else if (i === 6) f = "AndrewBot/Pictures/Rudy_4.png";

    await msg.channel.send(rudyArr[i], { files: [f] });
  }

  // 6. Playing around with the Bible NPM library. Might do more here but :shrug:
  if (msgContent.startsWith("matthew")) {
    //msg.content = Matthew 4:13 = "quote from Bible"
    bible.get(msg.toString()).then(function (res) {
      msg.channel.send(res.text);
    });
  }
  if (msgContent.startsWith("mark")) {
    bible.get(msg.toString()).then(function (res) {
      msg.channel.send(res.text);
    });
  }
  if (msgContent.startsWith("luke")) {
    bible.get(msg.toString()).then(function (res) {
      msg.channel.send(res.text);
    });
  }
  if (msgContent.startsWith("john")) {
    bible.get(msg.toString()).then(function (res) {
      msg.channel.send(res.text);
    });
  }

  // 7. SpaceX integration
  if (msgContent.includes("spacex-notused")) {
    axios
      .get(`https://api.spacexdata.com/v4/launches/latest`)
      .then((response) => {
        msg.channel.send("Launch Name: " + response.data.name);
        msg.channel.send("Local time: " + response.data.date_local);
        let imageArr = [];
        for (var i = 0; i <= response.data.links.flickr.original.length; i++) {
          imageArr.push(response.data.links.flickr.original[i]);
        }
        msg.channel.send("Images from Launch: ");
        msg.channel.send(
          imageArr ? imageArr : "Sorry, no images at this time."
        );
      });
  }

  if (msgContent.includes("spacex-upcoming")) {
    axios
      .get("https://api.spacexdata.com/v4/launches/upcoming")
      .then( (response) => {
        let unx = response.data.date_unix
        let upcomingname = response.data[0].name
        let upcomingdate = response.data[0].date_local
        console.log(upcomingname, upcomingdate)
        msg.channel.send({
          embed: {
            title: "SpaceX's Upcoming Launch",
            description: upcomingname,
            fields: [
              {
                name: "Date",
                value: timeConverter(unx),
              },
              {
                name: "Manned?",
                value: response.data.crew.length > 0 ? '✅' : '❌',
              }
            ],
            image: {
              url: response.data[0].links.patch.large,
            },
		  },
		  
        });
      });
  }

  if (msgContent.includes("spacex-latest")) {
    axios
      .get(`https://api.spacexdata.com/v4/launches/latest`)
      .then((response) => {
        //msg.channel.send("Launch Name: "+response.data.name)
        //msg.channel.send("Local time: "+response.data.date_local)
        let imageArr = [];
        for (var i = 0; i <= response.data.links.flickr.original.length; i++) {
          imageArr.push(response.data.links.flickr.original[i]);
        }
        let n = imageArr[Math.floor(Math.random() * response.data.links.flickr.original.length)]
        let m = ""
        let unx = response.data.date_unix
        let corewant = response.data.cores[0].core
        axios.get("https://api.spacexdata.com/v4/rockets").then(resp => {
          for (i = 0; i < resp.data.length; i++) {
          resp.data[i].id === response.data.rocket ? m = resp.data[i].name : ""
          }
        
          axios.get("https://api.spacexdata.com/v4/launches").then(respo => {
            let len = respo.data.length
            let corewantarray = []
            for (i=0;i<len;i++) {
              respo.data[i].cores[0].core === corewant ? corewantarray.push(respo.data[i].name) :"";
         }
            //console.log(corewantarray)
        
        
        
        msg.channel.send({
          embed: {
            title: response.data.name,
            description: m,
            fields: [
              {
                name: "Date",
                value: timeConverter(unx),
              },
              {
                name: "Successful Landing?",
                value: response.data.cores[0].landing_success ? '✅' : '❌'
              },
              {
                name: "Previous Flights: "+response.data.cores[0].flight,
                value: arraytolist(corewantarray)
              },
              {
                name: "Manned?",
                value: response.data.crew.length > 0 ? '✅' : '❌',
              },
            ],
            // Now I am selecting a random image from the aray above.
            image: {
              url: n,
            },
            // This is not used as discord only allows one image embed.
            image: {
              url: imageArr[1],
            },
          },
        });
      });
      });
      });
  }

  //8. Tim and Eric B$M memes
  if (msgContent.includes("bonjour")) {
    let a = [
      "Bonjour",
      "Oui, oui.",
      "Magnifique",
      "What do I have to do to get you to finally go out with me?"
    ]
    msg.channel.send(a[Math.floor(Math.random() * a.length)])

  }

  //Bubsy memes
  if (msgContent.includes("bubsy")) {
    let re = Math.floor(Math.random() * bubsyArr.length);
    let le = bubsyArr.length
    //msg.channel.send(`There are ${le} quotes currently tracked.`)
    msg.channel.send(bubsyArr[re]);
  }


});
