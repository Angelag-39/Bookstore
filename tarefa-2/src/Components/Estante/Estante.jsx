import React from "react";
import "./Estante.css";
import LivroAvaliado from "../LivroAvaliado/LivroAvaliado"
import anne from "../../assets/anne.png"
import amigos from "../../assets/amigos.png"
import buda from "../../assets/buda.png"
import comer from "../../assets/comer.png"
import culpa from "../../assets/culpa.png"
import osho from "../../assets/osho.jpg"
import Quixote from "../../assets/Quixote.png"
import poemas from "../../assets/poemas.png"


function Estante(){
    return(
        <div className="estante">
            <LivroAvaliado nota="5" capa={anne}/>
            <LivroAvaliado nota="4" capa={amigos}/>
            <LivroAvaliado nota="5" capa={buda}/>
            <LivroAvaliado nota="4" capa={comer}/>
            <LivroAvaliado nota="4" capa={culpa}/>
            <LivroAvaliado nota="5" capa={osho}/>
            <LivroAvaliado nota="3" capa={Quixote}/>
            <LivroAvaliado nota="5" capa={poemas}/>
        </div>
    );
}

export default Estante;