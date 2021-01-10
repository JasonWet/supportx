const Discord = require('discord.js');
const links = require('../../links.json');
const config = require('../../config.json').settings;
exports.run = async (client, message, args) => {
    /*
        Everything below this comment block is what will be run when a command is run.

        Ex: If someone runs `!template` it will run this file having it send a message to the channel that the command was run in saying `This is a Template Command`
     */
    let embed = new Discord.MessageEmbed()
        .setAuthor('LeaderboardsX' + ' : ' + message.author.tag , message.author.avatarURL())
        .setColor(config.embedColor)
        .setDescription(`[Installation](${links.global.leaderboardsx.installation})\n[Commands](${links.global.leaderboardsx.commands})\n[Permissions](${links.global.leaderboardsx.permissions})\n[Placeholders](${links.global.leaderboardsx.placeholders})\n[Default Files](${links.global.leaderboardsx.files})`)
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
    aliases: ['leaderboards', 'ftop', 'top', 'lb'],
};

// Sets the name, category, description and usage example for a command
exports.help = {
    name: "leaderboardsx",
    category: "Plugins",
    description: "LeaderboardsX Plugin Information",
    usage: "leaderboardsx"
};