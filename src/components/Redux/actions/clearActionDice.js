
import { ROLL_REQUEST, ROLL_SUCCESS } from "../types";



export const clearResult = (data) => async (dispatch) => {
  dispatch({
    type: ROLL_REQUEST,
  });

  console.log(data)

  dispatch({
    type: ROLL_SUCCESS,
    payload: data,
  });
};
