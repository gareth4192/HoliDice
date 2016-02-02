describe('holiDiceController', function() {
  beforeEach(module('HoliDice'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('holiDiceController');
  }));

  it('initialises with an empty search result', function() {
    expect(ctrl.searchResult).toBeUndefined();
  });

  describe('when searching for a holdiay', function() {

    var items = [
      {
        "origin": "LHR",
        "destination": "BOS",
        "date": "2016-02-04"
      }
    ];

    it('displays search results', function() {
      expect(ctrl.searchResult.items).toEqual(items);
    });
  });
});
