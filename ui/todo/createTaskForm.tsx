const CreateTaskForm = () => {
  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // handle form submission here
  // };

  // const handleTaskNameChange = (event) => {
  //     setTaskName(event.target.value);
  // };

  return (
    <form className="max-w-md mx-auto">
      <div className="mb-4">
        <label
          htmlFor="taskName"
          className="block text-gray-700 font-bold mb-2"
        >
          Task Name
        </label>
        <input
          type="text"
          id="taskName"
          name="taskName"
          value={""}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Task
        </button>
      </div>
    </form>
  );
};

export default CreateTaskForm;
