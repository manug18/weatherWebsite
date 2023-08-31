import { Endpoints } from '../Endpoint';
import { getAxiosInstance } from './BaseService';
import { WeatherApiResponse } from './TestModel.data';
export interface Request {
  description: string;
}

export async function getWeather(request: Request) {
  const axios = getAxiosInstance();
  const res = await axios.get<WeatherApiResponse>(
    // Endpoints.weather + request
    `${Endpoints.weather}${request.description}`
  );

  return res.data;
}
