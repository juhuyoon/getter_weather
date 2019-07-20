app.get('/search-location-weather', (req, res) => {
  //build api URL with user zip
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
  //ENTER YOUR API KEY HERE (make sure to no include < >)
  const apiId = '&appid=0df9f64365060ae81c16eb4855a81df7&units=imperial';
 
  const userLocation = (url1, url2, zipcode) => {
     let newUrl = url1 + zipcode + url2;
     return newUrl;
  };	
 
  const apiUrl = userLocation(baseUrl, apiId, zipcode);
 
  fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
     res.send({ data });
  })
  .catch(err => {
     res.redirect('/error');
  });
})