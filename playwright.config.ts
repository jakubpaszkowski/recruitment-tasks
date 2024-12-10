import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 10000,
  },
  // zwiekszylem expecta do 10 sekund, standardowo bylo 5 sek

  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "retain-on-failure",
    video: "retain-on-failure",
    launchOptions: {
      args: [
        // "--window-position=0,0",
        // "--window-size=1920,1080",
        "--start-maximized",
      ],
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {
        // ...devices['Desktop Chrome'],
        viewport: null,
      },
    },

    /*
    {
      name: "iphone13",
      use: {
        // ...devices['Desktop Chrome'],
        ...devices["iPhone 13"],
      },
    },

    {
      name: "iphone13landscape",
      use: {
        // ...devices['Desktop Chrome'],
        ...devices["iPhone 13 landscape"],
      },
    },

    {
      name: "iphone11",
      use: {
        // ...devices['Desktop Chrome'],
        ...devices["iPhone 11"],
      },
    },

    {
      name: "iphone11landscape",
      use: {
        // ...devices['Desktop Chrome'],
        ...devices["iPhone 11 landscape"],
      },
    },

    {
      name: "iphone12landscape",
      use: {
        // ...devices['Desktop Chrome'],
        ...devices["iPhone 12 landscape"],
      },
    },

    {
      name: "iphone12",
      use: {
        // ...devices['Desktop Chrome'],
        ...devices["iPhone 12"],
      },
    },

    {
      name: "pixel7",
      use: {
        // ...devices['Desktop Chrome'],
        ...devices["Pixel 7"],
      },
    },

    {
      name: "pixel7landscape",
      use: {
        // ...devices['Desktop Chrome'],
        ...devices["Pixel 7 landscape"],
      },
    },

    */

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
