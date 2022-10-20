import Task from "../task/task.component";
import "./task-list.styles.scss";

const TaskList = ({ tasks, setTasks }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          description={task.description}
          tasks={tasks}
          setTasks={setTasks}
          id={task.id}
        />
      ))}
    </div>
  );
};

export default TaskList;
