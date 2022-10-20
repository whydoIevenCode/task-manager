import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "../button/button.component";

import "./add-task.styles.scss";

const AddTask = ({ setTasks, tasks }) => {
  const defaultStateValue = {
    title: "",
    description: "",
  };

  const [taskInfo, setTaskInfo] = useState(defaultStateValue);
  const { title, description } = taskInfo;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setTaskInfo({ ...taskInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const list = [...tasks, { ...taskInfo, id: uuidv4() }];

    setTasks(list);
    localStorage.setItem("tasks", JSON.stringify(list));
  };

  console.log(taskInfo);
  return (
    <div className="add-task">
      <h2>Add a task</h2>
      <form className="add-task-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="input-box"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="title">Description</label>
          <textarea
            type="text"
            className="input-box input-box__description"
            id="description"
            name="description"
            value={description}
            onChange={handleChange}></textarea>
        </div>
        <Button children="Add Task" type="add" />
      </form>
    </div>
  );
};

export default AddTask;
