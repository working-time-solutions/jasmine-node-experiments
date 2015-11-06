// Semantic test

// NOTE - I have removed the host from the url
var worksuite_add_new_url = "http://example.com/employees/new/";

var request = require('request');
var cheerio = require('cheerio');

describe( 'Sanity', function() {

	it('sanit', function (){

		expect( 1+2 ).toEqual( 3 );

	});

});


describe( 'add new employee semantics', function() {


	// PAGE
	// ----
	// done: can access the add new employee page
	// todo: the page is identified as add-employee

	it( 'can access the add new employee page', function ( done ) {

		request.get( worksuite_add_new_url, function( error, response, body ) {
			expect( response.statusCode ).toBe( 200 );
			done();
		});

	});



	// AddEmployeeRequest editor
	// -------------------------
	// done: there is a bookmark in the title bar
	// done: the page has a title
	// done: there is an AddEmployeeRequest editor
	// todo: the AddEmployeeRequest editors title is New employee details
	// todo: there is an employee reference text field in the AddEmployeeRequest editor


	it( 'there is a bookmark in the title bar', function ( done ) {

		request.get( worksuite_add_new_url, function( error, response, body ) {

			var $ = cheerio.load( body );
			var bookmark = $('.titlebar .breadcrumb');

			expect( bookmark.length ).toBe( 1 );

			done();

		});

	});


	it( 'the page has a title', function( done ) {

		request.get( worksuite_add_new_url, function ( error, response, body ) {

			var $ = cheerio.load( body );
			var title = $( 'h1' );

			expect( title.length ).toBe( 1 );
			done();
		});

	});


	it( 'there is an AddEmployeeRequest editor', function ( done ) {

		// Note - This editor is using the older component sytem so we identify via id rather than class

		request.get( worksuite_add_new_url, function( error, response, body ) {

			var $ = cheerio.load( body );
			var editor = $('#add-employee-request-editor');

			expect( editor.attr('class')).toBe( 'editor' );
			done();
		});

	});


});