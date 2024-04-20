# E2E-Automation - Playwright

## Requirements
- Node.js 18+
- Compatible operating systems:
  - Windows 10+, Windows Server 2016+, or Windows Subsystem for Linux (WSL)
  - MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma
  - Debian 11, Debian 12, Ubuntu 20.04, or Ubuntu 22.04, with x86-64 or arm64 architecture.

## Installation
To install Playwright for the first time, run:

➡️ npm init playwright@latest

## Commands
Inside the project directory, you can use the following commands:

- `npx playwright test`: Runs the end-to-end tests.
- `npx playwright test --ui`: Starts the interactive UI mode.
- `npx playwright test --project=chromium`: Runs the tests only on Desktop Chrome.
- `npx playwright test example`: Runs the tests in a specific file.
- `npx playwright test --debug`: Runs the tests in debug mode.
- `npx playwright codegen`: Auto generates tests with Codegen.

Alternatively, you can add a custom script to your, this project currently has one, as shown below: `package.json`:
```json
"scripts": {
  "exec": "npx playwright test"
}
```

Then, execute the command: `npm run exec`

## Folder Structure

    +-- .github/
    |   +-- workflows/
    |   |   +-- playwright.yml
    
    +-- pages/
    |   +-- pageFactory.ts
    |   +-- header/
    |   |   +-- header.page.ts
    |   +-- login/
    |   |   +-- login.page.ts
    
    +-- tests/
    |   +-- testBase.ts
    |   +-- logInTests/
    |   |   +-- login.test.ts
    
    +-- utils/
    |   +-- global.setup.ts
    |   +-- global.teardown.ts
    
    +-- tests-data/
    |   +-- testsdata.json
    
    +-- test-results/
    
    +-- .gitignore
    +-- package-lock.json
    +-- package.json
    +-- playwright.config.ts

## Configuration
playwright.config.ts: Important configuration file for setting up the driver.

