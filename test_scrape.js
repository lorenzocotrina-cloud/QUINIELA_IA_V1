import axios from 'axios';

async function testScrape() {
  try {
    const response = await axios.get('https://www.mundodeportivo.com/servicios/quiniela', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    console.log('Status:', response.status);
    console.log('Data length:', response.data.length);
    if (response.data.includes('VILLARREAL')) {
        console.log('Found match data!');
    } else {
        console.log('Match data not found in response.');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testScrape();
