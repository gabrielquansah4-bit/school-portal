```javascript
/* =========================================
   SCHOOL PORTAL
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   DEMO USER ACCOUNTS
========================================= */

const demoUsers = {

    student: {
        username: "student001",
        password: "123456",
        name: "Gabriel Quansah",
        role: "Student"
    },

    parent: {
        username: "parent001",
        password: "123456",
        name: "Parent / Guardian",
        role: "Parent"
    },

    admin: {
        username: "admin",
        password: "admin123",
        name: "School Administrator",
        role: "Administrator"
    }

};


/* =========================================
   ELEMENTS
========================================= */

const loginPage = document.getElementById("loginPage");
const portalPage = document.getElementById("portalPage");

const loginForm = document.getElementById("loginForm");

const loginMessage = document.getElementById("loginMessage");

const userType = document.getElementById("userType");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");


/* =========================================
   LOGIN
========================================= */

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const selectedType = userType.value;

    const username = usernameInput.value.trim();

    const password = passwordInput.value.trim();


    if (!selectedType) {

        showLoginMessage(
            "Please select an account type.",
            "error"
        );

        return;
    }


    const account = demoUsers[selectedType];


    if (
        account &&
        username === account.username &&
        password === account.password
    ) {

        const loggedInUser = {

            username: account.username,

            name: account.name,

            role: account.role,

            type: selectedType

        };


        localStorage.setItem(
            "schoolPortalUser",
            JSON.stringify(loggedInUser)
        );


        showLoginMessage(
            "Login successful. Opening portal...",
            "success"
        );


        setTimeout(function () {

            openPortal(loggedInUser);

        }, 500);


    } else {

        showLoginMessage(
            "Invalid login details. Please check your username, password and account type.",
            "error"
        );

    }

});


/* =========================================
   LOGIN MESSAGE
========================================= */

function showLoginMessage(message, type) {

    loginMessage.textContent = message;

    loginMessage.style.color =
        type === "success"
            ? "#16a34a"
            : "#dc2626";

}


/* =========================================
   OPEN PORTAL
========================================= */

function openPortal(user) {

    loginPage.classList.add("hidden");

    portalPage.classList.remove("hidden");


    updateUserInformation(user);


    showPage("dashboard");

}


/* =========================================
   UPDATE USER INFORMATION
========================================= */

function updateUserInformation(user) {

    const firstLetter =
        user.name
            ? user.name.charAt(0).toUpperCase()
            : "U";


    const sidebarAvatar =
        document.getElementById("sidebarAvatar");

    const sidebarUserName =
        document.getElementById("sidebarUserName");

    const sidebarUserType =
        document.getElementById("sidebarUserType");

    const topUserName =
        document.getElementById("topUserName");

    const topUserType =
        document.getElementById("topUserType");

    const welcomeName =
        document.getElementById("welcomeName");

    const profileName =
        document.getElementById("profileName");


    if (sidebarAvatar) {

        sidebarAvatar.textContent = firstLetter;

    }


    if (sidebarUserName) {

        sidebarUserName.textContent =
            user.name;

    }


    if (sidebarUserType) {

        sidebarUserType.textContent =
            user.role;

    }


    if (topUserName) {

        topUserName.textContent =
            user.name;

    }


    if (topUserType) {

        topUserType.textContent =
            user.role;

    }


    if (welcomeName) {

        welcomeName.textContent =
            user.name;

    }


    if (profileName) {

        profileName.textContent =
            user.name;

    }


    document
        .querySelectorAll(".topbar-user .user-avatar")
        .forEach(function (avatar) {

            avatar.textContent = firstLetter;

        });

}


/* =========================================
   PAGE NAVIGATION
========================================= */

const navigationLinks =
    document.querySelectorAll(".nav-link");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();


        const page =
            link.getAttribute("data-page");


        if (page) {

            showPage(page);

        }

    });

});


/* =========================================
   SHOW PAGE
========================================= */

function showPage(pageName) {

    const pages =
        document.querySelectorAll(".page-section");


    pages.forEach(function (page) {

        page.classList.remove("active-page");

    });


    const selectedPage =
        document.getElementById(
            pageName + "Page"
        );


    if (selectedPage) {

        selectedPage.classList.add(
            "active-page"
        );

    }


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");


        const linkPage =
            link.getAttribute("data-page");


        if (linkPage === pageName) {

            link.classList.add("active");

        }

    });


    updatePageTitle(pageName);


    closeMobileSidebar();

}


/* =========================================
   PAGE TITLES
========================================= */

const pageTitles = {

    dashboard: {
        title: "Dashboard",
        subtitle: "Welcome to your school portal"
    },

    profile: {
        title: "My Profile",
        subtitle: "View your personal information"
    },

    subjects: {
        title: "My Subjects",
        subtitle: "View your enrolled subjects"
    },

    results: {
        title: "Academic Results",
        subtitle: "View your academic performance"
    },

    attendance: {
        title: "Attendance",
        subtitle: "Track your school attendance"
    },

    assignments: {
        title: "Assignments",
        subtitle: "View your current assignments"
    },

    fees: {
        title: "School Fees",
        subtitle: "View your fee information"
    },

    announcements: {
        title: "Announcements",
        subtitle: "Important school information"
    },

    settings: {
        title: "Settings",
        subtitle: "Manage your portal preferences"
    }

};


/* =========================================
   UPDATE PAGE TITLE
========================================= */

function updatePageTitle(pageName) {

    const pageTitle =
        document.getElementById("pageTitle");

    const pageSubtitle =
        document.getElementById("pageSubtitle");


    const pageData =
        pageTitles[pageName];


    if (!pageData) {

        return;

    }


    pageTitle.textContent =
        pageData.title;


    pageSubtitle.textContent =
        pageData.subtitle;

}


/* =========================================
   LOGOUT
========================================= */

function logout(event) {

    if (event) {

        event.preventDefault();

    }


    localStorage.removeItem(
        "schoolPortalUser"
    );


    portalPage.classList.add("hidden");

    loginPage.classList.remove("hidden");


    loginForm.reset();


    loginMessage.textContent = "";


    closeMobileSidebar();

}


/* =========================================
   FORGOT PASSWORD
========================================= */

function forgotPassword(event) {

    event.preventDefault();


    alert(
        "Password recovery will be connected to the school's email system when the real authentication system is added."
    );

}


/* =========================================
   MOBILE SIDEBAR
========================================= */

function toggleSidebar() {

    const sidebar =
        document.getElementById("sidebar");


    sidebar.classList.toggle(
        "mobile-open"
    );

}


function closeMobileSidebar() {

    const sidebar =
        document.getElementById("sidebar");


    if (sidebar) {

        sidebar.classList.remove(
            "mobile-open"
        );

    }

}


/* =========================================
   REMEMBER LOGIN
========================================= */

const rememberMe =
    document.getElementById("rememberMe");


rememberMe.addEventListener(
    "change",
    function () {

        if (rememberMe.checked) {

            localStorage.setItem(
                "schoolPortalRemember",
                "true"
            );

        } else {

            localStorage.removeItem(
                "schoolPortalRemember"
            );

        }

    }
);


/* =========================================
   AUTO LOGIN
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const savedUser =
            localStorage.getItem(
                "schoolPortalUser"
            );


        if (savedUser) {

            try {

                const user =
                    JSON.parse(savedUser);


                if (
                    user &&
                    user.username &&
                    user.role
                ) {

                    openPortal(user);

                }

            } catch (error) {

                localStorage.removeItem(
                    "schoolPortalUser"
                );

            }

        }

    }
);


/* =========================================
   NOTIFICATION BUTTON
========================================= */

const notificationButton =
    document.querySelector(
        ".notification-button"
    );


if (notificationButton) {

    notificationButton.addEventListener(
        "click",
        function () {

            showPage("announcements");

        }
    );

}


/* =========================================
   DOWNLOAD REPORT DEMO
========================================= */

const reportButton =
    document.querySelector(
        ".primary-button"
    );


if (reportButton) {

    reportButton.addEventListener(
        "click",
        function () {

            alert(
                "Report download will be connected to the school's report generation system."
            );

        }
    );

}


/* =========================================
   ASSIGNMENT BUTTONS
========================================= */

const assignmentButtons =
    document.querySelectorAll(
        ".assignment-card .secondary-button"
    );


assignmentButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            alert(
                "Assignment details will be displayed here when the assignment system is connected."
            );

        }
    );

});


/* =========================================
   SETTINGS TOGGLES
========================================= */

const settingToggles =
    document.querySelectorAll(
        ".switch input"
    );


settingToggles.forEach(function (toggle) {

    toggle.addEventListener(
        "change",
        function () {

            const setting =
                toggle
                    .closest(".setting-item")
                    .querySelector("h3")
                    .textContent;


            const status =
                toggle.checked
                    ? "enabled"
                    : "disabled";


            console.log(
                setting + " " + status
            );

        }
    );

});


/* =========================================
   CLOSE SIDEBAR WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener(
    "click",
    function (event) {

        const sidebar =
            document.getElementById("sidebar");

        const menuButton =
            document.querySelector(".menu-button");


        if (
            window.innerWidth <= 800 &&
            sidebar &&
            sidebar.classList.contains(
                "mobile-open"
            ) &&
            !sidebar.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            closeMobileSidebar();

        }

    }
);
```
