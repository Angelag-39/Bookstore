import './App.css';
import Line from './Components/Line/Line'
import Header from './Components/Header/Header'

import Card from './Components/Card/Card';
import anne from './assets/anne.png';
import cabana from './assets/cabana.png';
import Estante from './Components/Estante/Estante';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Header />
        <Line />
        <Menu />
        <Estante />
        <h2>Ultimas Avaliacoes</h2>
        <div className='principal'>
        <Card
          imagem={anne}
          titulo="Anne frank"
         resenha="Anne Frank, livro que narra os dois anos que ela e sua família passaram dentro de um esconderijo para tentar escapar da perseguição nazista durante a Segunda Guerra Mundial." />
        <br />
        <Card
          imagem={cabana}
          titulo="A cabana"
          resenha="Um homem vive atormentado após perder a sua filha mais nova, cujo corpo nunca foi encontrado, mas sinais de que ela teria sido violentada e assassinada são encontrados em uma cabana nas montanhas. " />
      </div>
        </div>
      
   
   
        
  
  );
}

export default App;
