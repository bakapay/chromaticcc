const ms = require("ms");
const Discord = require('discord.js');
exports.run = (client, message, args) => {
	
let r = args.slice(1).join(' ');
let reason = "reason"
if (!r) {
  reason = "No reason provided."
} else {
  reason = r
}

if(!message.guild.roles.find("name", "AFK")){
guild.createRole({
  name: "AFK",
  color: "070707",
  })};
  
 let afkrole = message.guild.roles.find("name", "AFK")
 let authorr = message.guild.members.get(message.author.id)
 if(!authorr.roles.has(afkrole.id)){
authorr.addRole(afkrole.id)
 message.channel.send("**" + message.author.username + " is AFK.**")
 authorr.setNickname("[AFK] " + message.author.username)};


if(authorr.roles.has(afkrole.id)){
authorr.removeRole(afkrole.id)
 message.channel.send("**" + message.author.username + " is no longer AFK.**")
 authorr.setNickname(message.author.username)};
 
};

	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'COX.',
  usage: 'search <words>'
};
 
 
 