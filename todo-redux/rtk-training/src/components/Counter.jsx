import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counter/counterSlice";
import { useState } from "react";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [amount, setamount] = useState(0);

  return (
    <div>
      Counter: {count}
      <br />
      <button onClick={() => dispatch(increment())}>Increment+</button>
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement-</button>
      <br />
      <label htmlFor="incrementByAmount">Increment by amount: </label>
      <input type="text" onChange={(e) => setamount(Number(e.target.value))} />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment by amount
      </button>
    </div>
  );
}
