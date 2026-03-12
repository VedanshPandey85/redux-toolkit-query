import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";

export default function TaskInput() {
  const [text, settext] = useState("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch(addTask(text));
    settext("");
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Add a new task"
        onChange={(e) => settext(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}
