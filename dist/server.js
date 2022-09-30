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
const responses_1 = __importDefault(require("./utils/responses"));
const app = (0, express_1.default)();
const token = process.env.TELEGRAM_TOKEN;
const bot = new node_telegram_bot_api_1.default(token !== undefined ? token : '', { polling: true });
bot.on("message", (msg) => __awaiter(void 0, void 0, void 0, function* () { return (0, responses_1.default)(bot, msg); }));
app.listen(process.env.PORT, () => console.log(`Bot running in port ${process.env.PORT}`));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUFzQjtBQUN0QixzREFBNkI7QUFDN0Isa0ZBQWdEO0FBQ2hELGtFQUE4QztBQUU5QyxNQUFNLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQTtBQUNyQixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztBQUN6QyxNQUFNLEdBQUcsR0FBRyxJQUFJLCtCQUFXLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUVqRixHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFPLEdBQUcsRUFBRSxFQUFFLGtEQUFDLE9BQUEsSUFBQSxtQkFBYyxFQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQSxHQUFBLENBQUMsQ0FBQztBQUUzRCxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBIn0=