import { Stack, Skeleton, Typography, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { CustomButton } from '../components/Atomic/CustomButton';
import { colors } from '../styles/Colors';
import axios from 'axios';
import { WeatherApiResponse } from '../services/models/TestModel.data';
import LocationDetails from '../components/LocationDetails';
import Weather from '../components/Weather';

export function Home() {
  const [description, setDescription] = useState('');

  const handleDescChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setDescription(event.target.value);
  };

  const [weatherData, setWeatherData] = useState<WeatherApiResponse>();
  const handleSave = () => {
    const apiUrl = `http://api.weatherstack.com/current?access_key=fb6607371c7b2f1a71bcd9f33b4454a2&query=${description}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  return (
    <Stack width={'100%'} height={'100%'} bgcolor={colors.black.black_800}>
      <Stack direction="row" width={'100%'}>
        <Stack>
          <Typography color={colors.black.black_600}>
            Enter the City Name you want to proceed
          </Typography>
        </Stack>
        <TextField
          id="outlined-basic"
          label="City Name"
          value={description}
          onChange={handleDescChange}
          // variant="outlined"
          size="small"
          sx={{ mt: 2, ml: 2, mr: 2, color: colors.grey.grey_300 }}
        />
        <CustomButton
          // variant="contained"
          onClick={handleSave}
          // loading={addTaskService.isSuccess}
          sx={{ backgroundColor: colors.blue.blue_200, width: '6rem' }}
        >
          Save
        </CustomButton>
      </Stack>
      <Stack direction={'row'}>
        <LocationDetails data={weatherData?.location} />
        <Weather data={weatherData?.current} />
      </Stack>
    </Stack>
  );
}
