import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Board from './components/Board';
import BoardDetail from './components/BoardDetail';
// import Users from './components/Users';
// import UsersDetail from './components/UsersDetail';
// import BoardEdit from './components/BoardEdit';
// import BoardCreate from './components/BoardCreate';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="components/Board" element={<Board />} />
        <Route path="components/BoardDetail/:id" element={<BoardDetail />}  />
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
