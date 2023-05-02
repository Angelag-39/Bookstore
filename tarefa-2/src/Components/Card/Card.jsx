import React from "react";
import "./Card.css"


function Card(props){
    return(
        <div id="main">
            <div id="avaliacao">
                <div id="imagem">
                    <img src={props.imagem} alt="imagem"  />
                </div>
                <div id="texto">
                    <h1>{props.titulo}</h1>
                    <p>{props.texto}</p>
                </div>

            </div>
            

        </div>
    );
}
export default Card;