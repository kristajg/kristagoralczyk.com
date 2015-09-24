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

	app.post('/contact', function(req, res){
		var name = req.body.name,
		    email = req.body.email,
		    message = req.body.message;
	});
}