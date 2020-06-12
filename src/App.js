import React, {useEffect, useState} from 'react';

import './App.css';
import Header from "./Components/Header";
import TodoNewForm from "./Components/TodoNewForm";
import TodoList from "./Components/TodoList/TodoList";
import TodoSortOptions from "./Components/TodoSortOptions";


const LOCAL_STORAGE_KEY = "todo-react-app";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodos) {
            setTodos(storageTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function addTodo(todo) {
        setTodos([...todos, todo]);
    }

    function editTodo(newTodo) {
        setTodos(
            todos.map(todo => {
                if (todo.id === newTodo.id) {
                    return {
                        ...todo,
                        content: newTodo.content,
                        dueDate: newTodo.dueDate,
                        editMode: false
                    };
                }
                return todo;
            })
        );
    }

    function markDone(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: !todo.isDone
                    };
                }
                return todo;
            })
        );
    }

    function startEditing(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        editMode: !todo.editMode
                    };
                }
                return todo;
            })
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function sortBy(option) {
        const opt = option.toLowerCase();
        switch (opt) {
            case 'date':
                console.log("sorting by date");
                setTodos([...todos].sort(sortByDate));
                break;
            case 'completed' :
                console.log("sorting by completed");
                setTodos([...todos].sort(sortByCompleted));
                break;
            case 'name' :
                console.log("sorting by name");
                setTodos([...todos].sort(sortByContent));
                console.log(todos);
                break;
            default:
                console.log("Not an option");
        }
    }

    function sortByContent(first, second) {
        const firstContent = first.content;
        const secondContent = second.content;

        let comparison = 0;

        comparison = (firstContent > secondContent) ? 1 : -1;
        return comparison;
    }

    function sortByDate(first, second) {
        const firstContent = first.dueDate;
        const secondContent = second.dueDate;

        let comparison = 0;

        comparison = (firstContent > secondContent) ? 1 : -1;
        return comparison;
    }

    function sortByCompleted(first, second) {
        const firstContent = first.isDone;
        const secondContent = second.isDone;

        let comparison = 0;

        comparison = (firstContent > secondContent) ? 1 : -1;
        return comparison;
    }

    function deleteAllDone() {
        console.log(111);
        setTodos([...todos].filter(todo => !todo.isDone));
    }


    return (
        <div className="App">
            <Header/>
            <TodoNewForm addTodo={addTodo}/>
            <TodoList
                todos={todos}
                removeTodo={removeTodo}
                markDone={markDone}
                startEditing={startEditing}
                editTodo={editTodo}
                sortBy={sortBy}
            />
            <TodoSortOptions deleteAllDone={deleteAllDone} sortBy={sortBy}/>
        </div>
    );
}

export default App;
