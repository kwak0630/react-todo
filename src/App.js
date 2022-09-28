
import React, { useState, useRef } from 'react'
import TodoTemplate from './components/TodoTemplate';
import TodoNotice from './components/TodoNotice';
import TodoHeader from './components/TodoHeader';
import TodoTab from './components/TodoTab';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import TodoEdit from './components/TodoEdit';
import "./assets/css/style.scss"


function App() {

  // 카테고리
  const [categories, setCategories] = useState([
    { 
      id: 'all', 
      active: true 
    },
    { 
      id: 'complete', 
      active: false 
    },
    { 
      id: 'incomplete', 
      active: false 
    },
  ]);
  // 할 일
  const [todos, setTodos] = useState([
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
      done: true
    },
    {
      id: 5,
      text: '할일 수정 작업',
      done: true
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
      text: '미 완료 카운트 작업',
      done: true
    },
    {
      id: 9,
      text: '오늘 날짜 작업',
      done: true
    },
    {
      id: 10,
      text: '카테고리 탭 나누기',
      done: true
    },
    {
      id: 11,
      text: 'swiper 연습',
      done: true
    },
    // {
    //   id: 12,
    //   text: 'swiper 연습',
    //   done: true
    // },
    // {
    //   id: 13,
    //   text: 'swiper 연습',
    //   done: true
    // }
  ]);

  // 할 일 추가
  const nextId = useRef(0);
  const onSubmit = (text) => {
    const todo = {
      id: nextId.current,
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
    nextId.current ++; // 1씩 더하기 ?????? 근데 왜 오류 나지?????
  };

  // 할 일 삭제
  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 할 일 체크
  const onCheck = (id) => {
    setTodos(
      todos.map((todo) => {
      return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
  };

  // 할 일 수정
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle((prev) => !prev);
  };
  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };
  const onUpdate = (id, text) => {
    onInsertToggle();
    
    // console.log(id);
    // console.log(text);
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  // 탭 클릭 (카테고리 변경)
  const onChangeCategory = (id) => {
    setCategories(
      categories.map((category) => {
        return category.id === id ? { ...category, active: true } : { ...category, active: false}
      })
    );
    // console.log(id)
  }

  return (
    <div>
      <TodoTemplate>
        <TodoNotice />
        <TodoHeader todos={todos} />
        <TodoTab 
            categories={categories} 
            onChangeCategory={onChangeCategory}
        />
        <TodoList 
            categories={categories} 
            todos={todos} 
            onRemove={onRemove} 
            onCheck={onCheck}
            onInsertToggle={onInsertToggle} 
            onChangeSelectedTodo={onChangeSelectedTodo}
        /> 
        <TodoCreate onSubmit={onSubmit} />

        {insertToggle && (
          <TodoEdit onUpdate={onUpdate} selectedTodo={selectedTodo} />
        )}
      </TodoTemplate>
    </div>
  );
}

export default App;