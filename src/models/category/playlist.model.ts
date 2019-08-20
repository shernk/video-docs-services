import { PlaylistItem } from "../category/playlist-item.model";

export class Playlist {
  public items: PlaylistItem[];

  constructor(data?: any) {
    const defaults = {
      items: [],

      ...data
    };

    this.items = defaults.items.map(
      (playlistItem: any) => new playlistItem(playlistItem)
    );
  }
}
