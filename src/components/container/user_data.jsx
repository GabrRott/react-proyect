import React from 'react';
import PropTypes from 'prop-types';
import { STATE } from '../../models/state.enum';
import UserState from '../pure/forms/user';
import { User } from '../../models/user.class';


const UserData = () =>{

    const userDefault = new User('Gabriel', 'Flores', 'gabif@gmail.com', STATE.NOTconected);

        return (
            <div>
                <h4>
                    Name: { userDefault.name };
                </h4>
                <h4>
                    Lastname: { userDefault.lastName };
                </h4>
                <h4>
                    email: { userDefault.email };
                </h4>
                <UserState user={userDefault.state}></UserState>
                
            </div>
        );
}

UserData.propTypes = {
    user: PropTypes.instanceOf(User)

};


export default UserData;
