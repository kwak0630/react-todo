import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div className="App">
      
      <GlobalStyle />
      Hi~
    </div>
  );
}

export default App;
