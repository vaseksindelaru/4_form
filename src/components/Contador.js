
import React,{useState} from 'react'

 function Contador() {
  const[numero,setNumero]=useState(1)

  const contador = () => {
    console.log('hecho click')
    setNumero (numero + 1)
   
  }
  return (
  <div>
    <h1>numero es {numero}</h1>
    <button onClick={contador}>aumenta 1</button>
  </div>
  )
}
export default Contador