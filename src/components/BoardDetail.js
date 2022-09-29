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
    h2{
        padding: 0 20px 20px;
        border-bottom:1px solid #ddd;
        font-size: 21px;
        font-family: Nunito, sans-serif;
        font-weight: 900;
    }
    .detail-wrap{
        .content{
            padding:40px 20px;
            font-size: 14px;
            color:#444;
        }
    }

`;

function BoardDetail (){
    const location = useLocation();
    const item = location.state.item;
    const {title, content} = item;
    // console.log(location)

    const navigate = useNavigate();

    return (
        <TodoTemplateBlock>
            <BoardDetailBlock>
                <div className="detail-wrap">
                    <h2>{title}</h2>
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