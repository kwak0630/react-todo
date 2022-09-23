
import React, { useState, useCallback } from 'react'
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
    }
  ]);
  const nextId = useRef(4);
  const onCreate = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        done: false,
      };
      setTodos(todos.concat(todo)); //concat(): 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열 반환
      nextId.current++; //nextId 1씩 더하기
    },
    [todos],
  );
  return (
    <div>
      <TodoTemplate>
        <TodoHeader />
        <TodoList todos={todos} />
        <TodoCreate />
      </TodoTemplate>
    </div>
  );
}

export default App;
