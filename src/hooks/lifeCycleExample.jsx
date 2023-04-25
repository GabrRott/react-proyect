/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métod de ciclo de vida
 */

import React, {Component} from "react";


class LifeCycleExample extends Component{

    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente');
    }

}

componentWillMount(){
    console.log("willmount: antes del montaje del componente")

}

componentDidMount(){

}

componentWillReceiveProps(){

}