const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('message', message => {
    if (message.content == "^fast") {
        var x = ["DreamKing",
"DeathGames",
"Ø²ÙŠØ±Ùˆ ÙƒÙ†Ø¬",
"Ø£Ø±Ø¶ Ø§Ù„Ø£Ø­Ù„Ø§Ù…",
"Ø£Ù„Ø¨Ø±Ø§Ø²ÙŠÙ„",
"Ø§Ù„Ø¹Ø±Ø§Ù‚",
"Ø£Ù„Ù…Ù…Ù„ÙƒØ© Ø£Ù„Ø¹Ø±Ø¨ÙŠØ© Ø£Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©",
"Ø§Ù„Ù‚Ø³Ø·Ù†Ø·ÙŠÙ†ÙŠØ©",
"Ø§Ù„Ù†Ù‡Ø§ÙŠØ©",
"Ø§Ù…Ø§Ø²ÙˆÙ†",
"Ø¬Ø§ÙØ§Ø³ÙƒØ±Ø¨Øª",
"Ø³Ù‡Ù„Ù‡ Ù…Ùˆ ØµØ¹Ø¨Ù‡",
"Ø·Ø¨Ù‚ Ø±Ø·Ø¨ Ù…Ø±Ù‚ Ø¨Ù‚Ø±",
"Ù…ØªØ¬Ø±",
"Ø´Ø¬Ø±Ø© Ø§Ù„Ø£ÙˆØºÙŠØ±ÙŠ",
"Ø¹Ø´ Ø§Ù„Ø¹ØµÙÙˆØ±",
"Ù‡Ù„Ø§ Ø¨Ù„Ø®Ù…ÙŠØ³",
"Ø§Ù„Ø­ÙˆØª Ø§Ù„Ø£Ø²Ø±Ù‚",
];
        var x2 = ['DreamKing',
        "DeathGames",
        "Ø²ÙŠØ±Ùˆ ÙƒÙ†Ø¬",
        "Ø£Ø±Ø¶ Ø§Ù„Ø£Ø­Ù„Ø§Ù…",
		"Ø£Ù„Ø¨Ø±Ø§Ø²ÙŠÙ„",
		"Ø§Ù„Ø¹Ø±Ø§Ù‚",
		"Ø£Ù„Ù…Ù…Ù„ÙƒØ© Ø£Ù„Ø¹Ø±Ø¨ÙŠØ© Ø£Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©",
		"Ø§Ù„Ù‚Ø³Ø·Ù†Ø·ÙŠÙ†ÙŠØ©",
		"Ø§Ù„Ù†Ù‡Ø§ÙŠØ©",
		"Ø§Ù…Ø§Ø²ÙˆÙ†",
		"Ø¬Ø§ÙØ§Ø³ÙƒØ±Ø¨Øª",
		"Ø³Ù‡Ù„Ù‡ Ù…Ùˆ ØµØ¹Ø¨Ù‡",
		"Ø·Ø¨Ù‚ Ø±Ø·Ø¨ Ù…Ø±Ù‚ Ø¨Ù‚Ø±",
		"Ù…ØªØ¬Ø±",
		"Ø´Ø¬Ø±Ø© Ø§Ù„Ø£ÙˆØºÙŠØ±ÙŠ",
		"Ø¹Ø´ Ø§Ù„Ø¹ØµÙÙˆØ±",
		"Ù‡Ù„Ø§ Ø¨Ù„Ø®Ù…ÙŠØ³",
		"Ø§Ù„Ø­ÙˆØª Ø§Ù„Ø£Ø²Ø±Ù‚",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` Ø§ÙˆÙ„ Ø´Ø®Øµ ÙŠÙƒØªØ¨ :  __**${x[x3]}**__
Ù„Ø¯ÙŠÙƒ 15 Ø«Ø§Ù†ÙŠØ© Ù„Ù„Ø§Ø¬Ø§Ø¨Ø©`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: Ù„Ù‚Ø¯ Ø§Ù†ØªÙ‡Ù‰ Ø§Ù„ÙˆÙ‚Øª ÙˆÙ„Ù… ÙŠÙ‚Ù… Ø£Ø­Ø¯ Ø¨Ø§Ù„Ø£Ø¬Ø§Ø¨Ø© Ø¨Ø´ÙƒÙ„ ØµØ­ÙŠØ­ 
            Ø§Ù„Ø¥Ø¬Ø¢Ø¨Ø© Ø§Ù„ØµØ­ÙŠØ­Ø©Ø© Ù‡ÙŠ __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} Ù„Ù‚Ø¯ Ù‚Ù…Øª Ø¨ÙƒØªØ§Ø¨Ø© Ø§Ù„ÙƒÙ„Ù…Ø© ÙÙŠ Ø§Ù„ÙˆÙ‚Øª Ø§Ù„Ù…Ù†Ø§Ø³Ø¨  `);
        })
        })
    }
})





client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Dream | ${client.guilds.size} ${client.users.size} servers/user`,"http://twitch.tv/YouTube")
client.user.setStatus("dnd")
});



client.login(process.env.BOT_TOKEN);// Ù„Ø§ ØªØºÙŠØ± ÙÙŠÙ‡Ø§ Ø´ÙŠØ¡
