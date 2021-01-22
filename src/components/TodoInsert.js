import React, {useState} from "react";
import './TodoInsert.css';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');
    const onChange = (e) => {
        setValue(e.target.value);
    }
    const onSubmit = (e) => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    };
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <button name="checkAll">v</button>
            <input name="todoInsert" placeholder = "What needs to be done?" onChange={onChange} autoComplete="off"/>
        </form>
    );
};

export default TodoInsert;