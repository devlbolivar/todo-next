import React from "react";
import { Task } from "@/lib/definitions";

interface TaskBoxProps {
  task: Task;
}

const TaskBox: React.FC<TaskBoxProps> = ({ task }) => {
  return (
    <div className="rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-medium mb-2">{task.title}</h2>
      <p className="text-gray-600">{task.description}</p>
    </div>
  );
};

export default TaskBox;
