import React from 'react';
import Body from './Main/Body';
import Header from './Main/Header';

function Index() {
    return <div className="page">
        <div className="page-main">

            <Header />
            <div className="main-content app-content mt-0">

                <div className="side-app">

                    {/* CONTAINER */}
                    <Body />

                    {/* CONTAINER END */}
                </div>
            </div>
        </div>
    </div>

}

export default Index;
