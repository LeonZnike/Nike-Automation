# User_api Automation Tests

Test suite for user_api 

## Install and setup

Install node and npm if not installed
In the terminal check the node version to check if it's installed. If not you can download it [here](https://nodejs.org/en/download/package-manager)
```bash
node -v
```

Download the repo and open the project in an IDE like VScode
In the terminal in the project directory run:
```bash
npm install
```

## Authentication

Currently there's no feature to programatically authenticate the requests so you will need to obtain a bearer token from the front-end
For example if you're testing QA1 navigate and sign into https://web-qa1.l2w-test.nikecloud.com/
Then open the inspector and navigate to the `Network` tab and find the `POST - api-test.nikecloud.com` entry.
Then select the `Headers` tab and copy the authorization token without the 'Bearer" keyword

![Bearer Token](/public/token.png?raw=true "Bearer Token")

Paste the token into the `bearerToken` property in the variables.js file

![Variables](/public/variables.png?raw=true "Variables")

Keep in mind the bearer token is only valid for 30 minutes. You will need to sign back in and grab a new one after it's expired.

## Initializer

To make sure these tests run correctly especially with a fresh account, the data needs to be populated first. So I created an initializer
that will create the main objects that the tests will require. 

Enter into the terminal:
```bash
npm run initializer
```

## Running Tests

Once installed locate the package.json file in the root. All of the test commands are in scripts
There is a test command for each version (v1/v2/v3), each environment (qa1, qa1) and current/upmId routes

Example command pattern is as follows:

Enter into the terminal
```bash
sudo npm run test-qa1-v1-current-audiences
```

This will test all the endpoints within the v1/current/audiences folder

## Troubleshooting

If there's a permissions error you might need to reinstall the node packages, please run:
```bash
rm -rf node_modules
npm install
```

