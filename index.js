const Discord = require("discord.js");

const TOKEN = "NDEzMzk2ODM1Mjc3OTk2MDQy.DWYQvg.gq08DEJ0eUntTrpyUvCPOYHpOAU";
const PREFIX = "-";

var fortunes = [
  "แตก",
  "แหก",
  "ไม่ติด",
  "อาจจะติด",
  "ติดมั้ง",
  "ติดดิวะ"
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
  "ฟิม1 - ",
  "ฟิม2 - ",
  "ฟิม3 - "
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

// bot.on("guildMemberAdd", function(member) {
//   member.guild.channels.find("name", "general").sendMessage(member.toString() + "เซิฟเทส" + member.guild.channels.find("name", "general"));
  // member.guild.channels.find("name", "General").sendMessage(member.toString() + " welcome to " + member.guild.channels.find("name", "General"));


// });

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
    case "+8":
      message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
      break;
    case "+9":
      message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
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
    case "ขาว":
      message.channel.sendMessage("กาก");
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

    case "ฟิม1":
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
      message.channel.sendEmbed(embed);
      break;
    case "ฟิม2":
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
    case "ฟิม3":
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
    case "reset":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          shell[0] = "";
          shell[1] = "";
          shell[2] = "";
          shell[3] = "";
          buff[0] = "";
          buff[1] = "";
          buff[2] = "";
          buff[3] = "";
          fim[0] = "";
          fim[1] = "";
          fim[2] = "";
          dog[0] = "";
          dog[1] = "";
          dog[2] = "";
          spider[0] = "";
          spider[1] = "";
          spider[2] = "";
          dragon[0] = "";
          dragon[1] = "";
          dragon[2] = "";
          dragon[3] = "";
          dragon[4] = "";
          dragon[5] = "";
          dragon[6] = "";
          dragon[7] = "";
          dragon[8] = "";
          dragon[9] = "";
        }
        shell[0] += "หอย1 - " + " ";
        shell[1] += "หอย2 - " + " ";
        shell[2] += "หอย3 - " + " ";
        shell[3] += "หอย4 - " + " ";
        buff[0] += "ควาย1 - " + " ";
        buff[1] += "ควาย2 - " + " ";
        buff[2] += "ควาย3 - " + " ";
        buff[3] += "ควาย4 - " + " ";
        fim[0] += "ฟิม1 - " + " ";
        fim[1] += "ฟิม2 - " + " ";
        fim[2] += "ฟิม3 - " + " ";
        dog[0] += "หมา1 - " + " ";
        dog[1] += "หมา2 - " + " ";
        dog[2] += "หมา3 - " + " ";
        spider[0] += "แมงมุม1 - " + " ";
        spider[1] += "แมงมุม2 - " + " ";
        spider[2] += "แมงมุม3 - " + " ";
        dragon[0] += "มังกร1 - " + " ";
        dragon[1] += "มังกร2 - " + " ";
        dragon[2] += "มังกร3 - " + " ";
        dragon[3] += "มังกร4 - " + " ";
        dragon[4] += "มังกร5 - " + " ";
        dragon[5] += "มังกร6 - " + " ";
        dragon[6] += "มังกร7 - " + " ";
        dragon[7] += "มังกร8 - " + " ";
        dragon[8] += "มังกร9 - " + " ";
        dragon[9] += "มังกร10 - " + " ";
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
    case "all":
      // shell[0] = args[0];
      for (i = 0; i < args.length; i++)
      {
        if(i == 0)
        {
          shell[0] = "";
          shell[1] = "";
          shell[2] = "";
          shell[3] = "";
          buff[0] = "";
          buff[1] = "";
          buff[2] = "";
          buff[3] = "";
          fim[0] = "";
          fim[1] = "";
          fim[2] = "";
          dog[0] = "";
          dog[1] = "";
          dog[2] = "";
          spider[0] = "";
          spider[1] = "";
          spider[2] = "";
          dragon[0] = "";
          dragon[1] = "";
          dragon[2] = "";
          dragon[3] = "";
          dragon[4] = "";
          dragon[5] = "";
          dragon[6] = "";
          dragon[7] = "";
          dragon[8] = "";
          dragon[9] = "";
        }
        shell[0] += "หอย1 - " + " ";
        shell[1] += "หอย2 - " + " ";
        shell[2] += "หอย3 - " + " ";
        shell[3] += "หอย4 - " + " ";
        buff[0] += "ควาย1 - " + " ";
        buff[1] += "ควาย2 - " + " ";
        buff[2] += "ควาย3 - " + " ";
        buff[3] += "ควาย4 - " + " ";
        fim[0] += "ฟิม1 - " + " ";
        fim[1] += "ฟิม2 - " + " ";
        fim[2] += "ฟิม3 - " + " ";
        dog[0] += "หมา1 - " + " ";
        dog[1] += "หมา2 - " + " ";
        dog[2] += "หมา3 - " + " ";
        spider[0] += "แมงมุม1 - " + " ";
        spider[1] += "แมงมุม2 - " + " ";
        spider[2] += "แมงมุม3 - " + " ";
        dragon[0] += "มังกร1 - " + " ";
        dragon[1] += "มังกร2 - " + " ";
        dragon[2] += "มังกร3 - " + " ";
        dragon[3] += "มังกร4 - " + " ";
        dragon[4] += "มังกร5 - " + " ";
        dragon[5] += "มังกร6 - " + " ";
        dragon[6] += "มังกร7 - " + " ";
        dragon[7] += "มังกร8 - " + " ";
        dragon[8] += "มังกร9 - " + " ";
        dragon[9] += "มังกร10 - " + " ";
      }
    case "test":
      // shell[0] = args[0];
      for (i = 1; i < args.length; i++)
      {
        if(i == 0)
        {
          message.channel.sendMessage(args[i]);
        }
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
