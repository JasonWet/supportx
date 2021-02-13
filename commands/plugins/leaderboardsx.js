const Discord = require('discord.js');
const links = require('../../supportx-content/links.json').resources.leaderboardsx;
const support = require('../../supportx-content/support.json').leaderboardsx;
const config = require('../../config.json').settings;
exports.run = async (client, message, args) => {
    /*
        Everything below this comment block is what will be run when a command is run.

        Ex: If someone runs `!template` it will run this file having it send a message to the channel that the command was run in saying `This is a Template Command`
     */
    let embed = new Discord.MessageEmbed()
        .setAuthor('LeaderboardsX' + ' : ' + message.author.tag , message.author.avatarURL())
        .setColor(config.embedColor)
        .setDescription(`[Spigot](${links.spigot})\n[Store](${links.store})\n[Marketplace](${links.marketplace})\n[Installation](${links.installation})\n[Commands](${links.commands})\n[Permissions](${links.permissions})\n[Placeholders](${links.placeholders})\n[Default Files](${links.files})`)
        .setTimestamp()
        .setFooter('SupportX', client.user.avatarURL());

        if (!args[0]) return message.channel.send(embed)

        let input;
        if (links[args[0].toLowerCase()] !== undefined) {
            input = links[args[0].toLowerCase()]
            let embed = new Discord.MessageEmbed()
                .setAuthor('LeaderboardsX' + ' : ' + message.author.tag , message.author.avatarURL())
                .setDescription(`[${args[0].toProperCase()}](${input})`)
                .setTimestamp()
                .setFooter('SupportX', client.user.avatarURL());
            message.channel.send(embed)
        } else if (support[args[0].toLowerCase()] !== undefined) {
            input = support[args[0].toLowerCase()]
            let embed = new Discord.MessageEmbed()
                .setAuthor('LeaderboardsX' + ' : ' + message.author.tag , message.author.avatarURL())
                .setTitle(args[0].toProperCase())
                .setColor(config.embedColor)
                .setDescription(input)
                .setTimestamp()
                .setFooter('SupportX', client.user.avatarURL());
            message.channel.send(embed)
        } else {
            message.channel.send(embed)
        }
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