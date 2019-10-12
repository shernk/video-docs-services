export class PlaylistItem {
  public readonly videoId: string;
  public description: string;
  public title: string;
  public thumbnailUrl: string;
  public playlistId: string;

  constructor(data?: any) {
    const defaults = {
      videoId: "",
      description: "",
      playlistId: "",
      thumbnailUrl: "",
      title: "",
      snippet: { resourceId: {}, thumnails: { medium: {} } },

      ...data
    };

    this.videoId = defaults.snippet.resourceId.videoId;
    this.description = defaults.snippet.description;
    this.title = defaults.snippet.title;
    this.playlistId = defaults.snippet.playlistId;
    this.thumbnailUrl = defaults.snippet.thumbnailUrl.medium.url;
  }
}
