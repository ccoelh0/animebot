import 'dotenv/config'
import express from 'express'
import TelegramBot from 'node-telegram-bot-api';
import handleResponse from './utils/responses'
import { bot } from './models/bot.model';

const app = express()

bot.on("message", async (msg) => handleResponse(msg));

app.listen(process.env.PORT, () => console.log(`Bot running in port ${process.env.PORT}`))