import './App.css';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Line from './Components/Line/Line'
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import anne from './assets/anne.png';
import cabana from './assets/cabana.png';
import Estante from './Components/Estante/Estante';
import Menu from './Components/Menu/Menu';
import Home from './Pages/Home/Home';
import Resenha from './Pages/Resenha/Resenha';


function App() {
  return (
    <div className="App">
      <Header />
      <Line />
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/Resenha">Resenha</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Resenha' element={<Resenha/>}/>
        </Routes>

      </Router>

        <h2>Minha Estante</h2>
        <div className='principal'>
        <Menu/>
        <Estante />
        </div>
        <h2>Últimas Avaliações</h2>
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
