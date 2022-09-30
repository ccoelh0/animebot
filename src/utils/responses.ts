import { getDataByAnimeName } from '../services/dataByName'
import { nextAiringEpisode } from './formatResponses'

const options = {
  info: "Informacion general sobre un anime",
  airing: "Fecha de estreno del proximo capitulo de un anime"
}

let option: string | boolean = false

const handleResponse = async (bot: any, msg: any) => {
  if (!option) {
    switch (msg.text) {
      case options.airing:
        bot.sendMessage(msg.chat.id, 'Decime el nombre de anime pls', { reply_markup: JSON.stringify({ hide_keyboard: true }) })
        option = options.airing
        break

      case options.info:
        bot.sendMessage(msg.chat.id, 'Decime el nombre de anime pls', { reply_markup: JSON.stringify({ hide_keyboard: true }) })
        option = options.info
        break

      default:
        bot.sendMessage(msg.chat.id, "Hola, soy AnimeBot🔎. Elige una de estas 2 opciones", { "reply_markup": { "keyboard": [[options.info], [options.airing]] } })
    }
  } else {
    return handleOptions(option, bot, msg)
  }
}

const handleOptions = async (optionSelect: string | boolean, bot: any, msg: any) => {
  switch (optionSelect) {
    case options.airing:
      airing(bot, msg)
      break;

    default:
      bot.sendMessage(msg.chat.id, "Hola, soy AnimeBot🔎. Elige una de estas 2 opciones", { "reply_markup": { "keyboard": [[options.info], [options.airing]] } })

  }
}

const airing = async (bot: any, msg: any) => {
  const data = msg.text
  const res: any = await getDataByAnimeName(data)

  if (res.data.Media === null) return bot.sendMessage(msg.chat.id, 'No encontre el anime, proba con otro 🧐 ')

  const { text, img } = nextAiringEpisode(res)

  if (img !== undefined) bot.sendPhoto(msg.chat.id, img)

  bot.sendMessage(msg.chat.id, text)
    .then(() => bot.sendMessage(msg.chat.id, '🙌🏻 Espero haberte ayudado!'))
    .catch(() => bot.sendMessage(msg.chat.id, 'Ocurrio un erro 💔'))

  return option = false
}

export default handleResponse