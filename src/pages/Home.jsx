import React from "react";

import logo from '../images/restauranttittle.jpg';

const Home = () => {

    return (
    <React.Fragment>
        <h1 className=" text-center mb-16">Wellcome to Parador Restaurant</h1>
        <img src={logo} alt="logo"/>
    </React.Fragment>
    )
}
export default Home;