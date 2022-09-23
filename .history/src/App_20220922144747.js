import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div className="App">
      
      <GlobalStyle />
      <TodoTemplate>ㅇㅏㄴ녀ㅇ</TodoTemplate>
    </div>
  );
}

export default App;
