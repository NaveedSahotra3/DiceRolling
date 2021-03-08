
import { ROLL_REQUEST, ROLL_SUCCESS } from '../types'

let inital_State = {
    diceRoll: [0],
  
   
}

export const dicereducer = (state = {}, action) => {

    switch (action.type) {
        case ROLL_REQUEST:

            return {
                loading: true,
                ...state

            }
        case ROLL_SUCCESS:
            console.log(action.payload)
            return {
           
                
                diceRoll: [action.payload],
                
                // notify: action.payload.message,
                loading: false,
                
            }
            
            
            default:
            return state;
    }


}