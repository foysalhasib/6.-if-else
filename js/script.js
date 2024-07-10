let number = prompt("Please Enter a Number: ");

if (number >= 80) {
  console.log("A+");
} else if (number >= 70) {
  console.log("A");
} else if (number >= 60) {
  console.log("A-");
} else if (number >= 50) {
  console.log("B");
} else if (number >= 40) {
  console.log("C");
} else if (number >= 33) {
  console.log("D");
} else {
  console.log("Fail");
}

//============================================================
//============================================================
//============================================================
//============================================================
var age = prompt("Enter age");

if (age >= 50) {
  console.log("Old!");
} else if (age < 50 && age >= 30) {
  console.log("under 50 but above or equal 30");
} else if (age < 30 && age >= 18) {
  console.log("Under 30 but above or equal 18");
} else if (age < 18 && age > 0) {
  console.log("Under 18");
} else {
  console.log("Invalid Input");
}
