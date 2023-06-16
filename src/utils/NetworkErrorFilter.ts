export const DEFAULT_ERROR = 'Something went wrong. Try again later';

export function filterNetworkError(err: any) {
  // Accessing general axios response object.
  // Change keys if using custom response payload
  if (err.response && err.response.data) {
    return err.response.data.message || DEFAULT_ERROR;
  }
  return err.message || DEFAULT_ERROR;
}
