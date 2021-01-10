const Discord = require('discord.js');
const links = require('../../links.json');
const config = require('../../config.json').settings;
exports.run = async (client, message, args) => {
    /*
        Everything below this comment block is what will be run when a command is run.

        Ex: If someone runs `!template` it will run this file having it send a message to the channel that the command was run in saying `This is a Template Command`
     */
    let embed = new Discord.MessageEmbed()
        .setAuthor('ObbyBreakerX' + ' : ' + message.author.tag , message.author.avatarURL())
        .setColor(config.embedColor)
        .setDescription(`[Installation](${links.global.obbybreakerx.installation})\n[Commands](${links.global.obbybreakerx.commands})\n[Permissions](${links.global.obbybreakerx.permissions})\n[Placeholders](${links.global.obbybreakerx.placeholders})\n[Default Files](${links.global.obbybreakerx.files})`)
        .setTimestamp()
        .setFooter('SupportX', client.user.avatarURL());
    message.channel.send(embed);
};

/*
    Command Configuration

    THE conf & help ARE REQUIRED FOR ALL COMMANDS
 */
// Sets if a command is enabled, only able to be used in a guild and any aliases for the command
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['obbybreaker', 'obsidianbreaker'],
};

// Sets the name, category, description and usage example for a command
exports.help = {
    name: "obbybreakerx",
    category: "Plugins",
    description: "ObbyBreakerX Plugin Information",
    usage: "obbybreakerx"
};