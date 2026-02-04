// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
 
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [
    ['html'],
    ['list'],
    ['allure-playwright']
  ],
  timeout: 40*1000,   //default time is 30s but we set 40s
  expect: {timeout: 50*1000 },  //time for  assertion 
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: "chromium",
    headless: false,
    screenshot: 'on',
    trace: 'on',    //to get report of page
    video: 'on'
  },

  /* Configure projects for major browsers */

});

