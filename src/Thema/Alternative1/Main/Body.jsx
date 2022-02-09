import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";
import BusinessProfile from '../Components/Business/BusinessProfile';
import Cargo from '../Components/Cargo/Cargo';
import CargoChanges from '../Components/Driver/CargoChanges';
import DriverDetail from '../Components/Driver/DriverDetail';
import DriverInsert from '../Components/Driver/DriverInsert';
import DriverList from '../Components/Driver/DriverList';
import BusinessHomepage from '../Components/HomePage/BusinessHomepage';
import Map from '../Components/Map/Map';

function Body() {
    return (
        <div>
            <Switch>
                <Route path="/" exact> <BusinessHomepage />  </Route>
                <Route path="/drivers" exact>  <DriverList /> </Route>
                <Route path="/driverDetail" exact>  <DriverDetail /> </Route>
                <Route path="/driverDetail/cargoChanges" exact>  <CargoChanges /> </Route>
                <Route path="/cargo" exact><Cargo /> </Route>
                <Route path="/map" exact> <Map /> </Route>
                <Route path="/profile" exact> <BusinessProfile /></Route>
                <Route path="/drivers/insert" exact> <DriverInsert /></Route>




            </Switch>
        </div>
    )
}

export default Body;
