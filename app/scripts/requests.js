var markupHTML = new Array(11);

//Request Files
function loadRequest() {
	
// Home Page Request
var homerequest = new XMLHttpRequest();
var homeURL = 'pages/home.txt';

homerequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        text = this.responseText;
        markupHTML[0] = text;
		document.getElementById('app').innerHTML = text;
		document.getElementById('compName').innerHTML = setting.name;
    }
};

homerequest.open('GET', homeURL, true);
homerequest.send();

// Customers Page Request
var customersrequest = new XMLHttpRequest();
var customersURL = 'pages/customers.txt';

customersrequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        text = this.responseText;
        markupHTML[1] = text;
    } 
};

customersrequest.open('GET', customersURL, true);
customersrequest.send();

// New Customers Page Request
var newCrequest = new XMLHttpRequest();
var newCURL = 'pages/newCustomers.txt';

newCrequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        text = this.responseText;
        markupHTML[2] = text;
    } 
};

newCrequest.open('GET', newCURL, true);
newCrequest.send();

// Movies Page Request
var moviesrequest = new XMLHttpRequest();
var moviesURL = 'pages/movies.txt';

moviesrequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        text = this.responseText;
        markupHTML[3] = text;
    } 
};

moviesrequest.open('GET', moviesURL, true);
moviesrequest.send();

// Add Movie Page Request
var addMrequest = new XMLHttpRequest();
var addMURL = 'pages/addmovie.txt';

addMrequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        text = this.responseText;
        markupHTML[4] = text;
    } 
};

addMrequest.open('GET', addMURL, true);
addMrequest.send();

// Settings Page Request
var settingsrequest = new XMLHttpRequest();
var settingsURL = 'pages/settings.txt';

settingsrequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        text = this.responseText;
        markupHTML[5] = text;
    } 
};

settingsrequest.open('GET', settingsURL, true);
settingsrequest.send();

// About Page Request
var aboutrequest = new XMLHttpRequest();
var aboutURL = 'pages/about.txt';

aboutrequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        text = this.responseText;
        markupHTML[6] = text;
    } 
};

aboutrequest.open('GET', aboutURL, true);
aboutrequest.send();


// Renting Page Request
var rentrequest = new XMLHttpRequest();
var rentURL = 'pages/rental.txt';

rentrequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        text = this.responseText;
        markupHTML[7] = text;
    } 
};

rentrequest.open('GET', rentURL, true);
rentrequest.send();

// Returns Page Request
var returnsrequest = new XMLHttpRequest();
var returnsURL = 'pages/returns.txt';

returnsrequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        text = this.responseText;
        markupHTML[8] = text;
    } 
};

returnsrequest.open('GET', returnsURL, true);
returnsrequest.send();

// Rented Page Request
var rentedrequest = new XMLHttpRequest();
var rentedURL = 'pages/rented.txt';

rentedrequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        text = this.responseText;
        markupHTML[9] = text;
    } 
};

rentedrequest.open('GET', rentedURL, true);
rentedrequest.send();

// Reports Page Request
var reportsrequest = new XMLHttpRequest();
var reportsURL = 'pages/reports.txt';

reportsrequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        text = this.responseText;
        markupHTML[10] = text;
    } 
};

reportsrequest.open('GET', reportsURL, true);
reportsrequest.send();

}


// Load HTML MarkUp

function loadHTML(request) {
	var requested = "";
	requested = markupHTML[request];
	
	document.getElementById('respondMenu').classList.remove('navDown');
	document.getElementById('app').innerHTML = requested;
}



