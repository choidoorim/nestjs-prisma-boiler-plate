import { ApplicationException } from '@common/exception';

export class RequestNotValidException extends ApplicationException {
  constructor(message: string) {
    super(message, 400, 'REQUEST-NOT_VALID');
  }
}
