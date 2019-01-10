const name_pattern = /^[a-zA-Z ]+$/;
const email_pattern = /^[a-zA-Z_\.\d]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/;
const phone_pattern = /^\d{10}$/;
var test_case = 0;

function name_check(name){
  var div = document.getElementById('name-form');
  var p = document.getElementById('name_field');
  if (!name_pattern.test(name.value)){
    div.setAttribute("class", "input border-danger alert-border");
    p.innerHTML = "Use only Alphabets";
    setTimeout("document.forms['user-detail']['name'].focus();",0);
  }
  else{
    div.setAttribute("class", "input");
    p.innerHTML = "";
    test_case ++;
  }
}
function email_check(email){
  var div = document.getElementById('email-form');
  var p = document.getElementById('email_field');
  if (!email_pattern.test(email.value)){
    div.setAttribute("class", "input border-danger alert-border");
    p.innerHTML = "Enter Email in (xyz@abc.com) format";
    setTimeout("document.forms['user-detail']['email'].focus();",0);
  }
  else{
    div.setAttribute("class", "input");
    p.innerHTML = "";
    test_case ++;
  }
}
function phone_check(phone){
  var div = document.getElementById('phone-form');
  var p = document.getElementById('phone_field');
  if (!phone_pattern.test(phone.value)){
    div.setAttribute("class", "input border-danger alert-border");
    p.innerHTML = "Mobile Number should contain 10-digits";
    setTimeout("document.forms['user-detail']['phone'].focus();",0);
  }
  else{
    div.setAttribute("class", "input");
    p.innerHTML = "";
    test_case ++;
  }
}

function get_details(){
  var name = document.forms['user-detail']['name'].value;
  var email = document.forms['user-detail']['email'].value;
  var phone = document.forms['user-detail']['phone'].value;
  var api_url = document.forms['user-detail']['api_url'].value;
  var valid = true;

  if (phone == ""){
    document.getElementById('phone-form').setAttribute("class", "input border-danger alert-border");
    document.getElementById('phone_field').innerHTML = "Please fill this field";
    setTimeout("document.forms['user-detail']['phone'].focus();",0);
    valid = false;
  }

  if (email == ""){
    document.getElementById('email-form').setAttribute("class", "input border-danger alert-border");
    document.getElementById('email_field').innerHTML = "Please fill this field";
    setTimeout("document.forms['user-detail']['email'].focus();",0);
    valid = false;
  }

  if (name == ""){
    document.getElementById('name-form').setAttribute("class", "input border-danger alert-border");
    document.getElementById('name_field').innerHTML = "Please fill this field";
    setTimeout("document.forms['user-detail']['name'].focus();",0);
    valid = false;
  }

  if (valid & test_case >= 3){
    request_response(name, email, phone, api_url);
  }
}

function request_response(name, email, phone, api_url){
    const Http = new XMLHttpRequest();
    const url= api_url;

    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({"name":name,"email":email,"phone":phone}));
    Http.onreadystatechange=(e)=>{

    console.log(Http.responseText);

    var data = JSON.parse(Http.responseText);
    var class_name = String("alert alert-"+data["status"]);

    div = document.getElementById('alert-msg-div');
    // div.classList.add("alert alert-success");
    div.setAttribute( 'class', class_name );
    div.innerHTML = data["message"];
    }
  }
