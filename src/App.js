import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import TodoInsert from "./components/TodoInsert";
import TodoItemList from "./components/TodoItemList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [index, setIndex] = useState(0);
  const [listFilter, setListfilter] = useState('all');

  let hasItem = todos.length > 0;

  const onInsert = (text) => {
      let todo = {
          id: index,
          text,
          completed: false,
      };
      setIndex(index+1);
      setTodos(todos.concat(todo));
  };

  const onCompleted = (id) => {
      setTodos(
          todos.map(todo =>
              todo.id === id? {...todo, completed : !todo.completed} : todo,
          )
      );
  };

  const onDelete = (id) => {
      setTodos(
          todos.filter(todo => todo.id !== id)
      );
  };

  const onRevised = (id, revisedText) => {
      setTodos(
          todos.map(todo =>
              todo.id === id? {...todo, text : revisedText} : todo,
          )
      );
  };

  const todoFilter = (cond) => {
      switch(cond) {
          case 'all':
              setListfilter('all')
              return;
          case 'active':
              setListfilter('active')
              return;
          case 'completed':
              setListfilter('completed')
              return;
          case 'clearCompleted':
              setTodos(todos.filter(todo => todo.completed === false));
              return;
          default:
              return;
      }
  }

  return (
      <TodoList>
          <TodoInsert onInsert={onInsert}/>
          {hasItem && <TodoItemList todos={todos}  onCompleted={onCompleted} onDelete={onDelete} onRevised={onRevised} listFilter={listFilter}/>}
          {hasItem && <TodoFilter todos={todos} todoFilter={todoFilter}/>}
      </TodoList>
  )
};

export default App;
