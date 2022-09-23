
import React from 'react'
import TodoTemplate from './components/TodoTemplate';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import "./assets/css/style.scss"


const todos = [
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
]
function App() {
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
