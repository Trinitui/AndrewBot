//jshint esversion: 9
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
const { peopleArr, actionArr, placeArr } = require("./activeArrs.js");
const rudyMessages = [
  "'Those votes were from Mickey Mouse!'",
  "'What does opacity mean? It probably means you can see.'",
  "'ALL THE NETWORKS!!!'",
  "'This is not a fraud case'",
  "'I know crimes. I can smell them. You don’t have to smell this one. I can prove it to you 18 different ways.'",
  "'There is nobody here that engages in fantasies'",
  "'Oh Donald, you brute!'",
];

// Login
client.login(process.env.DISCORD_TOKEN);

// Ready Event
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Message event (Commands)
client.on("message", (msg) => {
  const msgContent = msg.content.toLowerCase();

  //1. This is a basic test of the bot. Users says Ping, bot says Pong.
  if (msgContent === "ping") msg.reply("**pong at AWS**");

  //2. This function handles user's pressing needs to get a Gex quote.
  if (msgContent.includes("gex")) {
    switch (Math.floor(Math.random() * 10)) {
      case 1:
        msg.channel.send(
          "<:gx:743242684281389176> " +
            "Has anyone seen " +
            peopleArr[Math.floor(Math.random() * peopleArr.length)] +
            " in here?"
        );
        break;
      case 2:
        msg.channel.send(
          "<:gx:743242684281389176> " +
            "Note to self: don't go to a party at " +
            peopleArr[Math.floor(Math.random() * peopleArr.length)] +
            "'s " +
            placeArr[Math.floor(Math.random() * placeArr.length)] +
            "."
        );
        break;
      case 3:
        msg.channel.send(
          "<:gx:743242684281389176> " +
            "Reminds me of " +
            actionArr[Math.floor(Math.random() * actionArr.length)] +
            " at " +
            peopleArr[Math.floor(Math.random() * peopleArr.length)] +
            "'s " +
            placeArr[Math.floor(Math.random() * placeArr.length)] +
            "."
        );
        break;
      case 4:
        msg.channel.send(
          "<:gx:743242684281389176> " +
            "Don't take career advice from " +
            peopleArr[Math.floor(Math.random() * peopleArr.length)] +
            "."
        );
        break;
      case 5:
        msg.channel.send(
          "<:gx:743242684281389176> " +
            "Ladies and Gentlemen, I present " +
            peopleArr[Math.floor(Math.random() * peopleArr.length)] +
            "!"
        );
        break;
      case 6:
        msg.channel.send(
          "<:gx:743242684281389176> " +
            "Is it just me or does anyone feel like " +
            peopleArr[Math.floor(Math.random() * peopleArr.length)] +
            " is " +
            actionArr[Math.floor(Math.random() * actionArr.length)] +
            "?"
        );
        break;
      case 7:
        msg.channel.send(
          "<:gx:743242684281389176> " +
            "I feel like " +
            peopleArr[Math.floor(Math.random() * peopleArr.length)] +
            " in a " +
            placeArr[Math.floor(Math.random() * placeArr.length)] +
            "."
        );
        break;
      case 8:
        msg.channel.send(
          "<:gx:743242684281389176> " +
            "This is like " +
            actionArr[Math.floor(Math.random() * actionArr.length)] +
            " at " +
            peopleArr[Math.floor(Math.random() * peopleArr.length)] +
            "'s " +
            placeArr[Math.floor(Math.random() * placeArr.length)] +
            "."
        );
        break;
      case 9:
        msg.channel.send(
          "<:gx:743242684281389176> " +
            "This place is bigger than " +
            peopleArr[Math.floor(Math.random() * peopleArr.length)] +
            "'s " +
            actionArr[Math.floor(Math.random() * actionArr.length)] +
            "."
        );
        break;
      case 0:
        msg.channel.send(
          "<:gx:743242684281389176> " +
            "This is worse than finding " +
            peopleArr[Math.floor(Math.random() * peopleArr.length)] +
            " in a " +
            placeArr[Math.floor(Math.random() * placeArr.length)] +
            "."
        );
        break;
    }
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
  if (msgContent.includes("AndrewBot")) msg.channel.send(`🤖`);

  //5.x Rudy functionality
  if (msgContent.includes("rudy")) {
    let i = Math.floor(Math.random() * rudyMessages.length);
    let f;

    if (i === 0) f = "./Pictures/Rudy_curse.jpg";
    else if (i === 2) f = "./Pictures/Rudy_2.jpeg";
    else if (i === 3) f = "./Pictures/Rudy_all.jpg";
    else if (i === 4) f = "./Pictures/Rudy_1.png";
    else if (i === 5) f = "./Pictures/Rudy_3.png";
    else if (i === 6) f = "./Pictures/Rudy_4.png";

    msg.channel.send(rudyMessages[i], { files: [f] });
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
  if (msgContent.includes("spacex-latest")) {
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
      .then((response) => {
        let imageArr = [];
        for (var i = 0; i <= response.data.links.flickr.original.length; i++) {
          imageArr.push(response.data.links.flickr.original[i]);
        }
        let randy = Math.floor(
          Math.random() * response.data.links.flickr.original.length
        );
        msg.channel.send({
          embed: {
            title: "SpaceX's Upcoming Launch",
            description: response.data.name,
            fields: [
              {
                name: "Date",
                value: `${response.data.date_local}`,
              },
            ],
            image: {
              url: imageArr[randy],
            },
          },
        });
      });
  }

  if (msgContent.includes("spacex-experimental")) {
    axios
      .get(`https://api.spacexdata.com/v4/launches/latest`)
      .then((response) => {
        //msg.channel.send("Launch Name: "+response.data.name)
        //msg.channel.send("Local time: "+response.data.date_local)
        let imageArr = [];
        for (var i = 0; i <= response.data.links.flickr.original.length; i++) {
          imageArr.push(response.data.links.flickr.original[i]);
        }
        msg.channel.send({
          embed: {
            title: "SpaceX's Latest Launch",
            description: response.data.name,
            fields: [
              {
                name: "Date",
                value: `${response.data.date_local}`,
              },
            ],
            image: {
              url: imageArr[0],
            },
          },
        });
      });
  }
});
