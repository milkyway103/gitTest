import React from "react";
import './TodoFilter.css';

const TodoFilter = ({todos, todoFilter}) => {
    let hasCompletedItem = todos.filter(todo => todo.completed === true).length;

    const onClick = (e) => {
        todoFilter(e.target.name);
    }

    return (
        <div className="TodoFilter">
            <span>{todos.filter(todo => todo.completed === false).length} item left</span>
            <div className="filterButtons">
                <button name="all" type="button" onClick={onClick}>All</button>
                <button name="active" type="button" onClick={onClick}>Active</button>
                <button name="completed" type="button" onClick={onClick}>Completed</button>
            </div>
            {hasCompletedItem ? <button name="clearCompleted" type="button" onClick={onClick}>Clear completed</button> : null}
        </div>
    )
}

export default TodoFilter;