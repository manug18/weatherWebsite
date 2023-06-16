import { Typography, Stack, Alert } from '@mui/material';
import { PageWrapper } from '../components/PageWrapper';
import { CustomButton } from '../components/Atomic/CustomButton';
import { useMutation } from '@tanstack/react-query';
import { PAGE_ROUTES } from '../router/Routes';
import { postLoginRequest } from '../services/AuthService';
import { saveTokens } from '../utils/StorageHelper';
import { useNavigate } from 'react-router-dom';
import { filterNetworkError } from '../utils/NetworkErrorFilter';
import { useState } from 'react';

export function Login() {
  const nav = useNavigate();

  const [fakeLogin, setFakeLogin] = useState(false);

  const loginService = useMutation(postLoginRequest, {
    onSuccess: (data) => {
      saveTokens(data);
      nav(PAGE_ROUTES.home, { replace: true });
    },
    onError: () => {
      if (fakeLogin) {
        saveTokens({
          accessToken: 'some-token',
          refreshToken: 'sometoken',
        });
      }
    },
  });

  return (
    <PageWrapper>
      <Stack spacing={4}>
        <Typography variant="h3">Login</Typography>
        <CustomButton
          loading={loginService.isLoading}
          onClick={() => loginService.mutate({ username: 'abc', password: 'abc' })}
        >
          Test sample api call
        </CustomButton>
        {loginService.isError && (
          <Alert severity="error">{filterNetworkError(loginService.error)}</Alert>
        )}
        <CustomButton variant="outlined" color="secondary" onClick={() => setFakeLogin(true)}>
          Fake login: {fakeLogin}
        </CustomButton>
      </Stack>
    </PageWrapper>
  );
}
