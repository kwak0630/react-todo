
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
const [todos, setTodos] = useState([]);

const nextId = useRef(0);

const handleSubmit = (text) => {
  // setTodos([...todos, text]);
  const todo = {
    id: nextId.current,
    text,
    checked: false,
  };
  setTodos(todos.concat(todo));
  nextId.current += 1; // nextId를 1씩 더하기
};
function App() {
  return (
    <div>
      <TodoTemplate>
        <TodoHeader />
        <TodoList todos={todos} />
        <TodoCreate onSumit="onSubmit"/>
      </TodoTemplate>
    </div>
  );
}

export default App;
