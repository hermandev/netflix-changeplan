const { Builder, By } = require('selenium-webdriver');
require("chromedriver");



(async function helloSelenium() {
  let driver = await new Builder().forBrowser('chrome').build();
  await login(driver)

})();

// const openRedemPage = async (driver) => {
//   await driver.get('https://www.netflix.com/redeem');
//   await driver.findElement(By.xpath('//*[@id="id_code"]')).sendKeys("NOMOR-REDEEM")
//   await driver.findElement(By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div[2]/form/div[1]/button')).click().then(async () => {
//     await driver.switchTo().newWindow('tab');
//     const url = await driver.getCurrentUrl()
//     await driver.get(url);
//     await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div[2]/div/div/div/form/div/button[1]')).click()
//     await changePlan(driver)
//   })
// }


const login = async (driver) => {

  let username = "USERNAME"
  let password = "PASSWORD"
  await driver.get('https://www.netflix.com/login');
  console.log("Login")
  await driver.findElement(By.id("id_userLoginId")).sendKeys(username)
  await driver.findElement(By.id("id_password")).sendKeys(password)
  await driver.findElement(By.className("btn login-button btn-submit btn-small")).click()
  await changePlan(driver)
}

const changePlan = async (driver) => {
  console.log("Get Change Plan Page")
  await driver.get('https://www.netflix.com/changeplan')
  const url = await driver.getCurrentUrl()
  if (url !== "https://www.netflix.com/changeplan") {
    console.log("Brute Force Link")
    changePlan(driver)
  } else {
    await driver.findElement(By.xpath('//*[@id="appMountPoint"]/div/div/div[2]/div/div/div[2]/label[3]')).click()
    await driver.findElement(By.xpath('//*[@id="appMountPoint"]/div/div/div[2]/div/div/div[3]/button[1]')).click()
    await driver.findElement(By.xpath('//*[@id="appMountPoint"]/div/div/div[2]/div/div/div[4]/div/footer/div/button[1]')).click()
    await console.log("Change Plan To Premium")
  }


}
