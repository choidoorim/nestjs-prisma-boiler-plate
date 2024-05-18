import { ArgumentsHost, Catch, HttpStatus, Logger } from '@nestjs/common';
import type { Request, Response } from 'express';

import { ErrorResponseDto } from '../dto';
import { ApplicationException } from '../exception';

@Catch()
export class AllExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();

    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const httpStatus =
      exception instanceof ApplicationException
        ? exception.httpStatus
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse = this.setErrorResponse(exception, httpStatus);

    response.status(httpStatus).json(errorResponse);
  }

  private setErrorResponse(
    exception: unknown,
    httpStatus: number,
  ): ErrorResponseDto {
    Logger.error(exception instanceof Error ? exception.message : exception);

    if (exception instanceof ApplicationException) {
      return new ErrorResponseDto(exception.code, httpStatus);
    }

    return new ErrorResponseDto('UNKNOWN_ERROR', httpStatus);
  }
}
