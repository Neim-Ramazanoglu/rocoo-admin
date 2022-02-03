import React from 'react';
import "../Assets/css/style.css"
import "../Assets/css/style.css.map"
import "../Assets/css/skin-modes.css"
import "../Assets/css/transparent-style.css"
import "../Assets/css/icons.css"
import "../Assets/css/dark-style.css"
import "../Assets/css/animated.css"
import "../Assets/css/transparent-style.scss"

function Header() {
    return <>

        <div className="app-header header sticky" style={{ marginBottom: "-74px" }}>
            {" "}
            <div className="container-fluid main-container">
                {" "}
                <div className="d-flex">
                    {" "}
                    <a
                        aria-label="Hide Sidebar"
                        className="app-sidebar__toggle"
                        data-bs-toggle="sidebar"
                        href="#"
                    />{" "}
                    {/* sidebar-toggle*/}{" "}
                    <a className="logo-horizontal " href="index.html">
                        {" "}
                        <img
                            src="../assets/images/brand/logo.png"
                            className="header-brand-img desktop-logo"
                            alt="logo"
                        />{" "}
                        <img
                            src="../assets/images/brand/logo-3.png"
                            className="header-brand-img light-logo1"
                            alt="logo"
                        />{" "}
                    </a>{" "}
                    {/* LOGO */}{" "}
                    <div className="main-header-center ms-3 d-none d-lg-block">
                        {" "}
                        <input
                            className="form-control"
                            placeholder="Search for results..."
                            type="search"
                        />{" "}
                        <button className="btn px-0 pt-2">
                            <i className="fe fe-search" aria-hidden="true" />
                        </button>{" "}
                    </div>{" "}
                    <div className="d-flex order-lg-2 ms-auto header-right-icons">
                        {" "}
                        <div className="dropdown d-none">
                            {" "}
                            <a
                                href="#"
                                className="nav-link icon"
                                data-bs-toggle="dropdown"
                            >
                                {" "}
                                <i className="fe fe-search" />{" "}
                            </a>{" "}
                            <div className="dropdown-menu header-search dropdown-menu-start">
                                {" "}
                                <div className="input-group w-100 p-2">
                                    {" "}
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search...."
                                    />{" "}
                                    <div className="input-group-text btn btn-primary">
                                        {" "}
                                        <i className="fe fe-search" aria-hidden="true" />{" "}
                                    </div>{" "}
                                </div>{" "}
                            </div>{" "}
                        </div>{" "}
                        {/* SEARCH */}{" "}
                        <button
                            className="navbar-toggler navresponsive-toggler d-lg-none ms-auto"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent-4"
                            aria-controls="navbarSupportedContent-4"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            {" "}
                            <span className="navbar-toggler-icon fe fe-more-vertical" />{" "}
                        </button>{" "}
                        <div className="navbar navbar-collapse responsive-navbar p-0">
                            {" "}
                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent-4"
                            >
                                {" "}
                                <div className="d-flex order-lg-2">
                                    {" "}
                                    <div className="dropdown d-lg-none d-flex">
                                        {" "}
                                        <a
                                            href="#"
                                            className="nav-link icon"
                                            data-bs-toggle="dropdown"
                                        >
                                            {" "}
                                            <i className="fe fe-search" />{" "}
                                        </a>{" "}
                                        <div className="dropdown-menu header-search dropdown-menu-start">
                                            {" "}
                                            <div className="input-group w-100 p-2">
                                                {" "}
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search...."
                                                />{" "}
                                                <div className="input-group-text btn btn-primary">
                                                    {" "}
                                                    <i className="fa fa-search" aria-hidden="true" />{" "}
                                                </div>{" "}
                                            </div>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                    {/* COUNTRY */}{" "}
                                    <div className="d-flex country">
                                        {" "}
                                        <a
                                            className="nav-link icon text-center"
                                            data-bs-target="#country-selector"
                                            data-bs-toggle="modal"
                                        >
                                            {" "}
                                            <i className="fe fe-globe" />
                                            <span className="fs-16 ms-2 d-none d-xl-block">
                                                English
                                            </span>{" "}
                                        </a>{" "}
                                    </div>{" "}
                                    {/* SEARCH */}{" "}
                                    <div className="dropdown  d-flex">
                                        {" "}
                                        <a className="nav-link icon theme-layout nav-link-bg layout-setting">
                                            {" "}
                                            <span className="dark-layout">
                                                <i className="fe fe-moon" />
                                            </span>{" "}
                                            <span className="light-layout">
                                                <i className="fe fe-sun" />
                                            </span>{" "}
                                        </a>{" "}
                                    </div>{" "}
                                    {/* Theme-Layout */}{" "}
                                    <div className="dropdown d-flex">
                                        {" "}
                                        <a className="nav-link icon full-screen-link nav-link-bg">
                                            {" "}
                                            <i className="fe fe-minimize fullscreen-button" />{" "}
                                        </a>{" "}
                                    </div>{" "}
                                    {/* FULL-SCREEN */}{" "}
                                    <div className="dropdown  d-flex notifications">
                                        {" "}
                                        <a className="nav-link icon" data-bs-toggle="dropdown">
                                            <i className="fe fe-bell" />
                                            <span className=" pulse" />{" "}
                                        </a>{" "}
                                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            {" "}
                                            <div className="drop-heading border-bottom">
                                                {" "}
                                                <div className="d-flex">
                                                    {" "}
                                                    <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark">
                                                        Notifications{" "}
                                                    </h6>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                            <div className="notifications-menu">
                                                {" "}
                                                <a
                                                    className="dropdown-item d-flex"
                                                    href="notify-list.html"
                                                >
                                                    {" "}
                                                    <div className="me-3 notifyimg  bg-primary brround box-shadow-primary">
                                                        {" "}
                                                        <i className="fe fe-mail" />{" "}
                                                    </div>{" "}
                                                    <div className="mt-1">
                                                        {" "}
                                                        <h5 className="notification-label mb-1">
                                                            New Application received{" "}
                                                        </h5>{" "}
                                                        <span className="notification-subtext">
                                                            3 days ago
                                                        </span>{" "}
                                                    </div>{" "}
                                                </a>{" "}
                                                <a
                                                    className="dropdown-item d-flex"
                                                    href="notify-list.html"
                                                >
                                                    {" "}
                                                    <div className="me-3 notifyimg  bg-secondary brround box-shadow-secondary">
                                                        {" "}
                                                        <i className="fe fe-check-circle" />{" "}
                                                    </div>{" "}
                                                    <div className="mt-1">
                                                        {" "}
                                                        <h5 className="notification-label mb-1">
                                                            Project has been approved
                                                        </h5>{" "}
                                                        <span className="notification-subtext">
                                                            2 hours ago
                                                        </span>{" "}
                                                    </div>{" "}
                                                </a>{" "}
                                                <a
                                                    className="dropdown-item d-flex"
                                                    href="notify-list.html"
                                                >
                                                    {" "}
                                                    <div className="me-3 notifyimg  bg-success brround box-shadow-success">
                                                        {" "}
                                                        <i className="fe fe-shopping-cart" />{" "}
                                                    </div>{" "}
                                                    <div className="mt-1">
                                                        {" "}
                                                        <h5 className="notification-label mb-1">
                                                            Your Product Delivered{" "}
                                                        </h5>{" "}
                                                        <span className="notification-subtext">
                                                            30 min ago
                                                        </span>{" "}
                                                    </div>{" "}
                                                </a>{" "}
                                                <a
                                                    className="dropdown-item d-flex"
                                                    href="notify-list.html"
                                                >
                                                    {" "}
                                                    <div className="me-3 notifyimg bg-pink brround box-shadow-pink">
                                                        {" "}
                                                        <i className="fe fe-user-plus" />{" "}
                                                    </div>{" "}
                                                    <div className="mt-1">
                                                        {" "}
                                                        <h5 className="notification-label mb-1">
                                                            Friend Requests
                                                        </h5>{" "}
                                                        <span className="notification-subtext">
                                                            1 day ago
                                                        </span>{" "}
                                                    </div>{" "}
                                                </a>{" "}
                                            </div>{" "}
                                            <div className="dropdown-divider m-0" />{" "}
                                            <a
                                                href="notify-list.html"
                                                className="dropdown-item text-center p-3 text-muted"
                                            >
                                                View all Notification
                                            </a>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                    {/* NOTIFICATIONS */}{" "}
                                    <div className="dropdown  d-flex message">
                                        {" "}
                                        <a
                                            className="nav-link icon text-center"
                                            data-bs-toggle="dropdown"
                                        >
                                            {" "}
                                            <i className="fe fe-message-square" />
                                            <span className="pulse-danger" />{" "}
                                        </a>{" "}
                                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            {" "}
                                            <div className="drop-heading border-bottom">
                                                {" "}
                                                <div className="d-flex">
                                                    {" "}
                                                    <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark">
                                                        You have 5 Messages
                                                    </h6>{" "}
                                                    <div className="ms-auto">
                                                        {" "}
                                                        <a
                                                            href="#"
                                                            className="text-muted p-0 fs-12"
                                                        >
                                                            make all unread
                                                        </a>{" "}
                                                    </div>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                            <div className="message-menu">
                                                {" "}
                                                <a className="dropdown-item d-flex" href="chat.html">
                                                    {" "}
                                                    <span
                                                        className="avatar avatar-md brround me-3 align-self-center cover-image"
                                                        data-bs-image-src="../assets/images/users/1.jpg"
                                                        style={{
                                                            background:
                                                                'url("../assets/images/users/1.jpg") center center'
                                                        }}
                                                    />{" "}
                                                    <div className="wd-90p">
                                                        {" "}
                                                        <div className="d-flex">
                                                            {" "}
                                                            <h5 className="mb-1">Peter Theil</h5>{" "}
                                                            <small className="text-muted ms-auto text-end">
                                                                {" "}
                                                                6:45 am{" "}
                                                            </small>{" "}
                                                        </div>{" "}
                                                        <span>Commented on file Guest list....</span>{" "}
                                                    </div>{" "}
                                                </a>{" "}
                                                <a className="dropdown-item d-flex" href="chat.html">
                                                    {" "}
                                                    <span
                                                        className="avatar avatar-md brround me-3 align-self-center cover-image"
                                                        data-bs-image-src="../assets/images/users/15.jpg"
                                                        style={{
                                                            background:
                                                                'url("../assets/images/users/15.jpg") center center'
                                                        }}
                                                    />{" "}
                                                    <div className="wd-90p">
                                                        {" "}
                                                        <div className="d-flex">
                                                            {" "}
                                                            <h5 className="mb-1">Abagael Luth</h5>{" "}
                                                            <small className="text-muted ms-auto text-end">
                                                                {" "}
                                                                10:35 am{" "}
                                                            </small>{" "}
                                                        </div>{" "}
                                                        <span>New Meetup Started......</span>{" "}
                                                    </div>{" "}
                                                </a>{" "}
                                                <a className="dropdown-item d-flex" href="chat.html">
                                                    {" "}
                                                    <span
                                                        className="avatar avatar-md brround me-3 align-self-center cover-image"
                                                        data-bs-image-src="../assets/images/users/12.jpg"
                                                        style={{
                                                            background:
                                                                'url("../assets/images/users/12.jpg") center center'
                                                        }}
                                                    />{" "}
                                                    <div className="wd-90p">
                                                        {" "}
                                                        <div className="d-flex">
                                                            {" "}
                                                            <h5 className="mb-1">Brizid Dawson</h5>{" "}
                                                            <small className="text-muted ms-auto text-end">
                                                                {" "}
                                                                2:17 pm{" "}
                                                            </small>{" "}
                                                        </div>{" "}
                                                        <span>Brizid is in the Warehouse...</span>{" "}
                                                    </div>{" "}
                                                </a>{" "}
                                                <a className="dropdown-item d-flex" href="chat.html">
                                                    {" "}
                                                    <span
                                                        className="avatar avatar-md brround me-3 align-self-center cover-image"
                                                        data-bs-image-src="../assets/images/users/4.jpg"
                                                        style={{
                                                            background:
                                                                'url("../assets/images/users/4.jpg") center center'
                                                        }}
                                                    />{" "}
                                                    <div className="wd-90p">
                                                        {" "}
                                                        <div className="d-flex">
                                                            {" "}
                                                            <h5 className="mb-1">Shannon Shaw</h5>{" "}
                                                            <small className="text-muted ms-auto text-end">
                                                                {" "}
                                                                7:55 pm{" "}
                                                            </small>{" "}
                                                        </div>{" "}
                                                        <span>New Product Realease......</span>{" "}
                                                    </div>{" "}
                                                </a>{" "}
                                            </div>{" "}
                                            <div className="dropdown-divider m-0" />{" "}
                                            <a
                                                href="#"
                                                className="dropdown-item text-center p-3 text-muted"
                                            >
                                                See all Messages
                                            </a>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                    {/* MESSAGE-BOX */}{" "}
                                    <div className="dropdown d-flex header-settings">
                                        {" "}
                                        <a
                                            href="#;"
                                            className="nav-link icon"
                                            data-bs-toggle="sidebar-right"
                                            data-target=".sidebar-right"
                                        >
                                            {" "}
                                            <i className="fe fe-align-right" />{" "}
                                        </a>{" "}
                                    </div>{" "}
                                    {/* SIDE-MENU */}{" "}
                                    <div className="dropdown d-flex profile-1">
                                        {" "}
                                        <a
                                            href="#"
                                            data-bs-toggle="dropdown"
                                            className="nav-link leading-none d-flex"
                                        >
                                            {" "}
                                            <img
                                                src="../assets/images/users/21.jpg"
                                                alt="profile-user"
                                                className="avatar  profile-user brround cover-image"
                                            />{" "}
                                        </a>{" "}
                                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            {" "}
                                            <div className="drop-heading">
                                                {" "}
                                                <div className="text-center">
                                                    {" "}
                                                    <h5 className="text-dark mb-0 fs-14 fw-semibold">
                                                        Percy Kewshun
                                                    </h5>{" "}
                                                    <small className="text-muted">Senior Admin</small>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                            <div className="dropdown-divider m-0" />{" "}
                                            <a className="dropdown-item" href="profile.html">
                                                {" "}
                                                <i className="dropdown-icon fe fe-user" /> Profile{" "}
                                            </a>{" "}
                                            <a className="dropdown-item" href="email-inbox.html">
                                                {" "}
                                                <i className="dropdown-icon fe fe-mail" /> Inbox{" "}
                                                <span className="badge bg-danger rounded-pill float-end">
                                                    5
                                                </span>{" "}
                                            </a>{" "}
                                            <a className="dropdown-item" href="lockscreen.html">
                                                {" "}
                                                <i className="dropdown-icon fe fe-lock" /> Lockscreen{" "}
                                            </a>{" "}
                                            <a className="dropdown-item" href="login.html">
                                                {" "}
                                                <i className="dropdown-icon fe fe-alert-circle" /> Sign
                                                out{" "}
                                            </a>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                </div>{" "}
                            </div>{" "}
                        </div>{" "}
                        <div className="demo-icon nav-link icon">
                            {" "}
                            <i className="fe fe-settings fa-spin  text_primary" />{" "}
                        </div>{" "}
                    </div>{" "}
                </div>{" "}
            </div>{" "}
        </div>
        <div className="jumps-prevent" style={{ paddingTop: 74 }} />{" "}
        {/* /app-Header */} {/*APP-SIDEBAR*/}{" "}
        <div className="sticky is-expanded" style={{ marginBottom: "-74px" }}>
            {" "}
            <div
                className="app-sidebar__overlay active"
                data-bs-toggle="sidebar"
            />{" "}
            <div className="app-sidebar ps ps--active-y open">
                {" "}
                <div className="side-header">
                    {" "}
                    <a className="header-brand1" href="index.html">
                        {" "}
                        <img
                            src="../assets/images/brand/logo.png"
                            className="header-brand-img desktop-logo"
                            alt="logo"
                        />{" "}
                        <img
                            src="../assets/images/brand/logo-1.png"
                            className="header-brand-img toggle-logo"
                            alt="logo"
                        />{" "}
                        <img
                            src="../assets/images/brand/logo-2.png"
                            className="header-brand-img light-logo"
                            alt="logo"
                        />{" "}
                        <img
                            src="../assets/images/brand/logo-3.png"
                            className="header-brand-img light-logo1"
                            alt="logo"
                        />{" "}
                    </a>{" "}
                    {/* LOGO */}{" "}
                </div>{" "}
                <div className="main-sidemenu is-expanded">
                    {" "}
                    <div
                        className="slide-left disabled active is-expanded d-none"
                        id="slide-left"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#7b8191"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                        >
                            {" "}
                            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />{" "}
                        </svg>
                    </div>{" "}
                    <ul className="side-menu open" style={{ marginLeft: 0 }}>
                        {" "}
                        <li className="sub-category">
                            {" "}
                            <h3>Main</h3>{" "}
                        </li>{" "}
                        <li className="slide is-expanded">
                            {" "}
                            <a
                                className="side-menu__item active"
                                data-bs-toggle="slide"
                                href="index.html"
                            >
                                <i className="side-menu__icon fe fe-home" />
                                <span className="side-menu__label">Dashboard</span>
                            </a>{" "}
                        </li>{" "}
                        <li className="sub-category">
                            {" "}
                            <h3>UI Kit</h3>{" "}
                        </li>{" "}
                        <li className="slide">
                            {" "}
                            <a
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                href="#"
                            >
                                <i className="side-menu__icon fe fe-slack" />
                                <span className="side-menu__label">Apps</span>
                                <i className="angle fe fe-chevron-right" />
                            </a>{" "}
                            <ul className="slide-menu">
                                {" "}
                                <li className="side-menu-label1">
                                    <a href="#">Apps</a>
                                </li>{" "}
                                <li>
                                    <a href="cards.html" className="slide-item">
                                        {" "}
                                        Cards design
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="calendar.html" className="slide-item">
                                        {" "}
                                        Default calendar
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="calendar2.html" className="slide-item">
                                        {" "}
                                        Full calendar
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="chat.html" className="slide-item">
                                        {" "}
                                        Chat
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="notify.html" className="slide-item">
                                        {" "}
                                        Notifications
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="sweetalert.html" className="slide-item">
                                        {" "}
                                        Sweet alerts
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="rangeslider.html" className="slide-item">
                                        {" "}
                                        Range slider
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="scroll.html" className="slide-item">
                                        {" "}
                                        Content Scroll bar
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="loaders.html" className="slide-item">
                                        {" "}
                                        Loaders
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="counters.html" className="slide-item">
                                        {" "}
                                        Counters
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="rating.html" className="slide-item">
                                        {" "}
                                        Rating
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="timeline.html" className="slide-item">
                                        {" "}
                                        Timeline
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="treeview.html" className="slide-item">
                                        {" "}
                                        Treeview
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="chart.html" className="slide-item">
                                        {" "}
                                        Charts
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="footers.html" className="slide-item">
                                        {" "}
                                        Footers
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="users-list.html" className="slide-item">
                                        {" "}
                                        User List
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="search.html" className="slide-item">
                                        Search
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="crypto-currencies.html" className="slide-item">
                                        {" "}
                                        Crypto-currencies
                                    </a>
                                </li>{" "}
                            </ul>{" "}
                        </li>{" "}
                        <li className="slide">
                            {" "}
                            <a
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                href="#"
                            >
                                <i className="side-menu__icon fe fe-package" />
                                <span className="side-menu__label">Bootstrap</span>
                                <i className="angle fe fe-chevron-right" />
                            </a>{" "}
                            <ul className="slide-menu">
                                {" "}
                                <li className="side-menu-label1">
                                    <a href="#">Bootstrap</a>
                                </li>{" "}
                                <li>
                                    <a href="alerts.html" className="slide-item">
                                        {" "}
                                        Alerts
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="buttons.html" className="slide-item">
                                        {" "}
                                        Buttons
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="colors.html" className="slide-item">
                                        {" "}
                                        Colors
                                    </a>
                                </li>{" "}
                                <li className="sub-slide">
                                    {" "}
                                    <a
                                        className="sub-side-menu__item"
                                        data-bs-toggle="sub-slide"
                                        href="#"
                                    >
                                        <span className="sub-side-menu__label">Avatars</span>
                                        <i className="sub-angle fe fe-chevron-right" />
                                    </a>{" "}
                                    <ul className="sub-slide-menu">
                                        {" "}
                                        <li>
                                            <a href="avatarsquare.html" className="sub-slide-item">
                                                {" "}
                                                Avatar-Square
                                            </a>{" "}
                                        </li>{" "}
                                        <li>
                                            <a href="avatar-round.html" className="sub-slide-item">
                                                {" "}
                                                Avatar-Rounded
                                            </a>{" "}
                                        </li>{" "}
                                        <li>
                                            <a href="avatar-radius.html" className="sub-slide-item">
                                                {" "}
                                                Avatar-Radius
                                            </a>{" "}
                                        </li>{" "}
                                    </ul>{" "}
                                </li>{" "}
                                <li>
                                    <a href="dropdown.html" className="slide-item">
                                        {" "}
                                        Drop downs
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="listgroup.html" className="slide-item">
                                        {" "}
                                        List Group
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="tags.html" className="slide-item">
                                        {" "}
                                        Tags
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="pagination.html" className="slide-item">
                                        {" "}
                                        Pagination
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="navigation.html" className="slide-item">
                                        {" "}
                                        Navigation
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="typography.html" className="slide-item">
                                        {" "}
                                        Typography
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="breadcrumbs.html" className="slide-item">
                                        {" "}
                                        Breadcrumbs
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="badge.html" className="slide-item">
                                        {" "}
                                        Badges / Pills
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="panels.html" className="slide-item">
                                        {" "}
                                        Panels
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="thumbnails.html" className="slide-item">
                                        {" "}
                                        Thumbnails
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="offcanvas.html" className="slide-item">
                                        {" "}
                                        Offcanvas
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="toast.html" className="slide-item">
                                        {" "}
                                        Toast
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="scrollspy.html" className="slide-item">
                                        {" "}
                                        Scrollspy
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="mediaobject.html" className="slide-item">
                                        {" "}
                                        Media Object
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="accordion.html" className="slide-item">
                                        {" "}
                                        Accordions
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="tabs.html" className="slide-item">
                                        {" "}
                                        Tabs
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="modal.html" className="slide-item">
                                        {" "}
                                        Modal
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="tooltipandpopover.html" className="slide-item">
                                        {" "}
                                        Tooltip and popover
                                    </a>{" "}
                                </li>{" "}
                                <li>
                                    <a href="progress.html" className="slide-item">
                                        {" "}
                                        Progress
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="carousel.html" className="slide-item">
                                        {" "}
                                        Carousels
                                    </a>
                                </li>{" "}
                            </ul>{" "}
                        </li>{" "}
                        <li className="sub-category">
                            {" "}
                            <h3>Pre-build Pages</h3>{" "}
                        </li>{" "}
                        <li className="slide">
                            {" "}
                            <a
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                href="#"
                            >
                                <i className="side-menu__icon fe fe-layers" />
                                <span className="side-menu__label">Pages</span>
                                <i className="angle fe fe-chevron-right" />
                            </a>{" "}
                            <ul className="slide-menu">
                                {" "}
                                <li className="side-menu-label1">
                                    <a href="#">Pages</a>
                                </li>{" "}
                                <li>
                                    <a href="profile.html" className="slide-item">
                                        {" "}
                                        Profile
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="editprofile.html" className="slide-item">
                                        {" "}
                                        Edit Profile
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="notify-list.html" className="slide-item">
                                        {" "}
                                        Notifications List
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="email-compose.html" className="slide-item">
                                        {" "}
                                        Mail-Compose
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="email-inbox.html" className="slide-item">
                                        {" "}
                                        Mail-Inbox
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="email-read.html" className="slide-item">
                                        {" "}
                                        Mail-Read
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="gallery.html" className="slide-item">
                                        {" "}
                                        Gallery
                                    </a>
                                </li>{" "}
                                <li className="sub-slide">
                                    {" "}
                                    <a
                                        className="sub-side-menu__item"
                                        data-bs-toggle="sub-slide"
                                        href="#"
                                    >
                                        <span className="sub-side-menu__label">Forms</span>
                                        <i className="sub-angle fe fe-chevron-right" />
                                    </a>{" "}
                                    <ul className="sub-slide-menu">
                                        {" "}
                                        <li>
                                            <a href="form-elements.html" className="sub-slide-item">
                                                {" "}
                                                Form Elements
                                            </a>{" "}
                                        </li>{" "}
                                        <li>
                                            <a href="form-layouts.html" className="sub-slide-item">
                                                {" "}
                                                Form Layouts
                                            </a>{" "}
                                        </li>{" "}
                                        <li>
                                            <a href="form-advanced.html" className="sub-slide-item">
                                                {" "}
                                                Form Advanced
                                            </a>{" "}
                                        </li>{" "}
                                        <li>
                                            <a href="form-editor.html" className="sub-slide-item">
                                                {" "}
                                                Form Editor
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="form-wizard.html" className="sub-slide-item">
                                                {" "}
                                                Form Wizard
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="form-validation.html" className="sub-slide-item">
                                                {" "}
                                                Form Validation
                                            </a>
                                        </li>{" "}
                                    </ul>{" "}
                                </li>{" "}
                                <li className="sub-slide">
                                    {" "}
                                    <a
                                        className="sub-side-menu__item"
                                        data-bs-toggle="sub-slide"
                                        href="#"
                                    >
                                        <span className="sub-side-menu__label">Tables</span>
                                        <i className="sub-angle fe fe-chevron-right" />
                                    </a>{" "}
                                    <ul className="sub-slide-menu">
                                        {" "}
                                        <li>
                                            <a href="tables.html" className="sub-slide-item">
                                                Default table
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="datatable.html" className="sub-slide-item">
                                                {" "}
                                                Data Tables
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="edit-table.html" className="sub-slide-item">
                                                {" "}
                                                Edit Tables
                                            </a>
                                        </li>{" "}
                                    </ul>{" "}
                                </li>{" "}
                                <li className="sub-slide">
                                    {" "}
                                    <a
                                        className="sub-side-menu__item"
                                        data-bs-toggle="sub-slide"
                                        href="#"
                                    >
                                        <span className="sub-side-menu__label">Extension</span>
                                        <i className="sub-angle fe fe-chevron-right" />
                                    </a>{" "}
                                    <ul className="sub-slide-menu">
                                        {" "}
                                        <li>
                                            <a href="about.html" className="sub-slide-item">
                                                {" "}
                                                About Company
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="services.html" className="sub-slide-item">
                                                {" "}
                                                Services
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="faq.html" className="sub-slide-item">
                                                {" "}
                                                FAQS
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="terms.html" className="sub-slide-item">
                                                {" "}
                                                Terms
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="invoice.html" className="sub-slide-item">
                                                {" "}
                                                Invoice
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="pricing.html" className="sub-slide-item">
                                                {" "}
                                                Pricing Tables
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="settings.html" className="sub-slide-item">
                                                {" "}
                                                Settings
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="blog.html" className="sub-slide-item">
                                                {" "}
                                                Blog
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="blog-details.html" className="sub-slide-item">
                                                {" "}
                                                Blog Details
                                            </a>{" "}
                                        </li>{" "}
                                        <li>
                                            <a href="blog-post.html" className="sub-slide-item">
                                                {" "}
                                                Blog Post
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="empty.html" className="sub-slide-item">
                                                {" "}
                                                Empty Page
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="construction.html" className="sub-slide-item">
                                                {" "}
                                                Under Construction
                                            </a>
                                        </li>{" "}
                                    </ul>{" "}
                                </li>{" "}
                                <li className="sub-slide">
                                    {" "}
                                    <a
                                        className="sub-side-menu__item"
                                        data-bs-toggle="sub-slide"
                                        href="#"
                                    >
                                        <span className="sub-side-menu__label">Switcher</span>
                                        <i className="sub-angle fe fe-chevron-right" />
                                    </a>{" "}
                                    <ul className="sub-slide-menu">
                                        {" "}
                                        <li>
                                            <a className="sub-slide-item" href="switcher-1.html">
                                                Switcher Style 1
                                            </a>{" "}
                                        </li>{" "}
                                        <li>
                                            <a className="sub-slide-item" href="switcher-2.html">
                                                Switcher Style 2
                                            </a>{" "}
                                        </li>{" "}
                                    </ul>{" "}
                                </li>{" "}
                            </ul>{" "}
                        </li>{" "}
                        <li className="slide">
                            {" "}
                            <a
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                href="#"
                            >
                                <i className="side-menu__icon fe fe-shopping-bag" />
                                <span className="side-menu__label">E-Commerce</span>
                                <i className="angle fe fe-chevron-right" />
                            </a>{" "}
                            <ul className="slide-menu">
                                {" "}
                                <li className="side-menu-label1">
                                    <a href="#">E-Commerce</a>
                                </li>{" "}
                                <li>
                                    <a href="shop.html" className="slide-item">
                                        {" "}
                                        Shop
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="shop-description.html" className="slide-item">
                                        {" "}
                                        Product Details
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="cart.html" className="slide-item">
                                        {" "}
                                        Shopping Cart
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="add-product.html" className="slide-item">
                                        {" "}
                                        Add Product
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="wishlist.html" className="slide-item">
                                        {" "}
                                        Wishlist
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="checkout.html" className="slide-item">
                                        {" "}
                                        Checkout
                                    </a>
                                </li>{" "}
                            </ul>{" "}
                        </li>{" "}
                        <li className="slide">
                            {" "}
                            <a
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                href="#"
                            >
                                <i className="side-menu__icon fe fe-folder" />
                                <span className="side-menu__label">File Manager</span>
                                <span className="badge bg-pink side-badge">4</span>
                                <i className="angle fe fe-chevron-right hor-angle" />
                            </a>{" "}
                            <ul className="slide-menu">
                                {" "}
                                <li className="side-menu-label1">
                                    <a href="#">File Manager</a>
                                </li>{" "}
                                <li>
                                    <a href="file-manager.html" className="slide-item">
                                        {" "}
                                        File Manager
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="filemanager-list.html" className="slide-item">
                                        {" "}
                                        File Manager List
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="filemanager-details.html" className="slide-item">
                                        {" "}
                                        File Details
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="file-attachments.html" className="slide-item">
                                        {" "}
                                        File Attachments
                                    </a>
                                </li>{" "}
                            </ul>{" "}
                        </li>{" "}
                        <li className="sub-category">
                            {" "}
                            <h3>Misc Pages</h3>{" "}
                        </li>{" "}
                        <li className="slide">
                            {" "}
                            <a
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                href="#"
                            >
                                <i className="side-menu__icon fe fe-users" />
                                <span className="side-menu__label">Authentication</span>
                                <i className="angle fe fe-chevron-right" />
                            </a>{" "}
                            <ul className="slide-menu">
                                {" "}
                                <li className="side-menu-label1">
                                    <a href="#">Authentication</a>
                                </li>{" "}
                                <li>
                                    <a href="login.html" className="slide-item">
                                        {" "}
                                        Login
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="register.html" className="slide-item">
                                        {" "}
                                        Register
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="forgot-password.html" className="slide-item">
                                        {" "}
                                        Forgot Password
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="lockscreen.html" className="slide-item">
                                        {" "}
                                        Lock screen
                                    </a>
                                </li>{" "}
                                <li className="sub-slide">
                                    {" "}
                                    <a
                                        className="sub-side-menu__item"
                                        data-bs-toggle="sub-slide"
                                        href="#"
                                    >
                                        <span className="sub-side-menu__label">Error Pages</span>
                                        <i className="sub-angle fe fe-chevron-right" />
                                    </a>{" "}
                                    <ul className="sub-slide-menu">
                                        {" "}
                                        <li>
                                            <a href="400.html" className="sub-slide-item">
                                                {" "}
                                                400
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="401.html" className="sub-slide-item">
                                                {" "}
                                                401
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="403.html" className="sub-slide-item">
                                                {" "}
                                                403
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="404.html" className="sub-slide-item">
                                                {" "}
                                                404
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="500.html" className="sub-slide-item">
                                                {" "}
                                                500
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a href="503.html" className="sub-slide-item">
                                                {" "}
                                                503
                                            </a>
                                        </li>{" "}
                                    </ul>{" "}
                                </li>{" "}
                            </ul>{" "}
                        </li>{" "}
                        <li className="slide">
                            {" "}
                            <a
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                href="#"
                            >
                                {" "}
                                <i className="side-menu__icon fe fe-cpu" />{" "}
                                <span className="side-menu__label">Submenu items</span>
                                <i className="angle fe fe-chevron-right" />
                            </a>{" "}
                            <ul className="slide-menu">
                                {" "}
                                <li className="side-menu-label1">
                                    <a href="#">Submenu items</a>
                                </li>{" "}
                                <li>
                                    <a href="#" className="slide-item">
                                        Submenu-1
                                    </a>
                                </li>{" "}
                                <li className="sub-slide">
                                    {" "}
                                    <a
                                        className="sub-side-menu__item"
                                        data-bs-toggle="sub-slide"
                                        href="#"
                                    >
                                        <span className="sub-side-menu__label">Submenu-2</span>
                                        <i className="sub-angle fe fe-chevron-right" />
                                    </a>{" "}
                                    <ul className="sub-slide-menu">
                                        {" "}
                                        <li>
                                            <a className="sub-slide-item" href="#">
                                                Submenu-2.1
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a className="sub-slide-item" href="#">
                                                Submenu-2.2
                                            </a>
                                        </li>{" "}
                                        <li className="sub-slide2">
                                            {" "}
                                            <a
                                                className="sub-side-menu__item2"
                                                href="#"
                                                data-bs-toggle="sub-slide2"
                                            >
                                                <span className="sub-side-menu__label2">
                                                    Submenu-2.3
                                                </span>
                                                <i className="sub-angle2 fe fe-chevron-right" />
                                            </a>{" "}
                                            <ul className="sub-slide-menu2">
                                                {" "}
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="sub-slide-item2"
                                                    >
                                                        Submenu-2.3.1
                                                    </a>
                                                </li>{" "}
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="sub-slide-item2"
                                                    >
                                                        Submenu-2.3.2
                                                    </a>
                                                </li>{" "}
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="sub-slide-item2"
                                                    >
                                                        Submenu-2.3.3
                                                    </a>
                                                </li>{" "}
                                            </ul>{" "}
                                        </li>{" "}
                                        <li>
                                            <a className="sub-slide-item" href="#">
                                                Submenu-2.4
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a className="sub-slide-item" href="#">
                                                Submenu-2.5
                                            </a>
                                        </li>{" "}
                                    </ul>{" "}
                                </li>{" "}
                            </ul>{" "}
                        </li>{" "}
                        <li className="sub-category">
                            {" "}
                            <h3>General</h3>{" "}
                        </li>{" "}
                        <li>
                            {" "}
                            <a className="side-menu__item" href="widgets.html">
                                <i className="side-menu__icon fe fe-grid" />
                                <span className="side-menu__label">Widgets</span>
                            </a>{" "}
                        </li>{" "}
                        <li className="slide">
                            {" "}
                            <a
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                href="#"
                            >
                                <i className="side-menu__icon fe fe-map-pin" />
                                <span className="side-menu__label">Maps</span>
                                <i className="angle fe fe-chevron-right" />
                            </a>{" "}
                            <ul className="slide-menu">
                                {" "}
                                <li className="side-menu-label1">
                                    <a href="#">Maps</a>
                                </li>{" "}
                                <li>
                                    <a href="maps1.html" className="slide-item">
                                        Leaflet Maps
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="maps2.html" className="slide-item">
                                        Mapel Maps
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="maps.html" className="slide-item">
                                        Vector Maps
                                    </a>
                                </li>{" "}
                            </ul>{" "}
                        </li>{" "}
                        <li className="slide">
                            {" "}
                            <a
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                href="#"
                            >
                                <i className="side-menu__icon fe fe-bar-chart-2" />
                                <span className="side-menu__label">Charts</span>
                                <span className="badge bg-secondary side-badge">6</span>
                                <i className="angle fe fe-chevron-right hor-angle" />
                            </a>{" "}
                            <ul className="slide-menu">
                                {" "}
                                <li className="side-menu-label1">
                                    <a href="#">Charts</a>
                                </li>{" "}
                                <li>
                                    <a href="chart-chartist.html" className="slide-item">
                                        Chart Js
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="chart-flot.html" className="slide-item">
                                        {" "}
                                        Flot Charts
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="chart-echart.html" className="slide-item">
                                        {" "}
                                        ECharts
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="chart-morris.html" className="slide-item">
                                        {" "}
                                        Morris Charts
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="chart-nvd3.html" className="slide-item">
                                        {" "}
                                        Nvd3 Charts
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="charts.html" className="slide-item">
                                        {" "}
                                        C3 Bar Charts
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="chart-line.html" className="slide-item">
                                        {" "}
                                        C3 Line Charts
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="chart-donut.html" className="slide-item">
                                        {" "}
                                        C3 Donut Charts
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="chart-pie.html" className="slide-item">
                                        {" "}
                                        C3 Pie charts
                                    </a>
                                </li>{" "}
                            </ul>{" "}
                        </li>{" "}
                        <li className="slide">
                            {" "}
                            <a
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                href="#"
                            >
                                <i className="side-menu__icon fe fe-wind" />
                                <span className="side-menu__label">Icons</span>
                                <i className="angle fe fe-chevron-right" />
                            </a>{" "}
                            <ul className="slide-menu">
                                {" "}
                                <li className="side-menu-label1">
                                    <a href="#">Icons</a>
                                </li>{" "}
                                <li>
                                    <a href="icons.html" className="slide-item">
                                        {" "}
                                        Font Awesome
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="icons2.html" className="slide-item">
                                        {" "}
                                        Material Design Icons
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="icons3.html" className="slide-item">
                                        {" "}
                                        Simple Line Icons
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="icons4.html" className="slide-item">
                                        {" "}
                                        Feather Icons
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="icons5.html" className="slide-item">
                                        {" "}
                                        Ionic Icons
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="icons6.html" className="slide-item">
                                        {" "}
                                        Flag Icons
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="icons7.html" className="slide-item">
                                        {" "}
                                        pe7 Icons
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="icons8.html" className="slide-item">
                                        {" "}
                                        Themify Icons
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="icons9.html" className="slide-item">
                                        Typicons Icons
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="icons10.html" className="slide-item">
                                        Weather Icons
                                    </a>
                                </li>{" "}
                                <li>
                                    <a href="icons11.html" className="slide-item">
                                        Bootstrap Icons
                                    </a>
                                </li>{" "}
                            </ul>{" "}
                        </li>{" "}
                    </ul>{" "}
                    <div className="slide-right" id="slide-right">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#7b8191"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                        >
                            {" "}
                            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />{" "}
                        </svg>
                    </div>{" "}
                </div>{" "}
                <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                    <div
                        className="ps__thumb-x"
                        tabIndex={0}
                        style={{ left: 0, width: 0 }}
                    />
                </div>
                <div className="ps__rail-y" style={{ top: 0, height: 746, right: 0 }}>
                    <div
                        className="ps__thumb-y"
                        tabIndex={0}
                        style={{ top: 0, height: 633 }}
                    />
                </div>
            </div>{" "}
            {/*/APP-SIDEBAR*/}{" "}
        </div>
        <div className="jumps-prevent" style={{ paddingTop: 74 }} />{" "}
        {/*app-content open*/}{" "}


        {/* Sidebar-right */}{" "}
        <div className="sidebar sidebar-right sidebar-animate ps ps--active-y">
            {" "}
            <div className="panel panel-primary card mb-0 shadow-none border-0">
                {" "}
                <div className="tab-menu-heading border-0 d-flex p-3">
                    {" "}
                    <div className="card-title mb-0">
                        <i className="fe fe-bell me-2" />
                        <span className=" pulse" />
                        Notifications
                    </div>{" "}
                    <div className="card-options ms-auto">
                        {" "}
                        <a
                            href="#;"
                            className="sidebar-icon text-end float-end me-3 mb-1"
                            data-bs-toggle="sidebar-right"
                            data-target=".sidebar-right"
                        >
                            <i className="fe fe-x text-white" />
                        </a>{" "}
                    </div>{" "}
                </div>{" "}
                <div className="panel-body tabs-menu-body latest-tasks p-0 border-0">
                    {" "}
                    <div className="tabs-menu border-bottom">
                        {" "}
                        {/* Tabs */}{" "}
                        <ul className="nav panel-tabs">
                            {" "}
                            <li className="">
                                <a href="#side1" className="active" data-bs-toggle="tab">
                                    <i className="fe fe-settings me-1" />
                                    Feeds
                                </a>
                            </li>{" "}
                            <li>
                                <a href="#side2" data-bs-toggle="tab">
                                    <i className="fe fe-message-circle" /> Chat
                                </a>
                            </li>{" "}
                            <li>
                                <a href="#side3" data-bs-toggle="tab">
                                    <i className="fe fe-anchor me-1" />
                                    Timeline
                                </a>
                            </li>{" "}
                        </ul>{" "}
                    </div>{" "}
                    <div className="tab-content">
                        {" "}
                        <div className="tab-pane active" id="side1">
                            {" "}
                            <div className="p-3 fw-semibold ps-5">Feeds</div>{" "}
                            <div className="card-body pt-2">
                                {" "}
                                <div className="browser-stats">
                                    {" "}
                                    <div className="row mb-4">
                                        {" "}
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            {" "}
                                            <span className="feeds avatar-circle brround bg-primary-transparent">
                                                <i className="fe fe-user text-primary" />
                                            </span>{" "}
                                        </div>{" "}
                                        <div className="col-sm-10 ps-sm-0">
                                            {" "}
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                {" "}
                                                <h6 className="">New user registered</h6>{" "}
                                                <div>
                                                    {" "}
                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>{" "}
                                                    <a href="#">
                                                        <i className="fe fe-x" />
                                                    </a>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                    <div className="row mb-4">
                                        {" "}
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            {" "}
                                            <span className="feeds avatar-circle avatar-circle-secondary brround bg-secondary-transparent">
                                                <i className="fe fe-shopping-cart text-secondary" />
                                            </span>{" "}
                                        </div>{" "}
                                        <div className="col-sm-10 ps-sm-0">
                                            {" "}
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                {" "}
                                                <h6 className="">New order delivered</h6>{" "}
                                                <div>
                                                    {" "}
                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>{" "}
                                                    <a href="#">
                                                        <i className="fe fe-x" />
                                                    </a>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                    <div className="row mb-4">
                                        {" "}
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            {" "}
                                            <span className="feeds avatar-circle avatar-circle-danger brround bg-danger-transparent">
                                                <i className="fe fe-bell text-danger" />
                                            </span>{" "}
                                        </div>{" "}
                                        <div className="col-sm-10 ps-sm-0">
                                            {" "}
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                {" "}
                                                <h6 className="">You have pending tasks</h6>{" "}
                                                <div>
                                                    {" "}
                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>{" "}
                                                    <a href="#">
                                                        <i className="fe fe-x" />
                                                    </a>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                    <div className="row mb-4">
                                        {" "}
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            {" "}
                                            <span className="feeds avatar-circle avatar-circle-warning brround bg-warning-transparent">
                                                <i className="fe fe-gitlab text-warning" />
                                            </span>{" "}
                                        </div>{" "}
                                        <div className="col-sm-10 ps-sm-0">
                                            {" "}
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                {" "}
                                                <h6 className="">New version arrived</h6>{" "}
                                                <div>
                                                    {" "}
                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>{" "}
                                                    <a href="#">
                                                        <i className="fe fe-x" />
                                                    </a>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                    <div className="row mb-4">
                                        {" "}
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            {" "}
                                            <span className="feeds avatar-circle avatar-circle-pink brround bg-pink-transparent">
                                                <i className="fe fe-database text-pink" />
                                            </span>{" "}
                                        </div>{" "}
                                        <div className="col-sm-10 ps-sm-0">
                                            {" "}
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                {" "}
                                                <h6 className="">Server #1 overloaded</h6>{" "}
                                                <div>
                                                    {" "}
                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>{" "}
                                                    <a href="#">
                                                        <i className="fe fe-x" />
                                                    </a>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                    <div className="row">
                                        {" "}
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            {" "}
                                            <span className="feeds avatar-circle avatar-circle-info brround bg-info-transparent">
                                                <i className="fe fe-check-circle text-info" />
                                            </span>{" "}
                                        </div>{" "}
                                        <div className="col-sm-10 ps-sm-0">
                                            {" "}
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                {" "}
                                                <h6 className="">New project launched</h6>{" "}
                                                <div>
                                                    {" "}
                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>{" "}
                                                    <a href="#">
                                                        <i className="fe fe-x" />
                                                    </a>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                </div>{" "}
                            </div>{" "}
                            <div className="p-3 fw-semibold ps-5">Settings</div>{" "}
                            <div className="card-body pt-2">
                                {" "}
                                <div className="browser-stats">
                                    {" "}
                                    <div className="row mb-4">
                                        {" "}
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            {" "}
                                            <span className="feeds avatar-circle brround bg-primary-transparent">
                                                <i className="fe fe-settings text-primary" />
                                            </span>{" "}
                                        </div>{" "}
                                        <div className="col-sm-10 ps-sm-0">
                                            {" "}
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                {" "}
                                                <h6 className="">General Settings</h6>{" "}
                                                <div>
                                                    {" "}
                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                    <div className="row mb-4">
                                        {" "}
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            {" "}
                                            <span className="feeds avatar-circle avatar-circle-secondary brround bg-secondary-transparent">
                                                <i className="fe fe-map-pin text-secondary" />
                                            </span>{" "}
                                        </div>{" "}
                                        <div className="col-sm-10 ps-sm-0">
                                            {" "}
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                {" "}
                                                <h6 className="">Map Settings</h6>{" "}
                                                <div>
                                                    {" "}
                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                    <div className="row mb-4">
                                        {" "}
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            {" "}
                                            <span className="feeds avatar-circle avatar-circle-danger brround bg-danger-transparent">
                                                <i className="fe fe-headphones text-danger" />
                                            </span>{" "}
                                        </div>{" "}
                                        <div className="col-sm-10 ps-sm-0">
                                            {" "}
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                {" "}
                                                <h6 className="">Support Settings</h6>{" "}
                                                <div>
                                                    {" "}
                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                    <div className="row mb-4">
                                        {" "}
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            {" "}
                                            <span className="feeds avatar-circle avatar-circle-warning brround bg-warning-transparent">
                                                <i className="fe fe-credit-card text-warning" />
                                            </span>{" "}
                                        </div>{" "}
                                        <div className="col-sm-10 ps-sm-0">
                                            {" "}
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                {" "}
                                                <h6 className="">Payment Settings</h6>{" "}
                                                <div>
                                                    {" "}
                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                    <div className="row mb-4">
                                        {" "}
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            {" "}
                                            <span className="feeds avatar-circle avatar-circle-pink brround bg-pink-transparent">
                                                <i className="fe fe-bell text-pink" />
                                            </span>{" "}
                                        </div>{" "}
                                        <div className="col-sm-10 ps-sm-0">
                                            {" "}
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                {" "}
                                                <h6 className="">Notification Settings</h6>{" "}
                                                <div>
                                                    {" "}
                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                </div>{" "}
                            </div>{" "}
                        </div>{" "}
                        <div className="tab-pane" id="side2">
                            {" "}
                            <div className="list-group list-group-flush">
                                {" "}
                                <div className="pt-3 fw-semibold ps-5">Today</div>{" "}
                                <div className="list-group-item d-flex align-items-center">
                                    {" "}
                                    <div className="me-2">
                                        {" "}
                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/2.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/2.jpg") center center'
                                            }}
                                        />{" "}
                                    </div>{" "}
                                    <div className="">
                                        {" "}
                                        <a href="chat.html">
                                            {" "}
                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Addie Minstra
                                            </div>{" "}
                                            <p className="mb-0 fs-12 text-muted">
                                                {" "}
                                                Hey! there I' am available....{" "}
                                            </p>
                                        </a>{" "}
                                    </div>{" "}
                                </div>{" "}
                                <div className="list-group-item d-flex align-items-center">
                                    {" "}
                                    <div className="me-2">
                                        {" "}
                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/11.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/11.jpg") center center'
                                            }}
                                        >
                                            <span className="avatar-status bg-success" />
                                        </span>{" "}
                                    </div>{" "}
                                    <div className="">
                                        {" "}
                                        <a href="chat.html">
                                            {" "}
                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Rose Bush
                                            </div>{" "}
                                            <p className="mb-0 fs-12 text-muted">
                                                {" "}
                                                Okay...I will be waiting for you{" "}
                                            </p>
                                        </a>{" "}
                                    </div>{" "}
                                </div>{" "}
                                <div className="list-group-item d-flex align-items-center">
                                    {" "}
                                    <div className="me-2">
                                        {" "}
                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/10.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/10.jpg") center center'
                                            }}
                                        />{" "}
                                    </div>{" "}
                                    <div className="">
                                        {" "}
                                        <a href="chat.html">
                                            {" "}
                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Claude Strophobia
                                            </div>{" "}
                                            <p className="mb-0 fs-12 text-muted">
                                                {" "}
                                                Hi we can explain our new project......{" "}
                                            </p>
                                        </a>{" "}
                                    </div>{" "}
                                </div>{" "}
                                <div className="list-group-item d-flex align-items-center">
                                    {" "}
                                    <div className="me-2">
                                        {" "}
                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/13.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/13.jpg") center center'
                                            }}
                                        />{" "}
                                    </div>{" "}
                                    <div className="">
                                        {" "}
                                        <a href="chat.html">
                                            {" "}
                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Eileen Dover
                                            </div>{" "}
                                            <p className="mb-0 fs-12 text-muted">
                                                {" "}
                                                New product Launching...{" "}
                                            </p>
                                        </a>{" "}
                                    </div>{" "}
                                </div>{" "}
                                <div className="list-group-item d-flex align-items-center">
                                    {" "}
                                    <div className="me-2">
                                        {" "}
                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/12.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/12.jpg") center center'
                                            }}
                                        >
                                            <span className="avatar-status bg-success" />
                                        </span>{" "}
                                    </div>{" "}
                                    <div className="">
                                        {" "}
                                        <a href="chat.html">
                                            {" "}
                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Willie Findit
                                            </div>{" "}
                                            <p className="mb-0 fs-12 text-muted">
                                                {" "}
                                                Okay...I will be waiting for you{" "}
                                            </p>
                                        </a>{" "}
                                    </div>{" "}
                                </div>{" "}
                                <div className="list-group-item d-flex align-items-center">
                                    {" "}
                                    <div className="me-2">
                                        {" "}
                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/15.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/15.jpg") center center'
                                            }}
                                        />{" "}
                                    </div>{" "}
                                    <div className="">
                                        {" "}
                                        <a href="chat.html">
                                            {" "}
                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Manny Jah
                                            </div>{" "}
                                            <p className="mb-0 fs-12 text-muted">
                                                {" "}
                                                Hi we can explain our new project......{" "}
                                            </p>
                                        </a>{" "}
                                    </div>{" "}
                                </div>{" "}
                                <div className="list-group-item d-flex align-items-center">
                                    {" "}
                                    <div className="me-2">
                                        {" "}
                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/4.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/4.jpg") center center'
                                            }}
                                        />{" "}
                                    </div>{" "}
                                    <div className="">
                                        {" "}
                                        <a href="chat.html">
                                            {" "}
                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Cherry Blossom
                                            </div>{" "}
                                            <p className="mb-0 fs-12 text-muted">
                                                {" "}
                                                Hey! there I' am available....
                                            </p>
                                        </a>{" "}
                                    </div>{" "}
                                </div>{" "}
                                <div className="pt-3 fw-semibold ps-5">Yesterday</div>{" "}
                                <div className="list-group-item d-flex align-items-center">
                                    {" "}
                                    <div className="me-2">
                                        {" "}
                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/7.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/7.jpg") center center'
                                            }}
                                        >
                                            <span className="avatar-status bg-success" />
                                        </span>{" "}
                                    </div>{" "}
                                    <div className="">
                                        {" "}
                                        <a href="chat.html">
                                            {" "}
                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Simon Sais
                                            </div>{" "}
                                            <p className="mb-0 fs-12 text-muted">
                                                Schedule Realease......{" "}
                                            </p>
                                        </a>{" "}
                                    </div>{" "}
                                </div>{" "}
                                <div className="list-group-item d-flex align-items-center">
                                    {" "}
                                    <div className="me-2">
                                        {" "}
                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/9.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/9.jpg") center center'
                                            }}
                                        />{" "}
                                    </div>{" "}
                                    <div className="">
                                        {" "}
                                        <a href="chat.html">
                                            {" "}
                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Laura Biding
                                            </div>{" "}
                                            <p className="mb-0 fs-12 text-muted">
                                                {" "}
                                                Hi we can explain our new project......{" "}
                                            </p>
                                        </a>{" "}
                                    </div>{" "}
                                </div>{" "}
                                <div className="list-group-item d-flex align-items-center">
                                    {" "}
                                    <div className="me-2">
                                        {" "}
                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/2.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/2.jpg") center center'
                                            }}
                                        >
                                            <span className="avatar-status bg-success" />
                                        </span>{" "}
                                    </div>{" "}
                                    <div className="">
                                        {" "}
                                        <a href="chat.html">
                                            {" "}
                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Addie Minstra
                                            </div>{" "}
                                            <p className="mb-0 fs-12 text-muted">
                                                Contact me for details....
                                            </p>
                                        </a>{" "}
                                    </div>{" "}
                                </div>{" "}
                                <div className="list-group-item d-flex align-items-center">
                                    {" "}
                                    <div className="me-2">
                                        {" "}
                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/9.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/9.jpg") center center'
                                            }}
                                        />{" "}
                                    </div>{" "}
                                    <div className="">
                                        {" "}
                                        <a href="chat.html">
                                            {" "}
                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Ivan Notheridiya
                                            </div>{" "}
                                            <p className="mb-0 fs-12 text-muted">
                                                {" "}
                                                Hi we can explain our new project......{" "}
                                            </p>
                                        </a>{" "}
                                    </div>{" "}
                                </div>{" "}
                                <div className="list-group-item d-flex align-items-center">
                                    {" "}
                                    <div className="me-2">
                                        {" "}
                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/14.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/14.jpg") center center'
                                            }}
                                        />{" "}
                                    </div>{" "}
                                    <div className="">
                                        {" "}
                                        <a href="chat.html">
                                            {" "}
                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Dulcie Veeta
                                            </div>{" "}
                                            <p className="mb-0 fs-12 text-muted">
                                                {" "}
                                                Okay...I will be waiting for you{" "}
                                            </p>
                                        </a>{" "}
                                    </div>{" "}
                                </div>{" "}
                                <div className="list-group-item d-flex align-items-center">
                                    {" "}
                                    <div className="me-2">
                                        {" "}
                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/11.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/11.jpg") center center'
                                            }}
                                        />{" "}
                                    </div>{" "}
                                    <div className="">
                                        {" "}
                                        <a href="chat.html">
                                            {" "}
                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Florinda Carasco
                                            </div>{" "}
                                            <p className="mb-0 fs-12 text-muted">
                                                New product Launching...
                                            </p>
                                        </a>{" "}
                                    </div>{" "}
                                </div>{" "}
                                <div className="list-group-item d-flex align-items-center">
                                    {" "}
                                    <div className="me-2">
                                        {" "}
                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/4.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/4.jpg") center center'
                                            }}
                                        >
                                            <span className="avatar-status bg-success" />
                                        </span>{" "}
                                    </div>{" "}
                                    <div className="">
                                        {" "}
                                        <a href="chat.html">
                                            {" "}
                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Cherry Blossom
                                            </div>{" "}
                                            <p className="mb-0 fs-12 text-muted">
                                                cherryblossom@gmail.com
                                            </p>
                                        </a>{" "}
                                    </div>{" "}
                                </div>{" "}
                            </div>{" "}
                        </div>{" "}
                        <div className="tab-pane" id="side3">
                            {" "}
                            <ul className="task-list timeline-task">
                                {" "}
                                <li className="d-sm-flex mt-4">
                                    {" "}
                                    <div>
                                        {" "}
                                        <i className="task-icon1" />{" "}
                                        <h6 className="fw-semibold">
                                            Task Finished
                                            <span className="text-muted fs-11 ms-2 fw-normal">
                                                09 July 2021
                                            </span>
                                        </h6>{" "}
                                        <p className="text-muted fs-12">
                                            Adam Berry finished task on
                                            <a href="#" className="fw-semibold">
                                                {" "}
                                                Project Management
                                            </a>
                                        </p>
                                    </div>{" "}
                                    <div className="ms-auto d-md-flex me-3">
                                        {" "}
                                        <a href="#" className="text-muted me-2">
                                            <span className="fe fe-edit" />
                                        </a>{" "}
                                        <a href="#" className="text-muted">
                                            <span className="fe fe-trash-2" />
                                        </a>{" "}
                                    </div>{" "}
                                </li>{" "}
                                <li className="d-sm-flex">
                                    {" "}
                                    <div>
                                        {" "}
                                        <i className="task-icon1" />{" "}
                                        <h6 className="fw-semibold">
                                            New Comment
                                            <span className="text-muted fs-11 ms-2 fw-normal">
                                                05 July 2021
                                            </span>
                                        </h6>{" "}
                                        <p className="text-muted fs-12">
                                            Victoria commented on Project{" "}
                                            <a href="#" className="fw-semibold">
                                                {" "}
                                                AngularJS Template
                                            </a>
                                        </p>
                                    </div>{" "}
                                    <div className="ms-auto d-md-flex me-3">
                                        {" "}
                                        <a href="#" className="text-muted me-2">
                                            <span className="fe fe-edit" />
                                        </a>{" "}
                                        <a href="#" className="text-muted">
                                            <span className="fe fe-trash-2" />
                                        </a>{" "}
                                    </div>{" "}
                                </li>{" "}
                                <li className="d-sm-flex">
                                    {" "}
                                    <div>
                                        {" "}
                                        <i className="task-icon1" />{" "}
                                        <h6 className="fw-semibold">
                                            New Comment
                                            <span className="text-muted fs-11 ms-2 fw-normal">
                                                25 June 2021
                                            </span>
                                        </h6>{" "}
                                        <p className="text-muted fs-12">
                                            Victoria commented on Project{" "}
                                            <a href="#" className="fw-semibold">
                                                {" "}
                                                AngularJS Template
                                            </a>
                                        </p>
                                    </div>{" "}
                                    <div className="ms-auto d-md-flex me-3">
                                        {" "}
                                        <a href="#" className="text-muted me-2">
                                            <span className="fe fe-edit" />
                                        </a>{" "}
                                        <a href="#" className="text-muted">
                                            <span className="fe fe-trash-2" />
                                        </a>{" "}
                                    </div>{" "}
                                </li>{" "}
                                <li className="d-sm-flex">
                                    {" "}
                                    <div>
                                        {" "}
                                        <i className="task-icon1" />{" "}
                                        <h6 className="fw-semibold">
                                            Task Overdue
                                            <span className="text-muted fs-11 ms-2 fw-normal">
                                                14 June 2021
                                            </span>
                                        </h6>{" "}
                                        <p className="text-muted mb-0 fs-12">
                                            Petey Cruiser finished task{" "}
                                            <a href="#" className="fw-semibold">
                                                {" "}
                                                Integrated management
                                            </a>
                                        </p>
                                    </div>{" "}
                                    <div className="ms-auto d-md-flex me-3">
                                        {" "}
                                        <a href="#" className="text-muted me-2">
                                            <span className="fe fe-edit" />
                                        </a>{" "}
                                        <a href="#" className="text-muted">
                                            <span className="fe fe-trash-2" />
                                        </a>{" "}
                                    </div>{" "}
                                </li>{" "}
                                <li className="d-sm-flex">
                                    {" "}
                                    <div>
                                        {" "}
                                        <i className="task-icon1" />{" "}
                                        <h6 className="fw-semibold">
                                            Task Overdue
                                            <span className="text-muted fs-11 ms-2 fw-normal">
                                                29 June 2021
                                            </span>
                                        </h6>{" "}
                                        <p className="text-muted mb-0 fs-12">
                                            Petey Cruiser finished task{" "}
                                            <a href="#" className="fw-semibold">
                                                {" "}
                                                Integrated management
                                            </a>
                                        </p>
                                    </div>{" "}
                                    <div className="ms-auto d-md-flex me-3">
                                        {" "}
                                        <a href="#" className="text-muted me-2">
                                            <span className="fe fe-edit" />
                                        </a>{" "}
                                        <a href="#" className="text-muted">
                                            <span className="fe fe-trash-2" />
                                        </a>{" "}
                                    </div>{" "}
                                </li>{" "}
                                <li className="d-sm-flex">
                                    {" "}
                                    <div>
                                        {" "}
                                        <i className="task-icon1" />{" "}
                                        <h6 className="fw-semibold">
                                            Task Finished
                                            <span className="text-muted fs-11 ms-2 fw-normal">
                                                09 July 2021
                                            </span>
                                        </h6>{" "}
                                        <p className="text-muted fs-12">
                                            Adam Berry finished task on
                                            <a href="#" className="fw-semibold">
                                                {" "}
                                                Project Management
                                            </a>
                                        </p>
                                    </div>{" "}
                                    <div className="ms-auto d-md-flex me-3">
                                        {" "}
                                        <a href="#" className="text-muted me-2">
                                            <span className="fe fe-edit" />
                                        </a>{" "}
                                        <a href="#" className="text-muted">
                                            <span className="fe fe-trash-2" />
                                        </a>{" "}
                                    </div>{" "}
                                </li>{" "}
                            </ul>{" "}
                        </div>{" "}
                    </div>{" "}
                </div>{" "}
            </div>{" "}
            <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                <div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }} />
            </div>
            <div className="ps__rail-y" style={{ top: 0, height: 744, right: 0 }}>
                <div
                    className="ps__thumb-y"
                    tabIndex={0}
                    style={{ top: 0, height: 717 }}
                />
            </div>
        </div>{" "}
        {/*/Sidebar-right*/} {/* Country-selector modal*/}{" "}
        <div className="modal fade" id="country-selector">
            {" "}
            <div className="modal-dialog modal-dialog-centered" role="document">
                {" "}
                <div className="modal-content country-select-modal">
                    {" "}
                    <div className="modal-header">
                        {" "}
                        <h6 className="modal-title">Choose Country</h6>
                        <button
                            aria-label="Close"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            type="button"
                        >
                            <span aria-hidden="true">×</span>
                        </button>{" "}
                    </div>{" "}
                    <div className="modal-body">
                        {" "}
                        <ul className="row p-3">
                            {" "}
                            <li className="col-lg-6 mb-2">
                                {" "}
                                <a
                                    href="#"
                                    className="btn btn-country btn-lg btn-block active"
                                >
                                    {" "}
                                    <span className="country-selector">
                                        <img
                                            alt=""
                                            src="../assets/images/flags/us_flag.jpg"
                                            className="me-3 language"
                                        />
                                    </span>
                                    USA{" "}
                                </a>{" "}
                            </li>{" "}
                            <li className="col-lg-6 mb-2">
                                {" "}
                                <a
                                    href="#"
                                    className="btn btn-country btn-lg btn-block"
                                >
                                    {" "}
                                    <span className="country-selector">
                                        <img
                                            alt=""
                                            src="../assets/images/flags/italy_flag.jpg"
                                            className="me-3 language"
                                        />
                                    </span>
                                    Italy{" "}
                                </a>{" "}
                            </li>{" "}
                            <li className="col-lg-6 mb-2">
                                {" "}
                                <a
                                    href="#"
                                    className="btn btn-country btn-lg btn-block"
                                >
                                    {" "}
                                    <span className="country-selector">
                                        <img
                                            alt=""
                                            src="../assets/images/flags/spain_flag.jpg"
                                            className="me-3 language"
                                        />
                                    </span>
                                    Spain{" "}
                                </a>{" "}
                            </li>{" "}
                            <li className="col-lg-6 mb-2">
                                {" "}
                                <a
                                    href="#"
                                    className="btn btn-country btn-lg btn-block"
                                >
                                    {" "}
                                    <span className="country-selector">
                                        <img
                                            alt=""
                                            src="../assets/images/flags/india_flag.jpg"
                                            className="me-3 language"
                                        />
                                    </span>
                                    India{" "}
                                </a>{" "}
                            </li>{" "}
                            <li className="col-lg-6 mb-2">
                                {" "}
                                <a
                                    href="#"
                                    className="btn btn-country btn-lg btn-block"
                                >
                                    {" "}
                                    <span className="country-selector">
                                        <img
                                            alt=""
                                            src="../assets/images/flags/french_flag.jpg"
                                            className="me-3 language"
                                        />
                                    </span>
                                    French{" "}
                                </a>{" "}
                            </li>{" "}
                            <li className="col-lg-6 mb-2">
                                {" "}
                                <a
                                    href="#"
                                    className="btn btn-country btn-lg btn-block"
                                >
                                    {" "}
                                    <span className="country-selector">
                                        <img
                                            alt=""
                                            src="../assets/images/flags/russia_flag.jpg"
                                            className="me-3 language"
                                        />
                                    </span>
                                    Russia{" "}
                                </a>{" "}
                            </li>{" "}
                            <li className="col-lg-6 mb-2">
                                {" "}
                                <a
                                    href="#"
                                    className="btn btn-country btn-lg btn-block"
                                >
                                    {" "}
                                    <span className="country-selector">
                                        <img
                                            alt=""
                                            src="../assets/images/flags/germany_flag.jpg"
                                            className="me-3 language"
                                        />
                                    </span>
                                    Germany{" "}
                                </a>{" "}
                            </li>{" "}
                            <li className="col-lg-6 mb-2">
                                {" "}
                                <a
                                    href="#"
                                    className="btn btn-country btn-lg btn-block"
                                >
                                    {" "}
                                    <span className="country-selector">
                                        <img
                                            alt=""
                                            src="../assets/images/flags/argentina.jpg"
                                            className="me-3 language"
                                        />
                                    </span>
                                    Argentina{" "}
                                </a>{" "}
                            </li>{" "}
                            <li className="col-lg-6 mb-2">
                                {" "}
                                <a
                                    href="#"
                                    className="btn btn-country btn-lg btn-block"
                                >
                                    {" "}
                                    <span className="country-selector">
                                        <img
                                            alt=""
                                            src="../assets/images/flags/malaysia.jpg"
                                            className="me-3 language"
                                        />
                                    </span>
                                    Malaysia{" "}
                                </a>{" "}
                            </li>{" "}
                            <li className="col-lg-6 mb-2">
                                {" "}
                                <a
                                    href="#"
                                    className="btn btn-country btn-lg btn-block"
                                >
                                    {" "}
                                    <span className="country-selector">
                                        <img
                                            alt=""
                                            src="../assets/images/flags/turkey.jpg"
                                            className="me-3 language"
                                        />
                                    </span>
                                    Turkey{" "}
                                </a>{" "}
                            </li>{" "}
                        </ul>{" "}
                    </div>{" "}
                </div>{" "}
            </div>{" "}
        </div>{" "}
        {/* Country-selector modal*/} {/* FOOTER */}{" "}
        {/* <footer className="footer">
        {" "}
        <div className="container">
            {" "}
            <div className="row align-items-center flex-row-reverse">
                {" "}
                <div className="col-md-12 col-sm-12 text-center">
                    {" "}
                    Copyright © 2022 <a href="#">Sash</a>. Designed with{" "}
                    <span className="fa fa-heart text-danger" /> by{" "}
                    <a href="#"> Spruko </a> All rights reserved.{" "}
                </div>{" "}
            </div>{" "}
        </div>{" "}
    </footer>{" "} */}
        {/* FOOTER END */}{" "}
    </>
}

export default Header;