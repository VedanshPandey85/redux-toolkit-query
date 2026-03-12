import TaskList from "../features/tasks/TaskList";
import TaskInput from "../features/tasks/TaskInput";

export default function TaskPage() {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}
