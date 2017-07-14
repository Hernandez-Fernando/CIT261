//Initial Functions
var users = {admin:{username:"admin", password:"cit261"},
user:{username:"zzzzz", password:"99999"}};
var movies = [];
var customers = [];
var settings = {company:"", rent:0, period:0, late:0, movieLast:100, customersLast:100};
var moviesLast = movies.length + 99;
var customersLast = customers.length + 99;


function login() {
	var username = document.getElementById('userBox').value;
	var password = document.getElementById('passBox').value;
	
	document.getElementById('errorM').innerHTML = "";
	if (username == users.admin.username && password == users.admin.password) {
		document.getElementById('loginSection').style.display = 'none';
		loadRequest();
		adminVersion();
	} else if (username == users.user.username && password == users.user.password) { 
		document.getElementById('loginSection').style.display = 'none';
		loadRequest();
		loadData();
	}	
		else {
		document.getElementById('errorM').innerHTML = "Username or Password is incorrect.";
	}
	
}

function setUp() {
		users = {admin:{username:"admin", password:"cit261"},
		user:{username:"", password:""}};
		
		//Create User and Password
		users.user.username = document.getElementById('userUp').value;
		users.user.password = document.getElementById('passUp').value;
		
		movies = [];
		customers = [];
		rented = [];
		settings = {};
		
		localStorage.setItem("users", JSON.stringify(users));
		document.getElementById('signSection').style.display = 'none';
		loadRequest();
		
}

function loadData() {
	movies = JSON.parse(localStorage.getItem('movies'));
	customers = JSON.parse(localStorage.getItem('customers'));
	rented = JSON.parse(localStorage.getItem('rented'));
	settings = JSON.parse(localStorage.getItem('settings'));
}


//Main Commands
function slideNav() {

	var nav = document.getElementById('respondMenu');
	nav.classList.toggle('navDown');
}

// Restart App

function clearApp() {
	localStorage.removeItem('movies');
	localStorage.removeItem('customers');
	localStorage.removeItem('settings');
	localStorage.removeItem('users');
	localStorage.removeItem('rented');
}






//Customers Related

function showCustomers(){
	loadHTML(1);
	fillCustomers();
	
}

function loadNewCustomerForm() {
	loadHTML(2);
	document.getElementById('cid').value = customersLast + 1;
}

function Customers(id, name, last, dob, phone, address, city, state, zcode) {
	this.id = id;
	this.name = name;
	this.last = last;
	this.dob = dob;
	this.phone = phone;
	this.address = address;
	this.city = city;
	this.state = zcode;
	this.status = "Active";
}


// Customers Functions //

function fillCustomers() {
	var table = document.getElementById("customersTable");
	var rowNumber = 1;
	var cellNumber = 0;
	var row, cell, text;
	
    for (var i = 0; i < customers.length; i++) {
			row = table.insertRow(rowNumber);
			
		    for (var c = 0; c < 9; c++) {
				cell = row.insertCell(c);
				
				switch(c) {
					case 0:
						text = customers[i].id;
						break;
					case 1:
						text = customers[i].name;
						break;
					case 2:
						text = customers[i].last;
						break;
					case 3:
						text = customers[i].dob;
						break;
					case 4:
						text = customers[i].phone;
						break;
					case 5:
						text = customers[i].address;
						break;
					case 6:
						text = customers[i].city;
						break;
					case 7:
						text = customers[i].state;
						break;
					case 8:
						text = customers[i].status;
						break;
				}
			    cell.innerHTML = text;
			}
		rowNumber += 1;
	}

}


// Create New Customer 

function newCustomer() {
		var temp = "";
		
		var id = Math.parseInt(document.getElementById('cid').value);
		var name = document.getElementById('name').value;
		var last = document.getElementById('lname').value;
		var dob = document.getElementById('dob').value;
		var phone = document.getElementById('phone').value;
		var address = document.getElementById('address').value;
		var city = document.getElementById('city').value;
		var state = document.getElementById('state').value;
		var zcode = document.getElementById('zcode').value;
		
		temp = new Customers(id, name, last, dob, phone, address, city, state, zcode);
	
		customers.push(temp);
		localStorage.setItem("customers", JSON.stringify(customers));
		settings.customersLast = id;
		localStorage.setItem("settings", JSON.stringify(settings));
		showCustomers();
	}
	
//Movies Related
function showMovies() {
	loadHTML(3);
	fillMovies();
}

function loadNewMovieForm() {
	loadHTML(4);
	document.getElementById('mid').value = moviesLast + 1;
}

function movie(id, name, gener, published, clasification, format, copies){
	this.id = id;
	this.name = name;
	this.gener = gener;
	this.publish = published;
	this.clasification = clasification;
	this.format = format;
	this.copies = copies;
	this.rented = 0;
	this.avalible = copies;
}

// Create New Movie

function newMovie() {
		var temp = "";
		
		var id = Math.parseInt(document.getElementById('mid').value);
		var name = document.getElementById('name').value;
		var gener = document.getElementById('gener').value;
		var yearP = document.getElementById('yearBox').value;
		var clasification = document.getElementById('clasification').value;
		var format = checkSelection();
		var copies = document.getElementById('copies').value;

		function checkSelection() {
			var dvdCheck = document.getElementById('dvd');
				if (dvdCheck.selected) {
					return 'DVD';
				}
				else {
					return 'BR';
				}
		}
		
		temp = new movie(id, name, gener, yearP, clasification, format, copies);
	
		movies.push(temp);
		localStorage.setItem("movies", JSON.stringify(movies));
		settings.movieLast = id;
		localStorage.setItem("settings", JSON.stringify(settings));
		showMovies();
	}
	
// Fill Movie Table

function fillMovies() {
	var table = document.getElementById("moviesTable");
	var rowNumber = 1;
	var cellNumber = 0;
	var row, cell, text;
	
    for (var i = 0; i < movies.length; i++) {
			row = table.insertRow(rowNumber);
			
		    for (var c = 0; c < 8; c++) {
				cell = row.insertCell(c);
				
				switch(c) {
					case 0:
						text = movies[i].id;
						break;
					case 1:
						text = movies[i].name;
						break;
					case 2:
						text = movies[i].gener;
						break;
					case 3:
						text = movies[i].years;
						break;
					case 4:
						text = movies[i].clasification;
						break;
					case 5:
						text = movies[i].format;
						break;
					case 6:
						text = movies[i].copies;
						break;
					case 7:
						text = movies[i].avalible;
						break;
				}
			    cell.innerHTML = text;
			}
		rowNumber += 1;
	}

}