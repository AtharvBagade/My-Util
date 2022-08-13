//Fetch api base 

const url = "";

fetch(url)
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error(error));

