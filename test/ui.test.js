import { Builder, By } from 'selenium-webdriver';
import { expect } from 'chai';

describe('UI Testing using Selenium', function() {
    this.timeout(30000); // Set timeout for Mocha tests
    let driver;

    // Inisialisasi WebDriver sebelum menjalankan test case
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // Tutup WebDriver setelah semua test selesai
    after(async function() {
        await driver.quit();
    });

    it('should load the login page', async function() {
        await driver.get('file:///C:/ppmpl-prak4/login.html');  // Pastikan path sesuai dengan lokasi file Anda
        const title = await driver.getTitle();
        expect(title).to.equal('Login Page');
    });

    it('should input username and password', async function() {
        await driver.findElement(By.css('#username')).sendKeys('testuser');
        await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys('password123');
        const usernameValue = await driver.findElement(By.css('#username')).getAttribute('value');
        const passwordValue = await driver.findElement(By.xpath('//*[@id="password"]')).getAttribute('value');
        expect(usernameValue).to.equal('testuser');
        expect(passwordValue).to.equal('password123');
    });

    it('should click the login button', async function() {
        await driver.findElement(By.css('#loginButton')).click();
        // Simulasi login berhasil (validasi bisa ditambahkan sesuai dengan kebutuhan)
    });

    // 1. Validasi pada Login Gagal
    it('should show error message on failed login', async function() {
        await driver.findElement(By.css('#username')).clear();  // Kosongkan field
        await driver.findElement(By.css('#username')).sendKeys('wronguser');
        await driver.findElement(By.css('#password')).clear();
        await driver.findElement(By.css('#password')).sendKeys('wrongpass');
        await driver.findElement(By.css('#loginButton')).click();
    
        // Periksa apakah pesan error ditampilkan
        const errorMessage = await driver.findElement(By.id('errorMessage'));
        const isErrorDisplayed = await errorMessage.isDisplayed();
        const errorText = await errorMessage.getText();
    
        // Validasi bahwa pesan error terlihat dan teksnya benar
        expect(isErrorDisplayed).to.be.true;
        expect(errorText).to.equal('Invalid username or password');
    });    

    // 2. Melakukan Validasi Visual
    it('should validate that login button is displayed', async function() {
        const isDisplayed = await driver.findElement(By.id('loginButton')).isDisplayed();
        expect(isDisplayed).to.be.true;
    });

    it('should validate that username and password fields are displayed', async function() {
        const isUsernameDisplayed = await driver.findElement(By.css('#username')).isDisplayed();
        const isPasswordDisplayed = await driver.findElement(By.xpath('//*[@id="password"]')).isDisplayed();
        expect(isUsernameDisplayed).to.be.true;
        expect(isPasswordDisplayed).to.be.true;
    });
});
