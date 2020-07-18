var Discord = require('discord.js');

var client = new Discord.Client();

const prefix = '-'

var done = false;

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) 
{
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('The bot is online!');
});

client.on('message', async message => {
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
  //********************************************************************* */
  // pinhead command
  else if (command === 'pinhead' && message.member.voice.channel)
  {
    client.commands.get('pinhead').execute(message,args);
  }
  //********************************************************************* */
  // patricklaugh command
  else if (command === 'patricklaugh' && message.member.voice.channel)
  {
    client.commands.get('patricklaugh').execute(message,args);
  }
  //********************************************************************* */
  // patricksnore command
  else if (command === 'patricksnore' && message.member.voice.channel)
  {
    client.commands.get('patricksnore').execute(message,args);
  }
  //********************************************************************* */
  // if user is not in a voice channel the bot will say message the server saying to enter a voice channel
  else
  {
    message.channel.send('please enter a voice channel');
  }
});

// insert client.login('bot token here');

