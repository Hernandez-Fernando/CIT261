//Admin Version Defaults

function adminVersion() {
//Settings
setting = {name:"FH Video", rent:3, period:1, late:2, movieLast:100, customersLast:100};


//Customers
customers[0] = {id:100, name:"Fernando", last:"Hernandez", dob:"Sep 26, 1993", phone:"123-456-7890", address:"1234 N Example", city:"Sample", state:"ETC", zcode:"85201", status:"Active"};
customers[1] = {id:101, name:"Customer", last:"Test", dob:"Jan 12, 1979", phone:"321-456-7890", address:"2134 N Example", city:"Sample", state:"ETC", zcode:"85201", status:"Suspended"};
customers[2] = {id:102, name:"Test", last:"Customer", dob:"May 4, 1987", phone:"231-456-7890", address:"3214 N Example", city:"Sample", state:"ETC", zcode:"85201", status:"Canceled"};
customers[3] = {id:103, name:"John", last:"Name", dob:"Sep 30, 1991", phone:"231-456-7890", address:"3214 N Example", city:"Sample", state:"ETC", zcode:"85201", status:"Active"};
customers[4] = {id:104, name:"Kj", last:"Line", dob:"Oct 4, 1977", phone:"231-456-7890", address:"3214 N Example", city:"Sample", state:"ETC", zcode:"85201", status:"Active"};

//Movies
movies[0] = {id:100, name:"In Time", gener:"Action", years:"2007", clasification:"PG-13", format:"DVD", copies:1, rented:0, avalible:2};
movies[1] = {id:101, name:"National Treasure", gener:"Adventure", years:"2007", clasification:"G", format:"BR", copies:2, rented:0, avalible:2};
movies[2] = {id:102, name:"Fury", gener:"Fiction", years:"2014", clasification:"R", format:"DVD", copies:3, rented:0, avalible:2};
movies[3] = {id:103, name:"Fury", gener:"Fiction", years:"2014", clasification:"R", format:"DVD", copies:3, rented:0, avalible:0};
movies[4] = {id:104, name:"Fury", gener:"Fiction", years:"2014", clasification:"R", format:"DVD", copies:3, rented:0, avalible:1};
}

//Rented