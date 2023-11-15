export type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export const tasks: Task[] = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Milk, bread, eggs, cheese",
    completed: false,
  },
  {
    id: 2,
    title: "Do laundry",
    description: "Wash and fold clothes",
    completed: false,
  },
  {
    id: 3,
    title: "Clean the house",
    description: "Vacuum, dust, and mop floors",
    completed: true,
  },
];
