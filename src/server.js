import 'dotenv/config'
import express from 'express'
import TelegramBot from 'node-telegram-bot-api';
import handleResponse from './utils/responses.js'

const app = express()
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => handleResponse(bot, msg));

app.listen(process.env.PORT, () => console.log(`Bot running in port ${process.env.PORT}`))