module.exports = 
{
    name: 'help',
    description: "help command",
    execute(message, args)
    {
        var commandlist = ['\n-hihowareyou |',' -sadsong |',' -pinhead |',' -patricklaugh\n','-patricksnore |',' -flagtwirl |',' -hamma |',' -heheboi\n','-bitesthedust |',' -iamsmall |'
        ,' -iamsterile |',' -icanexplain\n','-icantread |',' -leedleleedle |',' -mayitakeyourhatsir |',' -ohmygod\n','-robbery |',' -screamone |',' -screamtwo |',' -warcry\n','-wehave |'
        ,' -whatarethose |',' -whoputyou |',' -win\n','-myeyes','\n','\n','\n','\n','\n','\n','\n','\n'];

        var stringcommand = "";
        for(var i = 0; i < commandlist.length; i++)
        {
            stringcommand += commandlist[i];
        }
        message.channel.send('Current commands are: '+ stringcommand);
    }
}
