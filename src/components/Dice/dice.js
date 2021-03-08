import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {diceAction} from "../Redux/actions/diceAction";
import {clearResult} from "../Redux/actions/clearActionDice"

function Dice() {
//   const [data, setdata] = useState();

  const dispatch = useDispatch()


  const DiceRolls = () => {
    
    dispatch(diceAction())

  };

  const clear = () => {
    console.log('dfaf')
    dispatch(clearResult(0))

  };

const state = useSelector(state => state.dicereducer.diceRoll)
// will see it after place
// useEffect(() => {
   
//     setdata([...state , state])

// }, [state])
// console.log(data)



  return (
    <div className="Dice">
      <button onClick={DiceRolls}> Roll Dice</button>
      {" "} {" "} {" "} 
      <button onClick={clear}>Clear Dice</button> 

      <p>
      Sum : {state && state}

      </p>
    </div>
  );
}

export default Dice;
