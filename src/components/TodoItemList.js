import React from "react";
import TodoItem from "./TodoItem";

const TodoItemList = ({todos, onCompleted, onDelete, listFilter, onRevised}) => {
    let todoItems;
    switch (listFilter) {
        case 'completed':
            todoItems = todos.filter(todo => todo.completed === true)
                .map(todo => (<TodoItem todo={todo} key={todo.id} onCompleted={onCompleted} onDelete={onDelete} onRevised={onRevised}/>));
            break;
        case 'active':
            todoItems = todos.filter(todo => todo.completed === false)
                .map(todo => (<TodoItem todo={todo} key={todo.id} onCompleted={onCompleted} onDelete={onDelete}  onRevised={onRevised}/>));
            break;
        case 'all':
        default:
            todoItems = todos.map(todo => (<TodoItem todo={todo} key={todo.id} onCompleted={onCompleted} onDelete={onDelete} onRevised={onRevised}/>));
            break;
    }
    return (
        <div className="TodoItemList">
            {todoItems}
        </div>
    );
}

export default TodoItemList;