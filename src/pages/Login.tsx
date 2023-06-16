import { Typography, Stack, Alert } from '@mui/material';
import { PageWrapper } from '../components/PageWrapper';
import { CustomButton } from '../components/Atomic/CustomButton';
import { useMutation } from '@tanstack/react-query';
import { PAGE_ROUTES } from '../router/Routes';
import { postLoginRequest } from '../services/AuthService';
import { saveTokens } from '../utils/StorageHelper';
import { useNavigate } from 'react-router-dom';
import { filterNetworkError } from '../utils/NetworkErrorFilter';

export function Login() {
  const nav = useNavigate();

  const loginService = useMutation(postLoginRequest, {
    onSuccess: (data) => {
      saveTokens(data);
      nav(PAGE_ROUTES.home, { replace: true });
    },
  });

  return (
    <PageWrapper hideBack>
      <Stack spacing={4} width="400px">
        <Typography variant="h3">Login</Typography>
        <Stack spacing={2}>
          <CustomButton
            variant="contained"
            color="primary"
            loading={loginService.isLoading}
            onClick={() => loginService.mutate({ username: 'abc', password: 'abc' })}
          >
            Test sample api call
          </CustomButton>
          {loginService.isError && (
            <Alert severity="error">{filterNetworkError(loginService.error)}</Alert>
          )}
          <CustomButton variant="outlined" color="secondary" onClick={() => nav(PAGE_ROUTES.home)}>
            Fake login
          </CustomButton>
        </Stack>
      </Stack>
    </PageWrapper>
  );
}
