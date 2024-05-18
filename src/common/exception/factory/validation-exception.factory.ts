import { ValidationError } from '@nestjs/common';

import { RequestNotValidException } from '@common/exception';

const validationPipeExceptionFactory = (errors: ValidationError[]) => {
  if (!errors[0].constraints) {
    throw new RequestNotValidException('Invalid Request Error');
  }

  const keyList = Object.keys(errors[0].constraints);
  const errorMessage = keyList
    .map((key) => (errors[0].constraints ? errors[0].constraints[key] : ''))
    .join(', ');

  throw new RequestNotValidException(errorMessage);
};

export default validationPipeExceptionFactory;
