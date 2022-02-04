import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DriverDetail from '../Components/Driver/DriverDetail';
import DriverList from '../Components/Driver/DriverList';
import BusinessHomepage from '../Components/HomePage/BusinessHomepage';

function Body() {
    return <>
        <Router>
            <Routes>
                <Route path="/" exact element={<BusinessHomepage />} />
                <Route path="/drivers" exact element={<DriverList />} />
                <Route path="/driverDetail" exact element={<DriverDetail />} />


            </Routes>
        </Router>
    </>;
}

export default Body;
