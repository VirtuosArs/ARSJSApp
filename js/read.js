var action = 1;
var myLink = document.getElementById('myLink1');

myLink.onclick = function createJSON(){

function yearRequired() {
    if (document.getElementById('yearVal').value == "") {
      if (confirm("Press enter a year.") == true) {
        document.getElementById('yearVal').style.border =
          "thin solid red"
      } else {
        console.log("You pressed Cancel");
      }
      return false;
    } else {
      document.getElementById('yearVal').style.border =
        "thin solid #3d3d3d"
      return true;
    }
  }

function nameRequired() {
    if (document.getElementById('nameVal').value == "") {
      if (confirm("Press enter your name and birthdate to create a valid JSON data.") == true) {
        document.getElementById('nameVal').style.border =
          "thin solid red"
      } else {
        console.log("You pressed Cancel");
      }
      return false;
    } else {
      document.getElementById('nameVal').style.border =
        "thin solid #3d3d3d"
      return true;
    }
  }

function birthdayRequired() {
    if (document.getElementById('birthVal').value == "") {
      if (confirm("Press enter your birthdate in MM/dd/YYYY to create a valid JSON.") == true) {
        document.getElementById('birthVal').style.border =
          "thin solid red"
      } else {
        console.log("You pressed Cancel");
      }
      return false;
    } else {
      document.getElementById('birthVal').style.border =
        "thin solid #3d3d3d"
      return true;
    }
  }    

var validInputs = yearRequired() && nameRequired() && birthdayRequired();

if (validInputs) {
    if (action == 1) {
var nameText = document.getElementById("nameVal").value;
var birthday = document.getElementById("birthVal").value;
var jsonArr = [];

jsonArr.push({
	"name": nameText,
	"birthday": birthday
});

console.log(JSON.stringify(jsonArr));
//console.log(JSON.stringify(jsonArr, null, "\t"));

document.getElementById("myTextarea").value += JSON.stringify(jsonArr, null, "\t");

document.getElementById("myLink").click();
action = 2;
} else {
      window.location.reload();
      action = 1;
    }
} else {
    console.log("Please Enter the required data.");
  }

}

