const { joinVoiceChannel } = require('@discordjs/voice');
const { AudioPlayerStatus, createAudioPlayer,createAudioResource, AudioResource, StreamType } = require('@discordjs/voice');
const player = createAudioPlayer();
module.exports = 
{
    name: 'sheesh',
    description: "sheesh command",
    execute(message, args)
    {
        async function play(voiceChannel) 
        {
            var done = false;
            const fs = require('fs');
            const channel = message.member.voice.channel;
            const connection = joinVoiceChannel({
                channelId: channel.id,
                guildId: channel.guild.id,
                adapterCreator: channel.guild.voiceAdapterCreator,
                selfDeaf: false,
            });
        
            connection.subscribe(player);
            const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/sheesh.MP3');
            player.play(resource);

            player.on('error',console.error);
        
            player.on('finish', () => {
            done = true;
            if (done)
            {
                done = false;
                setTimeout(function(){
                    connection.disconnect();
                }, 100000)
            }
            });
        }
        play(message);

    }
}