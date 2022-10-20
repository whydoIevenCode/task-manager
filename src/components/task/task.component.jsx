import Button from "../button/button.component";
import "./task.styles.scss";

const Task = ({ title, description, tasks, setTasks, id }) => {
  const handleDelete = () => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    console.log("clicked");
    setTasks(filteredTasks);
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  };
  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{description}</p>
      <Button
        handler={handleDelete}
        children="mark as complete"
        type="completed"
      />
      <Button handler={handleDelete} children="Delete" type="delete" />
    </div>
  );
};

export default Task;
