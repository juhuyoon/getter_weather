let zipcode;

app.post('/search-location', (req, res) => {
		zipcode = req.body.zipcode;
   
		if(!zipcode || zipcode.length < 5 || zipcode.length > 5) {
			res.redirect('/error');
		} else { 
			res.redirect('/current-weather');
		}
})