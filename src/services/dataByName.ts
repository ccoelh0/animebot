import axios from "axios";

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
      coverImage { extraLarge }
      nextAiringEpisode { timeUntilAiring episode }
    }
  }
`;

export const getDataByAnimeName = async (animeName: string) => {
  return axios.post(url, { query: query, variables: { search: animeName } })
}