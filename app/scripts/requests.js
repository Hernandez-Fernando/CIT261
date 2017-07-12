var customersHTML, customersNewHTML, moviesHTML, moviesNewHTML, settingsHTML, homeHTML, aboutHTML = "";

//Request Customers
function loadRequest() {

var tempRespond = "";

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
        var text = this.responseText;
		
		switch (i) {
			case 0:
			return homeHTML = text;
			break;
		case 1:
			return customersHTML = text;
			break;
		case 2:
			return customersNewHTML = text;
			break;
		case 3:
			return moviesHTML = text;
			break;
		case 4:
			return moviesNewHTML = text;
			break;
		case 5:
			return settingsHTML = text;
			break;
		case 6:
			return aboutHTML = text;
			break;
		}
		
    } // End of " If " statement
}; //End of onready function

request.open('GET', requestURL, true);
request.send();

}

}



