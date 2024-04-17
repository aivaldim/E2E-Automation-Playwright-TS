# E2E-Automation - Playwright

Requirements to run successfully this project:
- Node.js 18+
- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
- MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma.
- Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64 architecture.

Commands to keep in mind:

Install PW for the first time:
npm init playwright@latest

Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

  Has been added a way to execute the tests not only using the original npx command, so see the following:
  
  | "scripts": {
  |   "exec": "npx playwright test"
  | }, 

  Then, its needed to execute the command: "npm run exec"