"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Playlist {
    constructor(data) {
        const defaults = Object.assign({ items: [] }, data);
        this.items = defaults.items.map((playlistItem) => new playlistItem(playlistItem));
    }
}
exports.Playlist = Playlist;
//# sourceMappingURL=playlist.model.js.map