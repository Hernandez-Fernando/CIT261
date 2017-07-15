//Initial Functions
var users = {admin:{username:"admin", password:"cit261"},
user:{username:"zzzzz", password:"99999"}};
var movies = [];
var customers = [];
var rented = [];
var setting = {};
var rent = 0;
var today = new Date();

var returnDate = new Date();
returnDate.setDate(returnDate.getDate() + 1);



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
		var setting = {name:"Defaul Name", rent:0, period:0, late:0};
		//Create User and Password
		users.user.username = document.getElementById('userUp').value;
		users.user.password = document.getElementById('passUp').value;
		
		localStorage.setItem("users", JSON.stringify(users));
		localStorage.setItem("movies", JSON.stringify(movies));
		localStorage.setItem("customers", JSON.stringify(customers));
		localStorage.setItem("rented", JSON.stringify(rented));
		localStorage.setItem("setting", JSON.stringify(setting));
		document.getElementById('signSection').style.display = 'none';
		loadRequest();
		parseFloat(setting.rent)
		
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



//Customers Related

function showCustomers(){
	loadHTML(1);
	fillCustomers();
	
}

function loadNewCustomerForm() {
	loadHTML(2);
	document.getElementById('cid').value = customers.length + 100;
}

function Customers(id, name, last, dob, phone, address, city, state, zcode) {
	this.id = id;
	this.name = name;
	this.last = last;
	this.dob = dob;
	this.phone = phone;
	this.address = address;
	this.city = city;
	this.state = state;
	this.zcode = zcode;
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
		
		var id = parseInt(document.getElementById('cid').value);
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
		setting.customersLast = id;
		localStorage.setItem("setting", JSON.stringify(setting));
		showCustomers();
	}
	
//Movies Related
function showMovies() {
	loadHTML(3);
	fillMovies();
}

function loadNewMovieForm() {
	loadHTML(4);
	document.getElementById('mid').value = movies.length + 100;
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
		
		var id = parseInt(document.getElementById('mid').value);
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
		setting.movieLast = id;
		localStorage.setItem("setting", JSON.stringify(setting));
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
						text = movies[i].publish;
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

//Rental Movies


var tempRenter = {};
var tempMovieList = [];
var total = 0;


/*function rental(mid, name, cid, cname, returnD, status) {
	this.mid = mid;
	this.name = name;
	this.cid = cname;
	this.returnD = returnD;
	this.status = status;
}*/

//Load Customer Info
function loadCustomerID() {
	var box = document.getElementById('idRental');
	if (box.value.length == 3) {
		showCustomerInfo(box.value);
	}
	
}

function showCustomerInfo(cid) {
	for (var i = 0; i < customers.length; i++) {
		if (customers[i].id == cid) {
			var fullName = customers[i].name + " " + customers[i].last;
			if (customers[i].status == "Active") {
				document.getElementById('fullNameBox').value = fullName;
				document.getElementById('phoneRental').value = customers[i].phone;
				var fullAddress = customers[i].address + ", " + customers[i].city + ", " + customers[i].state + " " + customers[i].zcode;
				document.getElementById('fullAddress').value = fullAddress;
				//index = 1;
				tempRenter = new CustomerRental(customers[i].id, fullName, customers[i].phone);
				document.getElementById('tomorrow').innerHTML = returnDate;
			}
			else {
				alert('Customer ' + customers[i].id + ", " + fullName + " is Suspended or Canceled. See Customer Profile.");
				document.getElementById('idRental').value = "";
			}
	
		}

	}

}

function CustomerRental(id, fullName, phone) {
	this.id = id;
	this.name = fullName;
	this.phone = phone;
}

//Load Movies Info
function addRental() {
	var idBox = document.getElementById('movieIdBox');
	if (idBox.value.length == 3) {
		showMovieInfo(idBox.value);
		document.getElementById('movieIdBox').value = "";
	}
	
}


var index = 0;
function showMovieInfo(mid) {
	for (var i = 0; i < movies.length; i++) {
		if (movies[i].id == mid) {
			if (movies[i].avalible > 0) {
				var table = document.getElementById('moviesTable');
				var row = document.createElement('tr');
				table.appendChild(row);
				for (var j = 0; j < 4; j++) {
					var td = document.createElement('td');
					var textNode = "";
					switch (j) {
						case 0:
							textNode = document.createTextNode(movies[i].id);
							break;
						case 1:
							textNode = document.createTextNode(movies[i].name);
							break;
						case 2:
							textNode = document.createTextNode(movies[i].clasification);
							break;
						case 3:
							textNode = document.createTextNode(movies[i].format);
							break;
						}
					td.appendChild(textNode);
					row.appendChild(td);	
				}
				total += rent;
				document.getElementById('totalBox').value = total;
				var listTemp = {};
				listTemp.id = movies[i].id;
				listTemp.name = movies[i].name;
				tempMovieList.push(listTemp);
				index += 1;
			}
			else {
				alert("Movie " + movies[i].name + " is not avalible.");
			}
			break;
		}
	}

}

//Pay and Record Rents
var tempRent = {};
function payRents() {
	if (document.getElementById('idRental').value == "" || tempMovieList.length == 0) {
		alert('Customer or Movie info is empty, please check the values and try again.');
	}
	else {
		document.getElementById('total').value = total;
		var payment = document.getElementById('payment');
		payment.classList.toggle('downPayment');
	}
}

function pay() {
	var paid = parseFloat(document.getElementById('paymentAmount').value);
	var change = total - paid;
	document.getElementById('change').value = change;
	recordRents();
}

function Rents(cid, cname, mid, mname, cphone) {
	this.mid = mid;
	this.mname = mname;
	this.cid = cid;
	this.cname = cname;
	this.cphone = cphone;
	this.returnD = returnDate;
	this.status = "On Time";
}
function recordRents() {
	
	for (var i = 0; i < tempMovieList.length; i++) {
		tempRent = new Rents(tempMovieList[i].id, tempMovieList[i].name, tempRenter.id, tempRenter.name, tempRenter.phone);
		rented.push[tempRent];
	}
}

//Reports
function showRented() {
	loadHTML(9);
	fillRented();
}

function fillRented() {
	var table = document.getElementById("rentedTable");
	var rowNumber = 1;
	var cellNumber = 0;
	var row, cell, text;
	
    for (var i = 0; i < rented.length; i++) {
			row = table.insertRow(rowNumber);
			
		    for (var c = 0; c < 7; c++) {
				cell = row.insertCell(c);
				
				switch(c) {
					case 0:
						text = rented[i].mid;
						break;
					case 1:
						text = rented[i].mname;
						break;
					case 2:
						text = rented[i].cid;
						break;
					case 3:
						text = rented[i].cname;
						break;
					case 4:
						text = rented[i].cphone;
						break;
					case 5:
						text = rented[i].returnD;
						break;
					case 6:
						text = rented[i].status;
						break;
				}
			    cell.innerHTML = text;
			}
		rowNumber += 1;
	}

}


// Settings
function showSettings() {
	loadHTML(5);
	loadSettingsValues();
}

function loadSettingsValues() {
	document.getElementById('nameBox').value = setting.name;
	document.getElementById('rentBox').value = setting.rent;
	document.getElementById('periodBox').value = setting.period;
	document.getElementById('lateBox').value = setting.late;
}

function saveSettings() {
	setting.name = document.getElementById('nameBox').value;
	setting.rent = document.getElementById('rentBox').value;
	setting.period = document.getElementById('periodBox').value;
	setting.late = document.getElementById('lateBox').value;
	document.getElementById('compName').innerHTML = setting.name;
	localStorage.setItem("setting", JSON.stringify(setting));
	loadSettingsValues();
}

function updatePass() {
	users.user.password = document.getElementById('newPassBox').value;
	localStorage.setItem("users", JSON.stringify(users));
	document.getElementById('newPassBox').value = "";
}

// Restart App

function clearApp() {
	localStorage.removeItem('movies');
	localStorage.removeItem('customers');
	localStorage.removeItem('setting');
	localStorage.removeItem('users');
	localStorage.removeItem('rented');
}
