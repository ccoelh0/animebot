import 'dotenv/config'
import express from 'express'
import TelegramBot from 'node-telegram-bot-api';
import getData from './animeQuery.js'

const app = express()
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  if (msg.text[0] === '"' || msg.text[msg.text.length - 1] === '"') {
    const data = msg.text
    const message = await getData(data)
    bot.sendMessage(msg.chat.id, message);
    return bot.sendMessage(msg.chat.id, '🙌🏻 Espero haberte ayudado! Si quieres saber sobre otro anime, ingresa su nombre entre comillas 🔎')
  }

  const greeting =
    `Hola, ${msg.chat.first_name}! Para tener información sobre el lanzamiento o emisión del próximo capitulo de un anime por favor escribi su nombre entre comillas, por ejemplo: "Chainsaw Man" 🔎`
  return bot.sendMessage(msg.chat.id, greeting);
});

app.listen(process.env.PORT, () => console.log(`Bot running in port ${process.env.PORT}`))