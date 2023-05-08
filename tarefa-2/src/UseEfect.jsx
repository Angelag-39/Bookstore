import React, { useState } from 'react'

function Teste(props) {

  const [contador, setContador] = useState(0);
 // Criamos um state chamado "contador"
 

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <p>Olá sou o  {props.nome} </p>
      <button onClick  setContador={() => (contador + 1) }>Aperte-me</button>
    </div>
  )
}
export default Teste;