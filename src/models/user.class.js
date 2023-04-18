import { STATE } from "../models/state.enum";

export class User{

    name= '';
    lastName= '';
    email= '';
    state= STATE.NOTconected;

    constructor (name, lastName, email, state){
        this.name= name;
        this.lastName= lastName;
        this.email= email;
        this.state= state;
    }
}