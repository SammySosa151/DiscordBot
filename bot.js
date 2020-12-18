const Discord = require('discord.js')
const bot = new Discord.Client();

bot.login('NzczMjk4MDA0NTkyNTU4MTAx.X6HL4w.AMU_vvL-ZUiFBnpbp5P0iKNh3HU')

bot.on("ready", bot => {
    console.log('Bot is Online!')
})

//replies

bot.on('message', message => {
    if (message.content.startsWith('ping')) {
        message.reply('Pong!');
    }
    if (message.content.startsWith('pong')) {
        message.reply('ping');
    }
    if (message.content.startsWith("what is my avatar")) {
        message.reply(message.author.avatarURL);
    }
    if (message.content.startsWith('randy is cool')) {
        message.reply('Fuck Off!');
    }
    if (message.content.startsWith('Poggert')) {
        message.reply('Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert Poggert ');
    }
})

 //images

bot.on('message', message => {
    if (message.content.startsWith ('sans')) {
        message.reply({files: ["./images/sans.jpg"]});
    }
    if (message.content.startsWith('json')) {
        message.reply({ files: ["./images/json.png"]});
    }
    if (message.content.startsWith('RANDY!')) {
        message.reply({ files: ["./images/RANDY!.png"] });
    }
    if (message.content.startsWith('RANDY PRIME')) {
        message.reply({ files: ["./images/RANDYPRIME.png"]})
    }
    if (message.content.startsWith('Randy is awesome')) {
        message.reply({ files: ["./images/british.png"]})
    }
    if (message.content.startsWith('jasen')) {
        message.reply({ files: ["./images/jasen.jpg"] })
    }
})
