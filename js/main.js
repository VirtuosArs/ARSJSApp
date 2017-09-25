var action = 1;
var myLink = document.getElementById('myLink');

myLink.onclick = function magicFlow() {

  var validInputs = yearRequired() && jsonData() &&
    jsonDataValidator();

  if (validInputs) {
    if (action == 1) {

      var jsonObj1 = document.getElementById("myTextarea").value;
      var jsonObj = JSON.parse(jsonObj1);
      console.log(jsonObj);

      var yearText = document.getElementById("yearVal").value;
      setDayName(yearText, ...jsonObj);
      getCount();

      function getCount() {
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        for (var i = 0; i < weekday.length; i++) {
          var container_div = document.getElementById(weekday[i]);
          var count = container_div.getElementsByTagName('div').length;
          if (count == 1) {
            var fragment = create(count + " birthday");
          } else if (count == 0) {
            var fragment = create("No birthdays");
          } else {
            var fragment = create(count + " birthdays");
          }
          document.getElementById(weekday[i] + "Count").appendChild(
            fragment);
        }
      }
      action = 2;

    } else {
      window.location.reload();
      action = 1;
    }
  } else {
    console.log("Please Enter the required data.");
  }

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

  function jsonData() {
    var jsonObj1 = document.getElementById("myTextarea").value;
    if (jsonObj1 == "") {
      if (confirm(
          "1. Please enter json data or\n2. Copy the sample JSON data by clicking on the 'Copy to Clickboard' button or \n3. Enter your name and birthdate and click on 'Create JSON' to create a valid JSON"
        ) == true) {
        document.getElementById('myTextarea').style.border =
          "thin solid red";
      } else {
        console.log("You pressed Cancel!");
      }
      return false;
    } else {
      document.getElementById('myTextarea').style.border =
        "thin solid #3d3d3d";
      return true;
    }
  }

  function setUsername(id, newUsername) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (jsonObj[i].Id === id) {
        jsonObj[i].Username = newUsername;
        return;
      }
    }
  }

  function getDay(ds) {
    var d = new Date(ds);
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    return n;
  }

  function create(htmlStr) {
    var frag = document.createDocumentFragment(),
      temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
      frag.appendChild(temp.firstChild);
    }
    return frag;
  }

  function setDayName(yearNumber, ...jsonObj) {
    for (var i = 0; i < jsonObj.length; i++) {
      var pos = jsonObj[i].birthday.indexOf("/");
      var monthNumber = jsonObj[i].birthday.substr(0, pos);
      var yearNum = jsonObj[i].birthday.lastIndexOf("/");
      var dnum = jsonObj[i].birthday.substr(pos + 1, 2);
      var ds = yearNumber + "-" + monthNumber + "-" + dnum;
      var dayName = getDay(ds);
      jsonObj[i].Day = dayName;
      var spos = jsonObj[i].name.indexOf(" ");
      var fI = jsonObj[i].name;
      fI = fI.charAt(0).toUpperCase();
      var lI = jsonObj[i].name.substr(spos + 1, 2);
      lI = lI.charAt(0).toUpperCase();
      var initials = fI + lI;
      var dId = 'posts' + initials;
      var fragment = create('<div id="' + dId +
        '" class="posts">' + initials + '</div>');
      document.getElementById(dayName).appendChild(fragment);
      ran_col(dId);
    }
  }

  function ran_col(IdTar) { //function name
    var color = '#'; // hexadecimal starting symbol
    var letters = ['464D56', '70B456', '9656B4', 'B4567A',
      'F90F47', '849E0D', 'F9440F', '0FF2F9', '0D0D9E',
      '022B2E', '9510A2', '693803', '585857'
    ]; //Set your colors here
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById(IdTar).style.backgroundColor =
      color;
  }

  function jsonDataValidator() {
    var js = document.getElementById("myTextarea").value;
    try {
      JSON.parse(js);
    } catch (e) {
      console.log(e)
      alert("Invalid JSON\nError = " + e);
      return false;
    }
    return true;
  }

}