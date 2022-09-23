
import React from 'react'
import TodoTemplate from './components/TodoTemplate';
import "./assets/css/style.scss"
import TodoHeader from './components/TodoHeader';
// import "./index.css"

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
