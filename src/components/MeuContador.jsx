import { useState } from "react";

export default function MeuContator() {

    const [contador, setContador] = useState(0) 


    function aumentar(){

        console.log('renderizado')

        setContador(contador + 1)
    }

    return (
        <div>
            <h1>Meu Contador</h1>
            <h3>{contador}</h3>
            { contador > 9 ? <h1>Valor muito Grande</h1> : null}
            <button onClick={aumentar}>Aumentar</button>
        </div>
    )
}