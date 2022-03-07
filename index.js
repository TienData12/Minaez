////////////////////////////////////////////////////////////////////////////
const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
///////////////////////////////////////////////////////////////////////////////
const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const calli = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "s!";
const cooldown = new Set();
const cdtime = 5;
require('./server')();
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "owner") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn sẽ phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setImage(`https://images-ext-1.discordapp.net/external/KQLKgum2s1MTEsuVbPQCPulBV7bZIo6gGfk0HHfUWzk/https/media.discordapp.net/attachments/918748955041472532/944489328665579571/Nong_Trai.gif?width=400&height=400`)
      .setDescription(`
👑 Owner 
(Rin Eri / Celestial Team)
🤖 Securitybots 
(Security System | Mina)
      `)    .setThumbnail(`https://images-ext-1.discordapp.net/external/ngAXGYcQQ0Brcd5QL7VXjFZPVwNyiwqLlW9JjcEOSPY/https/media.discordapp.net/attachments/940075151775662151/942222724992995378/1.gif?width=320&height=173`)
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.login('OTQ5NTY5NDc2NTc4NDEwNTg3.YiMRfQ.PvwIeGq20JckjMsHVjK4K9cfLGY');
///////////////////////////////////////////////////////////////////////////////
const callienabled  = "";
const callidisabled = "";
const callifalse    = "";
const callitrue     = "";
const callicolor    = "";
const calliimgae    = "";
const calliban      = "";                                                                                                                                                                             const securitybots = "Security System";
const calliwarn     = "";                                                                                                                                                                             const callidevelopers = "878964643383640074";
///////////////////////////////////////////////////////////////////////////////
calli.on("ready", () => {
  console.log(`${calli.user.tag}`);
  calli.user.setActivity(`${prefix}help`, {
    Type: "Playing"
  });
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn sẽ phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`
<a:crown:867430709580005426> **Phòng Ngừa Các Raiders**
Bot có chống raid và các cuộc tấn công từ bên trong.


 **Lệnh Số Liệu**
\`${prefix}botinfo\`, \`${prefix}userinfo\`, \`${prefix}serverinfo\`, \`${prefix}invite\`,\`${prefix}owner\`

 **Lệnh Quản Lý**
\`${prefix}lock\`, \`${prefix}unlock\`, \`${prefix}ban\`, \`${prefix}kick\`, \`${prefix}unban\`

 **Lệnh Bảo Vệ**
\`${prefix}anti kick\`, \`${prefix}anti ban\`, \`${prefix}anti channelD\`, \`${prefix}anti channelC\`, \`${prefix}anti roleD\`, \`${prefix}anti roleC\`

 **Bảo Vệ : On/Off**
\`${prefix}anti bot\`: on-off

 **Bảo Vệ Roles**
\`${prefix}settings\`
\`${prefix}punishment\`: để kiểm tra loại hình phạt hiện tại.
\`${prefix}punishment <kick|ban|remove role>\`: Để thay đổi hình phạt.

**Links**
[Support](https://discord.com/invite/EXyRgxeDCW) - [Invite](https://discord.com/api/oauth2/authorize?client_id=${calli.user.id}&permissions=8&scope=bot)
      
      
      `);
    message.channel.send(help);
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "rules") {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn sẽ phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**Bạn cần role cao hơn để sử dụng lệnh này**");
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setImage(`callilogo`)
      .setThumbnail(calli.user.avatarURL())
      .setDescription(`
**Luật thuộc về quyền lựa chọn của server bạn**`);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", async message => {
  if (message.content.startsWith(prefix + "invite")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn sẽ phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`
[Click here](https://discord.com/api/oauth2/authorize?client_id=${calli.user.id}&permissions=8&scope=bot) **Để mời bot.**
`);
    message.channel.send(help);
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(`${prefix}botinfo`)) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn sẽ phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    const tnx = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .addField("Tên và Tag", `${calli.user.tag}`, true)
      .addField("Tên", `${calli.user.tag}`, true)
      .addField("ID", `${calli.user.id}`, true)
      .addField("Phiên Bản", `${process.version}`, true)
      .addField("Số Servers", `${calli.guilds.cache.size} Servers`, true)
      .addField("Số Thành Viên", `${calli.users.cache.size} Thành Viên`, true)
      .addField(
        "Ping",
        `${Date.now() - message.createdTimestamp}` + "ms",
        true
      );

    message.channel.send(tnx);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(prefix + "serverinfo")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn sẽ phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    var EMBED = new Discord.MessageEmbed()
      .addField("Tên Server", `${message.guild.name}`)
      .addField("Server Id", `${message.guild.id}`)
      .addField("Chủ Server", `${message.guild.owner}`)
      .addField("Boosts", `${message.guild.premiumSubscriptionCount}`)
      .addField("Channels", `${message.guild.channels.cache.size} Channels`)
      .addField("Roles", `${message.guild.roles.cache.size} Roles`)
      .addField("Members", `${message.guild.memberCount} Members`)
      .setThumbnail(message.guild.iconURL())
      .setColor(`#589bff`);
    message.channel.send(EMBED);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", prof => {
  if (prof.content.startsWith(prefix + "userinfo")) {
    if (cooldown.has(prof.author.id)) {
      return prof.channel.send(`Bạn sẽ phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(prof.author.id);
    setTimeout(() => {
      cooldown.delete(prof.author.id);
    }, cdtime * 1000);
    var professor = new Discord.MessageEmbed()
      .setThumbnail(prof.member.user.displayAvatarURL({ dynamic: true }))
      .setColor(`#589bff`)
      .addField("Username", `<@${prof.author.id}>`)
      .addField("User Id", `${prof.author.id}`)
      .addField(
        "Vô Server Lúc",
        moment(prof.joinedAt).format("D/M/YYYY h:mm a"),
        true
      )
      .addField("Tạo Tài Khoản Lúc", prof.author.createdAt.toLocaleString());
    prof.channel.send(professor);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(prefix + "lock")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn sẽ phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        "**Bạn cần role cao hơn để sử dụng lệnh này**"
      );
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: false })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `
🔒 Kênh đã được khóa.

Channel: <#${message.channel.id}>
Moderator: <@${message.author.id}>

**Lý do**
Không cung cấp
          `
          )
          .setColor(`#589bff`);
        return message.channel.send(embed);
      });
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(prefix + "unlock")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn sẽ phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        "**Bạn cần role cao hơn để sử dụng lệnh này**"
      );
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: true })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `
🔒 Kênh đã được gỡ khóa.
Channel: <#${message.channel.id}>
Moderator: <@${message.author.id}>

**Lý do**
Không cung cấp
          
          `
          )
          .setColor(`#589bff`);
        return message.channel.send(embed);
      });
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "servers") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn sẽ phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send(
        "**Bạn cần role cao hơn để sử dụng lệnh này**"
      );
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .addField("Servers", `${calli.guilds.cache.size} Servers`, true)
      .addField("Thành Viên", `${calli.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} Thành Viên`, true)
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }));
    message.channel.send({ embed });
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", async message => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/),
    commandName = args.shift().toLowerCase();
  if (["ban", "kick"].includes(commandName)) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn sẽ phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let mode = commandName;
    if (
      !message.member.hasPermission(
        mode == "kick" ? "KICK_MEMBERS" : "BAN_MEMBERS"
      )
    )
      return message.channel.send(
        "**Bạn cần role cao hơn để sử dụng lệnh này**"
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user) return message.channel.send("** Không tìm thấy thành viên!**");
    let bot = message.guild.member(calli.user);
    if (user.user.id == calli.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(`** Bạn không thể ${mode} owner!**`);
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        `** Bạn không thể ${mode} người có role cao hơn bạn!**`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        `** Mina không thể ${mode} thành viên có role cao hơn mình !**`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(`**Người dùng được chỉ định không phải là ${mode}able.**`);
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Ban bởi ${message.author.tag}` }
        : `Kick bởi ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(
          `**✅ ${message.author.tag} ${
            mode == "ban" ? "banned" : mode
          } khỏi server ✈️**`
        )
      )
      .catch(console.error);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn sẽ phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(JxA => {
          message.guild.unban(JxA);
        });
      });
      return message.channel.send("**🟢 Unban tất cả thành viên**");
    }
    if (!args)
      return message.channel.send("**hãy nhật thành viên ID / all**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`**🟢 Unban thành viên ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**không tìm được \`${args}\` ở danh sách Ban**`
        );
      });
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  let commands = message.content.split(" ");
  if (commands[0] == prefix + "embed") {
    if (!message.guild) return;
    if (message.author.id !== message.guild.ownerID)
      return message.reply("**Bạn cần role cao hơn để sử dụng lệnh này**");
    if (!message.guild.member(calli.user).hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        "**Bạn cần role cao hơn để sử dụng lệnh này**"
      );
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) {
      return message.channel.send("`Hãy Thử: " + prefix + "embed <message>`");
    }
    message.delete();
    var embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`${args}`)
    message.channel.send(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", async message => {
  if (message.content.startsWith(`<@${calli.user.id}>`)) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setAuthor(calli.user.username, calli.user.avatarURL())
      .setThumbnail(calli.user.avatarURL())
      .setFooter('Cảm ơn đã thêm tôi , chúc bạn may mắn . Tôi sẽ bảo vệ cùng bạn')
      .setDescription(`
**Xin Chào**
 Prefix Của tôi là [${prefix}]
**Thông tin về tôi**
1 bot quản lý và bảo vệ server  cho bạn
**Báo cáo vấn đề**
Bạn có thể báo cáo lỗi bot hoặc vấn đề bạn đang gặp phải bằng cách gõ ${prefix}support. 
**Extra Links**
[Support](https://discord.gg/EXyRgxeDCW) - [Invite](https://discord.com/api/oauth2/authorize?client_id=${calli.user.id}&permissions=8&scope=bot)`);

    message.channel.send(help);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("guildCreate", guild => {
  let embed = new Discord.MessageEmbed()
    .setColor(`#589bff`)
    .setDescription(`Cảm ơn đã thêm tôi , chúc bạn may mắn . Tôi sẽ bảo vệ cùng bạn`);

  guild.owner.send(embed);
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "anti") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send(
        "**Bạn cần role cao hơn để thực hiện lệnh này**"
      );
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`
**Số Lượng Bảo Vệ**
\`${prefix}anti kick\`: **Number**
\`${prefix}anti ban\`: **Number**
\`${prefix}anti channelD\`: **Number**
\`${prefix}anti channelC\`: **Number**
\`${prefix}anti roleD\`: **Number**
\`${prefix}anti roleC\`: **Number**

**Bảo Vệ On/Off**
\`${prefix}anti bot\`: **on-off**

**Chỉnh Sửa**
\`${prefix}settings\`


      `)
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }));
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
calli.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1,
      time: 0.1
    };

  if (message.content.startsWith(prefix + "anti")) {
      if (message.author.id !== message.guild.ownerID) {
      let anti = new Discord.MessageEmbed()
        .setDescription("Bạn cần role cao hơn để thực hiện lệnh này")
        .setColor(`#589bff`);
      return message.channel.send(anti);
 
    }
    {
      let typeanum = new Discord.MessageEmbed()

        .setDescription("Cho một con số cụ thể")
        .setColor(`#589bff`);

      {
        let onlyanum = new Discord.MessageEmbed()
          .setDescription("Cho một con số cụ thể")
          .setColor(`#589bff`);
        ///////
        if (message.content.startsWith(prefix + "anti ban")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].banLimit = num;
          {
            let ban = new Discord.MessageEmbed()
              .setColor(`#589bff`)
              .setDescription(
                `
Anti Ban đã được cập nhật
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].banLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].banLimit} ${calliban}
`
              );

            message.channel.send(ban);
           
          }
        }
        if (message.content.startsWith(prefix + "anti kick")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].kickLimits = num;
          {
            let ban = new Discord.MessageEmbed().setColor(`#589bff`)
              .setDescription(`

Anti Kick đã được cập nhập
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].kickLimits} ${calliwarn} 
Punish at: ${config[message.guild.id].kickLimits} ${calliban}

`);

            message.channel.send(ban);
           
          }
        }
        if (message.content.startsWith(prefix + "anti roleD")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].roleDelLimit = num;
          {
            let roled = new Discord.MessageEmbed().setColor(`#589bff`)
              .setDescription(`
Anti Role-Delete đã được cập nhật
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].roleDelLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].roleDelLimit} ${calliban} `);

            message.channel.send(roled);
           
          }
        }
        if (message.content.startsWith(prefix + "anti roleC")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].roleCrLimits = num;
          {
            let rolec = new Discord.MessageEmbed().setColor(`#589bff`)
              .setDescription(`
Anti Role-Create đã được cập nhật
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].roleCrLimits} ${calliwarn} 
Punish at: ${config[message.guild.id].roleCrLimits} ${calliban} `);

            message.channel.send(rolec);
           
          }
        }
        if (message.content.startsWith(prefix + "anti channelD")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].chaDelLimit = num;
          {
            let ban = new Discord.MessageEmbed().setColor(`#589bff`)
              .setDescription(`
Anti Channel-Delete đã được cập nhật
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].chaDelLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].chaDelLimit} ${calliban} `);

            message.channel.send(ban);
           
          }
        }
        if (message.content.startsWith(prefix + "anti channelC")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].chaCrLimit = num;
          {
            let ban = new Discord.MessageEmbed().setColor(`#589bff`)
              .setDescription(`
Anti Channel-Create đã được cập nhật
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].chaCrLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].chaCrLimit} ${calliban} `);

            message.channel.send(ban);
           
          }
        }
        if (message.content.startsWith(prefix + "anti time")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].time = num;
          {
            let ban = new Discord.MessageEmbed()
              .setColor(`#589bff`)
              .setDescription(`
Anti Time đã được cập nhật
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].time} ${calliwarn} 
Punish at: ${config[message.guild.id].time} ${calliban} `
              );

            message.channel.send(ban);
           
          }
        }
        fs.writeFile(
          "./configg.json",
          JSON.stringify(config, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }
  }
});

calli.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warncrchan = new Discord.MessageEmbed()
            .setColor(`#589bff`)
            .setFooter(`security`).setDescription(`
<a:crown:867430709580005426> **Thông Tin**

**
Người Dùng Bị Phạt** ${calliban} <:Punished:867002789413519392>
<:Security:867002790077661234> Đã Trừng Phạt:

**Server:**
${channel.guild.name}

**User:**
${entry.username}

**Hành Động**
channel-create Members
            `);

          channel.guild.owner.send(warncrchan);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

calli.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warndelchan = new Discord.MessageEmbed()
            .setColor(`#589bff`)
            .setFooter(`security`).setDescription(`
**Người Dùng Bị Phạt** ${calliban}
Đã Trừng Phạt:
**Server:**
${channel.guild.name}
**User:**
${entry.username}
**Hành Động**
channel-delete Members
            `);

          channel.guild.owner.send(warndelchan);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

calli.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warndelrole = new Discord.MessageEmbed()
            .setColor(`#589bff`)
            .setFooter(`security`).setDescription(`
**Người Dùng Bị Phạt** ${calliban}
Đã Trừng Phạt:
**Server:**
${channel.guild.name}
**User:**
${entry.username}
**Hành Động**
role-delete Members
            `);

          channel.guild.owner.send(warndelrole);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

calli.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warncrrole = new Discord.MessageEmbed()
            .setColor(`#589bff`)
            .setFooter(`security`).setDescription(`
**Người Dùng Bị Phạt** ${calliban} 
Đã Trừng Phạt:
**Server:**
${channel.guild.name}
**User:**
${entry.username}
**Hành Động**
role-create Members
            `);

          channel.guild.owner.send(warncrrole);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

calli.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warnban1 = new Discord.MessageEmbed()
            .setColor(`#589bff`)
            .setFooter(`security`).setDescription(`
**Người Dùng Bị Phạt** ${calliban}
Đã Trừng Phạt:
**Server:**
${guild.guild.name}
**User:**
${entry.username}
**Hành Động**
banning Members
            `);

          guild.owner.send(warnban1);
        });
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

calli.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warnkick1 = new Discord.MessageEmbed()
            .setColor(`#589bff`)
            .setFooter(`security`).setDescription(`
**User Punished** ${calliban} 
have punished a user, details:
**Server:**
${guild.guild.name}
**User:**
${entry.username}
**Action**
kicking Members
            `);

          guild.owner.send(warnkick1);
        });
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
calli.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 1,
        chaDelLimit: 1,
        roleDelLimit: 1,
        kickLimits: 1,
        chaCrLimit: 1,
        roleCrLimits: 1
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e => {
            let warnban2 = new Discord.MessageEmbed()
              .setColor(`#589bff`)
              .setFooter(`security`).setDescription(`
**Người Dùng Bị Phạt** ${calliban}
Đã Trừng Phạt:
**Server:**
${guild.guild.name}
**User:**
${entry.username}
**Hành Động**
banning Members
            `);

            guild.owner.send(warnban2);
          });
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "settings") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn sẽ phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send(
        "**Bạn cần role cao hơn để sử dụng lệnh này**"
      );
    let embed = new Discord.MessageEmbed()
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))
      .setColor(`#589bff`)
      .setAuthor("Security Settings", "")
      .setDescription(`
      
**Anti Ban**
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].banLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].banLimit} ${calliban}
**Anti Kick**
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].kickLimits} ${calliwarn} 
Punish at: ${config[message.guild.id].kickLimits} ${calliban}


**Anti Role-Create**
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].roleCrLimits} ${calliwarn} 
Punish at: ${config[message.guild.id].roleCrLimits} ${calliban}
**Anti Role-Delete**
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].roleDelLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].roleDelLimit} ${calliban}


**Anti Channel-Create**
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].chaCrLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].chaCrLimit} ${calliban}
**Anti Channel-Delete**
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].chaDelLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].chaDelLimit} ${calliban}


**Punishment:**
Ban: ${calliban}
      
      `);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8"));
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot on")) {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn sẽ phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let embed = new Discord.MessageEmbed()
    .setColor(`#589bff`)
    .setDescription(`
<a:crown:867430709580005426> **The Discord Development**

Anti Bot đã được cập nhật 
Enabled: ${callienabled} 
`)
    if (!message.channel.guild) return;
    if (message.author.id !== message.guild.ownerID) return;
    antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(embed);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot off")) {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn sẽ phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let embed = new Discord.MessageEmbed()
    .setColor(`#589bff`)
          .setDescription(
        `
<a:crown:867430709580005426> **The Discord Development**

Anti Bot đã được cập nhật
Disabled: ${callidisabled} 
`
      )
    if (!message.channel.guild) return;
    if (message.author.id !== message.guild.ownerID) return;
    antibots[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(embed);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "Off"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});

fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "punishment") {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn sẽ phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**Bạn cần role cao hơn để sử dụng lệnh này**");
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`Chọn 1 hình phạt như **Kick** hoặc **Ban**`);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "punishment ban") {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn sẽ phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**Bạn cần role cao hơn để sử dụng lệnh này**");
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`Hình phạt đã thay đổi thành Ban`);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "punishment kick") {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`Bạn sẽ phải đợi thêm 5 giây`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**Bạn cần role cao hơn để sử dụng lệnh này**");
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`Hình phạt đã được thay đổi thành kick`);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////


