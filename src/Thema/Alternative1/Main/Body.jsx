import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CargoChanges from '../Components/Driver/CargoChanges';
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
                <Route path="/driverDetail/cargoChanges" exact element={<CargoChanges />} />


            </Routes>
        </Router>
    </>;
}

export default Body;
