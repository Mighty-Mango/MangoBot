module.exports = 
{
    name: 'help',
    description: "help command",
    execute(message, args)
    {
        var commandlist = ['\n-hihowareyou |',' -sadsong |',' -pinhead |',' -patricklaugh\n','-patricksnore |',' -flagtwirl |',' -hamma |',' -heheboi\n','-bitesthedust |',' -iamsmall |'
        ,' -iamsterile |',' -icanexplain\n','-icantread |',' -leedleleedle |',' -mayitakeyourhatsir |',' -ohmygod\n','-robbery |',' -screamone |',' -screamtwo |',' -warcry\n','-wehave |'
        ,' -whatarethose |',' -whoputyou |',' -win\n','-myeyes |',' -unacceptable |',' -hagay |','-anotherone\n',' -no |',' -yeahright |',' -youractions |',' -ohokay\n',' -power |',' -leeroy |'
        ,' -getsomehelp |',' -itsonlyagame\n', ' -whyareyourunning |', ' -whyareyougay |', ' -hype ',' -headshot\n',' -whiteclaw |',' -comingthrough |', ' -loser |', ' -awshit\n'
        , ' -monkey |', ' -heknew |',' -letsplaysomedota |',' -cyalaternerds \n',' -steammessage| ',' -knocking| ',' -discordmessage| ', ' -discorddis \n', ' -iphoneringtone| '
        , ' -iphonealarm| ', ' -iphonenot| ', ' -yee| ', ' -pufferfish| ' ];

        var stringcommand = "";
        for(var i = 0; i < commandlist.length; i++)
        {
            stringcommand += commandlist[i];
        }
        message.channel.send('OUTDATED: some commands dont exist anymore. commands are: '+ stringcommand);
        message.channel.send('Other Commands: '+ '-github');
    }
}
