const { Client, Intents } = require("discord.js");
const { addSpeechEvent } = require("discord-speech-recognition");
const { token } = require('./config.json');
const { joinVoiceChannel } = require('@discordjs/voice');
const { AudioPlayer,AudioPlayerStatus, createAudioPlayer,createAudioResource, AudioResource, StreamType } = require('@discordjs/voice');
const player = createAudioPlayer();
const discordTTS = require('discord-tts');
const Discord = require('discord.js');
var audioPlayer = new AudioPlayer();
const fs = require('fs');

const prefix = '-';

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
});

client.commands = new Discord.Collection();

client.once('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);

});

  
// const intents = new Discord.intents(32767);

// const client = new Discord.Client({ intents });

var done = false;

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) 
{
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.on('messageCreate', async (message) => {
    // Join the same voice channel of the author of the message
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //********************************************************************* */
    // help command here
    if (command === 'help')
    {
      client.commands.get('help').execute(message,args);
    }
    //********************************************************************* */
    // github command
    else if (command === 'github')
    {
      client.commands.get('github').execute(message,args);
    }
    // else if (command === 'disconnect')
    // {
    //   connection.disconnect();
    // }
    else if (command === 'voice')
    {
      addSpeechEvent(client);
      const voiceChannel = message.member.voice.channel;
      
      const connection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        selfDeaf: false,
      });
      
      client.on("speech", (msg) => {
        //prefix = "onii-chan";
        console.log(msg.content);
        if (msg.content && msg.content.toLowerCase().split(" ").join("").includes("oniichan") || msg.content && msg.content.toLowerCase() === "onii-chan")
        {
          
          connection.subscribe(player)
          const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/onii chan.MP3');
          player.play(resource);
        }
        if (msg.content && msg.content.toLowerCase().split(" ").join("").includes("killmyself"))
        {
          
          connection.subscribe(player)
          const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/killmyself.MP3');
          player.play(resource);
        }
        if (msg.content && msg.content.toLowerCase().split(" ").join("").includes("hello"))
        {
          
          connection.subscribe(player)
          const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/hello.MP3');
          player.play(resource);
        }
        if (msg.content && msg.content.toLowerCase().split(" ").join("").includes("run"))
        {
          
          connection.subscribe(player)
          const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/runrun.MP3');
          player.play(resource);
        }
        if (msg.content && msg.content.toLowerCase().split(" ").join("").includes("nani") || msg.content && msg.content.toLowerCase().split(" ").join("").includes("what"))
        {
          
          connection.subscribe(player)
          const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/nani.MP3');
          player.play(resource);
        }
        if (msg.content && msg.content.toLowerCase().split(" ").join("").includes("dead"))
        {
          
          connection.subscribe(player)
          const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/omaiwamoshinderu.MP3');
          player.play(resource);
        }
        if (msg.content && msg.content.toLowerCase().split(" ").join("").includes("fast"))
        {
          
          connection.subscribe(player)
          const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/fast.MP3');
          player.play(resource);
        }
        if (msg.content && msg.content.toLowerCase().split(" ").join("").includes("ohyeah"))
        {
          connection.subscribe(player)
          const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/ayaya.MP3');
          player.play(resource);
        }
        if (msg.content && msg.content.toLowerCase().split(" ").join("").includes("impossible"))
        {
          
          connection.subscribe(player)
          const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/impossible.MP3');
          player.play(resource);
        }
        if (msg.content && msg.content.toLowerCase().split(" ").join("").includes("triangle"))
        {
          
          connection.subscribe(player)
          const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/triangle.MP3');
          player.play(resource);
        }
        if (msg.content && msg.content.toLowerCase().split(" ").join("").includes("wow"))
        {
          
          connection.subscribe(player)
          const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/wow.MP3');
          player.play(resource);
        }
        if (msg.content && msg.content.toLowerCase().split(" ").join("").includes("slap"))
        {
          
          connection.subscribe(player)
          const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/slap.MP3');
          player.play(resource);
        }
        if (msg.content && msg.content.toLowerCase().split(" ").join("").includes("shame"))
        {
          
          connection.subscribe(player)
          const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/shame.MP3');
          player.play(resource);
        }
        if (msg.content && msg.content.toLowerCase().split(" ").join("").includes("ratata"))
        {
          
          connection.subscribe(player)
          const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/tyler1.MP3');
          player.play(resource);
        }
        if (msg.content && msg.content.toLowerCase().split(" ").join("").includes("happy"))
        {
          
          connection.subscribe(player)
          const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/happy.MP3');
          player.play(resource);
        }
        if (msg.content && msg.content.toLowerCase().split(" ").join("").includes("sad"))
        {
          
          connection.subscribe(player)
          const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/sadsong.MP3');
          player.play(resource);
        }
        // if (msg.content && msg.content.toLowerCase().split(" ").join("").includes("i'm") || msg.content && msg.content.toLowerCase().split(" ").join("").includes("iam"))
        // {
        //   var word = msg.content.toLowerCase().split().join().slice(msg.content.indexOf("i'm") + 5);
        //   var word2 = msg.content.toLowerCase().split().join().slice(msg.content.indexOf("iam") + 5);

        //   var stream1 = discordTTS.getVoiceStream("Hi " + word);
        //   var stream2 = discordTTS.getVoiceStream("Hi " + word2);
        //   var audioResource1 =createAudioResource(stream1, {inputType: StreamType.Arbitrary, inlineVolume:true});
        //   var audioResource2 =createAudioResource(stream2, {inputType: StreamType.Arbitrary, inlineVolume:true});

        //   if (msg.content.toLowerCase().split(" ").join("").includes("i'm"))
        //   {
        //     connection.subscribe(audioPlayer);
        //     audioPlayer.play(audioResource1);
        //     connection.subscribe(player);
        //     const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/iamdad.MP3');
        //     player.play(resource);
        //   }
        //   else if (msg.content.toLowerCase().split(" ").join("").includes("iam"))
        //   {
        //     connection.subscribe(audioPlayer);
        //     audioPlayer.play(audioResource2);
        //     connection.subscribe(player)
        //     const resource = createAudioResource('C:/Users/Daniel Park/Desktop/MangoBot/audioclips/mp3clips/iamdad.MP3');
        //     player.play(resource);
        //   }
        // }
      });
    }
    else if (command === 'sheesh')
    {
        client.commands.get('sheesh').execute(message,args);
    }
    else if (command === 'ohno')
    {
        client.commands.get('ohno').execute(message,args);
    }
    //********************************************************************* */
    // hi how are you command here
    else if (command === 'hihowareyou' && message.member.voice.channel)
    {
      client.commands.get('hihowareyou').execute(message,args);
    }
    //********************************************************************* */
    // sad song command
    else if (command === 'sadsong' && message.member.voice.channel)
    {
      client.commands.get('sadsong').execute(message,args);
    }
    else if (command === 'patricklaugh' && message.member.voice.channel)
    {
      client.commands.get('patricklaugh').execute(message,args);
    }
    else if (command === 'mayitakeyourhatsir' && message.member.voice.channel)
    {
      client.commands.get('mayitakeyourhatsir').execute(message,args);
    }
    else if (command === 'heheboi' && message.member.voice.channel)
    {
      client.commands.get('heheboi').execute(message,args);
    }
    else if (command === 'debugging' && message.member.voice.channel)
    {
      client.commands.get('debugging').execute(message,args);
    }
    else if (command === 'myeyes' && message.member.voice.channel)
    {
      client.commands.get('myeyes').execute(message,args);
    }
    //********************************************************************* */
    // unacceptable command
    else if (command === 'unacceptable' && message.member.voice.channel)
    {
      client.commands.get('unacceptable').execute(message,args);
    }
    //********************************************************************* */
    // youractions command
    else if (command === 'youractions' && message.member.voice.channel)
    {
      client.commands.get('youractions').execute(message,args);
    }
    //********************************************************************* */
    // itsonlyagame command
    else if (command === 'itsonlyagame' && message.member.voice.channel)
    {
      client.commands.get('itsonlyagame').execute(message,args);
    }
    else if (command === 'getsomehelp' && message.member.voice.channel)
    {
      client.commands.get('getsomehelp').execute(message,args);
    }
    else if (command === 'loser' && message.member.voice.channel)
    {
      client.commands.get('loser').execute(message,args);
    }
    else if (command === 'heknew' && message.member.voice.channel)
    {
      client.commands.get('heknew').execute(message,args);
    }
    else if (command === 'yeee' && message.member.voice.channel)
    {
      client.commands.get('yeee').execute(message,args);
    }
    //********************************************************************* */
    // letsplaysomedota command
    else if (command === 'cyalaternerds' && message.member.voice.channel)
    {
      client.commands.get('cyalaternerds').execute(message,args);
    }
    else if (command === 'youstink' && message.member.voice.channel)
    {
      client.commands.get('youstink').execute(message,args);
    }
    
    
    //********************************************************************* */
    // if user is not in a voice channel the bot will say message the server saying to enter a voice channel
    else
    {
      message.channel.send('Incorrect command or please join voice channel');
    }
    
  });

// insert client.login('bot token here');
client.login(token);
