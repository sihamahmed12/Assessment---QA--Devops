
import { Builder, Capabilities, By } from "selenium-webdriver"
import { DOUBLE } from "sequelize/types"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test ('draw button displays div', async()=>{
    const playerduo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerduo.isDisplayed();
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath('//*[text() = "Add to Duo"]')).click()
    expect(displayed).toBe(true)
})


