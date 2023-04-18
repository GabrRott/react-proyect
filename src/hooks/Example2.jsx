/*
Ejemplo de uso de:
useState()
useRef()
useEffect()
*/

import React, { useState, useRef, useEffect} from 'react';

const Example2 = () => {

    //Crear 2 contadores distintos
    //cada uno en un estado diferente
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    //crear una referencia con useRef() para asociar con una variable
    //con un elemento del Dom del componente (vista html)
    const myRef = useRef();
    function increase(){
        setCounter1(counter1 +1);

    }

    function increase2(){
        setCounter2(counter2 + 1);
    }

    /* Trabajando con UseEffect


    * ? Caso 1: Ejecutar SIEMPRE un snippet de código
    Cada vez que haya un cambio en el estado del componente
    se ejecuta aquello que esá dentro del useEffect
    */
    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando REferencia a elemento del DOM: ')
    //     console.log(myRef);
    // }
    // )
    /*
    ? Caso 2: Ejecutar sólo cuando cambie contador 1
    cada vez qeu haya un cambio en contador 1, se ejecuta lo que diga useEffect()
    En caso de que cambie contador 2 no habrá cambios en la ejecución
    */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando REferencia a elemento del DOM: ')
    //     console.log(myRef);
    // }, [counter1]
    // )
    // ? Caso 3: Ejecutar cuando cambie contador 1 ó contador 2
    // cada vez qeu haya un cambio en contador 1 o en contador 2, se ejecuta lo que diga useEffect()
    // En caso de que cambie cualquier otro componente no habrá cambios en la ejecución
    // */
    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log('Mostrando REferencia a elemento del DOM: ')
        console.log(myRef);
    }, [counter1], [counter2]
    )



    return (
        <div>
            <h1>***Ejemplo de useState, useRef y useEffect***</h1>
            <h2>COUNTER 1: {counter1}</h2>
            <h2>COUNTER 2: {counter2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={myRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* Botones para cambiear los contadores */}
            <div>
                <button onClick={increase}>Increase Counter 1</button>
                <button onClick={increase2}>Increase Counter 1</button>
            </div>
        </div>
    );
}

export default Example2;
