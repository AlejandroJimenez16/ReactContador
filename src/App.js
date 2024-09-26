import './App.css';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png"
import Boton from './Componentes/Boton';
import Contador from "./Componentes/Contador"
import {useState} from "react"

function App() {

  const [numClicks, setNumClicks] = useState(0)

  const sumar = () =>{
    setNumClicks(numClicks + 1)
  }

  const reiniciar = () =>{
    setNumClicks(0)
  }


  return (
    <div className="App">
        <div className='freecodecamp-logo-contenedor'>
          <img 
          className='freecodecamp-logo'
          src= {freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
          />
        </div>


        <div className='contenedor-principal'>
          
            <Contador
             numClicks= {numClicks}           
            
            />
            <Boton
              texto = "Hazme click"
              esBotonDeClick = {true}
              manejarClick = {sumar}
              
            />
            <Boton
              texto = "Reiniciar"
              esBotonDeClick = {false}
              manejarClick = {reiniciar}
            />
        </div>     
    </div>
 
  );
}

export default App;
