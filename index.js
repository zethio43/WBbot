const Discord = require("discord.js");

const TOKEN = "NDEyNDYyNTEyMzExNzYyOTQ0.DWKnMQ.nR57ONUCAcDq20md55xkQDM8Jfc";
const PREFIX = "-";

var fortunes = [
  "Yes",
  "No",
  "Maybe",
  "May not be"
];

var boss = [
  "หอย",
  "ควาย",
  "Fim (หมาแดง)",
  "หมา",
  "แมงมุม",
  "มังกร"
];

var shell = [
  "หอย1 - ",
  "หอย2 - ",
  "หอย3 - ",
  "หอย4 - "
];

var buff = [
  "ควาย1 - ",
  "ควาย2 - ",
  "ควาย3 - ",
  "ควาย4 - "
];

var fim = [
  "Fim1 (หมาแดง) - ",
  "Fim2 (หมาแดง) - ",
  "Fim3 (หมาแดง) - "
];

var dog = [
  "หมา1 - ",
  "หมา2 - ",
  "หมา3 - "
];

var spider = [
  "แมงมุม1 - ",
  "แมงมุม2 - ",
  "แมงมุม3 - "
];

var dragon = [
  "มังกร1 - ",
  "มังกร2 - ",
  "มังกร3 - ",
  "มังกร4 - ",
  "มังกร5 - ",
  "มังกร6 - ",
  "มังกร7 - ",
  "มังกร8 - ",
  "มังกร9 - ",
  "มังกร10 - "
];

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready")
});

bot.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name", "general").sendMessage(member.toString() + "เซิฟเทส" + member.guild.channels.find("name", "general"));
  // member.guild.channels.find("name", "General").sendMessage(member.toString() + " welcome to " + member.guild.channels.find("name", "General"));


});

bot.on("message", function(message) {
  if(message.author.equals(bot.user)) return;

  // if(message.content == "บอส")
  // {
  //   message.channel.sendMessage("หอย 1 -   23.05");
  //   message.channel.sendMessage("หอย 2 -   23.05");
  //   message.channel.sendMessage("หอย 3 -   23.05");
  //   message.channel.sendMessage("หอย 4 -   23.05");
  //
  // }

  if(!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case "ping":
      message.channel.sendMessage("Pong!");
      break;
    case "info":
      message.channel.sendMessage("I'm a bot");
      break;
    case "9ball":
      if(args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)])
      else message.channel.sendMessage("Can't read that");
      break;
    case "บอส":
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true)
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      break;
    case "noticeme":
      message.channel.sendMessage(message.author.toString() + " Test me ");
      break;
    case "หอย1":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          shell[0] = "";
        }
        shell[0] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[0]);
      break;
    case "หอย2":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          shell[1] = "";
        }
        shell[1] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[1]);
      break;
    case "หอย3":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          shell[2] = "";
        }
        shell[2] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[2]);
      break;
    case "หอย4":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          shell[3] = "";
        }
        shell[3] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      break;


    case "ควาย1":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          buff[0] = "";
        }
        buff[0] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[0]);
      break;
    case "ควาย2":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          buff[1] = "";
        }
        buff[1] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[1]);
      break;
    case "ควาย3":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          buff[2] = "";
        }
        buff[2] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[2]);
      break;
    case "ควาย4":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          buff[3] = "";
        }
        buff[3] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[3]);
      break;

    case "fim1":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          fim[0] = "";
        }
        fim[0] += args[i] + " ";
      }
      // m
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);essage.channel.sendMessage(shell[0]);
      break;
    case "fim2":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          fim[1] = "";
        }
        fim[1] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[1]);
      break;
    case "fim3":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          fim[2] = "";
        }
        fim[2] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[2]);
      break;

    case "หมา1":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          dog[0] = "";
        }
        dog[0] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[0]);
      break;
    case "หมา2":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          dog[1] = "";
        }
        dog[1] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[1]);
      break;
    case "หมา3":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          dog[2] = "";
        }
        dog[2] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[2]);
      break;

    case "แมงมุม1":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          spider[0] = "";
        }
        spider[0] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[0]);
      break;
    case "แมงมุม2":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          spider[1] = "";
        }
        spider[1] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[1]);
      break;
    case "แมงมุม3":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          spider[2] = "";
        }
        spider[2] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[2]);
      break;

    case "มังกร1":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          dragon[0] = "";
        }
        dragon[0] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[0]);
      break;
    case "มังกร2":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          dragon[1] = "";
        }
        dragon[1] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[1]);
      break;
    case "มังกร3":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          dragon[2] = "";
        }
        dragon[2] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[2]);
      break;
    case "มังกร4":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          dragon[3] = "";
        }
        dragon[3] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[3]);
      break;
    case "มังกร5":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          dragon[4] = "";
        }
        dragon[4] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[0]);
      break;
    case "มังกร6":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          dragon[5] = "";
        }
        dragon[5] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[1]);
      break;
    case "มังกร7":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          dragon[6] = "";
        }
        dragon[6] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[2]);
      break;
    case "มังกร8":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          dragon[7] = "";
        }
        dragon[7] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[3]);
      break;
    case "มังกร9":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          dragon[8] = "";
        }
        dragon[8] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[2]);
      break;
    case "มังกร10":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          dragon[9] = "";
        }
        dragon[9] += args[i] + " ";
      }
      var embed = new Discord.RichEmbed()
        .addField(boss[0], shell, true)
        .addField(boss[1], buff, true)
        .addField(boss[3], dog, true)
        .addField(boss[4], spider, true)
        .addField(boss[2], fim, true )
        .addField(boss[5], dragon, true)
        .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
      // message.channel.sendMessage(shell[3]);
      break;


    default:
      message.channel.sendMessage("ไม่มีนะ พิมพ์ใหม่");

  }

});

bot.login(TOKEN);
