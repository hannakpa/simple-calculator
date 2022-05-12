

function Pantalla ({error, mostrar}) {

    //si error es true, enconces aplicar esa clase CSS
   return( 
   <div className={error ? "pantalla error" : "pantalla"}>{mostrar}</div>
   )
}

export default Pantalla