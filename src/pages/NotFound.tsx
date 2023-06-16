import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PAGE_ROUTES } from '../router/Routes';
import { CustomButton } from '../components/Atomic/CustomButton';
import { PageWrapper } from '../components/PageWrapper';

/**
 * 404 route
 * @returns
 */
export function NotFound() {
  const nav = useNavigate();
  return (
    <PageWrapper>
      <Stack spacing={3}>
        <Stack spacing={2}>
          <Typography variant="h2">Page not found!</Typography>
          <Typography variant="h3" width="500px">
            The page you are trying to access does not exist. Please check the url and try again.
          </Typography>
        </Stack>
        <CustomButton
          color="primary"
          variant="contained"
          onClick={() => {
            nav(PAGE_ROUTES.login, { replace: true });
          }}
        >
          To Login
        </CustomButton>
      </Stack>
    </PageWrapper>
  );
}
