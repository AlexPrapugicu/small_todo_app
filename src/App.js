import React from 'react';
import './App.css';
import Header from "./Components/Header";
import TodoNewForm from "./Components/TodoNewForm";
import TodoList from "./Components/TodoList/TodoList";
import TodoSortOptions from "./Components/TodoSortOptions";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoNewForm/>
      <TodoList/>
      <TodoSortOptions/>
    </div>
  );
}

export default App;
