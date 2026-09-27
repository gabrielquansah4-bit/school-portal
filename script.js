document.addEventListener("DOMContentLoaded", function () {

    const demoUsers = {
        student: {
            username: "student001",
            password: "123456",
            name: "Gabriel Quansah",
            role: "Student",
            id: "STU-001",
            className: "Basic 8"
        },

        parent: {
            username: "parent001",
            password: "123456",
            name: "Parent / Guardian",
            role: "Parent / Guardian",
            id: "PAR-001",
            className: "Basic 8"
        },

        admin: {
            username: "admin",
            password: "admin123",
            name: "School Administrator",
            role: "Administrator",
            id: "ADM-001",
            className: "Administration"
        }
    };

    const loginPage = document.getElementById("loginPage");
    const portalPage = document.getElementById("portalPage");
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    const userType = document.getElementById("userType");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const rememberMe = document.getElementById("rememberMe");

    const logoutBtn = document.getElementById("logoutBtn");

    function showPortal(user) {
        loginPage.style.display = "none";
        portalPage.style.display = "flex";

        document.getElementById("sidebarUserName").textContent = user.name;
        document.getElementById("sidebarUserType").textContent = user.role;

        document.getElementById("topUserName").textContent = user.name;
        document.getElementById("topUserType").textContent = user.role;

        document.getElementById("welcomeName").textContent = user.name;
        document.getElementById("profileName").textContent = user.name;

        const profileId = document.getElementById("profileId");
        if (profileId) profileId.textContent = user.id;

        const profileClass = document.getElementById("profileClass");
        if (profileClass) profileClass.textContent = user.className;
    }

    function showLogin() {
        portalPage.style.display = "none";
        loginPage.style.display = "flex";
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const selectedType = userType.value;
        const enteredUsername = username.value.trim();
        const enteredPassword = password.value;

        const user = demoUsers[selectedType];

        if (
            user &&
            enteredUsername === user.username &&
            enteredPassword === user.password
        ) {
            localStorage.setItem("schoolPortalUser", JSON.stringify(user));

            loginMessage.textContent = "";
            loginMessage.className = "";

            showPortal(user);
        } else {
            loginMessage.textContent = "Invalid username or password.";
            loginMessage.className = "error-message";
        }
    });

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("schoolPortalUser");
            loginForm.reset();
            showLogin();
        });
    }

    const savedUser = localStorage.getItem("schoolPortalUser");

    if (savedUser) {
        try {
            const user = JSON.parse(savedUser);

            if (user && user.username) {
                showPortal(user);
            } else {
                showLogin();
            }
        } catch (error) {
            localStorage.removeItem("schoolPortalUser");
            showLogin();
        }
    } else {
        showLogin();
    }

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const pageName = this.getAttribute("data-page");

            document.querySelectorAll(".portal-section").forEach(function (page) {
                page.style.display = "none";
            });

            const selectedPage = document.getElementById(pageName + "Page");

            if (selectedPage) {
                selectedPage.style.display = "block";
            }

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

            const pageTitle = document.getElementById("pageTitle");

            if (pageTitle) {
                const titles = {
                    dashboard: "Dashboard",
                    profile: "My Profile",
                    subjects: "My Subjects",
                    results: "My Results",
                    attendance: "Attendance",
                    assignments: "Assignments",
                    fees: "Fees & Payments",
                    announcements: "Announcements",
                    settings: "Settings"
                };

                pageTitle.textContent = titles[pageName] || "Dashboard";
            }
        });
    });

});
