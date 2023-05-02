import logo from './logo.svg';
import './App.css';
import Line from './Components/Line/Line'
import Header from './Components/Header/Header'
import perfil from './assets/perfil.png'
import lidos from './Components/Header/Header'
import pendientes from './Components/Header/Header'
import Card from './Components/Card/Card';
import anne from './assets/anne.png'
import cabana from './assets/cabana.png'




function App() {
  return (
    <div className="App">
      <Header 
      imagem={perfil} titulo="Angela Daniela" lidos="100 lidos" pendientes="60 Vou ler"/>
    <Line />
    <Card
          imagem={anne}
          titulo="Anne frank"
          texto="Anne Frank, livro que narra os dois anos que ela e sua família passaram dentro de um esconderijo para tentar escapar da perseguição nazista durante a Segunda Guerra Mundial." />
        <br />
        <Card
          imagem={cabana}
          titulo="A cabana"
          texto="Um homem vive atormentado após perder a sua filha mais nova, cujo corpo nunca foi encontrado, mas sinais de que ela teria sido violentada e assassinada são encontrados em uma cabana nas montanhas. Anos depois da tragédia, ele recebe um chamado misterioso para retornar a esse local, onde ele vai receber uma lição de vida." />
      </div>
   
   
        
  
  );
}

export default App;
