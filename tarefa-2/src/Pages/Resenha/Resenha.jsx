import React from "react";
import "./Resenha.css";
import LivroAvaliado from "../../Components/LivroAvaliado/LivroAvaliado";
import poemas from "../../assets/poemas.png"

function Resenha(props){
    return(
        <div className="container">
         <div className="card">
           <LivroAvaliado nota="5" capa={poemas} />
           <div className="resenha">
            <h4>Veinte Poemas de Amor</h4>
            <p> Expressão de sentimentos universais e sempre vivos, de uma diversidade de expressões amorosas, esta obra de Pablo Neruda, apesar de ter se tornado um clássico ao longo do tempo, conserva intacta, como bem afirma Jorge Edwards no prólogo que a precede, a sua magia secreta, contagiante e perigoso.</p>
           </div>
        </div>
       
        
        </div>
        
    );
}

export default Resenha;