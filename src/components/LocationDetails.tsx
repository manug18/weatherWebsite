import { Card, Stack, Typography } from '@mui/material';
import React from 'react';
import { LocationData } from '../services/models/TestModel.data';
interface LocationProps {
  data: LocationData | undefined;
}
export default function LocationDetails({ data }: LocationProps) {
  return (
    <Stack>
      <Card elevation={3} sx={{ width: '30%', height: 'auto', m: 3, p: 3 }}>
        <Typography>City Name:{data?.name}</Typography>
        <Typography>Country:{data?.country}</Typography>
        <Typography>Time Zone:{data?.timezone_id}</Typography>
        <Typography>Local Time:{data?.localtime}</Typography>
      </Card>
    </Stack>
  );
}
