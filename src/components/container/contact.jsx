import React from 'react'
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class'
import ContactState from '../pure/forms/contact_state'

const UserData = () => {

    const defaultUser = new Contact( 'Bruce', 'Wayne', 'bruceWayne@batman.com', false);


  return (
    <div>
        <h3>
            User Information:
        </h3>
        <hr />
        <h4>
            Name: {defaultUser.name}
        </h4>
        <h4>
            Last Name: {defaultUser.lastName}
        </h4>
        <h4>
            email: {defaultUser.email}
        </h4>
        <h5>
        <ContactState contact={defaultUser}></ContactState>
        </h5>
    </div>
  )
}

UserData.propType = {

    defaultUser : PropTypes.instanceOf(Contact),
};



export default UserData;