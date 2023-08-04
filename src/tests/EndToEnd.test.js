import puppeteer from 'puppeteer';

// Increase the timeout for this describe block to 30 seconds
describe('show/hide an event details', () => {
    jest.setTimeout(10000); 
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false,
        slowMo: 250,
        timeout: 0});
          page = await browser.newPage();
    await page.goto('http://localhost:3000/');
      await page.waitForSelector('.event-container');
      
  });

  afterAll(() => {
    browser.close();
  });
  test('An event element is collapsed by default', async () => {
      const eventDetails = await page.$('.event-container .details-event');
      expect(eventDetails).toBeNull();
  });
    
  test('User can expand an event to see its details', async () => {
    await page.click('.event-container .details-button');
    const eventDetails = await page.$('.event-container .details-event');
      expect(eventDetails).toBeDefined();
      console.log("definedeventsdetails",eventDetails)
  });
    
  test('User can collapse an event to hide details', async () => {
    await page.click('.event-container .details-button');
    const eventDetails = await page.$('.event-container .details-event');
      expect(eventDetails).toBeNull();
      console.log("eventsdetails",eventDetails)
  });

});
