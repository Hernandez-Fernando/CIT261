// This is a JS file

var myButton = document.getElementById('myFirstEvent');

function myEventTest() {
	document.getElementById('test').innerHTML = "If you see this text, that means that your code worked";
}

myButton.addEventListener("click", myEventTest, false);
myButton.addEventListener("click", doubleClick, false);

var button2 = document.getElementById('secondButton');

function doubleClick() {
	document.getElementById('test2').innerHTML = "This is my second Test.";
};

window.onload = document.getElementById('test').innerHTML = "The page has full loaded";
window.scrollY = function() {
	document.getElementById('test2').innerHTML = "Now you scroll the browser";
}