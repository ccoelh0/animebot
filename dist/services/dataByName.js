"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataByAnimeName = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const url = 'https://graphql.anilist.co';
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
const getDataByAnimeName = (animeName) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, node_fetch_1.default)(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: { search: animeName }
        })
    });
    return yield data.json();
});
exports.getDataByAnimeName = getDataByAnimeName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YUJ5TmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9kYXRhQnlOYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUE4QjtBQUU5QixNQUFNLEdBQUcsR0FBRyw0QkFBNEIsQ0FBQTtBQUV4QyxNQUFNLEtBQUssR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpQmIsQ0FBQztBQUVLLE1BQU0sa0JBQWtCLEdBQUcsQ0FBTyxTQUFpQixFQUFFLEVBQUU7SUFDNUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLG9CQUFLLEVBQUMsR0FBRyxFQUFFO1FBQzVCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxRQUFRLEVBQUUsa0JBQWtCO1NBQzdCO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbkIsS0FBSyxFQUFFLEtBQUs7WUFDWixTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFO1NBQ2pDLENBQUM7S0FDSCxDQUFDLENBQUE7SUFFRixPQUFPLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0FBQzFCLENBQUMsQ0FBQSxDQUFBO0FBZFksUUFBQSxrQkFBa0Isc0JBYzlCIn0=