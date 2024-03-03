const options = {
	method: 'GET',
	 headers: {
	  'X-RapidAPI-Key': '02ea4c2d99msh9436a7e1b8cf5e1p1aba42jsneeb82c4818fe',
	  'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
  };
  
  function apiCall(done) { 
  
   const resultados = fetch('https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
	  resultados
			  .then(res => res.json())
			  .then(data => {
					 done(data)})
  }
  
  apiCall(data => {
	 data.albums.forEach(results=> {
	   const article = document.createRange()
	 })
  })