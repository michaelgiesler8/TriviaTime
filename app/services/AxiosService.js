export const triviaApi = axios.create({
  baseUrl: 'https://opentdb.com/api.php?amount=20',
  timeout: 5000
});