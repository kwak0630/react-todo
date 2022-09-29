import React,{ useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import BoardListItem from './BoardListItem';

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
    padding:40px 0 80px;
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

  return (
    <TodoTemplateBlock>
        <BoardBlock>
            <h2>📔 Board</h2>
            <div className="board-list">
              {boardItems.map((boardItem) =>
                  <BoardListItem 
                    boardItem={boardItem} 
                    key={boardItem.id} 
                    onSelectedBoard={onSelectedBoard}
                  />
                  
              )}
              {/* <BoardDetail /> */}
            </div>
        </BoardBlock>
            <div className="fixed-bottom">
                <button onClick={() => navigate(-1)}>뒤로가기</button>
            </div>
    </TodoTemplateBlock>
  )
}

export default Board;