
import React from 'react'
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import "./assets/css/style.scss"
// import "./index.css"

function App() {
  return (
    <div>
      
      <TodoTemplate>
        TODO LIST
      </TodoTemplate>
    </div>
  );
}

export default App;
