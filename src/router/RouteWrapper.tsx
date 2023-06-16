// import { AuthenticatedRoute } from './ProtectedRoutes';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PAGE_ROUTES } from './Routes';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Layout } from '../components/Layout';
import { NotFound } from '../pages/NotFound';

export function RoutesWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={PAGE_ROUTES.login} element={<Login />} />
          <Route path={PAGE_ROUTES.notFound} element={<NotFound />} />

          {/* <Route path={PAGE_ROUTES.home} element={<AuthenticatedRoute />}> */}
          <Route path={PAGE_ROUTES.home} element={<Home />} />
          {/* </Route> */}

          <Route path="*" element={<Navigate replace to={PAGE_ROUTES.notFound} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
