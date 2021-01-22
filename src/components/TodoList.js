import React from "react";
import './TodoList.css';

const TodoList = ({children}) => {
    return (
        <div className="TodoList">
            <h1>todos</h1>
            <div>{children}</div>
        </div>
    )
}

export default TodoList;