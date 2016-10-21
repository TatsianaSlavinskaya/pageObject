var EC = protractor.ExpectedConditions;

var searchParametries = {
     waitFilmDownload : EC.visibilityOf($('.text-orange')),
      fileldFilmName : element.all(by.id('find_film')).get(0),
      fieldFilmYear : element.all(by.id('year')).get(0),
      buttonExtendedSearch : element(by.css('.el_18.submit.nice_button')),
      factualElement : element.all(by.css('a[href="/level/1/film/645333/sr/1/"]')).get(1),
      waiting : EC.visibilityOf($('.form_6')),
      fieldActorName : element.all(by.id('find_people')).get(0),
      buttonExtendedSearchByActor : element.all(by.css('.el_8.submit.nice_button')).get(0),
}
var extendedSearch = { 
    dataInput : function(partName, filmYear){
          
        browser.wait(searchParametries.waitFilmDownload, 20000)
        .then (function(){
              return searchParametries.fileldFilmName.sendKeys(partName)})
        .then (function(){
               return browser.sleep(3000)})
         .then (function(){
               return searchParametries.fieldFilmYear.sendKeys(filmYear)})
         .then (function(){
               return browser.sleep(3000)})
         .then (function(){
                return searchParametries.buttonExtendedSearch.click()})
         .then (function(){
                browser.sleep(3000);})
       
    },

    checkFilm : function(filmName){
         
        searchParametries.factualElement.getText()
       .then(function(textvalue) {
             return expect(textvalue).to.deep.equal(filmName) })
 },

   inputActorsInformation : function(actorName){
        
       browser.wait(searchParametries.waiting, 20000)
       .then(function(){
            return searchParametries.fieldActorName.sendKeys(actorName)})
       .then (function(){
        browser.sleep(2000);
            })
       .then (function(){
           return  searchParametries.buttonExtendedSearchByActor.click()})
       .then( function(){
            browser.sleep(2000);        })                                   
          
}
}
module.exports= extendedSearch;