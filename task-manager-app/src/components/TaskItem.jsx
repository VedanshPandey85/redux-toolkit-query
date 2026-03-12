import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../features/tasks/taskSlice";

export default function TaskItem({ task }) {
  const dispatch = useDispatch();
  return (
    <div>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>
      <button onClick={() => dispatch(toggleTask(task.id))}>Toggle</button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
}
