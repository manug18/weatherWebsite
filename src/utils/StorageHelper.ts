// Add getter-setter from every key in local storage

import { PAGE_ROUTES } from '../router/Routes';
import { LoginResponse } from '../services/models/AuthModel.data';

export enum STORAGE_KEYS {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
}

export function saveTokens(data: LoginResponse) {
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.accessToken);
  localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);
}

export function clearTokens() {
  localStorage.clear();
  window.location.href = PAGE_ROUTES.login;
}

export function getAccessToken() {
  return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
}

export function getRefreshToken() {
  return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
}

export function isLoggedIn() {
  return !!localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
}
