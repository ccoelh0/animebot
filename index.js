require("dotenv").config();

const express = require('express')
const app = express()
const telegrambot = require("node-telegram-bot-api");
const token = process.env.TELEGRAM_TOKEN;
const bot = new telegrambot(token, {polling:true});

bot.on("message", (msg) => {
    if (msg.text[0] === '"' || msg.text[msg.text.length -1] === '"') {
      const data = "data" 
      return bot.sendMessage(msg.chat.id, data);
    } 
    
    const greeting = 
      `Hola, ${msg.chat.first_name}! Para tener información sobre el lanzamiento o emisión del próximo capitulo de un anime por favor escribi su nombre entre comillas, por ejemplo: "Chainsaw Man`
    return bot.sendMessage(msg.chat.id, greeting);
});

app.listen(process.env.PORT, () => console.log(`Bot running in port ${process.env.PORT}`))