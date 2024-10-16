import './App.css';
import logo from './imagenes/gato.jpg';
import Boton from './componentes/Boton.js';
import BotonClear from './componentes/BotonClear.js';
import Pantalla from './componentes/Pantalla.js';
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  const[input, setInput]=useState(0);

  const agregarInput=(val)=>{
    setInput(input+val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Debes introducir datos');
    }
  };

  return (
    <div className="App">
      <div className='logo-azarquiel-contenedor'>
        <img 
          src={logo}
          className='logo-azarquiel'
          alt='logo azarquiel'
        />
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div  className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div  className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClick={()=>setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
