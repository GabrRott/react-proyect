/**
 * Componente que v a a contener un formulario para
 *  autenticacion de usuarios
 */

import React, { useState } from 'react';

const loginForm = () => {

    const initialData = [
        {
            user:'',
            name: '',
            email: '',
            password: ''
        }
    ];

    const [data, setData] = useState(initialData);

  return (
    <div>loginForm</div>
  )
}

export default loginForm