import formatSeconds from './formatSeconds.js'

const formatMessage = (x) => {
  const data = x.data.Media
  const text = 
    `El episodio ${data.nextAiringEpisode.episode} de ${data.title.english} (${data.title.native}) sera emitido en ${formatSeconds(data.nextAiringEpisode.timeUntilAiring)} ✅`
  return {text, img: x.data.Media.bannerImage}
}

export default formatMessage