exports.run = async (client, message, args) => {
    /*
        Everything below this comment block is what will be run when a command is run.

        Ex: If someone runs `!template` it will run this file having it send a message to the channel that the command was run in saying `This is a Template Command`
     */
    message.channel.send("Default Files")
};

/*
    Command Configuration

    THE conf & help ARE REQUIRED FOR ALL COMMANDS
 */
// Sets if a command is enabled, only able to be used in a guild and any aliases for the command
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['default', 'defaultfiles'],
};

// Sets the name, category, description and usage example for a command
exports.help = {
    name: "files",
    category: "Wiki",
    description: "Default Files Wiki",
    usage: "files"
};