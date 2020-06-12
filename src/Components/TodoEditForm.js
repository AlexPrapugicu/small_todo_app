import React, {useState} from 'react'
import "./TodoComponent/Todo.css";

import {TextField, Button} from "@material-ui/core";

function TodoEditForm({prevTodo, editTodo}) {
    const [todo, setTodo] = useState({
        id: prevTodo.id,
        content: prevTodo.content,
        isDone: prevTodo.isDone,
        dueDate: prevTodo.dueDate,
        editMode: prevTodo.editMode,
    });



    function inputHandler(event) {
        setTodo({...todo, content: event.target.value});
    }

    function dateHandler(event) {
        setTodo({...todo, dueDate: event.target.value});
    }


    function onSubmitHandler(event) {
        event.preventDefault();
        if (todo.content.trim()) {
            editTodo({...todo, id: prevTodo.id});
        }
    }

    return (
        <div className="FormWrapper">
            <form className="todo-form" onSubmit={onSubmitHandler}>
                <label style={{margin:10}}>To Do</label>
                <TextField
                    name="content"
                    type="text"
                    value={todo.content}
                    onChange={inputHandler}
                />
                <label style={{margin:10}}>Date</label>
                <TextField
                    name="dueDate"
                    type="datetime-local"
                    style={{ marginRight: 10}}
                    value={todo.dueDate}
                    onChange={dateHandler}
                />
                <Button type="submit">Edit Task</Button>
            </form>
        </div>
    )
}

export default TodoEditForm;
