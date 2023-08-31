import { Stack, Typography, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { CustomButton } from '../components/Atomic/CustomButton';
import { colors } from '../styles/Colors';
import { WeatherApiResponse } from '../services/models/TestModel.data';
import LocationDetails from '../components/LocationDetails';
import Weather from '../components/Weather';
import DisplayLottie from '../components/DisplayLottie';
import home from '../assets/lottieFiles/home2.json';
import { getWeather } from '../services/models/Weather';
import { useQuery } from '@tanstack/react-query';
import wait from '../assets/lottieFiles/wait.json';
export function Home() {
  const [description, setDescription] = useState('');

  const handleDescChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setDescription(event.target.value);
  };

  const weatherService = useQuery({
    queryKey: ['get-weather'],
    queryFn: () => getWeather({ description }),
    enabled: false,
  });

  const [weatherData, setWeatherData] = useState<WeatherApiResponse>();

  const handleSave = () => {
    weatherService.refetch();
  };

  useEffect(() => {
    if (weatherService.data) {
      setWeatherData(weatherService.data);
    }
  }, [weatherService.data]);
  return (
    <Stack width={'100%'} height={'100%'} bgcolor={colors.black.black_800} direction="row">
      <Stack width={'50%'}>
        {' '}
        <DisplayLottie animationData={home} />
      </Stack>

      <Stack>
        <Typography color={colors.black.black_600} mt={3}>
          Enter the City Name you want to proceed
        </Typography>
        <Stack direction={'row'} mt={2}>
          <TextField
            id="outlined-basic"
            label="Enter the City Name"
            value={description}
            onChange={handleDescChange}
            fullWidth
            sx={{ ml: 2, mr: 2, color: colors.grey.grey_300 }}
          />
          <CustomButton
            size={'small'}
            onClick={handleSave}
            loading={weatherService.isFetching}
            sx={{ backgroundColor: colors.blue.blue_200 }}
          >
            Get Details
          </CustomButton>
        </Stack>
        {weatherService.isFetching && <DisplayLottie animationData={wait} />}

        {weatherData && (
          <>
            <LocationDetails data={weatherData?.location} />
            <Weather data={weatherData?.current} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
