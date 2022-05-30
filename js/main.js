// Variable with my First Name
var firstName = "Raoul";
var lastName = "White";
var myColor = "blue";

//Vanilla Javascript
/*
document.getElementById("greeting").innerHTML = "Hey its me " + firstName + " " + lastName;
document.getElementById("greeting").style.color = "yellow";
document.getElementById("greeting").style.fontSize = "50px";

document.getElementById("job-role").innerHTML = "Frontend Web Developer";
document.getElementById("job-role").style.color = myColor;

document.getElementsByClassName("logo")[0].innerHTML = firstName + "." + lastName;
document.getElementById("my-name").innerHTML = firstName + " " + lastName;
document.getElementsByClassName("logo")[0].style.color = myColor;
*/


//Jquery

$("#greeting").text("Hello World " + firstName + lastName);
$("#greeting").css("color","orange");
$("#greeting").css("font-size";"40px");


$(".logo").text(firstName + "." +lastName);
console.log(firstName + lastName);
