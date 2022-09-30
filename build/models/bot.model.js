"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.Options = exports.replyRemoveKeyboard = exports.bot = void 0;
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
// BOT
const token = process.env.TELEGRAM_TOKEN !== undefined ? process.env.TELEGRAM_TOKEN : '';
exports.bot = new node_telegram_bot_api_1.default(token, { polling: true });
// BOT EVENTS
const removeKeyboard = { remove_keyboard: true };
exports.replyRemoveKeyboard = { reply_markup: removeKeyboard };
// BOT OPTIONS
var Options;
(function (Options) {
    Options["initialState"] = "";
    Options["info"] = "Informacion general sobre un anime";
    Options["airing"] = "Fecha de estreno del proximo capitulo de un anime";
})(Options = exports.Options || (exports.Options = {}));
exports.options = [[{ text: Options.info }], [{ text: Options.airing }]];
