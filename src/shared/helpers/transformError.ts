import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ServerErrors } from 'src/entities/types/serverErrors';

export const transformError = (error: FetchBaseQueryError) => {
  if ('status' in error) {
    const serverErrors = error.data as ServerErrors;
    return serverErrors.errors[0]?.message;
  }
  return error;
};
