module.exports = function () {

	this.setDefaultTimeout(60000);
	
	this.Before(function () {

		browser.driver.manage().window().maximize();
		browser.ignoreSynchronization=true;

	});

module.exports = function () {

	this.setDefaultTimeout(60000);
	
	this.BeforeStep(function () {

		browser.ignoreSynchronization=true;

	});

