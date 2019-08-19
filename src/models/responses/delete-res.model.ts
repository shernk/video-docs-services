export class DeleteResponse {
  public status: number;
  public message: string;

  constructor(data?: any) {
    const defaults = {
      message: "",
      status: 200,

      ...data
    };

    this.message = defaults.message;
    this.status = defaults.status;
  }
}
