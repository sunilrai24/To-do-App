import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [position, setPosition] = useState(null);

  const todoInputHandler = (e) => {
    setTodo(e.target.value);
  };
  const editHandler = (i) => {
    setTodo([todoList[i]]);
    setPosition(i);
    console.log(i);
  };
  const addTodoHandler = () => {
    setTodoList((previousTodoList) => [...previousTodoList, todo]);
    setTodo("");
    setPosition();
  };
  const addTodoUpdate = () => {
    if (position == null) {
      setTodoList((previousTodoList) => [...previousTodoList, todo]);
      setTodo("");
      setPosition(todo);
    } else {
      const updatedTodoList = [...todoList];
      updatedTodoList[position] = todo;
      setTodoList(updatedTodoList);
      setTodo("");
      setPosition(null);
    }
  };
  const deleteHandler = (i) => {
    const data = [...todoList];
    data.splice(i, 1);
    setTodoList(data);
  };
  const completHandler = (i) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[i] = { ...updatedTodoList[i], completed: true };
    setTodoList(updatedTodoList);
  };
  return (
    <div className="mx-auto mt-4" style={{ width: "100%", maxWidth: "400px" }}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add To-do"
          onChange={todoInputHandler}
          value={todo}
        />
        {position == null ? (
          <button
            onClick={addTodoHandler}
            type="button"
            className="btn btn-primary"
          >
            Add To-do
          </button>
        ) : (
          <button
            onClick={addTodoUpdate}
            type="button"
            className="btn btn-primary"
          >
            Update
          </button>
        )}
      </div>

      <ul className="list-group mt-4">
        {todoList?.map((val, i) => (
          <li className="list-group-item" key={i}>
            {val}{" "}
            <button
              onClick={() => editHandler(i)}
              type="button"
              className="btn btn-warning btn-sm"
            >
              Edit
            </button>{" "}
            <button
              onClick={() => deleteHandler(i)}
              type="button"
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>{" "}
            <button
              onClick={() => completHandler(i)}
              type="button"
              className="btn btn-success btn-sm"
            >
              Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
