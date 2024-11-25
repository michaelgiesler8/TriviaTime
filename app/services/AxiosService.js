import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const triviaApi = axios.create({
  baseUrl: process.env.TRIVIA_API_URL,
  timeout: 5000
});