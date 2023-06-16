import { Typography, Stack, Skeleton } from '@mui/material';
import { PageWrapper } from '../components/PageWrapper';

export function Home() {
  return (
    <PageWrapper
      skeleton={
        <Stack direction="row" spacing={2} alignItems="center">
          <Skeleton height={30} width="80%" />
          <Skeleton height={50} width="100%" />
        </Stack>
      }
    >
      <Stack>
        <Typography variant="h3">Home</Typography>
      </Stack>
    </PageWrapper>
  );
}
