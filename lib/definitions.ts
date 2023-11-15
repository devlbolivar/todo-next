export type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export type InputTask = {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
