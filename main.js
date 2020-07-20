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
  // mayitakeyourhatsir command
  else if (command === 'mayitakeyourhatsir' && message.member.voice.channel)
  {
    client.commands.get('mayitakeyourhatsir').execute(message,args);
  }
  //********************************************************************* */
  // win command
  else if (command === 'win' && message.member.voice.channel)
  {
    client.commands.get('win').execute(message,args);
  }
  //********************************************************************* */
  // whatarethose command
  else if (command === 'whatarethose' && message.member.voice.channel)
  {
    client.commands.get('whatarethose').execute(message,args);
  }
  //********************************************************************* */
  // whoputyou command
  else if (command === 'whoputyou' && message.member.voice.channel)
  {
    client.commands.get('whoputyou').execute(message,args);
  }
  //********************************************************************* */
  // warcry command
  else if (command === 'warcry' && message.member.voice.channel)
  {
    client.commands.get('warcry').execute(message,args);
  }
  //********************************************************************* */
  // wehave command
  else if (command === 'wehave' && message.member.voice.channel)
  {
    client.commands.get('wehave').execute(message,args);
  }
  //********************************************************************* */
  // screamone command
  else if (command === 'screamone' && message.member.voice.channel)
  {
    client.commands.get('screamone').execute(message,args);
  }
  //********************************************************************* */
  // screamtwo command
  else if (command === 'screamtwo' && message.member.voice.channel)
  {
    client.commands.get('screamtwo').execute(message,args);
  }
  //********************************************************************* */
  // robbery command
  else if (command === 'robbery' && message.member.voice.channel)
  {
    client.commands.get('robbery').execute(message,args);
  }
  //********************************************************************* */
  // ohmygod command
  else if (command === 'ohmygod' && message.member.voice.channel)
  {
    client.commands.get('ohmygod').execute(message,args);
  }
  //********************************************************************* */
  // leedleleedle command
  else if (command === 'leedleleedle' && message.member.voice.channel)
  {
    client.commands.get('leedleleedle').execute(message,args);
  }
  //********************************************************************* */
  // icantread command
  else if (command === 'icantread' && message.member.voice.channel)
  {
    client.commands.get('icantread').execute(message,args);
  }
  //********************************************************************* */
  // icanexplain command
  else if (command === 'icanexplain' && message.member.voice.channel)
  {
    client.commands.get('icanexplain').execute(message,args);
  }
  //********************************************************************* */
  // iamsmall command
  else if (command === 'iamsmall' && message.member.voice.channel)
  {
    client.commands.get('iamsmall').execute(message,args);
  }
  //********************************************************************* */
  // iamsterile command
  else if (command === 'iamsterile' && message.member.voice.channel)
  {
    client.commands.get('iamsterile').execute(message,args);
  }
  //********************************************************************* */
  // heheboi command
  else if (command === 'heheboi' && message.member.voice.channel)
  {
    client.commands.get('heheboi').execute(message,args);
  }
  //********************************************************************* */
  // hamma command
  else if (command === 'hamma' && message.member.voice.channel)
  {
    client.commands.get('hamma').execute(message,args);
  }
  //********************************************************************* */
  // flagtwirl command
  else if (command === 'flagtwirl' && message.member.voice.channel)
  {
    client.commands.get('flagtwirl').execute(message,args);
  }
  //********************************************************************* */
  // debugging command
  else if (command === 'debugging' && message.member.voice.channel)
  {
    client.commands.get('debugging').execute(message,args);
  }
  //********************************************************************* */
  // bitesthedust command
  else if (command === 'bitesthedust' && message.member.voice.channel)
  {
    client.commands.get('bitesthedust').execute(message,args);
  }
  //********************************************************************* */
  // myeyes command
  else if (command === 'myeyes' && message.member.voice.channel)
  {
    client.commands.get('myeyes').execute(message,args);
  }
  //********************************************************************* */
  // if user is not in a voice channel the bot will say message the server saying to enter a voice channel
  else
  {
    message.channel.send('Incorrect command or please join voice channel');
  }
});

// insert client.login('bot token here');

