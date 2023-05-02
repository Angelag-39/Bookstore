import React from "react";
import './Header.css'
function Header(props){
    return(
        <header>

          <div class="container">
              <div id="foto">
              <img src={props.imagem} alt="imagem" width={150}/>
              </div>
              <div class="perfil">{props.titulo}</div>
              <div class="lidos">{props.lidos}</div>
              <div class="pendientes">{props.pendientes}</div>
        
          </div>
        </header>
     )
}
export default Header;