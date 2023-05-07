import React from "react";
import "./Resenha.css";
import LivroAvaliado from "../../Components/LivroAvaliado/LivroAvaliado";


function Resenha(props){
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

export default Resenha;