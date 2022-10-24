import React,{ useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import BoardListItem from './BoardListItem';
import BoardPagination from './BoardPagination';

import styled from 'styled-components';

const BoardListBlock = styled.div`
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

function BoardList({boardItems, onDelete}){

  const [setSelectedBoard] = useState(null);
  
  const onSelectedBoard = (boardItem) => {
    setSelectedBoard(boardItem);
  };

  const navigate = useNavigate();

  // 페이징
  const [limit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <div>
      <BoardListBlock>
          <div className="board-list">
            {boardItems.slice(offset, offset + limit).map((boardItem) =>
                <BoardListItem 
                  boardItem={boardItem} 
                  boardItems={boardItems} 
                  key={boardItem.id} 
                  onSelectedBoard={onSelectedBoard}
                  onDelete={onDelete}
                />
            )}
            
            <BoardPagination 
              total={boardItems.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </div>
      </BoardListBlock>
      <div className="fixed-bottom">
          <button onClick={() => navigate(-1)}>뒤로가기</button>
      </div>
      <Link to={`../components/BoardCreate`}>
        <CreateBtn/>
      </Link>
    </div>
  )
}

export default BoardList;