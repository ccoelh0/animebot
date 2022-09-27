import { getDataByAnimeName } from './api.js'
import formatMessage from './formatMessage.js'

const options = {
  firstResponse: "Hola, soy AnimeBot🔎. Elige una de estas 2 opciones:",
  info: "Informacion general sobre un anime",
  airing: "Fecha de estreno del proximo capitulo de un anime"
}

let state = { option: null, waitingName: false }

const handleResponse = async (bot, msg) => {
  if (!state.waitingName) {
    switch (msg.text) {
      case options.airing:
        bot.sendMessage(msg.chat.id, 'Decime el nombre de anime pls', { reply_markup: JSON.stringify({ hide_keyboard: true }) })
        state = { option: options.airing, waitingName: true }
        break

      case options.info:
        bot.sendMessage(msg.chat.id, 'Decime el nombre de anime pls', { reply_markup: JSON.stringify({ hide_keyboard: true }) })
        state = { option: options.info, waitingName: true }
        break

      default:
        bot.sendMessage(msg.chat.id, options.firstResponse, { "reply_markup": { "keyboard": [[options.info], [options.airing]] } })
    }
  } else {
    const data = msg.text
    const res = await getDataByAnimeName(data)
    const { text, img } = formatMessage(res)
    bot.sendPhoto(msg.chat.id, img)
    bot.sendMessage(msg.chat.id, text).then(() => bot.sendMessage(msg.chat.id, '🙌🏻 Espero haberte ayudado!'))
    return state = { option: null, waitingName: false }
  }
}

export default handleResponse