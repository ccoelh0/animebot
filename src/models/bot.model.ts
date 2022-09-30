import TelegramBot from 'node-telegram-bot-api'
import { ReplyKeyboardRemove, KeyboardButton } from 'node-telegram-bot-api'

// BOT
const token = process.env.TELEGRAM_TOKEN !== undefined ? process.env.TELEGRAM_TOKEN : ''
export const bot = new TelegramBot(token, { polling: true })

// BOT EVENTS
const removeKeyboard: ReplyKeyboardRemove = { remove_keyboard: true }
export const replyRemoveKeyboard = {reply_markup: removeKeyboard}

// BOT OPTIONS
export enum Options {
  initialState = '',
  info = "Informacion general sobre un anime",
  airing = "Fecha de estreno del proximo capitulo de un anime"
}

export const options: KeyboardButton[][] = [[{text: Options.info}], [{text: Options.airing}]]