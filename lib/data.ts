import { tasks } from "./placeholder-data";
import { Task } from "./definitions";

const getCompletedTasks = (): Task[] => {
  return tasks.filter((task) => task.completed);
};

const getInCompletedTasks = (): Task[] => {
  return tasks.filter((task) => !task.completed);
};

export { getCompletedTasks, getInCompletedTasks };
