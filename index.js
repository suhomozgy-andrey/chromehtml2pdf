#!/usr/bin/env node
const p = require("puppeteer");
const fs = require("fs");
const getCookies = require("./cookies");
const getPages = require("./pages");

const screenshotsFolderName = "./screenshots";

(async () => {
  try {
    const launchConfig = {
      headless: false,
      defaultViewport: {
        width: 1440,
        height: 2000,
      },
    };

    const browser = await p.launch(launchConfig);
    const pages = getPages();
    fs.rmdirSync(screenshotsFolderName, { recursive: true });
    fs.mkdirSync(screenshotsFolderName);
    const fetchesArray = pages.map(async (url) => {
      const page = await browser.newPage();
      const cookies = getCookies({ url: url });
      await page.setCookie(...cookies);
      await page.goto(url);
      await page.screenshot({
        path: `${screenshotsFolderName}/${url
          .replace(/http(s)?:\/\//i, "")
          .replace("/", "_")}.jpg`,
      });
      await page.close();
    });

    let results = await Promise.all([...fetchesArray]);
    await browser.close();
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
