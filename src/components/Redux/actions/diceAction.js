
import { ROLL_REQUEST, ROLL_SUCCESS } from "../types";



export const diceAction = (data) => async (dispatch) => {
  dispatch({
    type: ROLL_REQUEST,
  });

//   console.log(data)
var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  

//   const { data } = await Axios.post(baseURL + "/blog", formData, config)
var result = dice.roll();
  console.log(result)
  dispatch({
    type: ROLL_SUCCESS,
    payload: result,
  });
};
