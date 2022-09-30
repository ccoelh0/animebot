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
Object.defineProperty(exports, "__esModule", { value: true });
const dataByName_js_1 = require("../services/dataByName.js");
const formatResponses_js_1 = require("./formatResponses.js");
const options = {
    info: "Informacion general sobre un anime",
    airing: "Fecha de estreno del proximo capitulo de un anime"
};
let option = false;
const handleResponse = (bot, msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (!option) {
        switch (msg.text) {
            case options.airing:
                bot.sendMessage(msg.chat.id, 'Decime el nombre de anime pls', { reply_markup: JSON.stringify({ hide_keyboard: true }) });
                option = options.airing;
                break;
            case options.info:
                bot.sendMessage(msg.chat.id, 'Decime el nombre de anime pls', { reply_markup: JSON.stringify({ hide_keyboard: true }) });
                option = options.info;
                break;
            default:
                bot.sendMessage(msg.chat.id, "Hola, soy AnimeBot🔎. Elige una de estas 2 opciones", { "reply_markup": { "keyboard": [[options.info], [options.airing]] } });
        }
    }
    else {
        return handleOptions(option, bot, msg);
    }
});
const handleOptions = (optionSelect, bot, msg) => __awaiter(void 0, void 0, void 0, function* () {
    switch (optionSelect) {
        case options.airing:
            airing(bot, msg);
            break;
        default:
            bot.sendMessage(msg.chat.id, "Hola, soy AnimeBot🔎. Elige una de estas 2 opciones", { "reply_markup": { "keyboard": [[options.info], [options.airing]] } });
    }
});
const airing = (bot, msg) => __awaiter(void 0, void 0, void 0, function* () {
    const data = msg.text;
    const res = yield (0, dataByName_js_1.getDataByAnimeName)(data);
    if (res.data.Media === null)
        return bot.sendMessage(msg.chat.id, 'No encontre el anime, proba con otro 🧐 ');
    const { text, img } = (0, formatResponses_js_1.nextAiringEpisode)(res);
    if (img !== undefined)
        bot.sendPhoto(msg.chat.id, img);
    bot.sendMessage(msg.chat.id, text)
        .then(() => bot.sendMessage(msg.chat.id, '🙌🏻 Espero haberte ayudado!'))
        .catch(() => bot.sendMessage(msg.chat.id, 'Ocurrio un erro 💔'));
    return option = false;
});
exports.default = handleResponse;
