module.exports = 
{
    name: 'help',
    description: "help command",
    execute(message, args)
    {
        message.channel.send('Current commands are: -hihowareyou -sadsong -pinhead -patricklaugh -patricksnore');
    }
}
