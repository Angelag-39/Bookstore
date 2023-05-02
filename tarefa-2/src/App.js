import logo from './logo.svg';
import './App.css';
import Line from './Components/Line/Line'
import Header from './Components/Header/Header'
import perfil from './assets/perfil.png'
import lidos from './Components/Header/Header'
import pendientes from './Components/Header/Header'




function App() {
  return (
    <div className="App">
      <Header 
      imagem={perfil} titulo="Angela Daniela" lidos="100 lidos" pendientes="60 Vou ler"/>
    <Line />
   
        
    </div>
  );
}

export default App;
