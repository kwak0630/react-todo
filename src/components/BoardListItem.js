import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const BoardListItemBlock = styled.div`
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
`;

function BoardList({boardItem, onDelete}){
    const {id, title, content} = boardItem;

    return (
        <BoardListItemBlock>
            {/* <Link to={{ pathname: './BoardDetail', state:{_id: id}}}>📔</Link> */}
            <Link to={`../components/BoardDetail/${id}`} state={{item: boardItem}}>
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
                        <button 
                            onClick={() => {
                                //console.log(id)
                                if (window.confirm(`삭제하시겠습니까?`)) {
                                    onDelete(id);
                                }
                              }}
                        >
                            <img className="btn-delete" src={require('../assets/images/ico_delete.png')} alt="delete icon" />
                        </button>
        </BoardListItemBlock>
    )
}

export default BoardList;