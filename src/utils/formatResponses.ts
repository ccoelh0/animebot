import formatDate from './formatDate'

export const nextAiringEpisode = (x: any) => {
  const {nextAiringEpisode, title, status, coverImage, bannerImage} = x
  let text, img
  
  if ((status === 'RELEASING' || status === 'NOT_YET_RELEASED') && nextAiringEpisode !== null) {
    text = `El episodio ${nextAiringEpisode.episode} de ${title.english} (${title.native}) sera emitido en ${formatDate(nextAiringEpisode.timeUntilAiring)} ✅`
  } else {
    text = `La emision de ${title.english} ya termino`
  }

  img = (coverImage.extraLarge !== null) ? coverImage.extraLarge : (bannerImage !== null) ? img = bannerImage : undefined

  return {text, img}
}
