describe('FavoriteFood Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should filter an array of objects by favorite food', function() {
    var list = ([ {
                    name: 'nick',
                    favoriteFood: 'veg'
                  },
                  {
                    name: 'ladydog',
                    FavoriteFood: 'meat'
                  },
              ]);

    var results = $filter('favoriteFood')(list, 'veg');

    expect(results.length).toBe(1);
    expect(results[0].name).toBe('nick');
  });

	
});
