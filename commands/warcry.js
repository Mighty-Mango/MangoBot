module.exports = 
{
    name: 'warcry',
    description: "warcry command",
    execute(message, args)
    {
        async function play(voiceChannel) 
        {
            var done = false;
            const fs = require('fs');
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play(fs.createReadStream('C:/Users/MightyMango/Desktop/MangoBot/audioclips/mp3clips/warcry.MP3'));
            dispatcher.on('error',console.error);
        
            dispatcher.on('finish', () => {
            done = true;
            if (done)
            {
                done = false;
                connection.disconnect();
            }
            });
        }
        play(message);

    }
}