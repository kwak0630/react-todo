import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const BoardListItemBlock = styled.div`
    position: relative;
    a{
        display: flex;
        margin-bottom: 18px;
        &:hover{
        }
    }
    span{
        width: 15px;
        &.num{
            width: 30px;
            text-align: center;
        }
    }
    .cont{
        width: calc(100% - 45px);
        padding: 0 10px 0 0;
        strong{
            display:block;
            margin-bottom: 3px;
            font-size: 16px;
        }
        span{
            font-size: 14px;
            color: #444;
        }
    }
    .btn-delete{
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        opacity: 0.2;
    }
`;

function BoardListItem({boardItems, boardItem}){
  const {id, title, content} = boardItem;
  // console.log(boardItems)

  return (
    <BoardListItemBlock>
      {/* <Link to={{ pathname: './BoardDetail', state:{_id: id}}}>📔</Link> */}
      <Link to={`../components/BoardDetail/${id}`} state={{item: boardItem, boardItems: boardItems}} >
        <span>📔</span>
        <span className="num">{id}</span>
        <div className="cont">
          <strong>{title}</strong>
          {/* <p>{content}</p> */}
          {content.split("<br/>").map((line, index) => { //this.props.data.content: 내용
            return (
            <span key={index}>
              {line}
            </span>
            );
          })}
        </div>
      </Link>
    </BoardListItemBlock>
  )
}

export default BoardListItem;