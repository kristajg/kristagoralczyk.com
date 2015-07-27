/*
 * Routes for site
 */
 
module.exports = function (app) {
	app.get('/', function(req, res){
	  res.render('index', { title: 'Home' });
	});

	app.get('/work', function(req, res){
	  res.render('work', { title: 'Work' });
	});

	app.get('/resume', function(req, res){
	  res.render('resume', { title: 'Skills' });
	});

	app.get('/contact', function(req, res){
	  res.render('contact', { title: 'Contact' });
	});
}