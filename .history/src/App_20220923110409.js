
import React, { useState, useRef } from 'react'
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
      text: '할일 수정 작업',
      done: false
    },
    {
      id: 6,
      text: '삭제 작업',
      done: true
    },
    {
      id: 7,
      text: '완료 체크 작업',
      done: true
    },
    {
      id: 8,
      text: '완료 체크 카운트 작업',
      done: false
    },
    {
      id: 9,
      text: '오늘 날짜 작업',
      done: true
    }
  ]);

  const nextId = useRef(0);

  const onsubmit = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1; // nextId를 1씩 더하기
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onCheck = (id) => {
    setTodos(
      todos.map((todo) => {
      return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
  };

  return (
    <div>
      <TodoTemplate>
        <TodoHeader />
        <TodoList todos={todos} onRemove={onRemove} onCheck={onCheck} />
        <TodoCreate onsubmit={onsubmit} />
      </TodoTemplate>
    </div>
  );
}

export default App;
