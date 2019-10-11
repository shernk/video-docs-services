import { ChannelID } from "./../../../models/enums/api-keys.enum";

export class VideoController {
  private base = "https://www.googleapis.com/youtube/v3";

  public async getPlayListById(playlistId: string) {
    const options = `playlist?part=snippet&channelId=${ChannelID.Youtube}&maxResults=50&key=AIzaSyCMJlO9sHx-o_-UThFPXIxIjbW42GSZeVM`;

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
