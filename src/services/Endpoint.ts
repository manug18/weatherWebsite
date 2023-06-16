export enum Endpoints {
  login = 'auth/login',
  logout = 'auth/logout',
  test_posts = 'posts',
  test_comments = 'comments',
}

/**
 * Unauthenticated routes
 * Endpoints that do not redirect to login on auth error
 */
export const UNAUTHENTICATED_ROUTES = [Endpoints.login];
