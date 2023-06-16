export const DEFAULT_ERROR = 'Something went wrong. Try again later';

interface ErrorResponse {
  message?: string;
  response?: {
    data?: {
      message?: string;
    };
  };
}

export function filterNetworkError(err: ErrorResponse) {
  if (err.response && err.response.data) {
    return err.response.data.message || DEFAULT_ERROR;
  }
  return err.message || DEFAULT_ERROR;
}
