import React from 'react';
import TodoList from "./TodoList";

const TodoListItem = ({ todo }) => (
    <div className="todo-item-container">
        <h3>{ todo.text }</h3>
        <div className="buttons-container">
            <button className="completed-button">Mark as Completed</buVtton>
            <button className="remove-button">Remove</button>
        </div>
    </div>
);

export default TodoListItem;