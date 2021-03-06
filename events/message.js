const prefix = require('../config.json').prefix
const config = require('../config.json')
module.exports = async (client, message) => {
    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if (message.author.bot) return;
    if (config.debug === true) {
        client.logger.debug('PREFIX')
        console.info(prefix)
    }
    // Checks if the bot was mentioned, with no message after it, returns the prefix.
    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
        return message.reply(`My prefix is \`${prefix}\``);
    }

    // Also good practice to ignore any message that does not start with our prefix,
    // which is set in the configuration file.
    if (message.content.indexOf(prefix) !== 0) return;


    // Here we separate our "command" name, and our "arguments" for the command.
    // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
    // command = say
    // args = ["Is", "this", "the", "real", "life?"]
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (config.debug === true) {
        client.logger.debug('COMMAND')
        console.info(command)
    }

    // Check whether the command, or alias, exist in the collections defined
        const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));

        if (!message.guild && cmd.conf.guildOnly === true) return message.channel.send("This command can only be run in a guild.");

        try {
            client.logger.cmd(`${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`);
            if (config.debug === true) {
                client.logger.debug('CMD')
                console.info(cmd)
            }
            cmd.run(client, message, args)
        } catch(err) {
            if (command === undefined) {
                message.delete().catch()
                message.channel.send('That is not a command').then(message => message.delete({timeout: 5000}), msg => msg.delete({timeout: 5000}))
            } else
                client.logger.error(err, "error")
        }
};