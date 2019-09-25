export class PlaylistItem {
  public readonly videoId: string;
  public description: string;
  public title: string;
  public thumbnailUrl: string;

  constructor(data?: any) {
    const defaults = {
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
    this.thumbnailUrl = defaults.snippet.thumbnailUrl.medium.url;
  }
}
