import TelegramBot from 'node-telegram-bot-api'
import { getDataByAnimeName } from '../services/dataByName'
import { nextAiringEpisode } from './formatResponses'
import { bot, Options, replyRemoveKeyboard, options } from '../models/bot.model'

let option: Options = Options.initialState

const greeting = (message: TelegramBot.Message) => bot.sendMessage(message.chat.id, "Hola, soy AnimeBot 🔎\nElegí una de estas 2 opciones:", { reply_markup: { keyboard: options } })
const whatAnime = (message: TelegramBot.Message) => bot.sendMessage(message.chat.id, 'Decime el nombre de anime pls', replyRemoveKeyboard)
const notFoundAnime = (message: TelegramBot.Message) => bot.sendMessage(message.chat.id, 'No encontre el anime, proba con otro 🧐 ')
const finalResponse = (message: TelegramBot.Message) => bot.sendMessage(message.chat.id, '🙌🏻 Espero haberte ayudado!')

const handleResponse = async (msg: TelegramBot.Message) => {
  if (option === Options.initialState) {
    switch (msg.text) {
      case Options.airing:
        whatAnime(msg)
        option = Options.airing
        break;

      case Options.info:
        whatAnime(msg)
        option = Options.info
        break;

      default:
        greeting(msg)
        break;
    }
  } else {
    return handleOptions(option, msg)
  }
}

const handleOptions = async (optionSelect: Options, msg: TelegramBot.Message) => {
  switch (optionSelect) {
    case Options.airing:
      airing(msg)
      break;

    default:
      greeting(msg)
      break;

  }
}

const airing = (msg: TelegramBot.Message) => {
  const data: string = msg.text !== undefined ? msg.text : ''

  getDataByAnimeName(data)
    .then((res) => {
      const data = res.data.data.Media
      if (data === null) return notFoundAnime(msg)
      const { text, img } = nextAiringEpisode(data)
      if (img !== undefined) bot.sendPhoto(msg.chat.id, img)
      return bot.sendMessage(msg.chat.id, text)
    })
    .catch(() => bot.sendMessage(msg.chat.id, 'Ocurrio un error 💔'))
    .then(() => finalResponse(msg))

  return option = Options.initialState
}

export default handleResponse