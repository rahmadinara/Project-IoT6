document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    
    if(loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const user = document.getElementById("username").value;
            const pass = document.getElementById("password").value;

            if(user === "admin" && pass === "admin") {
                localStorage.setItem("session", "active");
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid username or password!");
            }
        });
    }
});