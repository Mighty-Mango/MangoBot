var Discord = require('discord.js');

var client = new Discord.Client();

const prefix = '-'

var done = false;

const fs = require('fs');

client.once('ready', () => {
    console.log('The bot is online!');
});

client.on('message', async message => {
  // Join the same voice channel of the author of the message
  
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

	if (command === 'hihowareyou' && message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();
    
    const dispatcher = connection.play(fs.createReadStream('hihowareyou.MP3'));
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
  else 
  {
    console.log("join the voice channel");
  }
  if (command === 'sadsong') {
    const connection = await message.member.voice.channel.join();
    
    const dispatcher = connection.play(fs.createReadStream('sadsong.MP3'));
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
  if (command === 'pinhead') {
    const connection = await message.member.voice.channel.join();
    
    const dispatcher = connection.play(fs.createReadStream('pinhead.MP3'));
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
  if (command === 'patricklaugh') {
    const connection = await message.member.voice.channel.join();
    
    const dispatcher = connection.play(fs.createReadStream('patricklaugh.MP3'));
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
  if (command === 'patricksnore') {
    const connection = await message.member.voice.channel.join();
    
    const dispatcher = connection.play(fs.createReadStream('patricksnore.MP3'));
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
});

// client.on('message', message => {
//     if(!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();

//     if (command === 'go')
//     {
//         var voiceChannel = message.member.voiceChannel;
//         await voiceChannel.join().then(connection =>
//     {
//           const dispatcher = connection.playFile('C:\Users\MightyMango\Desktop\MangoBot\HiHowareyou.MP3');
//           dispatcher.on("end", end => {
//           voiceChannel.leave();
//          });
//      }).catch(err => console.log(err));
     
//     }
//   });


// insert client.login('bot token here');
