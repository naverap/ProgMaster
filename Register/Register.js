function isLetter(ch) {
    return /[a-z]/i.test(ch);
}

function sequence(str) {
    var seq = false;
    var a, b, c;
    for (var i = 1; i < str.length - 1; i++) {
        a = str[i - 1];
        b = str[i];
        c = str[i + 1];
        if (a == b && b == c) {
            return true;
        }
    }
    return false;
}

function clearErrorMessage(elementId) {
    document.getElementById(elementId).innerHTML = "";
}

function Fname() {
    var firstName = document.getElementById("firstName").value;
    var firstMsg = document.getElementById("FNerror");
    var dig = /\d/;
    if (dig.test(firstName)) {
        firstMsg.innerHTML = "Name must contain only letters.";
        return false;
    }
    var hebrew = /[א-ת]/;
    var english = /[a-z]/i;
    if (hebrew.test(firstName) && english.test(firstName)) {
        firstMsg.innerHTML = "Name must contain only 1 language.";
        return false;
    }
    if (firstName.length < 2) {
        firstMsg.innerHTML = "First name must contain at least 2 letters.";
        return false;
    }
    firstMsg.innerHTML = "";
    return true;
}


function Lname() {
    var lastName = document.getElementById("lastName").value;
    var lastMsg = document.getElementById("LNerror");
    var dig = /\d/;
    if (dig.test(lastName)) {
        lastMsg.innerHTML = "Name must contain only letters.";
        return false;
    }
    var hebrew = /[א-ת]/;
    var english = /[a-z]/i;
    if (hebrew.test(lastName) && english.test(lastName)) {
        lastMsg.innerHTML = "Name must contain only 1 language.";
        return false;
    }
    if (lastName.length < 2) {
        lastMsg.innerHTML = "Last name must contain at least 2 letters.";
        return false;
    }
    lastMsg.innerHTML = "";
    return true;
}

function userNameVal() {
    var userName = document.getElementById("userName").value;
    var userNameMsg = document.getElementById("UNerror");
    if (userName.length == 0) {
        userNameMsg.innerHTML = "You must enter a user name.";
        return false;
    }
    if (userName.length <= 2) {
        userNameMsg.innerHTML = "User name must be at least 2 characters long.";
        return false;
    }
    letter = /[a-z]/i;
    if (!letter.test(userName[0])) {
        userNameMsg.innerHTML = "User name must start with a letter.";
        return false;
    }
    space = /\s/;
    if (space.test(userName)) {
        userNameMsg.innerHTML = "User name must not contain spaces.";
        return false;
    }
    var hebrew = /[א-ת]/;
    if (hebrew.test(userName)) {
        userNameMsg.innerHTML = "User name must contain only letters in English.";
        return false;
    }
    userNameMsg.innerHTML = "";
    return true
}


function Email() {
    var email = document.getElementById("email").value;
    var emailMsg = document.getElementById("Emailerror");
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!reg.test(email)) {
        emailMsg.innerHTML = "Invalid mail.";
        return false;
    }
    emailMsg.innerHTML = "";
    return true;
}


function passwordVal() {
    var pass = document.getElementById("password").value;
    var passMsg = document.getElementById("Passerror");
    if (pass.length == 0) {
        passMsg.innerHTML = "You must enter a password.";
        return false;
    }
    if (pass.length < 6 || pass.length > 12) {
        passMsg.innerHTML = "Password must contain at least 6 characters and no more than 12 characters.";
        return false;
    }
    var space = /\s/;
    if (space.test(pass)) {
        passMsg.innerHTML = "Password must not contain spaces.";
        return false;
    }
    var dig = /\d/;
    if (!dig.test(pass)) {
        passMsg.innerHTML = "Password must contain at least one digit.";
        return false;
    }
    var special = /[@!#$%^&*()-+]/;
    if (!special.test(pass)) {
        passMsg.innerHTML = "Password must contain at least one special character.";
        return false;
    }
    var big = /[A-Z]/;
    if (!big.test(pass)) {
        passMsg.innerHTML = "Password must contain at least one big letter.";
        return false;
    }
    if (sequence(pass)) {
        passMsg.innerHTML = "Password must not contain a sequence of 3 identical characters.";
        return false;
    }
    var hebrew = /[א-ת]/;
    if (hebrew.test(pass)) {
        passMsg.innerHTML = "You must enter letters only in English.";
        return false;
    }
    passMsg.innerHTML = "";
    return true;
}


function confirmPass() {
    var pass = document.getElementById("password").value;
    var confirm = document.getElementById("submitpassword").value;
    var confirmMsg = document.getElementById("SPasserror");
    if (pass != confirm) {
        confirmMsg.innerHTML = "Doesn't match password.";
        return false;
    }
    if (confirm.length == 0) {
        confirmMsg.innerHTML = "You must enter password confirmation.";
        return false;
    }
    confirmMsg.innerHTML = "";
    return true;
}

function City() {
    var city = document.getElementById("City").value;
    var cityMsg = document.getElementById("Cityerror");
    var dig = /\d/;
    if (city.length == 0) {
        cityMsg.innerHTML = "You must enter the name of the city you are currently living in.";
        return false;
    }
    if (dig.test(city)) {
        cityMsg.innerHTML = "City's name can contain only letters.";
        return false;
    }
    cityMsg.innerHTML = "";
    return true;
}

function phoneNumber() {
    var phone = document.getElementById("phone").value;
    var phoneMsg = document.getElementById("PhoneError");
    var reg = /^0{1}(2|3|4|6|8|9|5[2-8]|73)-[1-9]\d{6}$/;
    if (!reg.test(phone)) {
        phoneMsg.innerHTML = "Phone number is illegal.";
        return false;
    }
    phoneMsg.innerHTML = "";
    return true;
}

function dateCheck() {
    var date = document.getElementById("date").value;
    var dateMsg = document.getElementById("DateError");
    if (date.length == 0) {
        dateMsg.innerHTML = "You must enter your birthday date.";
        return false;
    }
    dateMsg.innerHTML = "";
    return true;
}

function register() {
    var res = true;
    res = Fname() && res;
    res = Lname() && res;
    res = userNameVal() && res;
    res = Email() && res;
    res = passwordVal() && res;
    res = confirmPass() && res;
    res = City() && res;
    res = phoneNumber() && res;
    res = dateCheck() && res;

    return res
}

function submit() {
    var res = register();
    if (res == true) {
        window.location.href = "homePage.html";
    }
    else{
        dateMsg.innerHTML = "ERROR";
    }
}

document.getElementById("submit").addEventListener("click", function(){
    submit(); // Call the submit function here
});