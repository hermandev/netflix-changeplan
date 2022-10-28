const webdriver = require("selenium-webdriver");
require("chromedriver");

// const cookies = [
//     {
//         domain: '.netflix.com',
//         expiry: 1698446880,
//         httpOnly: false,
//         name: 'OptanonConsent',
//         path: '/',
//         sameSite: 'Lax',
//         secure: false,
//         value: 'isIABGlobal=false&datestamp=Fri+Oct+28+2022+06%3A48%3A00+GMT%2B0800+(Central+Indonesia+Time)&version=6.6.0&consentId=fe1fd662-c4e3-49a9-92df-c12673b2e523&interactionCount=0&landingPath=https%3A%2F%2Fwww.netflix.com%2Fid-en%2Flogin%3Fnextpage%3Dhttps%253A%252F%252Fwww.netflix.com%252Fchangeplan&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1&hosts=H12%3A1%2CH13%3A1%2CH51%3A1%2CH45%3A1%2CH46%3A1%2CH52%3A1%2CH48%3A1%2CH49%3A1'
//     },
//     {
//         domain: '.netflix.com',
//         expiry: 1666921678,
//         httpOnly: false,
//         name: 'flwssn',
//         path: '/',
//         secure: false,
//         value: 'fbdc1f74-f157-47f9-b7d9-5708c0282f17'
//     },
//     {
//         domain: '.netflix.com',
//         expiry: 1698446877,
//         httpOnly: true,
//         name: 'NetflixId',
//         path: '/',
//         sameSite: 'Lax',
//         secure: true,
//         value: 'v%3D2%26ct%3DBQAOAAEBEGDmhIlW6eUK8evAbcpumoOBACOO_arI-fJ08lzAzST9MhxL73KTsgXdlQSIvH5Ggb3UX7fgId6frdJklNFsuo9J6ICKTLvsof7h4REexYP1MxMBw8lHXHBZHwJTRZDiu-NxCx-OjNabyeDAp2atl8BTURzg__-YIfZjquvnKNPGFjZbrpMc6HVadWL6OoNMV2pbUi-e42AVIXsn49_RvUZWLoDUSeIC5TzN2sG9Akw8Kdgaz-yo3S1DlKNRbaZuMG6LSEjFRUyQ6Q46yoEbAyunGsPzdXjc4O7Y-BsFapBd-in1gpcIfYBQrCGxSTye14elyOtjm4jIpM6OVWdCn5E3qkibIARFEUg9oHVkHk4YJkM.%26bt%3Ddev%26mac%3DAQEAEAABABQjFlNdjsC30uwRKxhNtqok9JkaChUo_K8.'
//     },
//     {
//         domain: '.netflix.com',
//         expiry: 1698446880,
//         httpOnly: false,
//         name: 'memclid',
//         path: '/',
//         secure: false,
//         value: 'fde1eb05-f09c-4c9f-9a91-16a6a5d4b61a'
//     },
//     {
//         domain: '.netflix.com',
//         expiry: 1698446877,
//         httpOnly: true,
//         name: 'SecureNetflixId',
//         path: '/',
//         sameSite: 'Strict',
//         secure: true,
//         value: 'v%3D2%26mac%3DAQEAEQABABTXBEa62k7AwcsHKU8-6iXIcOpOmAtq8pM.%26dt%3D1666910877058'
//     },
//     {
//         domain: '.netflix.com',
//         expiry: 1698446877,
//         httpOnly: false,
//         name: 'nfvdid',
//         path: '/',
//         secure: false,
//         value: 'BQFmAAEBEKhlDnZUTJP3kfMtR_RQ7xZA64T4VYgO0xfOx7d9p03YDquvDrBlfcUEI8KfqX7r5K-Yp8qftFeoNrP4ZHa4oT2DWdM81FoeQRDT78Hbavplbg%3D%3D'
//     }
// ]

(async function App() {
    const driver = await new webdriver.Builder().forBrowser('chrome').build();
    const By = await webdriver.By
    await driver.navigate().to("https://www.netflix.com/changeplan")
    await driver.findElement(By.id("id_userLoginId")).sendKeys("1210ninjakid@netx.store")
    await driver.findElement(By.id("id_password")).sendKeys("444444")
    await driver.findElement(By.className("btn login-button btn-submit btn-small")).click()
    await driver.findElement(By.xpath('//*[@id="appMountPoint"]/div/div/div[2]/div/div/div[2]/label[3]')).click()
    await driver.findElement(By.xpath('//*[@id="appMountPoint"]/div/div/div[2]/div/div/div[3]/button[1]')).click()
    await driver.findElement(By.xpath('//*[@id="appMountPoint"]/div/div/div[2]/div/div/div[4]/div/footer/div/button[1]')).click()
})()
