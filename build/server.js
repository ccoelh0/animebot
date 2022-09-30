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
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const responses_js_1 = __importDefault(require("./utils/responses.js"));
const app = (0, express_1.default)();
const token = process.env.TELEGRAM_TOKEN;
const bot = new node_telegram_bot_api_1.default(token, { polling: true });
bot.on("message", (msg) => __awaiter(void 0, void 0, void 0, function* () { return (0, responses_js_1.default)(bot, msg); }));
app.listen(process.env.PORT, () => console.log(`Bot running in port ${process.env.PORT}`));
