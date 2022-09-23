
import React, { useState } from 'react'
import TodoTemplate from './components/TodoTemplate';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import "./assets/css/style.scss"


function App() {

  // const todos = [
  const  [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 공부',
      done: false
    },
    {
      id: 2,
      text: '투두리스트 템플릿 작업',
      done: true
    },
    {
      id: 3,
      text: '목록 작업',
      done: true
    },
    {
      id: 4,
      text: '할 일 등록 작업',
      done: false
    },
    {
      id: 5,
      text: '삭제 작업',
      done: true
    },
    {
      id: 6,
      text: '수정 작업',
      done: false
    }
  ]);

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoTemplate>
        <TodoHeader />
        <TodoList todos={todos} onRemove={onRemove} />
        <TodoCreate />
      </TodoTemplate>
    </div>
  );
}

export default App;
