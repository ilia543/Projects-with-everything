document.getElementById('loginBtn').addEventListener('click', function() {
    const enteredEmail = document.getElementById('loginEmail').value;
    const enteredPassword = document.getElementById('loginPassword').value;
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    const errorMessage = document.getElementById('errorMessage');

    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
        alert("შესვლა წარმატებულია!");
        window.location.href = "/main/index.html";
    } else {
        errorMessage.textContent = "არასწორი Email ან პაროლი!";
    }
});
