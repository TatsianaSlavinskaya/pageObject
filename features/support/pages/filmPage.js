var EC = protractor.ExpectedConditions;
  

filmPage = {
   checkFilmParametries : function(title, producer){
var waitDownload = EC.visibilityOf($('.moviename-big'))
var titleName =   element(by.tagName('h1'));     
var producerName =   element(by.css('a[href="/name/24284/'));     
      
      browser.wait(waitDownload,20000);
      titleName.getText()
       .then (function(textvalue){
    return expect(textvalue).to.deep.equal(title) });
                   
      producerName.getText()
        .then(function(textvalue) {
    return expect(textvalue).to.deep.equal(producer)
        });
        
    }
        
      } 

module.exports= filmPage;