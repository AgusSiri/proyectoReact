import React, { useState } from 'react'

export default function Contador(){

    const [contador, ejecutarContador] = useState(0);

    const sumarContador = () => {
        ejecutarContador(contador + 1)
        console.log(contador)
    }

    return ( 
        <div className="contadors" style={{backgroundColor:'grey', display:'flex', justifyContent:'center'}}>
            {contador}
            <button onClick={sumarContador}>Sumar</button>
           
        </div>
    )
}