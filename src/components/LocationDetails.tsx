import { Card, Stack, Typography } from '@mui/material';
import { LocationData } from '../services/models/TestModel.data';
import { colors } from '../styles/Colors';
interface LocationProps {
  data: LocationData | undefined;
}
export default function LocationDetails({ data }: LocationProps) {
  return (
    <Stack>
      <Card
        elevation={3}
        sx={{ width: '400px', height: 'auto', m: 3, p: 3, bgcolor: colors.grey.grey_800 }}
      >
        <Typography color={colors.grey.grey_500}>City Name:{data?.name}</Typography>
        <Typography color={colors.grey.grey_300}>Country:{data?.country}</Typography>
        <Typography color={colors.grey.grey_300}>Time Zone:{data?.timezone_id}</Typography>
        <Typography color={colors.grey.grey_300}>Local Time:{data?.localtime}</Typography>
      </Card>
    </Stack>
  );
}
