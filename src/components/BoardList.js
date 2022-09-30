import React,{ useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import BoardListItem from './BoardListItem';
import BoardPagination from './BoardPagination';

import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    position: relative;

    overflow: hidden;
    display: flex;
    flex-direction: column;

    width: 370px;
    height: 768px;
    margin: 100px auto 0;

    background: white;
    border-radius: 20px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

const BoardBlock = styled.div`
    padding:40px 0 100px;
    overflow-x:hidden;
    overflow-y:scroll;
    h2{
        padding: 0 20px 20px;
        border-bottom:1px solid #ddd;
        font-size: 21px;
        font-family: Nunito, sans-serif;
        font-weight: 900;
    }
    .board-list{
      padding:40px 20px 0;
    }
`;


const CreateBtn = styled.div`
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 55px;
    height: 55px;
    border-radius: 100%;
    background: #ffe281;
    font-size: 0;
    &:before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 2px;
        background: #000;
        transform: translate(-50%, -50%);
        transition: 0.125s all ease-in;
    }
    &:after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2px;
        height: 20px;
        background: #000;
        transform: translate(-50%, -50%);
        transition: 0.125s all ease-in;
    }
`;

function Board(){
  // const boardItem = [
  const [ boardItems, setBoardItems ] = useState([
    {
      id: 1,
      title: '게시판 만들기 완성 ✌🏻',
      content: 'router 이용해서 링크 연결하고 게시판 만들었다~~~'
    },
    {
      id: 2,
      title: '리액트란 .. 몰까 .. ',
      content: '이해할만 하면 또 어렵고 할만하면 어렵고 ^^'
    },
    {
      id: 3,
      title: '시간이 안 가는 이번 주',
      content: '왜 아직도 목요일 왜 아직도 목요일 왜 아직도 목요일 왜 아직도 목요일 왜 아직도 목요일 왜 아직도 목요일 왜 아직도 목요일 왜 아직도 목요일'
    },
    {
      id: 4,
      title: '해야할 것 ✅',
      content: '게시판 작성, 게시판 수정, 게시판 삭제 등등.. <br/>아마도 갤러리랑 일반 목록 나누기랑 이미지도 나오게 해야되지 않을까<br/><br/><br/> 할거 너무 많다.. <br/>머리 아프구만 😇'
    },
    {
      id: 5,
      title: 'test',
      content: 'test 중'
    },
    {
      id: 6,
      title: 'test',
      content: 'test 중'
    },
    {
      id: 7,
      title: 'test',
      content: 'test 중'
    },
    {
      id: 8,
      title: 'test',
      content: 'test 중'
    },
    {
      id: 9,
      title: 'test',
      content: 'test 중'
    },
    {
      id: 10,
      title: 'test',
      content: 'test 중'
    }
  ]);

  useEffect(() => {
    setBoardItems(boardItems);
  }, [ boardItems])


  const [setSelectedBoard] = useState(null);
  
  const onSelectedBoard = (boardItem) => {
    setSelectedBoard(boardItem);
  };

  const navigate = useNavigate();

  const [limit] = useState(6);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  // 삭제
  // const onDelete = (id) => {
  //   // setTodos(todos.filter((todo) => todo.id !== id));

  //   const deleteItem = boardItems.filter((boardItem) => boardItem.id !== id)
  //   setBoardItems(deleteItem);

  //   if (!window.confirm("삭제하시겠습니까?")) return
    
  // };

  return (
    <TodoTemplateBlock>
        <BoardBlock>
            <h2>📔 Board</h2>
            <div className="board-list">
              {boardItems.slice(offset, offset + limit).map((boardItem) =>
                  <BoardListItem 
                    boardItem={boardItem} 
                    boardItems={boardItems} 
                    key={boardItem.id} 
                    onSelectedBoard={onSelectedBoard}
                    // onDelete={onDelete}
                  />
                  
              )}
              {/* <button onClick={this.addList}>More</button> */}
              <BoardPagination 
                total={boardItems.length}
                limit={limit}
                page={page}
                setPage={setPage}
              />
            </div>
        </BoardBlock>
        <div className="fixed-bottom">
            <button onClick={() => navigate(-1)}>뒤로가기</button>
        </div>
        <Link to={`../components/BoardCreate`}>
          <CreateBtn/>
        </Link>
    </TodoTemplateBlock>
  )
}

export default Board;