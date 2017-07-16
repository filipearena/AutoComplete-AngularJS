'use strict';

describe('AutoComplete Testing', function() {

  it('should verify view being shown', function() {
    browser.get('/');
    expect(browser.getLocationAbsUrl()).toMatch("");
  });

  it('should verify that the searchContainer was displayed', function() {
    var searchContainer = element(by.css(".search-container"));
    expect(searchContainer.isDisplayed()).toBe(true);
  });

  it('should verify that on init, there is no list of options', function() {
    var option = element(by.css("[ng-bind='option.name']"));
    expect(option.isPresent()).toBe(false);
  });

  it('should verify that after the user interacts with the input, at least one option is shown', function() {
    element(by.model("auto.inputText")).sendKeys("a");
    var option = element(by.css("[ng-bind='option.name']"));
    expect(option.isPresent()).toBe(true);
  });

  it('should verify that the autoComplete works as expected', function() {
    element(by.model("auto.inputText")).clear().sendKeys("braz");
    var option = element(by.css("[ng-bind='option.name']"));
    expect(option.isPresent()).toBe(true);
    option.getText().then(function (item) {
      expect(item).toBe("Brazil");
    });
  });

  it('should verify that when selected, the input receives the option value', function() {
    var option = element(by.css("[ng-bind='option.name']"));
    option.click();
    var input = element(by.model("auto.inputText"));
    input.getAttribute("value").then(function (value) {
      expect(value).toBe("Brazil");
    });
  });
});
