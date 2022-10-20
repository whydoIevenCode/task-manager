import AddTask from "../components/add-task/add-task.component";
import TaskList from "../components/task-list/task-list.component";
import "./home.styles.scss";

const Home = ({ tasks, setTasks }) => {
  return (
    <div className="app-wrapper">
      <AddTask setTasks={setTasks} tasks={tasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};
export default Home;
