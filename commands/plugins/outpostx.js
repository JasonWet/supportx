const Discord = require('discord.js');
const links = require('../../links.json');
const config = require('../../config.json').settings;
exports.run = async (client, message, args) => {
    /*
        Everything below this comment block is what will be run when a command is run.

        Ex: If someone runs `!template` it will run this file having it send a message to the channel that the command was run in saying `This is a Template Command`
     */
    let embed = new Discord.MessageEmbed()
        .setAuthor('OutpostX' + ' : ' + message.author.tag , message.author.avatarURL())
        .setColor(config.embedColor)
        .setDescription(`[Installation](${links.global.outpostx.installation})\n[Commands](${links.global.outpostx.commands})\n[Permissions](${links.global.outpostx.permissions})\n[Placeholders](${links.global.outpostx.placeholders})\n[Default Files](${links.global.outpostx.files})`)
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
    aliases: ['outpost'],
};

// Sets the name, category, description and usage example for a command
exports.help = {
    name: "outpostx",
    category: "Plugins",
    description: "OutpostX Plugin Information",
    usage: "outpostx"
};