import fetch from 'node-fetch'
import formatSeconds from './utils/formatSeconds.js';

const url = 'https://graphql.anilist.co'

const query = `
  query ($search: String) {
    Media (search: $search, type: ANIME) { 
      id
      title {
        romaji
        english
        native
      }
      episodes
      status
      season
      nextAiringEpisode { timeUntilAiring episode } 
    }
  }
`;

const getData = async (animeName) => {
  const data = await fetch (url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: { search: animeName }
    })
  })

  const response = await data.json()
  return formatMessage(response)
}

const formatMessage = (msg) => {
  const data = msg.data.Media
  const textToBot = 
    `El episodio ${data.nextAiringEpisode.episode} de ${data.title.english} (${data.title.native}) sera emitido en ${formatSeconds(data.nextAiringEpisode.timeUntilAiring)} ✅`
  return textToBot
}

export default getData