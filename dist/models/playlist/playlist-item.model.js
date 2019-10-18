"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlaylistItem {
    constructor(data) {
        const defaults = Object.assign({ id: "", title: "", description: "", playlistId: "", videoId: "", thumbnailUrl: "", snippet: { resourceId: {}, thumnails: { medium: {} } } }, data);
        this.playlistId = defaults.snippet.playlistId;
        this.videoId = defaults.snippet.resouceId.videoId;
        this.description = defaults.snippet.description;
        this.title = defaults.snippet.title;
        this.thumbnailUrl = defaults.snippet.thumbnailUrl.medium.url;
    }
}
exports.PlaylistItem = PlaylistItem;
//# sourceMappingURL=playlist-item.model.js.map