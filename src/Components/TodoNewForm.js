import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {v4 as uuidv4} from 'uuid';

function TodoNewForm({addTodo}) {

    const [todo, setTodo] = useState({
        id: "",
        content: "",
        isDone: false,
        editMode: false,
        dueDate: ""
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
            addTodo({...todo, id: uuidv4()});
            setTodo({...todo, content: ""});
        }
    }

    return(
        <div className="FormWrapper">
            <form className="todo-form" onSubmit={onSubmitHandler} style={{float:'center',display:'block'}}>
                <label style={{margin:10}}>To Do</label>
                <TextField
                    required="true"
                    style={{marginRight: 10}}
                    name="content"
                    type="text"
                    value={todo.content}
                    onChange={inputHandler}
                />
                <label style={{margin:10}}>Date</label>
                <TextField
                    style={{ marginRight: 10}}
                    name="dueDate"
                    type="datetime-local"
                    value={todo.dueDate}
                    onChange={dateHandler}
                />
                <Button type="submit">Add Todo</Button>
            </form>
        </div>);
}

export default TodoNewForm;
