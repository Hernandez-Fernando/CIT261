function showVariables() {
	
	/* if (customersHTML != "") {
	document.getElementById('test').innerHTML = customersHTML;
	} else {
		document.getElementById('test').innerHTML = "No Data";
	} */
	document.getElementById('test').innerHTML = markupHTML[3];
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
var markupHTML = [];
//Request Customers
function loadRequest() {
/* var request;
var requestURL;
for (i; i < 7; i++) {
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
		default:
			requestURL = 'pages/about.txt';
			break;
			} //End of Switch
	
	request = new XMLHttpRequest();
	
	
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     text = this.responseText;
     markupHTML.push(text);
 	//document.getElementById('test').innerHTML += text;
	 

		
	} // End of " If " statement
	document.getElementById('test').innerHTML += markupHTML.length + " - " + requestURL + " - " + text + '<br>';
	
}; //End of onready function



} */

var request = new XMLHttpRequest();
var requestURL = 'pages/home.txt';
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     text = this.responseText;
     markupHTML[0] = text;
 	}
 };
request.open('GET', requestURL, true);
request.send();

}


// Load HTML MarkUp

function loadHTML(request) {
	var requested = "";
	requested = markupHTML[request];
	
document.getElementById('respondMenu').classList.remove('navDown');
	document.getElementById('app').innerHTML= requested;
}



