import React from "react";
import './Header.css'


function Header(){
    return(
        <header>
            <img className="perfil" src="https://i.ibb.co/XtqNx0Q/Design-sem-nome-removebg-preview-1.png" alt=""/>
          <span className="nome-usuario"> Angela Daniela</span>
            <div className="lidos">
                <span>100</span>
                <span>lidos</span>
            </div>
            <div className="vou-ler">
                <span>20</span>
                <span>vou ler</span>
            </div>
        </header>
     )
}
export default Header;