exports.run = async (client, message, args) => {
    
    message.channel.send("Ticket Close")
};

/*
    Command Configuration

    THE conf & help ARE REQUIRED FOR ALL COMMANDS
 */
// Sets if a command is enabled, only able to be used in a guild and any aliases for the command
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
};

// Sets the name, category, description and usage example for a command
exports.help = {
    name: "close",
    category: "Tickets",
    description: "Closes Ticket",
    usage: "close"
};