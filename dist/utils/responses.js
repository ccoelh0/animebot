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
    const res = yield (0, dataByName_1.getDataByAnimeName)(data);
    if (res.data.Media === null)
        return bot.sendMessage(msg.chat.id, 'No encontre el anime, proba con otro 🧐 ');
    const { text, img } = (0, formatResponses_1.nextAiringEpisode)(res);
    if (img !== undefined)
        bot.sendPhoto(msg.chat.id, img);
    bot.sendMessage(msg.chat.id, text)
        .then(() => bot.sendMessage(msg.chat.id, '🙌🏻 Espero haberte ayudado!'))
        .catch(() => bot.sendMessage(msg.chat.id, 'Ocurrio un erro 💔'));
    return option = false;
});
exports.default = handleResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL3Jlc3BvbnNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVEQUEyRDtBQUMzRCx1REFBcUQ7QUFFckQsTUFBTSxPQUFPLEdBQUc7SUFDZCxJQUFJLEVBQUUsb0NBQW9DO0lBQzFDLE1BQU0sRUFBRSxtREFBbUQ7Q0FDNUQsQ0FBQTtBQUVELElBQUksTUFBTSxHQUFxQixLQUFLLENBQUE7QUFFcEMsTUFBTSxjQUFjLEdBQUcsQ0FBTyxHQUFRLEVBQUUsR0FBUSxFQUFFLEVBQUU7SUFDbEQsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLFFBQVEsR0FBRyxDQUFDLElBQUksRUFBRTtZQUNoQixLQUFLLE9BQU8sQ0FBQyxNQUFNO2dCQUNqQixHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLCtCQUErQixFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQ3hILE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFBO2dCQUN2QixNQUFLO1lBRVAsS0FBSyxPQUFPLENBQUMsSUFBSTtnQkFDZixHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLCtCQUErQixFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQ3hILE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFBO2dCQUNyQixNQUFLO1lBRVA7Z0JBQ0UsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxxREFBcUQsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7U0FDOUo7S0FDRjtTQUFNO1FBQ0wsT0FBTyxhQUFhLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtLQUN2QztBQUNILENBQUMsQ0FBQSxDQUFBO0FBRUQsTUFBTSxhQUFhLEdBQUcsQ0FBTyxZQUE4QixFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsRUFBRTtJQUNqRixRQUFRLFlBQVksRUFBRTtRQUNwQixLQUFLLE9BQU8sQ0FBQyxNQUFNO1lBQ2pCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDaEIsTUFBTTtRQUVSO1lBQ0UsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxxREFBcUQsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7S0FFOUo7QUFDSCxDQUFDLENBQUEsQ0FBQTtBQUVELE1BQU0sTUFBTSxHQUFHLENBQU8sR0FBUSxFQUFFLEdBQVEsRUFBRSxFQUFFO0lBQzFDLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUE7SUFDckIsTUFBTSxHQUFHLEdBQVEsTUFBTSxJQUFBLCtCQUFrQixFQUFDLElBQUksQ0FBQyxDQUFBO0lBRS9DLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSTtRQUFFLE9BQU8sR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSwwQ0FBMEMsQ0FBQyxDQUFBO0lBRTVHLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBQSxtQ0FBaUIsRUFBQyxHQUFHLENBQUMsQ0FBQTtJQUU1QyxJQUFJLEdBQUcsS0FBSyxTQUFTO1FBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUV0RCxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztTQUMvQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1NBQ3hFLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtJQUVsRSxPQUFPLE1BQU0sR0FBRyxLQUFLLENBQUE7QUFDdkIsQ0FBQyxDQUFBLENBQUE7QUFFRCxrQkFBZSxjQUFjLENBQUEifQ==