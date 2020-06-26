const Discord = require('discord.js');

const client = new Discord.Client();

client.on("ready", () => {

   client.user.setActivity(`serving ${client.guilds.cache.size} servers!`,{

   status: "online",

   type: "WATCHING"

});

})

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', (message) => {

  if (!message.guild) return;

if (message.content.startsWith('-kick')) {

  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("you can't use that!");

    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member

          .kick()

          .then(() => {

            const kick = new Discord.MessageEmbed()

           .setDescription(`${user.tag} has been kicked.`)

            message.channel.send(kick);

          })

          .catch(err => {

            

            const kick_err_1 = new Discord.MessageEmbed()

           .setColor('#ff0000')

          .setDescription("I can't kick that user!")

            message.channel.send(kick_err_1);

            console.error(err);

          });

      } else {

        

        const kick_err_2 = new Discord.MessageEmbed()

       .setColor('#ff0000')

      .setDescription("That user is not on this server!")

        message.channel.send(kick_err_2);

      }

    } else {

      message.reply("you didn't mention anyone!");

    }

  }

});

client.on('message', (message) => {

  if (!message.guild) return;

if (message.content.startsWith('-ban')) {

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("you can't use that!");

    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member

          .ban()

          .then(() => {

            

            const ban = new Discord.MessageEmbed()

           .setDescription(`${user.tag} has been banned.`)

            message.channel.send(ban);

          })

          .catch(err => {

            

            const ban_err_1 = new Discord.MessageEmbed()

           .setColor('#ff0000')

          .setDescription("I can't ban that user!")

            message.channel.send(ban_err_1);

            console.error(err);

          });

      } else {

        

        const ban_err_2 = new Discord.MessageEmbed()

       .setColor('#ff0000')

      .setDescription("That user is not on this server!")

        message.channel.send(ban_err_2);

      }

    } else {

      message.reply("you didn't mention anyone!");
    }

  }

});



client.login('token');









