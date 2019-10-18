"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_keys_enum_1 = require("./../../../models/enums/api-keys.enum");
class VideoController {
    constructor() {
        this.base = "https://www.googleapis.com/youtube/v3";
    }
    getPlayListById(playlistId) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = `playlistItems?part=snippet&playlistId=${api_keys_enum_1.Credentials.playlistId}&maxResults=50&key=${api_keys_enum_1.Credentials.API}`;
            const route = `${this.base}/${options}`;
            try {
                const res = yield fetch(route);
                const json = yield res.json();
                return json;
            }
            catch (err) {
                return {};
            }
        });
    }
}
exports.VideoController = VideoController;
//# sourceMappingURL=video.controller.js.map