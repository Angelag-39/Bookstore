import React from "react";
import "./Card.css";
import LivroAvaliado from "../LivroAvaliado/LivroAvaliado";


function Card(props){
    return(
        <div className="card">
           <LivroAvaliado nota="5" capa={props.imagem} />
           <div className="resenha">
            <h4>{props.titulo}</h4>
            <p>{props.resenha}</p>
           </div>
        
        </div>
        
    );
}

export default Card;