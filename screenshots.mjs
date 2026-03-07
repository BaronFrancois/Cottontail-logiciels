import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { resolve } from 'path';
import { pathToFileURL } from 'url';

const BREAKPOINTS = [1920, 1440, 1024, 768];
const VIEWPORT_HEIGHT = 1080;
const OUTPUT_DIR = resolve('screenshots');
const HTML_FILE = resolve('index.html');

async function run() {
    await mkdir(OUTPUT_DIR, { recursive: true });

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--disable-cache', '--disk-cache-size=0']
    });
    const page = await browser.newPage();

    const fileUrl = pathToFileURL(HTML_FILE).href;

    for (const width of BREAKPOINTS) {
        console.log(`Capturing at ${width}px...`);

        await page.setViewport({ width, height: VIEWPORT_HEIGHT });
        await page.setCacheEnabled(false);
        await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 15000 });

        // Debug: log the expertise section HTML
        const expertiseHtml = await page.evaluate(() => {
            const el = document.getElementById('expertise');
            return el ? el.innerHTML.substring(0, 500) : 'NOT FOUND';
        });
        console.log(`  Expertise HTML: ${expertiseHtml.substring(0, 200)}...`);

        // Wait a bit for any animations/fonts to load
        await new Promise(r => setTimeout(r, 1000));

        // Full page screenshot
        await page.screenshot({
            path: resolve(OUTPUT_DIR, `full-${width}.png`),
            fullPage: true,
        });

        // Expertise section screenshot
        const expertiseEl = await page.$('#expertise');
        if (expertiseEl) {
            await expertiseEl.screenshot({
                path: resolve(OUTPUT_DIR, `expertise-${width}.png`),
            });
        } else {
            console.warn(`  #expertise not found at ${width}px`);
        }

        console.log(`  Done: full-${width}.png + expertise-${width}.png`);
    }

    await browser.close();
    console.log('\nAll screenshots saved to ./screenshots/');
}

run().catch(err => {
    console.error(err);
    process.exit(1);
});
