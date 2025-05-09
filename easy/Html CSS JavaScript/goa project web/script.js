let email = document.getElementById('email');
let name = document.getElementById('name');
let password = document.getElementById('password');

function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthIndicator = document.getElementById('passwordStrength');
    let strength = "";

    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    if (password.length >= 12 && hasUpperCase && hasNumber && hasSymbol) {
        strength = "მძლავრი პაროლი";
        strengthIndicator.style.color = "green";
    } else if (password.length >= 8 && hasUpperCase && (hasNumber || hasSymbol)) {
        strength = "საშუალო პაროლი";
        strengthIndicator.style.color = "yellow";
    } else if (password.length >= 6 && (hasUpperCase || hasNumber || hasSymbol)) {
        strength = "სუსტი პაროლი";
        strengthIndicator.style.color = "orange";
    } else if (password.length >= 6) {
        strength = "ძალიან სუსტი პაროლი";
        strengthIndicator.style.color = "red";
    } else {
        strength = "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო";
        strengthIndicator.style.color = "red";
    }
    strengthIndicator.textContent = strength;
}

function register() {
    email = email.value;
    name = name.value;
    password = password.value;
    const strengthIndicator = document.getElementById('passwordStrength').textContent;

    if (strengthIndicator === "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო") {
        alert('გთხოვთ შეიყვანოთ უფრო ძლიერი პაროლი.');
        return;
    }

    if (email && name && password) {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', name);
        localStorage.setItem('userPassword', password);
        alert('რეგისტრაცია წარმატებით დასრულდა!');
        window.location.href = "/log in/index.html";
    } else {
        alert('გთხოვთ შეავსოთ ყველა ველი.');
    }
}

document.getElementById('password').addEventListener('input', checkPasswordStrength);
document.getElementById('registerBtn').addEventListener('click', register);



let goaimg = document.getElementById("goa");
let goaimg1 = document.getElementById("goa1");


email.addEventListener("input", function() {
    if (email.value.trim() !== "") {
        goaimg.style.opacity = "1";
        goaimg1.style.opacity = "1";
    } else{
        goaimg.style.opacity = "0";
        goaimg1.style.opacity = "0";
    }
});

name.addEventListener("input", function() {
    if (name.value.trim() !== "") {
        goaimg.style.boxShadow = "0px 0px 40px green";
        goaimg1.style.boxShadow = "0px 0px 40px green";
    } else{
        goaimg.style.boxShadow = "0px 0px 10px green";
        goaimg1.style.boxShadow = "0px 0px 10px green";
    }
});