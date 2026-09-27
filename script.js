```javascript
document.addEventListener("DOMContentLoaded", function () {

    const users = {
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

    const logoutBtn = document.getElementById("logoutBtn");


    function showLogin() {

        loginPage.style.display = "flex";
        portalPage.style.display = "none";

    }


    function hideAllPages() {

        document
            .querySelectorAll(".portal-section")
            .forEach(function (page) {

                page.style.display = "none";

            });

    }


    function updateUserInformation(user) {

        document.getElementById("sidebarUserName").textContent =
            user.name;

        document.getElementById("sidebarUserType").textContent =
            user.role;

        document.getElementById("topUserName").textContent =
            user.name;

        document.getElementById("topUserType").textContent =
            user.role;

        document.getElementById("profileName").textContent =
            user.name;

        document.getElementById("profileId").textContent =
            user.id;

        document.getElementById("profileClass").textContent =
            user.className;

        const welcomeName =
            document.getElementById("welcomeName");

        if (welcomeName) {
            welcomeName.textContent = user.name;
        }

        const adminWelcomeName =
            document.getElementById("adminWelcomeName");

        if (adminWelcomeName) {
            adminWelcomeName.textContent = user.name;
        }

    }


    function hideAllNavigation() {

        document.getElementById("studentNavigation")
            .style.display = "none";

        document.getElementById("parentNavigation")
            .style.display = "none";

        document.getElementById("adminNavigation")
            .style.display = "none";

    }


    function showDashboard(user) {

        hideAllPages();

        hideAllNavigation();

        updateUserInformation(user);

        loginPage.style.display = "none";
        portalPage.style.display = "flex";


        if (user.role === "Student") {

            document.getElementById("studentNavigation")
                .style.display = "block";

            document.getElementById("dashboardPage")
                .style.display = "block";

            document.getElementById("pageTitle")
                .textContent = "Dashboard";

            document.getElementById("pageSubtitle")
                .textContent =
                "Welcome to your school portal.";

        }


        else if (user.role === "Parent / Guardian") {

            document.getElementById("parentNavigation")
                .style.display = "block";

            document.getElementById("dashboardPage")
                .style.display = "block";

            document.getElementById("pageTitle")
                .textContent = "Dashboard";

            document.getElementById("pageSubtitle")
                .textContent =
                "Welcome to your school portal.";

        }


        else if (user.role === "Administrator") {

            document.getElementById("adminNavigation")
                .style.display = "block";

            document.getElementById("adminDashboardPage")
                .style.display = "block";

            document.getElementById("pageTitle")
                .textContent =
                "Administration Dashboard";

            document.getElementById("pageSubtitle")
                .textContent =
                "Manage your school from one central dashboard.";

        }

    }


    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const type = userType.value;

        const enteredUsername =
            username.value.trim();

        const enteredPassword =
            password.value;

        const user = users[type];


        if (
            user &&
            enteredUsername === user.username &&
            enteredPassword === user.password
        ) {

            localStorage.setItem(
                "schoolPortalUser",
                JSON.stringify(user)
            );

            loginMessage.textContent = "";
            loginMessage.className = "";

            showDashboard(user);

        }

        else {

            loginMessage.textContent =
                "Invalid username or password.";

            loginMessage.className =
                "error-message";

        }

    });


    logoutBtn.addEventListener("click", function () {

        localStorage.removeItem("schoolPortalUser");

        loginForm.reset();

        showLogin();

    });


    document.addEventListener("click", function (event) {

        const link =
            event.target.closest(".nav-link");

        if (!link) return;

        event.preventDefault();

        const pageName =
            link.getAttribute("data-page");

        hideAllPages();

        const selectedPage =
            document.getElementById(pageName + "Page");

        if (selectedPage) {

            selectedPage.style.display = "block";

        }


        const titles = {

            dashboard: "Dashboard",

            profile: "My Profile",

            subjects: "My Subjects",

            results: "My Results",

            attendance: "Attendance",

            assignments: "Assignments",

            fees: "Fees & Payments",

            announcements: "Announcements",

            students: "Students",

            parents: "Parents & Guardians",

            teachers: "Teachers",

            classes: "Classes",

            schoolSubjects: "Subjects",

            schoolResults: "Results Management",

            schoolAttendance: "Attendance Management",

            schoolAssignments: "Assignments",

            schoolFees: "Fees Management",

            schoolAnnouncements: "School Announcements",

            reports: "Reports",

            settings: "Settings",

            adminDashboard: "Administration Dashboard"

        };


        document.getElementById("pageTitle")
            .textContent =
            titles[pageName] || "Dashboard";


        document
            .querySelectorAll(".nav-link")
            .forEach(function (item) {

                item.classList.remove("active");

            });

        link.classList.add("active");

    });


    document.addEventListener("click", function (event) {

        const button =
            event.target.closest(".quick-action");

        if (!button) return;

        const pageName =
            button.getAttribute("data-page");

        hideAllPages();

        const selectedPage =
            document.getElementById(pageName + "Page");

        if (selectedPage) {

            selectedPage.style.display = "block";

        }

        const titles = {

            students: "Students",

            schoolResults: "Results Management",

            schoolAttendance: "Attendance Management"

        };

        document.getElementById("pageTitle")
            .textContent =
            titles[pageName] || "Dashboard";

    });


    const savedUser =
        localStorage.getItem("schoolPortalUser");


    if (savedUser) {

        try {

            const user =
                JSON.parse(savedUser);

            if (user && user.username) {

                showDashboard(user);

            } else {

                showLogin();

            }

        }

        catch (error) {

            localStorage.removeItem(
                "schoolPortalUser"
            );

            showLogin();

        }

    }

    else {

        showLogin();

    }

});
```
