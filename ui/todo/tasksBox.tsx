import { Task } from "@/lib/definitions";
import TaskBox from "./taskBox";

interface Props {
  tasks: Task[];
}

const TasksBox: React.FC<Props> = ({ tasks }) => {
  return (
    <div className="rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-medium mb-4">Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskBox key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TasksBox;
