import { getCompletedTasks, getInCompletedTasks } from "@/lib/data";
import TasksBox from "@/ui/todo/tasksBox";
import InputTask from "@/ui/todo/inputTask";
import CreateTaskForm from "@/ui/todo/createTaskForm";

export default function Home() {
  const completedTasks = getCompletedTasks();
  const incompletedTasks = getInCompletedTasks();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>To Do App</h1>
        <CreateTaskForm />
        <hr />
        <div>
          <h2>Active tasks</h2>
          <TasksBox tasks={completedTasks} />
        </div>
        <hr />
        <div>
          <h2>Completed tasks</h2>
          <TasksBox tasks={incompletedTasks} />
        </div>
      </div>
    </main>
  );
}
