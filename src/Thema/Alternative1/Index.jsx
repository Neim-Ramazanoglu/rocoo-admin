import React from 'react';
import Body from './Main/Body';
import Header from './Main/Header';
import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

function Index() {
    const [leftNav, setLeftNav] = useState(false);
    const [state, setState] = useState("0")
    function onChange() {
        setLeftNav(!leftNav)
    }
    return <>
        {
            (state === "0" ?
                <div className="horizontalMenucontainer">
                    <div className={(leftNav ? "app sidebar-mini ltr light-mode sidebar-gone sidenav-toggled" : "app sidebar-mini ltr light-mode")}>
                        <Router>
                            <div className="page">
                                <div className="page-main">
                                    <Header leftNav={leftNav} onChange={onChange} />
                                    <div className="main-content app-content mt-0">
                                        <div className="side-app">
                                            <div className="main-container container-fluid">
                                                <Body />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Router>
                    </div>
                </div>
                :
                state === "1" ?
                    <Login />
                    :
                    <Register />
            )
        }

    </>
}

export default Index;
