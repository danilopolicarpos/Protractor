'use strict'
 
class Home_Page {
    constructor() {
    this.logo = element(by.id('hplogo'))    
    this.input_field = element(by.css('input.gLFyf.gsfi'));
    this.btn_search = element(by.css('#tsf > div:nth-child(2) > div > div.UUbT9 > div.aajZCb > div > center > input[type="submit"]:nth-child(1)'));
    }
   
   pesquisa(texto){
    this.input_field.sendKeys(texto);
    return this.btn_search.click
    
   }
      
}



module.exports = Home_Page;




