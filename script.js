```javascript
document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // DEMO USER ACCOUNTS
    // ================================

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


    // ================================
    // GET PAGE ELEMENTS
    // ================================

    const loginPage = document.getElementById("loginPage");
    const portalPage = document.getElementById("portalPage");

    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    const userType = document.getElementById("userType");
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const logoutBtn = document.getElementById("logoutBtn");


    // ================================
    // SHOW LOGIN
    // ================================

    function showLogin() {

        if (portalPage) {
            portalPage.style.display = "none";
        }

        if (loginPage) {
            loginPage.style.display = "flex";
        }
    }


    // ================================
    // SHOW PORTAL
    // ================================

    function showPortal(user) {

        if (loginPage) {
            loginPage.style.display = "none";
        }

        if (portalPage) {
            portalPage.style.display = "flex";
        }


        // User information

        const sidebarUserName = document.getElementById("sidebarUserName");
        const sidebarUserType = document.getElementById("sidebarUserType");

        const topUserName = document.getElementById("topUserName");
        const topUserType = document.getElementById("topUserType");

        const welcomeName = document.getElementById("welcomeName");

        const profileName = document.getElementById("profileName");
        const profileId = document.getElementById("profileId");
        const profileClass = document.getElementById("profileClass");


        if (sidebarUserName) {
            sidebarUserName.textContent = user.name;
        }

        if (sidebarUserType) {
            sidebarUserType.textContent = user.role;
        }

        if (topUserName) {
            topUserName.textContent = user.name;
        }

        if (topUserType) {
            topUserType.textContent = user.role;
        }

        if (welcomeName) {
            welcomeName.textContent = user.name;
        }

        if (profileName) {
            profileName.textContent = user.name;
        }

        if (profileId) {
            profileId.textContent = user.id;
        }

        if (profileClass) {
            profileClass.textContent = user.className;
        }


        // ================================
        // NAVIGATION
        // ================================

        const studentNavigation =
            document.getElementById("studentNavigation");

        const parentNavigation =
            document.getElementById("parentNavigation");

        const adminNavigation =
            document.getElementById("adminNavigation");


        if (studentNavigation) {
            studentNavigation.style.display = "none";
        }

        if (parentNavigation) {
            parentNavigation.style.display = "none";
        }

        if (adminNavigation) {
            adminNavigation.style.display = "none";
        }


        if (user.role === "Student") {

            if (studentNavigation) {
                studentNavigation.style.display = "block";
            }

            showPage("dashboard");

        } else if (user.role === "Parent / Guardian") {

            if (parentNavigation) {
                parentNavigation.style.display = "block";
            }

            showPage("dashboard");

        } else if (user.role === "Administrator") {

            if (adminNavigation) {
                adminNavigation.style.display = "block";
            }

            showPage("adminDashboard");
        }
    }


    // ================================
    // SHOW A PORTAL PAGE
    // ================================

    function showPage(pageName) {

        const pages =
            document.querySelectorAll(".portal-section");

        pages.forEach(function (page) {
            page.style.display = "none";
        });


        const selectedPage =
            document.getElementById(pageName + "Page");


        if (selectedPage) {
            selectedPage.style.display = "block";
        }


        // Page titles

        const titles = {

            dashboard: "Dashboard",

            adminDashboard: "Administration Dashboard",

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

            settings: "Settings"
        };


        const subtitles = {

            dashboard: "Welcome to your school portal.",

            adminDashboard:
                "Manage your school from one central dashboard.",

            profile:
                "View your personal information.",

            subjects:
                "View your registered subjects.",

            results:
                "View academic results.",

            attendance:
                "View attendance records.",

            assignments:
                "View assignments and deadlines.",

            fees:
                "View fees and payment information.",

            announcements:
                "View important school announcements.",

            students:
                "Manage student records and enrollment.",

            parents:
                "Manage parents and guardians.",

            teachers:
                "Manage teachers and teaching assignments.",

            classes:
                "Manage school classes.",

            schoolSubjects:
                "Manage school subjects.",

            schoolResults:
                "Enter and manage student results.",

            schoolAttendance:
                "Record and monitor student attendance.",

            schoolAssignments:
                "Create and manage assignments.",

            schoolFees:
                "Manage school fees and payments.",

            schoolAnnouncements:
                "Publish important school information.",

            reports:
                "Generate school management reports.",

            settings:
                "Manage your account and portal settings."
        };


        const pageTitle =
            document.getElementById("pageTitle");

        const pageSubtitle =
            document.getElementById("pageSubtitle");


        if (pageTitle) {
            pageTitle.textContent =
                titles[pageName] || "Dashboard";
        }

        if (pageSubtitle) {
            pageSubtitle.textContent =
                subtitles[pageName] ||
                "Welcome to your school portal.";
        }


        // Active navigation link

        document
            .querySelectorAll(".nav-link")
            .forEach(function (link) {

                link.classList.remove("active");
            });


        document
            .querySelectorAll(
                '.nav-link[data-page="' + pageName + '"]'
            )
            .forEach(function (link) {

                link.classList.add("active");
            });
    }


    // ================================
    // LOGIN
    // ================================

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const selectedType =
                userType ? userType.value : "";

            const enteredUsername =
                username ? username.value.trim() : "";

            const enteredPassword =
                password ? password.value : "";


            const user =
                demoUsers[selectedType];


            if (
                user &&
                enteredUsername === user.username &&
                enteredPassword === user.password
            ) {

                // Save login

                localStorage.setItem(
                    "schoolPortalUser",
                    JSON.stringify(user)
                );


                // Clear error

                if (loginMessage) {
                    loginMessage.textContent = "";
                    loginMessage.className = "";
                }


                // Open portal

                showPortal(user);

            } else {

                if (loginMessage) {

                    loginMessage.textContent =
                        "Invalid username or password.";

                    loginMessage.className =
                        "error-message";
                }
            }

        });
    }


    // ================================
    // LOGOUT
    // ================================

    if (logoutBtn) {

        logoutBtn.addEventListener("click", function () {

            localStorage.removeItem(
                "schoolPortalUser"
            );

            if (loginForm) {
                loginForm.reset();
            }

            showLogin();
        });
    }


    // ================================
    // NAVIGATION LINKS
    // ================================

    document.addEventListener("click", function (event) {

        const link =
            event.target.closest(".nav-link");


        if (!link) {
            return;
        }


        event.preventDefault();


        const pageName =
            link.getAttribute("data-page");


        if (pageName) {
            showPage(pageName);
        }
    });


    // ================================
    // QUICK ACTION BUTTONS
    // ================================

    document.addEventListener("click", function (event) {

        const button =
            event.target.closest(".quick-action");


        if (!button) {
            return;
        }


        const pageName =
            button.getAttribute("data-page");


        if (pageName) {
            showPage(pageName);
        }
    });


    // ================================
    // VIEW LINKS
    // ================================

    document.addEventListener("click", function (event) {

        const link =
            event.target.closest(".view-link");


        if (!link) {
            return;
        }


        event.preventDefault();


        const pageName =
            link.getAttribute("data-page");


        if (pageName) {
            showPage(pageName);
        }
    });


    // ================================
    // RESTORE PREVIOUS LOGIN
    // ================================

    const savedUser =
        localStorage.getItem("schoolPortalUser");


    if (savedUser) {

        try {

            const user =
                JSON.parse(savedUser);


            if (
                user &&
                user.username &&
                user.role
            ) {

                showPortal(user);

            } else {

                showLogin();
            }

        } catch (error) {

            localStorage.removeItem(
                "schoolPortalUser"
            );

            showLogin();
        }

    } else {

        showLogin();
    }

});
```
