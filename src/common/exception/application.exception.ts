// NOTE: Add required fields to exception response
export abstract class ApplicationException extends Error {
  readonly httpStatus: number;

  readonly code: string;

  protected constructor(message: string, httpStatus: number, code: string) {
    super(message);
    this.httpStatus = httpStatus;
    this.code = code;
  }
}
