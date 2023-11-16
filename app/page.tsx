import { fetchCompletedTasks, fetchInCompletedTasks } from "@/lib/data";
import TasksBox from "@/ui/todo/tasksBox";
import InputTask from "@/ui/todo/inputTask";
import CreateTaskForm from "@/ui/todo/createTaskForm";
import SubHeader from "@/ui/todo/subHeader";
import Button from "@/ui/todo/Button";

export default async function Home() {
  const completedTasks = await fetchCompletedTasks();
  const incompletedTasks = await fetchInCompletedTasks();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-4 text-center">
          <div className="px-6 py-12 md:px-12">
            <SubHeader />
            <Button />
          </div>
          <div className="border-2 rounded-lg border-slate-300 p-4 shadow-2xl">
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
        </section>
      </div>
    </main>
  );
}
