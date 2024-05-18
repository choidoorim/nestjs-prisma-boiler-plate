export class ErrorResponseDto {
  readonly status: number;

  readonly code: string;

  constructor(code: string, status: number) {
    this.code = code;
    this.status = status;
  }
}
