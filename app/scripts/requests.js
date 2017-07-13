function showVariables() {
	
	/* if (customersHTML != "") {
	document.getElementById('test').innerHTML = customersHTML;
	} else {
		document.getElementById('test').innerHTML = "No Data";
	} */
	document.getElementById('test').innerHTML = j;
}
//
//Normal


var customersHTML = "";
var customersNewHTML = ""; 
var moviesHTML = "";
var moviesNewHTML = "";
var settingsHTML = "";
var homeHTML = "";
var aboutHTML = "";
var text = "";
var j = 0;
var i = 0;
var markup = [];
//Request Customers
function loadRequest() {
var request;
var requestURL;
for (i; i < 7; i++) {
	request = new XMLHttpRequest();
	
	switch (i) {
		case 0:
			requestURL = 'pages/home.txt';
			break;
		case 1:
			requestURL = 'pages/customers.txt';
			break;
		case 2:
			requestURL = 'pages/newCustomers.txt';
			break;
		case 3:
			requestURL = 'pages/movies.txt';
			break;
		case 4:
			requestURL = 'pages/addmovie.txt';
			break;
		case 5:
			requestURL = 'pages/settings.txt';
			break;
		case 6:
			requestURL = 'pages/about.txt';
			break;
	} //End of Switch
	
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     text = this.responseText;
     markup.push(text);
 

		
	} // End of " If " statement
	document.getElementById('test').innerHTML += markup.length + " - " + requestURL + '<br>';
	
}; //End of onready function

request.open('GET', requestURL, true);
request.send();

}

}


// Load HTML MarkUp

function loadHTML(request) {
	var requested = "";
	requested = markup[request];
	
document.getElementById('respondMenu').classList.remove('navDown');
	document.getElementById('app').innerHTML= requested;
}



