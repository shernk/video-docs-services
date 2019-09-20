export class ErrorResponse {
  public status: number;
  public message: string;

  constructor(data?: any) {
    const defaults = {
      message: "",
      status: 401,

      ...data
    };

    this.message = defaults.message;
    this.status = defaults.status;
  }
}
