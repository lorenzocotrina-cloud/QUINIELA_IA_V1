import axios from 'axios';
import * as cheerio from 'cheerio';

const SCORERS_URL = 'https://espndeportes.espn.com/futbol/estadisticas/_/liga/ESP.1/vista/anotaciones';
const STREAKS_URL = 'https://espndeportes.espn.com/futbol/estadisticas/_/liga/ESP.1/vista/rendimiento';

async function testScrape() {
    try {
        // 1. Scorers
        console.log('Fetching Scorers...');
        const { data: scorersData } = await axios.get(SCORERS_URL, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const $scorers = cheerio.load(scorersData);
        const scorers = [];

        // Inspect table structure
        $scorers('table tbody tr').each((i, el) => {
            if (i > 5) return; // Limit to 5
            const name = $scorers(el).find('td').eq(1).text().trim(); // Assuming col 1 is name
            const team = $scorers(el).find('td').eq(2).text().trim();
            const games = $scorers(el).find('td').eq(3).text().trim(); // P
            const goals = $scorers(el).find('td').eq(4).text().trim(); // G
            scorers.push({ name, team, games, goals });
        });
        console.log('Top Scorers Sample:', scorers);

        // 2. Streaks
        console.log('\nFetching Streaks...');
        const { data: streaksData } = await axios.get(STREAKS_URL, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const $streaks = cheerio.load(streaksData);
        const streaks = [];

        // Look for "Rachas" table. It might be one of multiple tables.
        // We'll look for a header that says "Rachas" or similar, or just dump all tables.
        $streaks('table').each((i, table) => {
            const header = $streaks(table).prev().text().trim(); // Check previous element for title
            console.log(`Table ${i} Header/Prev:`, header);

            const rows = [];
            $streaks(table).find('tbody tr').each((j, tr) => {
                if (j > 3) return;
                const cols = [];
                $streaks(tr).find('td').each((k, td) => cols.push($streaks(td).text().trim()));
                rows.push(cols);
            });
            console.log(`Table ${i} Content Sample:`, rows);
        });

    } catch (error) {
        console.error('Error:', error.message);
    }
}

testScrape();
