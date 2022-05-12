import React, { useState } from "react";
import "./App.css";
import Teclado from "./Teclado";
import Pantalla from "./Pantalla";

//import 'bootstrap/dist/css/bootstrap.min.css';

//import Pantalla from './Pantalla';

function App() {
  const [mostrar, setMostrar] = useState(0); //por qu'e cero????
  //funcion que relaciona la pulsacion con la aparicion de los numeros en la pantalla.
  //relacion de pulsar con mostrar
  const [error, setError] = useState(false);
  //teclas del teclado que paso al componente TECLADO
  const teclas = ["1", "2", "3", "/", "4", "5", "6", "*", "7", "8", "9", "-", "C", "0", "=", "+"];

  function pulsa(tecla) {
    if (tecla === "C" || tecla === "c") {
      setMostrar("0");
      setError(false); //////PODR'IA CAUSAR PROBLEMAS?
    } else if (tecla === "B") {
      if (mostrar.length > 1) {
        setMostrar(mostrar.slice(0, -1));
      } else {
        setMostrar("0");
      }
    } else if (tecla === "=") {
      let resultado;
      try {
        resultado = eval(mostrar);
        setMostrar(resultado + "");
      } catch {
        setError(true);
      }
    } else {
      setMostrar(mostrar === "0" ? tecla : mostrar + tecla);
    }
  }

  // useEffect{()=>{ ////va comprobando cada vez que se presiona una tecla(cambia el MOSTRAR)
  //   //para desactivar el error
  //   if(error){
  //     try {
  //       eval(mostrar);
  //       setError(false);

  //     }
  //   }
  // }}

  return (
    <div className="box">
      {/* funcin pulsa incluye setmostrar */}
      <Pantalla mostrar={mostrar} error={error} />
      <Teclado numeros={teclas} pulsa={pulsa} />
    </div>
  );
}

export default App;
