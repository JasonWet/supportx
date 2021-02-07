const Discord = require('discord.js')
const config = require('../config.json')

module.exports = async ( user, reaction ) => {

    // Open a Ticket
    if (reaction.emoji.id === config.settings.emojis.ticket) {
        
    }

    // Create a Suggestion
    if (reaction.emoji.id === config.settings.emojis.suggestion) {

    }
}