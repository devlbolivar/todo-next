import React from "react";
import { InputTask } from "@/lib/definitions";

const InputTask = ({ placeholder, value, onChange }: InputTask) => {
  return (
    <input
      className="border border-gray-300 rounded-md py-2 px-4 w-full"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputTask;
