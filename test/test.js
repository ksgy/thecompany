/*
 * Unit tests for js/render
 */

describe('FlickrList', function() {

	var mock = {"items": [{"title": "Same, grey, beautiful day","media": {"m":"http://farm1.staticflickr.com/622/23592607185_690535ed41_m.jpg"}},{"title": "Same, grey, beautiful day","media": {"m":"http://farm1.staticflickr.com/622/23592607185_690535ed41_m.jpg"}},{"title": "Same, grey, beautiful day","media": {"m":"http://farm1.staticflickr.com/622/23592607185_690535ed41_m.jpg"}}]};

	afterEach(function() {
		if(document.getElementsByTagName('ul').length > 0){
			document.body.removeChild(document.getElementsByTagName('ul')[0]);
		}
	});

	it('should show 3 items from flickr json for non-IE browsers', function() {
		render(mock);
		expect(document.getElementsByTagName('img').length).toBe(3);
	});

	it('should show 3 items from flickr json for IE browsers', function() {
		renderIE(mock);
		expect(document.getElementsByTagName('img').length).toBe(3);
	});

	it('should add "selected" class to image - clicking on LI', function() {
		render(mock);
		document.getElementsByTagName('li')[0].click();
		expect(document.getElementsByTagName('img')[0].className == 'selected').toBe(true);
	});

	it('should add "selected" class to image - clicking on IMG', function() {
		render(mock);
		document.getElementsByTagName('img')[0].click();
		expect(document.getElementsByTagName('img')[0].className == 'selected').toBe(true);
	});

});
