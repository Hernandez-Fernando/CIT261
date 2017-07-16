//Admin Version Defaults

function adminVersion() {
//Settings
setting = {name:"FH Video", rent:"3", period:"1", late:"2"};
rent = parseInt(setting.rent);
period = parseInt(setting.period);
late = parseInt(setting.late);

//Customers
customers[0] = {id:100, name:"Fernando", last:"Hernandez", dob:"Sep 26, 1993", phone:"123-456-7890", address:"1234 N Example", city:"Sample", state:"ETC", zcode:"85201", status:"Active"};
customers[1] = {id:101, name:"Customer", last:"Test", dob:"Jan 12, 1979", phone:"321-456-7890", address:"2134 N Example", city:"Sample", state:"ETC", zcode:"85201", status:"Suspended"};
customers[2] = {id:102, name:"Test", last:"Customer", dob:"May 4, 1987", phone:"231-777-7890", address:"3214 N Example", city:"Sample", state:"ETC", zcode:"85201", status:"Canceled"};
customers[3] = {id:103, name:"John", last:"Name", dob:"Sep 30, 1991", phone:"231-456-7890", address:"3214 N Example", city:"Sample", state:"ETC", zcode:"85201", status:"Active"};
customers[4] = {id:104, name:"Kj", last:"Line", dob:"Oct 4, 1977", phone:"231-656-7890", address:"3214 N Example", city:"Sample", state:"ETC", zcode:"85201", status:"Active"};

//Movies
movies[0] = {id:100, name:"In Time", gener:"Action", publish:"2008", clasification:"PG-13", format:"DVD", copies:1, rented:0, avalible:0};
movies[1] = {id:101, name:"National Treasure", gener:"Adventure", publish:"2007", clasification:"G", format:"BR", copies:2, rented:0, avalible:1};
movies[2] = {id:102, name:"Fury", gener:"Fiction", publish:"2014", clasification:"R", format:"DVD", copies:3, rented:0, avalible:2};
movies[3] = {id:103, name:"Jill", gener:"Fiction", publish:"2011", clasification:"PG-13", format:"DVD", copies:3, rented:0, avalible:0};
movies[4] = {id:104, name:"Desprecia Me", gener:"Animated", publish:"2010", clasification:"A", format:"BR", copies:3, rented:0, avalible:1};

//Rented
rented[0] = {mid:100, mname:"In Time", cid:100, cname:"Fernando Hernandez", cphone:"123-456-7890", returnD:"2017-07-14", status:"Expired"};
rented[1] = {mid:102, mname:"Fury", cid:100, cname:"Fernando Hernandez", cphone:"123-456-7890", returnD:"2017-07-14", status:"Expired"};
rented[2] = {mid:103, mname:"Jill", cid:100, cname:"Fernando Hernandez", cphone:"123-456-7890", returnD:"2017-07-14", status:"Expired"};
rented[3] = {mid:103, mname:"Jill", cid:103, cname:"John Name", cphone:"231-456-7890", returnD:"2017-07-16", status:"On Time"};
rented[4] = {mid:104, mname:"Desprecia Me", cid:103, cname:"John Name", cphone:"231-456-7890", returnD:"2017-07-16", status:"On Time"};
rented[5] = {mid:103, mname:"Jill", cid:104, cname:"Kj Line", cphone:"231-656-7890", returnD:"2017-07-20", status:"On Time"};
rented[6] = {mid:104, mname:"Desprecia Me", cid:104, cname:"Kj Line", cphone:"231-656-7890", returnD:"2017-07-20", status:"On Time"};


//Expired
loadExpired();
rentedStatus();
}