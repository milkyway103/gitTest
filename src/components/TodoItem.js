import React, {useState, useRef, useEffect} from "react";
import './TodoItem.css';

const TodoItem = ({todo, onCompleted, onDelete, onRevised}) => {
    const inputElement = useRef(null);
    const {id, text, completed} = todo;
    const [canEdit, setCanEdit] = useState(false);
    const handleSubmit = (e) => {
        onRevised(id, e.target.value);
    }
    const onDoubleClick = () => {
        setCanEdit(true);
    }
    const onBlur = (e) => {
        onRevised(id, e.target.innerText);
        setCanEdit(false);
    }
    useEffect(() => {
        if (canEdit) {
            inputElement.current.focus();
        }
    }, [inputElement.current]);
    return (
        <form className="TodoItem" onSubmit={handleSubmit}>
            <input type="checkbox" name={id} value={text} onClick={() => onCompleted(id)} ref={inputElement}/>
            <label htmlFor={id} contentEditable={canEdit} onDoubleClick={onDoubleClick} onBlur={onBlur}>{text}</label>
            <button type="button" onClick={() => onDelete(id)}>x</button>
        </form>
    )
};

export default TodoItem;