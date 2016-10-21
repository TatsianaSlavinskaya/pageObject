var EC = protractor.ExpectedConditions;
  homePageLocators = {

  waitingHomePAge : EC.visibilityOf($('.about')), 
  linkToStartLogin :  element(by.css('.js-external-login-action')),
  iframe : element(by.className('kp2-authapi-iframe')),
  userLogin :  element(by.name('login')),
  userPassword : element(by.name('password')),
  buttonToLogin : element.all(by.css('button.button_type_action')).get(0),
  waitingIframe : EC.visibilityOf($('.domik__content')),
  factualElement : element(by.css('a[href="/level/79/user/13703548/go/"]')),
  linkToFilmName : element(by.id('search_input')),
  buttonFilmSearch : element.all(by.css('.searchButton1')).get(0),
  linkChoosenFilm : element.all(by.css('.js-serp-metrika')).get(7),
  linkExtendSearch : element(by.css('a[href="/level/7/"]'))
  }

homePage = {  
login: function(login, password){
     
           return homePageLocators.linkToStartLogin.click()
          .then(function(){
            return browser.switchTo().frame(homePageLocators.iframe.getWebElement());
          })
          .then(function(){
            return browser.wait(homePageLocators.waitingIframe , 20000);
          })
          .then(function(){
            return homePageLocators.userLogin.sendKeys(login);
          })
          .then(function(){
            return browser.sleep(2000);
          })
          .then(function(){
            return homePageLocators.userPassword.sendKeys(password);
          })
          .then(function(){
            return browser.sleep(2000);
          })
          .then(function(){
            return homePageLocators.buttonToLogin.click();
          })
          .then(function(){
            browser.wait(homePageLocators.waitingHomePAge , 80000)
               })
},
comparationOfValues : function(name){    
  
         
         homePageLocators.factualElement.getText()
        .then(function(textvalue) {
          return expect(textvalue).to.deep.equal(name) })
},

searchFilm: function(film){
            
          homePageLocators.linkToFilmName.sendKeys(film)
    .then(function(){
           return browser.sleep(3000);  })
    .then (function(){
            return homePageLocators.buttonFilmSearch.click()})
    .then (function(){
            return browser.sleep(3000);    })
     .then(function(){
         return  homePageLocators.linkChoosenFilm.click()})
      .then (function(){
           return browser.sleep(3000);     })  
},

extendSearch: function(){
 
  
  return homePageLocators.linkExtendSearch.click()
}
}
module.exports = homePage;

