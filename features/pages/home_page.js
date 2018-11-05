'use strict'
 
class Home {
    constructor() {
    this.input_field = element(by.id('#lst-ib'));
    this.btn_search = element(by.id('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)'));
    }
   
   pesquisa(){
    this.input_field.sendKeys('protractor');
    this.btn_search.click
   }
      
}



module.exports = Home;




