var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');
var usernameerror = document.getElementById('usernameerror');
var btn = document.getElementById('btn');
var emailerror = document.getElementById("emailerror");
var passworderror = document.getElementById("passworderror");
var password2error = document.getElementById("password2error");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    submit();
});



function submit() {
    var count = 0;


    if (username.value == '') {
        usernameerror.textContent = " Please enter your username";
        usernameerror.style.visibility = "visible";
        username.style.border = "3px solid ";
        usernameerror.style.color = "black"


    } else if (username.value.length > 10) {
        usernameerror.textContent = " userame does not extend above 10 characters";
        usernameerror.style.visibility = "visible";
        usernameerror.style.color = "black";
        username.style.border = "3px solid ";

    } else {
        username.style.border = "3px solid blue ";
        count += 1;

    }
    if (email.value == "") {
        emailerror.textContent = "Please enter your email address";
        emailerror.style.visibility = "visible";
        emailerror.style.color = "black";
        email.style.border = "3px solid ";

    } else if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailerror.textContent = "Please enter a valid email address";
        emailerror.style.visibility = "visible";
        emailerror.style.color = "black";
        email.style.border = "3px solid ";
    } else {
        email.style.border = "3px solid blue ";
        count += 1;

    }
    if (password.value == "") {
        passworderror.style.visibility = "visible";
        passworderror.style.color = "black";
        passworderror.textContent = "Please enter a valid password";
        password.style.border = "3px solid ";


    } else if (!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/)) {
        passworderror.textContent = "Password must contains one Uppercase, one lower case,one special chartacters ,one number and minimum 10 letters";
        passworderror.style.visibility = "visible";
        passworderror.style.color = "black";
        password.style.border = "3px solid ";
        password.style.marginBottom = "10px";
    } else {
        password.style.border = "3px solid blue ";
        count += 1;
    }
    if (password2.value == "") {
        password2error.style.visibility = "visible";
        password2error.textContent = "Please confirm your password";
        password2error.style.color = "black";
        password2.style.border = "3px solid ";
    } else if (password.value == password2.value) {
        password2.style.border = "3px solid blue";
        count += 1;
    } else {
        password2error.style.visibility = "visible";
        password2error.textContent = "Password does not match";
        password2error.style.color = "black";
        password2.style.border = "3px solid ";
    }
    if (count == 4) {
        alert("Welcome");
        console.log(username.value);
        console.log(email.value);
        console.log(password.value);
        console.log(password2.value);
    } else {
        console.log("Not provided proper data ");
        console.log("Submit button doesn't work");
    }

}