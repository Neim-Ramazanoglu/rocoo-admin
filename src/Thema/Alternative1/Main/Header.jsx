import React from 'react';
import "../Assets/css/style.css"
import "../Assets/css/style.css.map"
import "../Assets/css/skin-modes.css"
import "../Assets/css/transparent-style.css"
import "../Assets/css/icons.css"
import "../Assets/css/dark-style.css"
import "../Assets/css/animated.css"
import "../Assets/css/transparent-style.scss"
import { useState } from 'react'
import pic from "../Assets/images/users/0.jpg"
import { NavLink } from "react-router-dom";

function Header(props) {

    const [apps, setApps] = useState(false);
    const [driver, setDriver] = useState(false);
    const [cargo, setCargo] = useState(false);
    const [dashboard, setDashboard] = useState("1");
    return <>
        <div className="app-header header sticky" style={{ marginBottom: "-74px" }}>
            <div className="container-fluid main-container">
                <div className="d-flex">
                    <a
                        aria-label="Hide Sidebar"
                        className="app-sidebar__toggle"
                        data-bs-toggle="sidebar"
                        onClick={props.onChange}
                        style={{ cursor: "pointer" }}
                    />
                    {/* sidebar-toggle*/}
                    <a className="logo-horizontal " >

                        <img
                            src={require("../Assets/images/brand/logo.png")}
                            className="header-brand-img desktop-logo"
                            alt="logo"
                        />
                        <div className='mobil-logo-center'>
                            <img
                                src={require("../Assets/images/brand/rocoo-logo2.png")}
                                className="header-brand-img light-logo1"
                                alt="logo"
                                style={{ maxHeight: "100px" }}
                            />
                        </div>
                    </a>
                    {/* LOGO */}

                    <div className="d-flex order-lg-2 ms-auto header-right-icons">

                        <div className="d-flex country">
                            <a
                                className="nav-link icon text-center"
                                data-bs-target="#country-selector"
                                data-bs-toggle="modal"
                            >
                                <i className="fe fe-globe" />
                                <span className="fs-16 ms-2 d-none d-xl-block">English</span>
                            </a>
                        </div>


                        <div className="d-flex order-lg-2">
                            <div className="dropdown d-flex profile-1">
                                <span>İşletme Adı</span>
                                <img
                                    src={pic}
                                    alt="profile-user"
                                    className="avatar  profile-user brround cover-image"
                                    style={{ marginLeft: "15px" }}
                                />
                            </div>
                        </div>
                        <div className="demo-icon nav-link icon">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="jumps-prevent" style={{ paddingTop: 74 }} />
        {/* /app-Header */} {/*APP-SIDEBAR*/}
        <div className="sticky is-expanded" style={{ marginBottom: "-74px" }}>

            <div
                className="app-sidebar__overlay active"
                data-bs-toggle="sidebar"
            />
            <div className="app-sidebar ps ps--active-y open">

                <div className="side-header">

                    <a className="header-brand1" >
                        <img
                            src={require("../Assets/images/brand/logo.png")}
                            className="header-brand-img desktop-logo"
                            alt="logo"
                        />
                        <img
                            src={require("../Assets/images/brand/logo-1.png")}
                            className="header-brand-img toggle-logo"
                            alt="logo"
                        />
                        <img
                            src={require("../Assets/images/brand/rocoo-logo3.png")}
                            className="header-brand-img light-logo"
                            alt="logo"
                        />
                        <img
                            src={require("../Assets/images/brand/rocoo-logo2.png")}
                            className="header-brand-img light-logo1"
                            alt="logo"

                        />

                    </a>
                    {/* LOGO */}
                </div>
                <div className="main-sidemenu is-expanded">

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

                            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
                        </svg>
                    </div>
                    <ul className="side-menu open" style={{ marginLeft: 0, marginTop: "100px" }}>


                        <li className={(dashboard ? "slide is-expanded" : "slide ")}>
                            <NavLink
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                to="/"
                                onClick={() => { setDashboard(!dashboard) }}
                            >
                                <i className="side-menu__icon fe fe-home" />
                                <span className="side-menu__label">Ana Sayfa</span>
                            </NavLink>
                        </li>

                        <li className={(apps ? "slide is-expanded" : "slide ")}>
                            <a
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                href="#"
                                onClick={() => { setApps(!apps) }}
                            >
                                <i className="side-menu__icon fe fe-slack" />
                                <span className="side-menu__label">İşletmem</span>
                                <i className="angle fe fe-chevron-right" />
                            </a>
                            <ul className={(apps ? "slide-menu open" : "slide-menu ")} >

                                <li className="side-menu-label1">
                                    <a href="#" >İşletmem</a>
                                </li>
                                <li>
                                    <NavLink to="/profile" className="slide-item">
                                        İşletme Profili
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/map" className="slide-item">

                                        map
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className={(driver ? "slide is-expanded" : "slide ")}>

                            <a
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                href="#"
                                onClick={() => { setDriver(!driver) }}
                            >

                                <i className="side-menu__icon fe fe-users" />
                                <span className="side-menu__label">Sürücüler</span>
                                <i className="angle fe fe-chevron-right" />
                            </a>
                            <ul className={(driver ? "slide-menu open" : "slide-menu ")}>

                                <li className="side-menu-label1">
                                    <NavLink to="/driverDetail">Sürücüler</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/drivers" className="slide-item">
                                        Sürücü Listesi
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/driverDetail" className="slide-item">
                                        Sürücü Detayı
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className={(cargo ? "slide is-expanded" : "slide ")}>

                            <NavLink
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                to="/cargo"
                                onClick={() => { setCargo(!cargo) }}
                            >
                                <i className="side-menu__icon fe fe-truck" />
                                <span className="side-menu__label">Kargolar</span>
                                <i className="angle fe fe-chevron-right" />
                            </NavLink>
                            <ul className={(cargo ? "slide-menu open" : "slide-menu ")}>


                            </ul>
                        </li>
                        <li className="sub-category">

                            {/* <h3>Pre-build Pages</h3> */}
                        </li>
                        <li className="slide is-expanded" >
                            <NavLink
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                to="#"

                            >
                                <i className="side-menu__icon fe fe-log-out" />
                                <span className="side-menu__label">Çıkış Yap</span>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="slide-right" id="slide-right">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#7b8191"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                        >

                            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                        </svg>
                    </div>
                </div>
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
            </div>
            {/*/APP-SIDEBAR*/}
        </div>
        <div className="jumps-prevent" style={{ paddingTop: 74 }} />
        {/*app-content open*/}


        {/* Sidebar-right */}
        <div className="sidebar sidebar-right sidebar-animate ps ps--active-y">

            <div className="panel panel-primary card mb-0 shadow-none border-0">

                <div className="tab-menu-heading border-0 d-flex p-3">

                    <div className="card-title mb-0">
                        <i className="fe fe-bell me-2" />
                        <span className=" pulse" />
                        Notifications
                    </div>
                    <div className="card-options ms-auto">

                        <a
                            href="#;"
                            className="sidebar-icon text-end float-end me-3 mb-1"
                            data-bs-toggle="sidebar-right"
                            data-target=".sidebar-right"
                        >
                            <i className="fe fe-x text-white" />
                        </a>
                    </div>
                </div>
                <div className="panel-body tabs-menu-body latest-tasks p-0 border-0">

                    <div className="tabs-menu border-bottom">

                        {/* Tabs */}
                        <ul className="nav panel-tabs">

                            <li className="">
                                <a href="#side1" className="active" data-bs-toggle="tab">
                                    <i className="fe fe-settings me-1" />
                                    Feeds
                                </a>
                            </li>
                            <li>
                                <a href="#side2" data-bs-toggle="tab">
                                    <i className="fe fe-message-circle" /> Chat
                                </a>
                            </li>
                            <li>
                                <a href="#side3" data-bs-toggle="tab">
                                    <i className="fe fe-anchor me-1" />
                                    Timeline
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">

                        <div className="tab-pane active" id="side1">

                            <div className="p-3 fw-semibold ps-5">Feeds</div>
                            <div className="card-body pt-2">

                                <div className="browser-stats">

                                    <div className="row mb-4">

                                        <div className="col-sm-2 mb-sm-0 mb-3">

                                            <span className="feeds avatar-circle brround bg-primary-transparent">
                                                <i className="fe fe-user text-primary" />
                                            </span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">

                                            <div className="d-flex align-items-end justify-content-between ms-2">

                                                <h6 className="">New user registered</h6>
                                                <div>

                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fe fe-x" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">

                                        <div className="col-sm-2 mb-sm-0 mb-3">

                                            <span className="feeds avatar-circle avatar-circle-secondary brround bg-secondary-transparent">
                                                <i className="fe fe-shopping-cart text-secondary" />
                                            </span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">

                                            <div className="d-flex align-items-end justify-content-between ms-2">

                                                <h6 className="">New order delivered</h6>
                                                <div>

                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fe fe-x" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">

                                        <div className="col-sm-2 mb-sm-0 mb-3">

                                            <span className="feeds avatar-circle avatar-circle-danger brround bg-danger-transparent">
                                                <i className="fe fe-bell text-danger" />
                                            </span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">

                                            <div className="d-flex align-items-end justify-content-between ms-2">

                                                <h6 className="">You have pending tasks</h6>
                                                <div>

                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fe fe-x" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">

                                        <div className="col-sm-2 mb-sm-0 mb-3">

                                            <span className="feeds avatar-circle avatar-circle-warning brround bg-warning-transparent">
                                                <i className="fe fe-gitlab text-warning" />
                                            </span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">

                                            <div className="d-flex align-items-end justify-content-between ms-2">

                                                <h6 className="">New version arrived</h6>
                                                <div>

                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fe fe-x" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">

                                        <div className="col-sm-2 mb-sm-0 mb-3">

                                            <span className="feeds avatar-circle avatar-circle-pink brround bg-pink-transparent">
                                                <i className="fe fe-database text-pink" />
                                            </span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">

                                            <div className="d-flex align-items-end justify-content-between ms-2">

                                                <h6 className="">Server #1 overloaded</h6>
                                                <div>

                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fe fe-x" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-sm-2 mb-sm-0 mb-3">

                                            <span className="feeds avatar-circle avatar-circle-info brround bg-info-transparent">
                                                <i className="fe fe-check-circle text-info" />
                                            </span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">

                                            <div className="d-flex align-items-end justify-content-between ms-2">

                                                <h6 className="">New project launched</h6>
                                                <div>

                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fe fe-x" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 fw-semibold ps-5">Settings</div>
                            <div className="card-body pt-2">

                                <div className="browser-stats">

                                    <div className="row mb-4">

                                        <div className="col-sm-2 mb-sm-0 mb-3">

                                            <span className="feeds avatar-circle brround bg-primary-transparent">
                                                <i className="fe fe-settings text-primary" />
                                            </span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">

                                            <div className="d-flex align-items-end justify-content-between ms-2">

                                                <h6 className="">General Settings</h6>
                                                <div>

                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">

                                        <div className="col-sm-2 mb-sm-0 mb-3">

                                            <span className="feeds avatar-circle avatar-circle-secondary brround bg-secondary-transparent">
                                                <i className="fe fe-map-pin text-secondary" />
                                            </span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">

                                            <div className="d-flex align-items-end justify-content-between ms-2">

                                                <h6 className="">Map Settings</h6>
                                                <div>

                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">

                                        <div className="col-sm-2 mb-sm-0 mb-3">

                                            <span className="feeds avatar-circle avatar-circle-danger brround bg-danger-transparent">
                                                <i className="fe fe-headphones text-danger" />
                                            </span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">

                                            <div className="d-flex align-items-end justify-content-between ms-2">

                                                <h6 className="">Support Settings</h6>
                                                <div>

                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">

                                        <div className="col-sm-2 mb-sm-0 mb-3">

                                            <span className="feeds avatar-circle avatar-circle-warning brround bg-warning-transparent">
                                                <i className="fe fe-credit-card text-warning" />
                                            </span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">

                                            <div className="d-flex align-items-end justify-content-between ms-2">

                                                <h6 className="">Payment Settings</h6>
                                                <div>

                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">

                                        <div className="col-sm-2 mb-sm-0 mb-3">

                                            <span className="feeds avatar-circle avatar-circle-pink brround bg-pink-transparent">
                                                <i className="fe fe-bell text-pink" />
                                            </span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">

                                            <div className="d-flex align-items-end justify-content-between ms-2">

                                                <h6 className="">Notification Settings</h6>
                                                <div>

                                                    <a href="#">
                                                        <i className="fe fe-settings me-1" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="side2">

                            <div className="list-group list-group-flush">

                                <div className="pt-3 fw-semibold ps-5">Today</div>
                                <div className="list-group-item d-flex align-items-center">

                                    <div className="me-2">

                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/2.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/2.jpg") center center'
                                            }}
                                        />
                                    </div>
                                    <div className="">

                                        <a href="chat.html">

                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Addie Minstra
                                            </div>
                                            <p className="mb-0 fs-12 text-muted">

                                                Hey! there I' am available....
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">

                                    <div className="me-2">

                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/11.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/11.jpg") center center'
                                            }}
                                        >
                                            <span className="avatar-status bg-success" />
                                        </span>
                                    </div>
                                    <div className="">

                                        <a href="chat.html">

                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Rose Bush
                                            </div>
                                            <p className="mb-0 fs-12 text-muted">

                                                Okay...I will be waiting for you
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">

                                    <div className="me-2">

                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/10.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/10.jpg") center center'
                                            }}
                                        />
                                    </div>
                                    <div className="">

                                        <a href="chat.html">

                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Claude Strophobia
                                            </div>
                                            <p className="mb-0 fs-12 text-muted">

                                                Hi we can explain our new project......
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">

                                    <div className="me-2">

                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/13.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/13.jpg") center center'
                                            }}
                                        />
                                    </div>
                                    <div className="">

                                        <a href="chat.html">

                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Eileen Dover
                                            </div>
                                            <p className="mb-0 fs-12 text-muted">

                                                New product Launching...
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">

                                    <div className="me-2">

                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/12.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/12.jpg") center center'
                                            }}
                                        >
                                            <span className="avatar-status bg-success" />
                                        </span>
                                    </div>
                                    <div className="">

                                        <a href="chat.html">

                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Willie Findit
                                            </div>
                                            <p className="mb-0 fs-12 text-muted">

                                                Okay...I will be waiting for you
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">

                                    <div className="me-2">

                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/15.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/15.jpg") center center'
                                            }}
                                        />
                                    </div>
                                    <div className="">

                                        <a href="chat.html">

                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Manny Jah
                                            </div>
                                            <p className="mb-0 fs-12 text-muted">

                                                Hi we can explain our new project......
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">

                                    <div className="me-2">

                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/4.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/4.jpg") center center'
                                            }}
                                        />
                                    </div>
                                    <div className="">

                                        <a href="chat.html">

                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Cherry Blossom
                                            </div>
                                            <p className="mb-0 fs-12 text-muted">

                                                Hey! there I' am available....
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="pt-3 fw-semibold ps-5">Yesterday</div>
                                <div className="list-group-item d-flex align-items-center">

                                    <div className="me-2">

                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/7.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/7.jpg") center center'
                                            }}
                                        >
                                            <span className="avatar-status bg-success" />
                                        </span>
                                    </div>
                                    <div className="">

                                        <a href="chat.html">

                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Simon Sais
                                            </div>
                                            <p className="mb-0 fs-12 text-muted">
                                                Schedule Realease......
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">

                                    <div className="me-2">

                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/9.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/9.jpg") center center'
                                            }}
                                        />
                                    </div>
                                    <div className="">

                                        <a href="chat.html">

                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Laura Biding
                                            </div>
                                            <p className="mb-0 fs-12 text-muted">

                                                Hi we can explain our new project......
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">

                                    <div className="me-2">

                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/2.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/2.jpg") center center'
                                            }}
                                        >
                                            <span className="avatar-status bg-success" />
                                        </span>
                                    </div>
                                    <div className="">

                                        <a href="chat.html">

                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Addie Minstra
                                            </div>
                                            <p className="mb-0 fs-12 text-muted">
                                                Contact me for details....
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">

                                    <div className="me-2">

                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/9.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/9.jpg") center center'
                                            }}
                                        />
                                    </div>
                                    <div className="">

                                        <a href="chat.html">

                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Ivan Notheridiya
                                            </div>
                                            <p className="mb-0 fs-12 text-muted">

                                                Hi we can explain our new project......
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">

                                    <div className="me-2">

                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/14.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/14.jpg") center center'
                                            }}
                                        />
                                    </div>
                                    <div className="">

                                        <a href="chat.html">

                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Dulcie Veeta
                                            </div>
                                            <p className="mb-0 fs-12 text-muted">

                                                Okay...I will be waiting for you
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">

                                    <div className="me-2">

                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/11.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/11.jpg") center center'
                                            }}
                                        />
                                    </div>
                                    <div className="">

                                        <a href="chat.html">

                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Florinda Carasco
                                            </div>
                                            <p className="mb-0 fs-12 text-muted">
                                                New product Launching...
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">

                                    <div className="me-2">

                                        <span
                                            className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="../assets/images/users/4.jpg"
                                            style={{
                                                background:
                                                    'url("../assets/images/users/4.jpg") center center'
                                            }}
                                        >
                                            <span className="avatar-status bg-success" />
                                        </span>
                                    </div>
                                    <div className="">

                                        <a href="chat.html">

                                            <div
                                                className="fw-semibold text-dark"
                                                data-bs-toggle="modal"
                                                data-target="#chatmodel"
                                            >
                                                Cherry Blossom
                                            </div>
                                            <p className="mb-0 fs-12 text-muted">
                                                cherryblossom@gmail.com
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="side3">

                            <ul className="task-list timeline-task">

                                <li className="d-sm-flex mt-4">

                                    <div>

                                        <i className="task-icon1" />
                                        <h6 className="fw-semibold">
                                            Task Finished
                                            <span className="text-muted fs-11 ms-2 fw-normal">
                                                09 July 2021
                                            </span>
                                        </h6>
                                        <p className="text-muted fs-12">
                                            Adam Berry finished task on
                                            <a href="#" className="fw-semibold">

                                                Project Management
                                            </a>
                                        </p>
                                    </div>
                                    <div className="ms-auto d-md-flex me-3">

                                        <a href="#" className="text-muted me-2">
                                            <span className="fe fe-edit" />
                                        </a>
                                        <a href="#" className="text-muted">
                                            <span className="fe fe-trash-2" />
                                        </a>
                                    </div>
                                </li>
                                <li className="d-sm-flex">

                                    <div>

                                        <i className="task-icon1" />
                                        <h6 className="fw-semibold">
                                            New Comment
                                            <span className="text-muted fs-11 ms-2 fw-normal">
                                                05 July 2021
                                            </span>
                                        </h6>
                                        <p className="text-muted fs-12">
                                            Victoria commented on Project
                                            <a href="#" className="fw-semibold">

                                                AngularJS Template
                                            </a>
                                        </p>
                                    </div>
                                    <div className="ms-auto d-md-flex me-3">

                                        <a href="#" className="text-muted me-2">
                                            <span className="fe fe-edit" />
                                        </a>
                                        <a href="#" className="text-muted">
                                            <span className="fe fe-trash-2" />
                                        </a>
                                    </div>
                                </li>
                                <li className="d-sm-flex">

                                    <div>

                                        <i className="task-icon1" />
                                        <h6 className="fw-semibold">
                                            New Comment
                                            <span className="text-muted fs-11 ms-2 fw-normal">
                                                25 June 2021
                                            </span>
                                        </h6>
                                        <p className="text-muted fs-12">
                                            Victoria commented on Project
                                            <a href="#" className="fw-semibold">

                                                AngularJS Template
                                            </a>
                                        </p>
                                    </div>
                                    <div className="ms-auto d-md-flex me-3">

                                        <a href="#" className="text-muted me-2">
                                            <span className="fe fe-edit" />
                                        </a>
                                        <a href="#" className="text-muted">
                                            <span className="fe fe-trash-2" />
                                        </a>
                                    </div>
                                </li>
                                <li className="d-sm-flex">

                                    <div>

                                        <i className="task-icon1" />
                                        <h6 className="fw-semibold">
                                            Task Overdue
                                            <span className="text-muted fs-11 ms-2 fw-normal">
                                                14 June 2021
                                            </span>
                                        </h6>
                                        <p className="text-muted mb-0 fs-12">
                                            Petey Cruiser finished task
                                            <a href="#" className="fw-semibold">

                                                Integrated management
                                            </a>
                                        </p>
                                    </div>
                                    <div className="ms-auto d-md-flex me-3">

                                        <a href="#" className="text-muted me-2">
                                            <span className="fe fe-edit" />
                                        </a>
                                        <a href="#" className="text-muted">
                                            <span className="fe fe-trash-2" />
                                        </a>
                                    </div>
                                </li>
                                <li className="d-sm-flex">

                                    <div>

                                        <i className="task-icon1" />
                                        <h6 className="fw-semibold">
                                            Task Overdue
                                            <span className="text-muted fs-11 ms-2 fw-normal">
                                                29 June 2021
                                            </span>
                                        </h6>
                                        <p className="text-muted mb-0 fs-12">
                                            Petey Cruiser finished task
                                            <a href="#" className="fw-semibold">

                                                Integrated management
                                            </a>
                                        </p>
                                    </div>
                                    <div className="ms-auto d-md-flex me-3">

                                        <a href="#" className="text-muted me-2">
                                            <span className="fe fe-edit" />
                                        </a>
                                        <a href="#" className="text-muted">
                                            <span className="fe fe-trash-2" />
                                        </a>
                                    </div>
                                </li>
                                <li className="d-sm-flex">

                                    <div>

                                        <i className="task-icon1" />
                                        <h6 className="fw-semibold">
                                            Task Finished
                                            <span className="text-muted fs-11 ms-2 fw-normal">
                                                09 July 2021
                                            </span>
                                        </h6>
                                        <p className="text-muted fs-12">
                                            Adam Berry finished task on
                                            <a href="#" className="fw-semibold">

                                                Project Management
                                            </a>
                                        </p>
                                    </div>
                                    <div className="ms-auto d-md-flex me-3">

                                        <a href="#" className="text-muted me-2">
                                            <span className="fe fe-edit" />
                                        </a>
                                        <a href="#" className="text-muted">
                                            <span className="fe fe-trash-2" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
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
        </div>
        {/*/Sidebar-right*/} {/* Country-selector modal*/}
        <div className="modal fade" id="country-selector">

            <div className="modal-dialog modal-dialog-centered" role="document">

                <div className="modal-content country-select-modal">

                    <div className="modal-header">

                        <h6 className="modal-title">Dil Seç</h6>
                        <button
                            aria-label="Close"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            type="button"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <ul className="row p-3">
                            <li className="col-lg-6 mb-2">

                                <a
                                    href="#"
                                    className="btn btn-country btn-lg btn-block active"
                                >

                                    <span className="country-selector">
                                        <i className='flag flag-gb' />
                                    </span>
                                    English
                                </a>
                            </li>
                            <li className="col-lg-6 mb-2">

                                <a
                                    href="#"
                                    className="btn btn-country btn-lg btn-block"
                                >

                                    <span className="country-selector">
                                        <i className='flag flag-tr' />
                                    </span>
                                    Türkçe
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* Country-selector modal*/} {/* FOOTER */}
        {/* <footer className="footer">
       
        <div className="container">
           
            <div className="row align-items-center flex-row-reverse">
               
                <div className="col-md-12 col-sm-12 text-center">
                   
                    Copyright © 2022 <a href="#">Sash</a>. Designed with
                    <span className="fa fa-heart text-danger" /> by
                    <a href="#"> Spruko </a> All rights reserved.
                </div>
            </div>
        </div>
    </footer> */}
        {/* FOOTER END */}

    </>
}

export default Header;
