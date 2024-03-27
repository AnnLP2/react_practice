import { useEffect, useState, useMemo } from "react";
import "./style.sass";
import { todos as service } from "./../../services/todos";

export default function TodosList() {
  const [todos, setTodos] = useState([]);
  // const [filteredTodos, setFilteredTodos] = useState([]);
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    (async () => {
      const response = await service.get();
      setTodos(response.slice(0, 10));
    })();
  }, []);

  const handleCompleted = async (item) => {
    const response = await service.put(item.id, {
      completed: !item.completed,
    });
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.id === response.id) item = response;
        return item;
      })
    );
  };

  // useEffect(() => {
  //   setFilteredTodos(todos.sort((a, b) => b.completed - a.completed));
  // }, [todos]);

  const filteredTodos = useMemo(() => {
    return todos.sort((a, b) => b.completed - a.completed);
  }, [todos]);

  return filteredTodos.length ? (
    <>
      <input
        type="color"
        defaultValue={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <ul style={{ backgroundColor: color }}>
        {filteredTodos.map((item) => (
          <li
            className={item.completed ? "success" : "error"}
            key={item.id}
            onClick={() => {
              handleCompleted(item);
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </>
  ) : null;
}
