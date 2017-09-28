function yearRequired() {
    if (document.getElementById('yearVal').value == "") {
        document.getElementById('yearVal').style.border =
          "thin solid red"
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
        document.getElementById('myTextarea').style.border =
          "thin solid red";
      return false;
    } else {
      document.getElementById('myTextarea').style.border =
        "thin solid #3d3d3d";
      return true;
    }
  }  

function getCount(i) {
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
          var container_div = document.getElementById(weekday[i]);
          var count = container_div.getElementsByTagName('div').length;
          if (count == 1) {
            document.getElementById(weekday[i] + "Count").innerHTML = "1 birthday";
          } else if (count == 0) {
            document.getElementById(weekday[i] + "Count").innerHTML = "No birthdays";
          } else {
            document.getElementById(weekday[i] + "Count").innerHTML = "2 birthdays";
          }
      }

var assert = chai.assert;

describe('yearRequired', function() {
  it('Should specify a year', function() {

    var val = yearRequired();

    assert.equal(false, val);
  });
});

describe('jsonData', function() {
  it('Should give a json data', function() {

    var valJson = jsonData();

    assert.equal(false, valJson);
  });
});

describe('getCount', function() {
  it('Should get Count of the div in the Monday tag', function() {
    
      var count = getCount(1);

      assert.equal(document.getElementById('MondayCount').innerHTML, 'No birthdays');
  });

  it('Should get Count of the div in the Tuesday tag', function() {
    
      var count = getCount(2);

      assert.equal(document.getElementById('TuesdayCount').innerHTML, '1 birthday');
  });

  it('Should get Count of the div in the Wednesday tag', function() {
    
      var count = getCount(3);

      assert.equal(document.getElementById('WednesdayCount').innerHTML, '2 birthdays');
  });
});

