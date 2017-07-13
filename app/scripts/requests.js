function showVariables() {
	
	if (customersHTML != "") {
	document.getElementById('test').innerHTML = customersHTML;
	} else {
		document.getElementById('test').innerHTML = "No Data";
	}
}

//Normal


var customersHTML = "";
var customersNewHTML = ""; 
var moviesHTML = "";
var moviesNewHTML = "";
var settingsHTML = "";
var homeHTML = "";
var aboutHTML = "";
var text = "";
//Request Customers
function loadRequest() {

for (var i = 0; i < 8; i++) {
	var request = new XMLHttpRequest();
	var requestURL = "";
	
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
       // text = this.responseText;
		
    switch (i) {
		case 0:
			homeHTML = this.responseText;
			break;
		case 1:
			customersHTML = this.responseText;
			break;
		case 2:
			return customersNewHTML = this.responseText;
			break;
		case 3:
			return moviesHTML = this.responseText;
			break;
		case 4:
			moviesNewHTML = this.responseText;
			break;
		case 5:
			settingsHTML = this.responseText;
			break;
		case 6:
			aboutHTML = this.responseText;
			break;
		}
		//document.getElementById('app').innerHTML += text;
		
	} // End of " If " statement
	
	
}; //End of onready function

request.open('GET', requestURL, true);
request.send();

}

}


// Load HTML MarkUp

function loadHTML(request) {
	var requested = "";
	
	switch (request) {
			case 0:
			requested = homeHTML;
			break;
		case 1:
			requested = customersHTML;
			break;
		case 2:
			requested = customersNewHTML;
			break;
		case 3:
			requested = moviesHTML;
			break;
		case 4:
			requested = moviesNewHTML;
			break;
		case 5:
			requested = settingsHTML;
			break;
		case 6:
			requested = aboutHTML;
			break;
		}
	document.getElementById('respondMenu').classList.remove('navDown');
	document.getElementById('app').innerHTML= requested;
}



