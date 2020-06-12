import React from "react";
import Grid from "@material-ui/core/Grid";
import TodoEditForm from "../TodoEditForm";
import {Checkbox,Typography,IconButton} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit'
import CloseIcon from '@material-ui/icons/Close'

function Todo({
                  todo,
                  markDone,
                  removeTodo,
                  startEditing,
                  editTodo,
              }) {

    const TextStyle = {
        marginRight: 20,
        textDecoration: todo.isDone ? "line-through" : "none",
        padding: 10
    };

    const DateStyle = {
        fontSize: 13,
        marginTop: 5,
        marginRight: 20,
        textDecoration: todo.isDone ? "line-through" : "none",
        padding: 10,
    };

    const checkBoxStyle = {
        color: "#bb21cc",
    };

    function onCheckBoxClick() {
        markDone(todo.id);
    }

    function onRemove() {
        removeTodo(todo.id);
    }

    function onEdit() {
        startEditing(todo.id);
    }

    function getDueDate() {
        const dueDate = todo.dueDate;
        const index = dueDate.indexOf('T');
        let date = dueDate.substr(0, index).split('-').reverse().join('/');
        let time = dueDate.substr(index + 1);
        return (date + " at " + time);
    }

    return (<div>
        <div>
            <Grid container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center"
                  spacing={1}
                  style={todo.isDone ? {backgroundColor: "#eb5e9d", opacity: 0.3} : {backgroundColor: "transparent"}}>
                <Grid item xs={4}>
                    <Grid container justify="center">
                        <Checkbox
                            style={checkBoxStyle}
                            checked={todo.isDone}
                            onClick={onCheckBoxClick}/>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container justify="center">
                        <Typography
                            className="Content"
                            variant="body1"
                            style={TextStyle}>{todo.content}
                        </Typography>
                        <Typography
                            className="Date"
                            variant="body1"
                            style={DateStyle}>Due: {getDueDate()}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container justify="center">
                        <IconButton
                            onClick={() => onEdit()}>
                            <EditIcon style={{color: "#bb21cc"}}/>
                        </IconButton>
                        <IconButton onClick={onRemove}>
                            <CloseIcon style={{color: "#bb21cc"}}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center"
                  style={todo.editMode ? {} : {display: 'none'}}>
                <TodoEditForm prevTodo={todo} editTodo={editTodo}/>
            </Grid>
        </div>
    </div>);
}

export default Todo;
