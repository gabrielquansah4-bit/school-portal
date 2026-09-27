/* =========================================
   SCHOOL PORTAL PREMIUM NAVY + GOLD THEME
========================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --navy: #071a33;
    --navy-light: #0d2a4d;
    --navy-medium: #123b67;
    --gold: #d4af37;
    --gold-light: #f1d675;
    --white: #ffffff;
    --background: #f4f6f9;
    --text: #172033;
    --muted: #6b7280;
    --border: #e2e6ec;
    --danger: #c62828;
    --success: #16803c;
    --warning: #927719;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--background);
    color: var(--text);
}

/* =========================================
   LOGIN PAGE
========================================= */

.login-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
    background: linear-gradient(
        rgba(7, 26, 51, 0.94),
        rgba(7, 26, 51, 0.97)
    );
}

.login-card,
.login-container {
    width: 100%;
    max-width: 450px;
    background: var(--white);
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.35);
}

.login-logo,
.school-logo {
    width: 70px;
    height: 70px;
    margin: 0 auto 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--navy);
    border: 3px solid var(--gold);
    color: var(--gold);
    font-size: 24px;
    font-weight: 800;
}

.login-header {
    text-align: center;
    margin-bottom: 30px;
}

.login-card h1,
.login-header h1 {
    text-align: center;
    color: var(--navy);
    font-size: 27px;
    margin-bottom: 8px;
}

.login-subtitle,
.login-header p {
    text-align: center;
    color: var(--muted);
    font-size: 14px;
    margin-bottom: 25px;
}

/* =========================================
   FORM
========================================= */

.login-card label,
.form-group label {
    display: block;
    margin-bottom: 8px;
    color: var(--navy);
    font-weight: 700;
    font-size: 14px;
}

.login-card input,
.login-card select,
.form-group input,
.form-group select {
    width: 100%;
    padding: 14px;
    margin-bottom: 17px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: #fafbfc;
    color: var(--text);
    font-size: 15px;
    outline: none;
    transition: 0.2s;
}

.login-card input:focus,
.login-card select:focus,
.form-group input:focus,
.form-group select:focus {
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);
}

.login-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
    font-size: 13px;
}

.login-options label {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 0;
}

.login-options input {
    width: auto;
    margin: 0;
}

.login-options a {
    color: var(--navy-medium);
    text-decoration: none;
    font-weight: 600;
}

.login-options a:hover {
    color: var(--gold);
}

.login-button {
    width: 100%;
    padding: 14px;
    border: none;
    border-radius: 8px;
    background: var(--navy);
    color: var(--white);
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s;
}

.login-button:hover {
    background: var(--navy-light);
    transform: translateY(-1px);
}

.error-message {
    margin-top: 15px;
    padding: 11px;
    border-radius: 7px;
    background: #fde8e8;
    color: var(--danger);
    text-align: center;
    font-size: 13px;
}

.demo-login {
    margin-top: 25px;
    padding: 15px;
    border-left: 4px solid var(--gold);
    background: #f8f8f6;
    border-radius: 6px;
    font-size: 12px;
}

.demo-login strong {
    display: block;
    color: var(--navy);
    margin-bottom: 8px;
}

.demo-login p {
    margin: 5px 0;
    color: #555;
}

/* =========================================
   PORTAL
========================================= */

.portal-page {
    min-height: 100vh;
    display: flex;
}

/* =========================================
   SIDEBAR
========================================= */

.sidebar {
    width: 260px;
    min-height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    background: var(--navy);
    color: var(--white);
    box-shadow: 5px 0 20px rgba(0, 0, 0, 0.12);
    z-index: 100;
    overflow-y: auto;
}

.sidebar-header,
.sidebar-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 22px 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-logo-circle {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--navy);
    border: 2px solid var(--gold);
    color: var(--gold);
    font-size: 14px;
    font-weight: 800;
}

.sidebar-header h2,
.sidebar-logo h2 {
    font-size: 17px;
    color: var(--white);
}

.sidebar-header span,
.sidebar-logo span {
    display: block;
    margin-top: 3px;
    color: #aeb8c6;
    font-size: 10px;
}

.sidebar-user {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 20px 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.user-avatar,
.top-avatar,
.top-user-avatar {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--gold);
    color: var(--navy);
    font-weight: 800;
}

.sidebar-user strong {
    display: block;
    font-size: 13px;
}

.sidebar-user small,
.sidebar-user span {
    display: block;
    margin-top: 4px;
    color: #aeb8c6;
    font-size: 11px;
}

.sidebar-nav {
    flex: 1;
    padding: 15px 10px;
}

.nav-heading {
    padding: 14px 15px 7px;
    color: var(--gold);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1px;
}

.nav-link {
    display: block;
    margin-bottom: 4px;
    padding: 13px 15px;
    border-radius: 7px;
    color: #cbd3df;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    transition: 0.2s;
}

.nav-link:hover {
    background: rgba(255, 255, 255, 0.07);
    color: var(--white);
}

.nav-link.active {
    background: var(--gold);
    color: var(--navy);
}

.sidebar-bottom {
    margin-top: auto;
    padding: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.logout-button {
    width: 100%;
    padding: 11px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 7px;
    background: transparent;
    color: #e8edf4;
    cursor: pointer;
    font-weight: 600;
}

.logout-button:hover {
    background: var(--danger);
    border-color: var(--danger);
}

/* =========================================
   MAIN AREA
========================================= */

.main-content {
    width: calc(100% - 260px);
    margin-left: 260px;
    padding: 25px;
}

.topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--white);
    padding: 18px 22px;
    margin-bottom: 25px;
    border-radius: 10px;
    border-bottom: 3px solid var(--gold);
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
}

.topbar h1 {
    color: var(--navy);
    font-size: 24px;
}

.topbar p {
    margin-top: 5px;
    color: var(--muted);
    font-size: 13px;
}

.top-user,
.topbar-user {
    display: flex;
    align-items: center;
    gap: 10px;
}

.top-user strong,
.topbar-user strong {
    display: block;
    color: var(--navy);
    font-size: 13px;
}

.top-user small,
.topbar-user span {
    display: block;
    margin-top: 3px;
    color: var(--muted);
    font-size: 11px;
}

/* =========================================
   PORTAL SECTIONS
========================================= */

.portal-section {
    animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* =========================================
   WELCOME BANNER
========================================= */

.welcome-banner,
.welcome-card {
    margin-bottom: 25px;
    padding: 30px;
    border-radius: 12px;
    background: linear-gradient(
        135deg,
        var(--navy),
        var(--navy-medium)
    );
    color: var(--white);
    border-left: 5px solid var(--gold);
    box-shadow: 0 8px 20px rgba(7, 26, 51, 0.15);
}

.welcome-banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.welcome-banner span,
.academic-year span {
    color: #bfcbd9;
    font-size: 12px;
}

.welcome-banner h2 {
    margin: 6px 0;
    font-size: 22px;
}

.welcome-banner p {
    color: #d9e1ec;
    font-size: 14px;
}

.academic-year {
    text-align: right;
}

.academic-year strong {
    display: block;
    margin-top: 5px;
    color: var(--gold-light);
    font-size: 16px;
}

/* =========================================
   STATISTICS
========================================= */

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin-bottom: 25px;
}

.stat-card {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 21px;
    background: var(--white);
    border-radius: 10px;
    border-top: 3px solid var(--gold);
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
}

.stat-card span {
    display: block;
    margin-bottom: 5px;
    color: var(--muted);
    font-size: 12px;
}

.stat-card strong,
.stat-card h3 {
    display: block;
    color: var(--navy);
    font-size: 23px;
}

.stat-card p {
    color: var(--muted);
    font-size: 12px;
}

.stat-icon {
    font-size: 27px;
}

/* =========================================
   DASHBOARD GRID
========================================= */

.dashboard-grid,
.content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

/* =========================================
   CONTENT CARDS
========================================= */

.content-card {
    margin-bottom: 20px;
    padding: 22px;
    background: var(--white);
    border-radius: 10px;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
}

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 18px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border);
}

.card-header h3 {
    color: var(--navy);
    font-size: 17px;
}

.card-header p {
    margin-top: 5px;
    color: var(--muted);
    font-size: 12px;
}

/* =========================================
   TABLES
========================================= */

.table-container {
    width: 100%;
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 13px;
    text-align: left;
    border-bottom: 1px solid var(--border);
}

th {
    background: var(--navy);
    color: var(--white);
    font-size: 12px;
    font-weight: 700;
}

td {
    color: #374151;
    font-size: 13px;
}

tbody tr:hover {
    background: #faf8ef;
}

/* =========================================
   STATUS BADGES
========================================= */

.status-badge,
.grade-badge,
.status-success,
.status-danger,
.status-warning {
    display: inline-block;
    padding: 5px 9px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 700;
}

.status-badge {
    background: #e8f5ed;
    color: var(--success);
}

.grade-badge {
    background: #f8f1d8;
    color: #806713;
}

.status-success {
    background: #e8f5ed;
    color: var(--success);
}

.status-danger {
    background: #fde8e8;
    color: var(--danger);
}

.status-warning {
    background: #fff7db;
    color: var(--warning);
}

/* =========================================
   ANNOUNCEMENTS
========================================= */

.announcement-item {
    padding: 15px 0;
    border-bottom: 1px solid var(--border);
}

.announcement-item:last-child {
    border-bottom: none;
}

.announcement-item strong {
    color: var(--navy);
    font-size: 14px;
}

.announcement-item p {
    margin: 6px 0;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.5;
}

.announcement-item small {
    color: #9aa3af;
    font-size: 11px;
}

/* =========================================
   ASSIGNMENTS
========================================= */

.assignment-item,
.assignment-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 0;
    border-bottom: 1px solid var(--border);
}

.assignment-item:last-child,
.assignment-row:last-child {
    border-bottom: none;
}

.assignment-item strong,
.assignment-row strong {
    color: var(--navy);
    font-size: 13px;
}

.assignment-item p,
.assignment-row p {
    margin-top: 5px;
    color: var(--muted);
    font-size: 12px;
}

/* =========================================
   PROFILE
========================================= */

.profile-layout {
    display: flex;
    align-items: center;
    gap: 30px;
}

.profile-avatar {
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--navy);
    border: 3px solid var(--gold);
    color: var(--gold);
    font-size: 30px;
    font-weight: 800;
}

.profile-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px 50px;
}

.profile-details span {
    display: block;
    margin-bottom: 6px;
    color: var(--muted);
    font-size: 12px;
}

.profile-details strong {
    color: var(--navy);
    font-size: 14px;
}

.profile-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
}

.profile-grid label {
    display: block;
    margin-bottom: 6px;
    color: var(--muted);
    font-size: 12px;
}

.profile-grid p {
    color: var(--navy);
    font-weight: 700;
    font-size: 14px;
}

/* =========================================
   SUBJECT CARDS
========================================= */

.subject-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.subject-card {
    padding: 20px;
    border: 1px solid var(--border);
    border-left: 4px solid var(--gold);
    border-radius: 8px;
    background: #fafbfc;
}

.subject-card strong {
    display: block;
    color: var(--navy);
    font-size: 14px;
}

.subject-card span {
    display: block;
    margin-top: 7px;
    color: var(--muted);
    font-size: 12px;
}

/* =========================================
   ADMIN QUICK ACTIONS
========================================= */

.quick-actions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}

.quick-action {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    padding: 17px;
    border: 1px solid var(--border);
    border-left: 4px solid var(--gold);
    border-radius: 8px;
    background: #fafbfc;
    text-align: left;
    cursor: pointer;
    transition: 0.2s;
}

.quick-action:hover {
    background: #fffdf4;
    border-color: var(--gold);
    transform: translateY(-2px);
}

.quick-action span {
    font-size: 23px;
}

.quick-action strong {
    color: var(--navy);
    font-size: 13px;
}

.quick-action small {
    color: var(--muted);
    font-size: 11px;
}

/* =========================================
   ACTIVITY
========================================= */

.activity-item {
    display: flex;
    gap: 12px;
    padding: 14px 0;
    border-bottom: 1px solid var(--border);
}

.activity-item:last-child {
    border-bottom: none;
}

.activity-icon {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 50%;
    background: #f8f1d8;
}

.activity-item strong {
    color: var(--navy);
    font-size: 13px;
}

.activity-item p {
    margin: 4px 0;
    color: var(--muted);
    font-size: 12px;
}

.activity-item small {
    color: #9aa3af;
    font-size: 10px;
}

/* =========================================
   BUTTONS
========================================= */

.primary-button {
    padding: 10px 15px;
    border: none;
    border-radius: 7px;
    background: var(--navy);
    color: var(--white);
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s;
}

.primary-button:hover {
    background: var(--navy-light);
}

.secondary-button {
    padding: 8px 13px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--white);
    color: var(--navy);
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
}

.secondary-button:hover {
    border-color: var(--gold);
}

/* =========================================
   SEARCH BAR
========================================= */

.search-bar {
    display: flex;
    gap: 10px;
    margin-bottom: 18px;
}

.search-bar input,
.search-bar select {
    padding: 11px 13px;
    border: 1px solid var(--border);
    border-radius: 7px;
    background: #fafbfc;
    color: var(--text);
    outline: none;
}

.search-bar input {
    flex: 1;
}

.search-bar input:focus,
.search-bar select:focus {
    border-color: var(--gold);
}

/* =========================================
   SETTINGS
========================================= */

.settings-list {
    display: flex;
    flex-direction: column;
}

.setting-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 0;
    border-bottom: 1px solid var(--border);
}

.setting-item:last-child {
    border-bottom: none;
}

.setting-item strong {
    color: var(--navy);
    font-size: 14px;
}

.setting-item p {
    margin-top: 5px;
    color: var(--muted);
    font-size: 12px;
}

/* =========================================
   VIEW LINK
========================================= */

.view-link {
    color: var(--navy-medium);
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
}

.view-link:hover {
    color: var(--gold);
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 1100px) {

    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .dashboard-grid,
    .content-grid {
        grid-template-columns: 1fr;
    }

    .subject-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 700px) {

    .sidebar {
        width: 215px;
    }

    .main-content {
        width: calc(100% - 215px);
        margin-left: 215px;
        padding: 15px;
    }

    .topbar {
        align-items: flex-start;
    }

    .top-user {
        display: none;
    }

    .stats-grid {
        grid-template-columns: 1fr;
    }

    .profile-grid,
    .profile-details {
        grid-template-columns: 1fr;
    }

    .profile-layout {
        align-items: flex-start;
    }

    .welcome-banner {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    .academic-year {
        text-align: left;
    }

    .quick-actions {
        grid-template-columns: 1fr;
    }

    .login-card,
    .login-container {
        padding: 28px;
    }
}

@media (max-width: 520px) {

    .sidebar {
        width: 70px;
    }

    .sidebar-header,
    .sidebar-logo {
        justify-content: center;
        padding: 18px 5px;
    }

    .sidebar-header h2,
    .sidebar-header span,
    .sidebar-logo h2,
    .sidebar-logo span,
    .sidebar-user strong,
    .sidebar-user small,
    .sidebar-user span,
    .nav-heading {
        display: none;
    }

    .sidebar-user {
        justify-content: center;
        padding: 15px 5px;
    }

    .nav-link {
        padding: 14px 5px;
        text-align: center;
        font-size: 0;
    }

    .nav-link::first-letter {
        font-size: 18px;
    }

    .main-content {
        width: calc(100% - 70px);
        margin-left: 70px;
        padding: 12px;
    }

    .topbar h1 {
        font-size: 20px;
    }

    .welcome-banner,
    .welcome-card {
        padding: 22px;
    }

    .assignment-item,
    .assignment-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }

    .subject-grid {
        grid-template-columns: 1fr;
    }

    .search-bar {
        flex-direction: column;
    }

    .profile-layout {
        flex-direction: column;
    }

    .login-card,
    .login-container {
        padding: 22px;
    }
}
