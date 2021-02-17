const Discord = require('discord.js')
const config = require('../config.json')
const type = require('../supportx-content/types.json')
const GuildModel = require('../models/Guild.js')

module.exports = async ( user, reaction ) => {

    let channelName;
    let numberUpdated;
    let support;
    let category;

    function createChannel() {
        reaction.message.guild.channels.create(`ticket-${numberUpdated}`, {
            type: 'text',
            topic: 'ticket',
            parent: category,
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: [
                        "SEND_MESSAGES",
                        "VIEW_CHANNEL"
                    ]
                },
                {
                    id: support.id,
                    allow: [
                        "SEND_MESSAGES",
                        "VIEW_CHANNEL"
                    ]
                },
                {
                    id: reaction.message.guild.id,
                    deny: [
                        "SEND_MESSAGES",
                        "VIEW_CHANNEL"
                    ]
                }
            ]
        })
     }

     function deleteChannel() {
         channel.send("Channel will close in 5 seconds...")
         channel.delete(channelName + "closed")
            .catch(console.error);
     }

    // Open a Ticket
    if (reaction.emoji.id === config.settings.emojis.ticket) {
        let message;
        let role;
        let number;
        channelName = "ticket";

        try {
			const req = await GuildModel.findOne({id: reaction.message.guild.id});
			message  = req.ticketMessage;
			category = req.ticketCategory;
			role = req.supportRole;
			number = req.ticketNumber;
        } catch (error) {
            client.logger.error(error.stack)
        }

        if (reaction.message.id === message) {
            let member = reaction.message.guild.members.cache.get(user.id);
            support = reaction.message.guild.roles.cache.get(role)
            numberUpgdated = ++number;
            client.logger.log(`${member} created ticket #${numberUpdated}`)

            createChannel().then((channel) => {
                channel.send('Please specify what you are opening a ticket for (`factionsx`, `skyblockx`, `outpostx`, `obbybreakerx`, `leaderboardsx`, `genbucketsx`, `collectorsx`, `store`, `discord` or `other`).').then((typeQuestion) => {
                    let typeInput = client.awaitReply().then(() => {
                        let input;
                        if (type[typeInput.toLowerCase()] !== undefined) {
                            input = type[typeInput.toProperCase()];
                            channel.send('Please provide a reason for opening a ticket.').then((reasonQuestion) => {
                                let reasonInput = client.awaitReply().then( async () => {
                                    let reason = reasonInput;
                                    channel.send('Thank you for opening a ticket! Someone from out support team will assist you as soon as possible.').then(() => {
                                        typeQuestion.delete();
                                        typeInput.delete();
                                        reasonQuestion.delete();
                                        reasonInput.delete();
                                        channel.setName(input);
                                        channel.setTopic(input);
        
                                        let embed = new Discord.MessageEmbed()
                                        .setAuthor(input + ' (' + numberUpdated + ')' + ' : ' + member.tag)
                                        .setColor(config.embedColor)
                                        .setDescription(reason)
                                        .setTimestamp()
                                        .setFooter('SupportX', client.user.avatarURL());
                                    channel.send(embed)
                                    })
                                }).then(() => {setTimeout(deleteChannel, 5000);})
                            })
                        }
                    }).then(() => {setTimeout(deleteChannel, 5000);})
                })
            })
        }
    }

    // Create a Suggestion
    if (reaction.emoji.id === config.settings.emojis.suggestion) {
        let message;
        let suggestion;
        let role;
        let number;
        channelName = "suggestion";

        try {
			const req = await GuildModel.findOne({id: reaction.message.guild.id});
			message  = req.suggestionMessage;
            suggestion = req.suggestionChannel;
			category = req.suggestionCategory;
			role = req.supportRole;
			number = req.suggestionNumber;
        } catch (error) {
            client.logger.error(error.stack)
        }

        if (reaction.message.id === message) {
            let member = reaction.message.guild.members.cache.get(user.id);
            support = reaction.message.guild.roles.cache.get(role)
            numberUpgdated = ++number;
            client.logger.log(`${member} created suggestion #${numberUpdated}`)

            createChannel().then((channel) => {
                let suggestionChannel = reaction.message.guild.channels.cache.get(suggestion);
                channel.send('Please specify what you are creating a suggestion for (`factionsx`, `skyblockx`, `outpostx`, `obbybreakerx`, `leaderboardsx`, `genbucketsx`, `collectorsx`, `store`, `discord` or `other`).').then((typeQuestion) => {
                    let typeInput = client.awaitReply().then(() => {
                        let input;
                        if (type[typeInput.toLowerCase()] !== undefined) {
                            input = type[typeInput.toProperCase()];
                            channel.send('Please provide a descirption for your suggestion.').then((descriptionQuestion) => {
                                let descriptionInput = client.awaitReply().then( async () => {
                                    let description = descriptionInput;
                                    channel.send(`Thank you for creating a suggestion! Your suggestion can be found in ${suggestionChannel}`).then(() => {
                                        typeQuestion.delete();
                                        typeInput.delete();
                                        descriptionQuestion.delete();
                                        descriptionInput.delete();

                                        setTimeout(deleteChannel, 5000);

                                        let embed = new Discord.MessageEmbed()
                                        .setAuthor(input + ' (' + numberUpdated + ')' + ' : ' + member.tag)
                                        .setColor(config.embedColor)
                                        .setDescription(description)
                                        .setTimestamp()
                                        .setFooter('SupportX', client.user.avatarURL());
                                    suggestionChannel.send(embed)
                                    })
                                }).then(() => {setTimeout(deleteChannel, 5000);})
                            })
                        }
                    }).then(() => {setTimeout(deleteChannel, 5000);})
                })
            })
        }
    }
}