/**
 * Main React Component
 * Handles:
 * - Login
 * - Fetching tasks
 * - Creating tasks
 */

import { useState } from "react";
import API from "./api";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useState("");
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  /**
   * Login user
   */
  const login = async () => {
    const res = await API.post("/auth/login", { email, password });

    setToken(res.data.token);

    // Set default authorization header for future requests
    API.defaults.headers.common["Authorization"] = res.data.token;

    fetchTasks();
  };

  /**
   * Fetch tasks from backend
   */
  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  /**
   * Add new task
   */
  const addTask = async () => {
    await API.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  return (
    <div style={{ padding: 40 }}>
      {!token ? (
        <>
          <h2>Login</h2>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login}>Login</button>
        </>
      ) : (
        <>
          <h2>DevTrack Pro</h2>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>

          {tasks.map((task) => (
            <div key={task._id}>{task.title}</div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
