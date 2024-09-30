import React from "react"; 
import Hero from "../../components/hero/hero";
import About from "../../components/About/AboutUs";
import Testimonies from "../../components/testimonies/Testimonies";
import Header from "../../components/Header/header";

function  Home() {
    return(
<div className="helloo">

<Hero />
<About />
<Testimonies />


</div>

    )
    
}

export default Home;