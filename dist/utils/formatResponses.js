"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextAiringEpisode = void 0;
const formatDate_js_1 = __importDefault(require("./formatDate.js"));
const nextAiringEpisode = (x) => {
    const { nextAiringEpisode, title, status, coverImage, bannerImage } = x.data.Media;
    let text, img;
    if ((status === 'RELEASING' || status === 'NOT_YET_RELEASED') && nextAiringEpisode !== null) {
        text = `El episodio ${nextAiringEpisode.episode} de ${title.english} (${title.native}) sera emitido en ${(0, formatDate_js_1.default)(nextAiringEpisode.timeUntilAiring)} ✅`;
    }
    else {
        text = `La emision de ${title.english} ya termino`;
    }
    img = (coverImage.extraLarge !== null) ? coverImage.extraLarge : (bannerImage !== null) ? img = bannerImage : undefined;
    return { text, img };
};
exports.nextAiringEpisode = nextAiringEpisode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0UmVzcG9uc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2Zvcm1hdFJlc3BvbnNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvRUFBd0M7QUFFakMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFO0lBQzFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNoRixJQUFJLElBQUksRUFBRSxHQUFHLENBQUE7SUFFYixJQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLEtBQUssa0JBQWtCLENBQUMsSUFBSSxpQkFBaUIsS0FBSyxJQUFJLEVBQUU7UUFDM0YsSUFBSSxHQUFHLGVBQWUsaUJBQWlCLENBQUMsT0FBTyxPQUFPLEtBQUssQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLE1BQU0scUJBQXFCLElBQUEsdUJBQVUsRUFBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFBO0tBQzNKO1NBQU07UUFDTCxJQUFJLEdBQUcsaUJBQWlCLEtBQUssQ0FBQyxPQUFPLGFBQWEsQ0FBQTtLQUNuRDtJQUVELEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7SUFFdkgsT0FBTyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsQ0FBQTtBQUNwQixDQUFDLENBQUE7QUFiWSxRQUFBLGlCQUFpQixxQkFhN0IifQ==