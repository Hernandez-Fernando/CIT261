//var movies = [];
//var movies = JSON.parse(localStorage.getItem('movies'));
//var moviesLast = movies.length;
//var id = 100;

var movies;

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
/*
movies[0] = {id:100, name:"In Time", gener:"Action", years:"2007", clasification:"PG-13", format:"DVD", copies:1, rented:0, avalible:2};
movies[1] = {id:101, name:"National Treasure", gener:"Adventure", years:"2007", clasification:"G", format:"BR", copies:2, rented:0, avalible:2};
movies[2] = {id:102, name:"Fury", gener:"Fiction", years:"2014", clasification:"R", format:"DVD", copies:3, rented:0, avalible:2};
*/

//Customers
//var customers = [];


//var customers = JSON.parse(localStorage.getItem("customers"));
var customers;

//var customersLast = customers.length;
//var id = 100;

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

customers[0] = {id:100, name:"Fernando", last:"Hernandez", dob:"Sep 26, 1993", phone:"123-456-7890", address:"1234 N Example", city:"Sample", state:"ETC", zcode:"85201", status:"Active"};
customers[1] = {id:101, name:"Customer", last:"Test", dob:"Jan 12, 1979", phone:"321-456-7890", address:"2134 N Example", city:"Sample", state:"ETC", zcode:"85201", status:"Suspended"};
customers[2] = {id:102, name:"Test", last:"Customer", dob:"May 4, 1987", phone:"231-456-7890", address:"3214 N Example", city:"Sample", state:"ETC", zcode:"85201", status:"Canceled"};

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