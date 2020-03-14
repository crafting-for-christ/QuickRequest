const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
const log = require('log-to-file');

function push(mcusername, discordusername, server, requestchannel) {
  // Send the request to the #requests channel.
  let request = new Discord.RichEmbed()
    .setTitle(`Request [${mcusername}]`)
    .setColor('#6666ff')
    .setThumbnail(discordusername.displayAvatarURL)
    .addField('Minecraft Username', `${mcusername}`, true)
    .addField('Requested Server', `${server}`, true)
    .addField('Requesting User', `${discordusername}`, true)
    .addField('Requesting Users ID', `${discordusername.id}`, true)
  requestchannel.send(request).then(async requestembed => {
    await requestembed.react('✅')
    await requestembed.react('❎')
  });

  log(`${mcusername} requested to join ${server}`);
  return console.log(`${mcusername} requested to join ${server}`);
}

module.exports = {
  push
};
