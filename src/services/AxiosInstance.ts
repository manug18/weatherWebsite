import axios from 'axios';
import { getBaseUrl } from '../AppSettings';

const AxiosInstance = axios.create({
  baseURL: getBaseUrl(),
});

export default AxiosInstance;
