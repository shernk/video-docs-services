export class PlaylistItem  {
  public readonly videoId: string;
  public description: string;
  public title: string;
  public thumbnailUrl: string;
  public playlistId: string;

  constructor(data?: any) {
    const defaults = {
      id: "",
      title: "",
      description: "",
      playlistId: "",
      videoId: "",
      thumbnailUrl: "",
      snippet: { resourceId: {}, thumnails: { medium: {} } },

      ...data
    };
    
    this.playlistId = defaults.snippet.playlistId;
    this.videoId = defaults.snippet.resouceId.videoId;
    this.description = defaults.snippet.description;
    this.title = defaults.snippet.title;
    this.thumbnailUrl = defaults.snippet.thumbnailUrl.medium.url;
  }
}
