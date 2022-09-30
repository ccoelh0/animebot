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
const dataByName_1 = require("../services/dataByName");
const formatResponses_1 = require("./formatResponses");
const bot_model_1 = require("../models/bot.model");
let option = bot_model_1.Options.initialState;
const greeting = (message) => bot_model_1.bot.sendMessage(message.chat.id, "Hola, soy AnimeBot 🔎\nElegí una de estas 2 opciones:", { reply_markup: { keyboard: bot_model_1.options } });
const whatAnime = (message) => bot_model_1.bot.sendMessage(message.chat.id, 'Decime el nombre de anime pls', bot_model_1.replyRemoveKeyboard);
const notFoundAnime = (message) => bot_model_1.bot.sendMessage(message.chat.id, 'No encontre el anime, proba con otro 🧐 ');
const finalResponse = (message) => bot_model_1.bot.sendMessage(message.chat.id, '🙌🏻 Espero haberte ayudado!');
const handleResponse = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (option === bot_model_1.Options.initialState) {
        switch (msg.text) {
            case bot_model_1.Options.airing:
                whatAnime(msg);
                option = bot_model_1.Options.airing;
                break;
            case bot_model_1.Options.info:
                whatAnime(msg);
                option = bot_model_1.Options.info;
                break;
            default:
                greeting(msg);
                break;
        }
    }
    else {
        return handleOptions(option, msg);
    }
});
const handleOptions = (optionSelect, msg) => __awaiter(void 0, void 0, void 0, function* () {
    switch (optionSelect) {
        case bot_model_1.Options.airing:
            airing(msg);
            break;
        default:
            greeting(msg);
            break;
    }
});
const airing = (msg) => {
    const data = msg.text !== undefined ? msg.text : '';
    (0, dataByName_1.getDataByAnimeName)(data)
        .then((res) => {
        const data = res.data.data.Media;
        if (data === null)
            return notFoundAnime(msg);
        const { text, img } = (0, formatResponses_1.nextAiringEpisode)(data);
        if (img !== undefined)
            bot_model_1.bot.sendPhoto(msg.chat.id, img);
        return bot_model_1.bot.sendMessage(msg.chat.id, text);
    })
        .catch(() => bot_model_1.bot.sendMessage(msg.chat.id, 'Ocurrio un error 💔'))
        .then(() => finalResponse(msg));
    return option = bot_model_1.Options.initialState;
};
exports.default = handleResponse;
