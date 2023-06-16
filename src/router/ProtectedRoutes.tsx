import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getAccessToken } from '../utils/StorageHelper';
import { PAGE_ROUTES } from './Routes';

/**
 * Checks for Authentication and Authorization and dependent routes
 * Authentication - Checks if token exists i.e user is logged in.
 * Authorization - Checks if logged-in user has access to a given resource/page.
 * Dependent Routes - Routes that need data in location state from previous route.
 * @returns Route Outlet if both checks pass
 */
export const AuthenticatedRoute: FC = () => {
  const location = useLocation();

  const savedToken = getAccessToken();
  if (!savedToken) {
    // not logged in, redirect to login page
    return (
      <Navigate
        to={{ pathname: PAGE_ROUTES.login }}
        state={{ from: location.pathname + location.search }}
      />
    );
  }

  // const isAuthorized = isCurrentRouteAllowed(
  //   savedToken as string,
  //   location.pathname as PAGE_ROUTES
  // );

  // if (!isAuthorized) {
  //   // not authorized, return 404 component
  //   return (
  //     <Navigate
  //       to={{ pathname: PAGE_ROUTES.notAllowed }}
  //       state={{ from: location.pathname + location.search }}
  //     />
  //   );
  // }

  return <Outlet />;
};
