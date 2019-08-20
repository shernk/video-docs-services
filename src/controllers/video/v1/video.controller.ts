import { ApiKeys } from "./../../../models/enums/api-keys.enum";

export class VideoController {
  private base = "https://www.googleapis.com/youtube/v3";

  public async getPlayListById(playlistId: string) {
    const options = `playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${
      ApiKeys.Youtube
    }`;
    const route = `${this.base}/${options}`;

    try {
      const res = await fetch(route);
      const json = await res.json();

      return json;
    } catch (err) {
      return {};
    }
  }
}
