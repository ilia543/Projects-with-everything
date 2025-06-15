// რეგისტრაციის შემოწმება სტარტ /////////////////////////////////
function checkLogin() {
    const userData = localStorage.getItem("userData");
    if (userData) {
        const user = JSON.parse(userData);
        showWelcomePage(user.username);
    } else {
        showLoginForm();
    }
}
// რეგისტრაციის შემოწმება ენდ /////////////////////////////////

// ლოგ ინ ფორმის ჩვენება და გამორთვა სტარტ //////////////////////////////////////
function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
    document.getElementById("success-message").style.display = "none";
}
// ლოგ ინ ფორმის ჩვენება და გამორთვა ენდ //////////////////////////////////////


// რეგისტრაციის ფორმის ჩვენება და გამორთვა სტარტ //////////////////////////////////////
function showRegisterForm() {
    document.getElementById("register-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("success-message").style.display = "none";
}
// რეგისტრაციის ფორმის ჩვენება და გამორთვა ენდ //////////////////////////////////////

// რეგისტრაციის და ლოგ ინის გადართვა გადმორთვა სტარტ /////////////////////////////
function toggleForm(formType) {
    if (formType === 'login') {
        showLoginForm();
    } else if (formType === 'register') {
        showRegisterForm();
    }
}
// რეგისტრაციის და ლოგ ინის გადართვა გადმორთვა ენდ //////////////////////////////


//რეგისტრაციის ფორმიდან მომხმარებლის შეყვანილი ინფორმაციის დამახსოვრება სტარტ ///
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = { username, email, password };
    

    localStorage.setItem("userData", JSON.stringify(user));

    alert("Registration successful! Please log in.");
    showLoginForm();
});
//რეგისტრაციის ფორმიდან მომხმარებლის შეყვანილი ინფორმაციის დამახსოვრება ენდ ///


//რეგისტრაციის ფორმიდან მომხმარებლის შეყვანილი ინფორმაციის შემოწმება ლოგ ინშინ სტარტ ///
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const userData = localStorage.getItem("userData");
    
    if (userData) {
        const user = JSON.parse(userData);
        if (user.email === email && user.username === username && user.password === password) {
            showWelcomePage(user.username);
        } else {
            alert("Invalid credentials. Please check your email, username, or password.");
        }
    } else {
        alert("No account found. Please register first.");
    }
});
//რეგისტრაციის ფორმიდან მომხმარებლის შეყვანილი ინფორმაციის შემოწმება ლოგ ინშინ ენდ ///


// თუ ყველაფერი სწორადაა გამოვიტანოთ წარმატებული ლოგ ინის მესიჯი სტარტ ////////////////
function showWelcomePage(username) {
    document.getElementById("success-message").style.display = "block";
    document.getElementById("user-name").textContent = username;
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "none";
}
// თუ ყველაფერი სწორადაა გამოვიტანოთ წარმატებული ლოგ ინის მესიჯი ენდ ////////////////


// ექაუნთიდან გამოსვლის დროს წავშალოთ მომხმარებლის ინფო სთორეჯიდნ სტარტ //////////////////
function logout() {
    showLoginForm();
}
// // ექაუნთიდან გამოსვლის დროს წავშალოთ მომხმარებლის ინფო სთორეჯიდნ ენდ //////////////////


//გვერდი რომ არ გადაიტვირთოს დაჭერისას
window.onload = checkLogin;


localStorage.JSON.parse