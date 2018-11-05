'use strict'
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;
const { Given, Then, When } = require('cucumber');

const Home = require('../pages/home_page.js');

Given('que eu esteja na pagina inicial do google', function () {
  browser.get("/")
});


When('Realizar uma busca', function () {
  const home = new Home();
  home.pesquisa();
});


Then('vejo o resultado da pesquisa', function () {
  expect(element(by.id('#rso')).isPresent())
  
});


