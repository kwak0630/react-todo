
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import "./assets/css/style.scss"
import "./index.css"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div>
      
      <GlobalStyle />
      <TodoTemplate>
        TODO LIST
      </TodoTemplate>
    </div>
  );
}

export default App;
