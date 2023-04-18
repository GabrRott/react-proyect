import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../../../models/user.class';


const UserState = ({user}) =>{
    return (
            <div>
                <h5>
                    The user is: { user.state ? 'CONECTED' : 'NOTconected'}
                </h5>
                
            </div>
        );
};


UserState.propTypes = {
    user: PropTypes.instanceOf(User.state)

};


export default UserState;
