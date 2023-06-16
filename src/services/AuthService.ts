import { getAxiosInstance, getNetworkConfig } from './BaseService';
import { LoginRequest, LoginResponse } from './models/AuthModel.data';
import { Endpoints } from './Endpoint';

export async function postLoginRequest(request: LoginRequest) {
  const axios = getAxiosInstance();
  const res = await axios.post<LoginResponse>(Endpoints.login, request, getNetworkConfig(false));
  return res.data;
}

export async function postLogoutRequest() {
  const axios = getAxiosInstance();
  const res = await axios.post(Endpoints.logout, {}, getNetworkConfig());
  return res.data;
}
