import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
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

const BoardDetailBlock = styled.div`
    padding:40px 0 80px;
    .detail-wrap{
        h2{
            padding: 0 20px 20px;
            border-bottom:1px solid #ddd;
            font-size: 21px;
            font-family: Nunito, sans-serif;
            font-weight: 900;
        }
        .btn-box{
            position:absolute;
            top:43px;
            right:20px;
            display:flex;
            align-items:center;
            .btn-delete{
                width: 20px;
            }
            .btn-write{
                width: 22px;
                margin-right:5px;
            }
        }
        .content{
            padding:40px 20px;
            font-size: 14px;
            color:#444;
        }
    }

`;

function BoardDetail ({onDelete}){
    const location = useLocation();
    const item = location.state.item;
    const {id, title, content} = item;
    // console.log(location)

    const navigate = useNavigate();
    
    return (
        <TodoTemplateBlock>
            <BoardDetailBlock>
                <div className="detail-wrap">
                    <h2>{title}</h2>
                    <div className="btn-box">
                        <button
                        >
                            <img className="btn-write" src={require('../assets/images/ico_write.png')} alt="write icon" />
                        </button>
                        <button 
                            onClick={() => {
                                if (window.confirm(`삭제하시겠습니까?`)) {
                                    onDelete(id);
                                }
                              }}
                        >
                            <img className="btn-delete" src={require('../assets/images/ico_delete.png')} alt="delete icon" />
                        </button>
                        {/* <button onClick={() => onDelete(id)}><img className="btn-delete" src={require('../assets/images/ico_delete.png')} alt="delete icon" /></button> */}

                    </div>
                    <div className="content">
                        {/* {content} */}
                        {content.split("<br/>").map((line, index) => { //this.props.data.content: 내용
                            return (
                            <p key={index}>
                                {line}
                                <br />
                            </p>
                            );
                        })}
                    </div>
                </div>
            </BoardDetailBlock>

            <div className="fixed-bottom">
                <button onClick={() => navigate(-1)}>뒤로가기</button>
            </div>
        </TodoTemplateBlock>
    );
}

export default BoardDetail;