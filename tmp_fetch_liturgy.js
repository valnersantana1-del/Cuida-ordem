const today = new Date().toISOString().slice(0, 10);
const urls = [
  'https://leccionario.net/api/date/' + today,
  'https://www.liturgia.net/api/daily/' + today
];

async function fetchLiturgia() {
  for (const url of urls) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Status: ' + response.status);
      }
      const data = await response.json();
      console.log('Dados recebidos de:', url);
      console.log(data);
    } catch (error) {
      console.error('Erro ao buscar:', url, error.message);
    }
  }
}

fetchLiturgia();