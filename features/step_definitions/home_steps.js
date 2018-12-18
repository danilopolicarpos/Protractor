'use strict'
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;
const { Given, Then, When } = require('cucumber');

const Home_Page = require('../page_object/home_page.js');
const home = new Home_Page();
const protractorHelper = require("protractor-helper");

Given('que eu esteja na pagina inicial do google',  async function () {
  browser.get("/")
  await expect(home.logo.isPresent()).to.eventually.be.true
});


When('Realizar uma busca', async function () {
  await expect(home.input_field.isPresent()).to.eventually.be.true
  await home.pesquisa('protector')
  
});


Then('vejo o resultado da pesquisa', async function () {
  await expect(home.input_field.isPresent()).to.eventually.be.true
});


