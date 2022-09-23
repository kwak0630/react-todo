
import React from 'react'
import TodoTemplate from './components/TodoTemplate';
import TodoHeader from './components/TodoHeader';
import "./assets/css/style.scss"

function App() {
  return (
    <div>
      <TodoTemplate>
        <TodoHeader />
      </TodoTemplate>
    </div>
  );
}

export default App;
