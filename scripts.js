// Validate form for no empty input fields

var validateForm = function(){
  var name = document.getElementById('name').value;
  // var sid = document.forms["proj1"]["sid"].value;
  // var email = document.forms["proj1"]["email"].value;
  if (name === "" || name == null) {
    document.getElementsByClassName('message').style.color = 'red';
    document.getElementsByClassName('message').innerHTML = "This field is required";
    return false;
  }
};

//Email Validate function
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// Number Validate function
function validateSID(sid){
  var re = /^[-+]?[0-9]+$/;
  return re.test(sid);
}

function validate() {
  $("#email").keyup(function() {

    var email = $("#email").val();
    if (validateEmail(email)) {
      $("#checkEmail").text(email + " is valid");
      $("#checkEmail").css("color", "green");
    } else {
      $("#checkEmail").text(email + " is not valid");
      $("#checkEmail").css("color", "red");
    }
  });

  $("#sid").keyup(function() {

    var sid = $("#sid").val();
    if(validateSID(sid) && (sid.length == 9)){
      $("#checkSID").text(sid + " is valid");
      $("#checkSID").css("color", "green");
    } else {
      $("#checkSID").text(sid + " is not valid");
      $("#checkSID").css("color", "red");
    }
  });

 //UPDATE ON KEYUP
$(document).ready(function() {
  $("#checkEmail").keyup(validate);
  $("#checkSID").keyup(validate);
});

}

validate();

// DOM Stuff

function changeText(){
  // name
  document.getElementById('name_edit').innerHTML = document.getElementById('name').value;
  // email
  document.getElementById('email_edit').innerHTML = document.getElementById('email').value;
  // sid
  document.getElementById('sid_edit').innerHTML = document.getElementById('sid').value;
};

// Event Listener
document.getElementById('booton').addEventListener("click", changeText);