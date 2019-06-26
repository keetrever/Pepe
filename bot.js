const Discord = require('discord.js');
const bot = new Discord.Client();


const token = 'NTkzMTU5MTU5ODAxODM5NjI2.XRO4GA.1ROCPV1dc76-CduqXqdBOSypP1k';

bot.on('ready',() =>{
    console.log('This bot is online!')
})

bot.on('message', msg=>{
  if(msg.content === "Stage"){
      msg.reply('Halllllllooooooooooooooooooooooooooooooo!!');
    }
})



bot.login(precess.env.BOT_TOKEN);
