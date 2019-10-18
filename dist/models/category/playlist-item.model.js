"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlaylistItem {
    constructor(data) {
        const defaults = Object.assign({ description: "", playlistId: "", thumbnailUrl: "", title: "", snippet: { resourceId: {}, thumnails: { medium: {} } } }, data);
        this.videoId = defaults.snippet.resourceId.videoId;
        this.description = defaults.snippet.description;
        this.title = defaults.snippet.title;
        this.thumbnailUrl = defaults.snippet.thumbnailUrl.medium.url;
    }
}
exports.PlaylistItem = PlaylistItem;
//# sourceMappingURL=playlist-item.model.js.map