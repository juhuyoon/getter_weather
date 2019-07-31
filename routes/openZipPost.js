app.get('/search-location-weather', (req, res) => {
    //build api URL with user zip
    const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
    //ENTER YOUR API KEY HERE (make sure to no include < >)
    const apiId = '&appid=<YOUR API KEY GOES HERE>&units=imperial';
     
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