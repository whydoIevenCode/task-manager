import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home.route";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem("tasks");

    if (items) {
      setTasks(JSON.parse(items));
    }
  }, []);

  return (
    <section className="app">
      <Routes>
        <Route path="/">
          <Route index element={<Home tasks={tasks} setTasks={setTasks} />} />
          <Route path="*" element={<h1>Page Not found</h1>} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
