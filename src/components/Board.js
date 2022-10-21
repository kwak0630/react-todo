
import React from 'react'
import TodoTemplate from './TodoTemplate';
import BoardList from './BoardList';
import "../assets/css/style.scss"


function Board() {

  return (
    <div>
      <TodoTemplate>
        <BoardList 
        
        /> 
      </TodoTemplate>
    </div>
  );
}

export default Board;