
var homePage = require('../support/pages/homePage.js');
var filmPage = require('../support/pages/filmPage.js');
var extendedSearch = require('../support/pages/extendedSearch.js');
module.exports = function () {


  this.Given(/^I navigate to "(.+)"$/, function (url) {
    return browser.get(url);
  });

  this.When(/^user logs in using Username as "([^"]*)" and Password "([^"]*)"$/, function (login, password) {
    return homePage.login(login, password);
                     
  });

  this.Then(/^login should be successful as "([^"]*)"$/, function (name) {
    return homePage.comparationOfValues(name);
 });
  
  this.Then(/^I search film as "([^"]*)"$/, function (film) {
      return homePage.searchFilm(film);
       });

  this.Then(/^I check film's title as "([^"]*)" and producer as "([^"]*)"$/, function (title, producer) {
    return     filmPage.checkFilmParametries(title, producer);
       
         });      
 
  this.Then(/^I click on extended search$/, function () {
        return homePage.extendSearch();
       });   
  
  this.Then(/^I input film's name "([^"]*)" and year "([^"]*)"$/, function(partName, filmYear){
        return extendedSearch.dataInput(partName, filmYear);
   });

   this.Then(/^I check film's name after extended search as "([^"]*)"$/, function (filmName) {
        return extendedSearch.checkFilm(filmName);
       });

    this.Then(/^I click on extended search by actor$/, function(){
     homePage.extendSearch();
        }) 

   this.Then(/^I cheсk extended search by actor as "([^"]*)"$/, function(actorName){
      return extendedSearch.inputActorsInformation(actorName);
   }) 


};
