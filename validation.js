const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const date = document.getElementById('date');
const gender = document.getElementById('gender');
const mno = document.getElementById('mno');
const ins = document.getElementById('ins');
const pass = document.getElementById('pass');
const cpass = document.getElementById('cpass');
const insert = document.getElementById('insert');
const result = document.getElementById('res');

function validate_fname() {
    var a = document.myform.fname.value;
    if (a.length < 5) {
        document.getElementById('valname1').innerHTML = "Length must be greater than 5"
        document.myform.fname.focus();
        return false;
    }
    if (!isNaN(a)) {
        document.getElementById('valname1').innerHTML = "Enter valid name"
        document.myform.fname.select();
        return false;
    }
    document.getElementById('valname1').innerHTML = ""
}

function validate_lname() {
    var b = document.myform.lname.value;
    if (b.length < 5) {
        document.getElementById('valname2').innerHTML = "Length must be greater than 5"
        document.myform.lname.focus();
        return false;
    }
    if (!isNaN(b)) {
        document.getElementById('valname2').innerHTML = "Enter valid name"
        document.myform.lname.select();
        return false;
    }
    document.getElementById('valname2').innerHTML = ""
}

function validate_email() {
    var d = document.myform.email.value;
    if (d == "") {
        document.getElementById('valname3').innerHTML = "Enter a valid E-mail"
        document.myform.mail.focus();
        return false;
    }
    var atposition = d.indexOf("@");
    var dotposition = d.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= d.length) {
        document.getElementById('valname3').innerHTML = "Enter a valid E-mail"
        return false;
    }
    document.getElementById('valname3').innerHTML = ""

}

function validate_date() {

    var date = document.myform.date;
    if (date.selectedIndex == 0) {
        document.getElementById('valname4').innerHTML = "Select D.O.B"
        document.myform.gender.focus();
        return false;
    }
    document.getElementById('valname4').innerHTML = ""
}

function validate_gender() {

    var gender = document.myform.gender;
    if (gender.selectedIndex == 0) {
        document.getElementById('valname5').innerHTML = "Enter a valid E-mail"
        document.myform.gender.focus();
        return false;
    }
    document.getElementById('valname5').innerHTML = ""
}

function validate_mobile() {
    var m = document.myform.mno.value;
    if (m == "") {
        document.getElementById('valname6').innerHTML = "Enter a valid Mobile Number"
        document.myform.mno.focus();
        return false;
    }
    else if (m.length < 10 || m.length > 10) {
        document.getElementById('valname6').innerHTML = "The length should be 10"
        document.myform.mno.focus();
        return false;
    }
    document.getElementById('valname6').innerHTML = ""
}

function validate_inst() {

    var ins = document.myform.ins.value;
    if (ins == "") {
        document.getElementById('valname7').innerHTML = "Institution Name is Empty"
        document.myform.inss.focus();
        return false;
    }
    if (!isNaN(ins)) {
        document.getElementById('valname7').innerHTML = "Enter a valid institute name"
        document.myform.ins.select();
        return false;
    }
    document.getElementById('valname7').innerHTML = ""
}
function validate_pass() {
    var p = document.myform.pass.value;
    if (p == "") {
        document.getElementById('valname8').innerHTML = "Password is Empty"
        document.myform.pass.focus();
        return false;
    }
    document.getElementById('valname8').innerHTML = ""
}
function validate_cpass() {
    var p = document.myform.pass.value;
    var cp = document.myform.cpass.value;
    if (cp == "") {
        document.getElementById('valname9').innerHTML = "Password is Empty"
        document.myform.cpass.focus();
        return false;
    }
    if (p != cp) {
        document.getElementById('valname9').innerHTML = "Check if Password and Confirm Password are Same"
        document.myform.cpass.focus();
        return false;
    }
    document.getElementById('valname9').innerHTML = ""
}


insert.addEventListener('click', () => {
    var data = {
        First_Name: fname.value,
        Last_Name: lname.value,
        mail: email.value,
        DOB: date.value,
        Gender: gender.value,
        Mobile: parseInt(mno.value),
        Institute: ins.value,
        Password: pass.value,
        CPassword: cpass.value
    }
    fetch('http://localhost:9000/api/Signup', {
        method: "POST",
        headers: {
            'Content-type': 'application/json; chatset=UTF-8'
        },
        body: JSON.stringify(data)
    })
        .then(res => { return res.json() })
        .then(res => { result.innerText = JSON.stringify(res) });



})