import fetch from 'node-fetch'

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
      bannerImage
      nextAiringEpisode { timeUntilAiring episode } 
    }
  }
`;

export const getDataByAnimeName = async (animeName) => {
  const data = await fetch(url, {
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

  return await data.json()
}