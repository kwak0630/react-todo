import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
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

const BoardCreateBlock = styled.div`
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
            .btn-wrap{
                margin-top: 35px;
            }
        }
    }

`;

function BoardCreate (){
    const navigate = useNavigate();

    const [createTitle, setCreateTitle] = useState ();
    const [createContent, setCreateContent] = useState ();
    const onChangeTitle = (e) => {
        const {name, value} = e.target;

        setCreateTitle({
            ...createTitle,
            [name]: value
        })
        console.log(createTitle)
    } 
    const onChangeContent = (e) => {
        const {name, value} = e.target;

        setCreateContent({
            ...createContent,
            [name]: value
        })
        // console.log(createContent)
    }

    const onSave = () => {
        const boardTitle = {name: createTitle};
        const boardContent = {name: createContent};
        window.localStorage.setItem("board title", JSON.stringify(boardTitle))
        window.localStorage.setItem("board scontent", JSON.stringify(boardContent))
    }

    return (
        <TodoTemplateBlock>
            <BoardCreateBlock>
                <div className="detail-wrap">
            <h2>📔 Board</h2>
                    <div className="content">
                        <form className='form-wrap'>
                            <div className='form-item'>
                                <input 
                                    type="text" 
                                    placeholder='Subject'
                                    name="title"
                                    onChange={onChangeTitle}
                                />
                            </div>
                            <div className='form-item'>
                                <textarea 
                                    placeholder='Content'
                                    name="content"
                                    onChange={onChangeContent}
                                ></textarea>
                            </div>
                            <div className='btn-wrap'>
                                <button className='btn-type' onClick={onSave}>
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </BoardCreateBlock>
            <div className="fixed-bottom">
                <button onClick={() => navigate(-1)}>뒤로가기</button>
            </div>
        </TodoTemplateBlock>
    );
}

export default BoardCreate;