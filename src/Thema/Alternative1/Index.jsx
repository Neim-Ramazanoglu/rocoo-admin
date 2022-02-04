import React from 'react';
import Body from './Main/Body';
import Header from './Main/Header';
import { useState } from 'react'

function Index() {
    const [leftNav, setLeftNav] = useState(false);

    function onChange() {
        setLeftNav(!leftNav)
    }
    return <>
        <div className="horizontalMenucontainer">
            <div className={(leftNav ? "app sidebar-mini ltr light-mode sidebar-gone sidenav-toggled" : "app sidebar-mini ltr light-mode")}>
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
            </div>
        </div>
    </>
}

export default Index;
