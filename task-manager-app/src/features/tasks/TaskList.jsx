import { useSelector } from "react-redux";
import { filterTask, searchTask } from "./taskSlice";
import { useDispatch } from "react-redux";
import TaskItem from "../../components/TaskItem";

function TaskList() {
  const { alltasks, search, filter } = useSelector((state) => state.tasks);

  let tasks = alltasks;
  if (filter === "completed") {
    tasks = tasks.filter((task) => task.completed);
  } else if (filter === "incomplete") {
    tasks = tasks.filter((task) => !task.completed);
  }

  if (search) {
    tasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Task List</h2>
      <div>
        <button onClick={() => dispatch(filterTask("all"))}>All</button>
        <button onClick={() => dispatch(filterTask("completed"))}>
          Completed
        </button>
        <button onClick={() => dispatch(filterTask("incomplete"))}>
          Incomplete
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search tasks"
          onChange={(e) => dispatch(searchTask(e.target.value))}
        />
      </div>

      <ul>
        <h3>Tasks</h3>
        {tasks.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          tasks.map((task) => (
            <li key={task.id}>
              <TaskItem task={task} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TaskList;
