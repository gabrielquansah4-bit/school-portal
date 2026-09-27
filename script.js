document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (!loginForm) {
        alert("ERROR: Login form was not found.");
        return;
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("SUCCESS: JavaScript is working!");
    });
});
