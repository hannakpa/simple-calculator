
///crear la tecla que voy a incorporar en el teclado

function Tecla(props){
    ///contst para tecla C roja
    //con props traigo el onClick del Teclado, que a su vez trae la función pulsa del App.jsx. 
    //Este onclick y la e ser'a el props.valor.
    return <button onClick={()=>props.onClick(props.valor)}>{props.valor}
    </button>
}


function Teclado({numeros, pulsa}){
    return (
        <div className="teclado">
            {/* de la propiedad numeros(que en el app.jsx contiene los números) hago un map que va a tener dos argumentos: el index que será para el key, para cada vez que se irá haciendo la tecla. Se pasa también el argumento e (los numeros), que será el valor del número que se dibujará en cada letra 
            le paso la funcion pulsa del app, para que pulse el valor e*/}

            {numeros.map((e, idx)=><Tecla key={idx} valor={e} onClick={()=>pulsa(e)} />)}
        </div>
    )

}

export default Teclado