import { Card, Stack, Typography } from '@mui/material';
import { CurrentData, LocationData } from '../services/models/TestModel.data';
import { colors } from '../styles/Colors';
interface WeatherProps {
  data: CurrentData | undefined;
}
export default function Weather({ data }: WeatherProps) {
  return (
    <Stack>
      <Card
        elevation={3}
        sx={{ width: '400px', height: 'auto', m: 3, p: 3, bgcolor: colors.grey.grey_800 }}
      >
        <Typography color={colors.grey.grey_300}>Humidity:{data?.humidity}%</Typography>
        <Typography color={colors.grey.grey_300}>Temprature:{data?.temperature}°C</Typography>
        <Typography color={colors.grey.grey_300}>Pressure:{data?.pressure}MB</Typography>
        <Typography color={colors.grey.grey_300}>Visibility:{data?.visibility}</Typography>
        <Typography color={colors.grey.grey_300}>
          Feels Like Temprature:{data?.feelslike}°C
        </Typography>
        <Typography color={colors.grey.grey_300}>Cloud Cover:{data?.cloudcover}%</Typography>
      </Card>
    </Stack>
  );
}
