module.exports = 
{
    name: 'whatarethose',
    description: "whatarethose command",
    execute(message, args)
    {
        async function play(voiceChannel) 
        {
            var done = false;
            const fs = require('fs');
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play(fs.createReadStream('C:/Users/MightyMango/Desktop/MangoBot/audioclips/mp3clips/whatarethose.MP3'));
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