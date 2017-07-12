var customersHTML, customersNewHTML, moviesHTML, moviesNewHTML, settingsHTML, homeHTML, aboutHTML = "";

//Request Customers
function loadRequest() {

var tempRespond = "";

for (var i = 0; i < 8; i++) {
	var request = new XMLHttpRequest();
	var requestURL = "";
	var text = "";
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
    } // End of " If " statement
	
	switch (i) {
		case 0:
			homeHTML = text;
			break;
		case 1:
			customersHTML = text;
			break;
		case 2:
			customersNewHTML = text;
			break;
		case 3:
			moviesHTML = text;
			break;
		case 4:
			moviesNewHTML = text;
			break;
		case 5:
			settingsHTML = text;
			break;
		case 6:
			aboutHTML = text;
			break;
		}
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
	
	document.getElementById('app').innerHTML= requested;
}



