import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';

const ContactState = ( {contact} ) => {
    
    
    
  return (
    <div>
        <h5>
            User: {contact.conexion ? 'Conected' : 'Not Conected'}
        </h5>
    </div>
  )
}

ContactState.propType = {

    contact : PropTypes.instanceOf(Contact.conexion),
};

export default ContactState;
