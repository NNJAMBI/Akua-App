var submit = document.getElementById("submit");
submit.addEventListener(click, function(){  
}

var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var dd = document.getElementById("day").value;
var mm = document.getElementById("month").value;
var yy = document.getElementById("year").value;
var date = new Date(yy + "_" + mm + "_" + dd);
var daysOfTheWeek = date.getDay();
var male = document.getElementById("male");
var female = document.getElementById("female");
var output = document.getElementById("output");
var name = document.getElementById("name").value;

if (dd <1 || dd > 31) {
    alert("Please input a valid day!");
}
else if (mm < 1 || mm >12) {
alert("Please enter a valid month!");
}
else if (yy.toString().length !== 4) {
    alert("Please enter a valid year!");
}
else if (male.checked) {
    alert("Awesome!.." + " " + name + " " + "your Akan name is" + " " + maleAkanNames[daysOfWeek] + " " + "you were born on" + " " + daysOfTheWeek[daysOfWeek]);
} else {
  alert("Awesome!.." + " " + name + " " + "your Akan name is" + " " + femaleAkanNames[daysOfWeek] + " " + "you were born on" + " " + daysOfTheWeek[daysOfWeek]);
}
})