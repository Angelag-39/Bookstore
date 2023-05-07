import React from "react";
import "./Home.css";
import Estante from "../../Components/Estante/Estante";

function Home (){
    return(
        <div className="container">
            <Estante/>
        </div>
    );
}
export default Home;