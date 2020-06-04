import Axios from 'axios';

const apiKey = '73a2046d-9aac-4537-848e-592855eeaf27';

export const request = Axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  timeout: 3000,
  headers: { 'x-api-key': apiKey },
});
