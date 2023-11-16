import { sql } from "@vercel/postgres";
import { Task } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchCompletedTasks() {
  noStore();
  try {
    const data = await sql<Task>`SELECT * FROM tasks WHERE completed = true`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch tasks data.");
  }
}

export async function fetchInCompletedTasks() {
  noStore();
  try {
    const data = await sql<Task>`SELECT * FROM tasks WHERE completed = false`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch tasks data.");
  }
}

// const getCompletedTasks = (): Task[] => {
//   return tasks.filter((task) => task.completed);
// };

// const getInCompletedTasks = (): Task[] => {
//   return tasks.filter((task) => !task.completed);
// };
