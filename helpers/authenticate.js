import puppeteer from "puppeteer";

export async function getBearerToken() {
  const environments = {
    QA1: "https://web-qa1.l2w-test.nikecloud.com",
    QA2: "https://web-qa2.l2w-test.nikecloud.com",
    Staging: "https://innovation.nikedev.com",
    auth: "https://accounts.nikedev.com/lookup?client_id=b2a46dd1cffab5934255c6c02747d944&redirect_uri=https://web-qa1.l2w-test.nikecloud.com/oidc/authorize_code/v1&response_type=code&scope=nike.digital%20openid%20profile%20email%20phone%20flow&state=06edf51930ce47d6b7333f07d8e0d222&code_challenge=9alLsF4_dzs-kD68lTj2ksrwqEFyigJMGJyeoBMY87o&code_challenge_method=S256",
  };


    const browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        dumpio: true 
    })

  const page = await browser.newPage()

  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36')
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
  })


  await page.goto(environments.auth)

  const cookies = await page.cookies()
  await page.setCookie(...cookies)
  await page.setCacheEnabled(false)
  await page.waitForFunction(() => document.readyState === 'complete');

  page.on('request', request => {
    console.log('Request URL:', request.url());
  });
  
  page.on('response', response => {
    console.log('Response URL:', response.url());
    console.log('Response Status:', response.status());
  })

//   // Enter username -> Continue
  await page.waitForSelector("#username");
  await page.type("#username", "leon@plusqa.com")

  await page.waitForSelector(".nds-btn.css-hj7pkf.btn-primary-dark.btn-md")
  const continueButton = await page.$(".nds-btn.css-hj7pkf.btn-primary-dark.btn-md")
  continueButton.click()

//   await page.waitForNavigation({ waitUntil: 'networkidle0' })


//   const pages = await browser.pages()
//   const nextPage = pages[1]
//   await nextPage.bringToFront()
//   console.log("first page", pages[0].url())
//   console.log("second page", pages[1].url())

  //Enter Password -> Sign in
//   await page.waitForSelector("button")
//   await page.type("#password", "Plusqa123!")

//   await nextPage.waitForSelector(".nds-btn.css-hj7pkf.btn-primary-dark.btn-md")
//   const signInButton = await nextPage.$(".nds-btn.css-hj7pkf.btn-primary-dark.btn-md")

//   if (signInButton) {
//     const elementText = await page.evaluate(el => el.textContent, signInButton)
//     if (elementText === "Sign in") {
//       console.log("button found")
//       element.click()
//     }
//   }

//   console.log(nextPage.url())

//   if (signInButton) {
//     console.log("button found")
//     signInButton.click()
//   }
}

getBearerToken()
