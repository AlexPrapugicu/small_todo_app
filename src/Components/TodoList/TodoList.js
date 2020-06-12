import React from "react";
import List from "@material-ui/core/List";
import Todo from "../TodoComponent/Todo";

function TodoList(
    {
        todos,
        markDone,
        removeTodo,
        startEditing,
        editTodo,
    }) {

    return (
        <div className="ListWrapper">
            <List
                className="TodoList">
                {todos.map(todo =>
                    <Todo key={todo.id}
                          todo={todo}
                          markDone={markDone}
                          removeTodo={removeTodo}
                          startEditing={startEditing}
                          editTodo={editTodo}
                    />
                )}
            </List>
        </div>
    );
}

export default TodoList;
