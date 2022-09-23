
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';

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
        
      </TodoTemplate>
    </div>
  );
}

export default App;
