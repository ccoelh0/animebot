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
