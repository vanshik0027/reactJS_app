import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    console.log("I'm deleting", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    console.log("Adding todo", title, desc);
    let sno = todos.length ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  return (
    <Router>
      <Navbar searchBar1={false} title='TodoList' home='Home' />
      <Routes>
        <Route exact path="/" element={
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
        } />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
