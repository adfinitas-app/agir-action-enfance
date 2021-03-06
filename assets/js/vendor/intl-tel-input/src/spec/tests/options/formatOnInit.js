"use strict";

describe("formatOnInit: testing input containing valid US number", function() {

  beforeEach(function() {
    intlSetup(true);
    input = $("<input value='+17024181234'>");
  });

  afterEach(function() {
    input.intlTelInput("destroy");
    input = null;
  });

  describe("init plugin with formatOnInit=false", function() {

    beforeEach(function() {
      input.intlTelInput({
        formatOnInit: false
      });
    });

    it("doesnt format the number on init", function() {
      expect(getInputVal()).toEqual("+17024181234");
    });

  });

  describe("init plugin with formatOnInit=true and nationalMode=true", function() {

    beforeEach(function() {
      input.intlTelInput({
        formatOnInit: true,
        nationalMode: true
      });
    });

    it("sets the number to national format on init", function() {
      expect(getInputVal()).toEqual("(702) 418-1234");
    });

  });

  describe("init plugin with formatOnInit=true and nationalMode=false", function() {

    beforeEach(function() {
      input.intlTelInput({
        formatOnInit: true,
        nationalMode: false
      });
    });

    it("sets the number to intl format on init", function() {
      expect(getInputVal()).toEqual("+1 702-418-1234");
    });

  });

});
