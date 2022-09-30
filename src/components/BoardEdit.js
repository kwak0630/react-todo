import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
`;

const BoardEditBlock = styled.div`
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;

    &:before{
        position:absolute;
        top:0;
        left:0;
        display: block;
        content: '';
        width: 100%;
        height: 100%;
        background:rgba(0,0,0,0.5);
        border-radius: 20px;
    }
    .detail-wrap{
        position: absolute;
        top: 50%;
        left: 50%;
        display: flex;
        flex-direction: column;
        width: 80%;
        padding:40px 20px 60px;
        background: #fff;
        border-radius: 12px;
        transform: translate(-50%, -50%);
    }

    h2{
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 2px solid #ffe281;
        font-size: 16px;
        text-align: center;
    }

    form{
        // display: flex;
        // align-items: center;
        text-align: center;
    }
    .input-text{
        width: 100%;
        height: 45px;
        padding: 0 10px;
        border:1px solid #ddd;
        border-radius: 5px;
    }
    .btn-type{
        width: 120px;
        height: 45px;
        margin: 15px auto 0;
        border: none;
        border-radius: 5px;
        background: #ffe281;
        font-weight: 700;
    }
`;

function BoardEdit ({selectedBoard, onUpdate}){
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onChange = (e) =>{
        setTitle(e.target.value);
        setContent(e.target.value);
    }

    const onSubmit = (e) => {
        onUpdate(selectedBoard.id, title);
        onUpdate(selectedBoard.id, content);
        setTitle("");// submit을 한 후에는 input 창을 비우기
        setContent("");// submit을 한 후에는 input 창을 비우기

        e.preventDefault(); // onSubmit 이벤트는 브라우저를 새로고치기 때문에 막아주기
    };

    useEffect(() => {
        if (selectedBoard) {
            setTitle(selectedBoard.title);
            setContent(selectedBoard.content);
        }
    }, [selectedBoard]);

    console.log()
    return (
        <TodoTemplateBlock>
            <BoardEditBlock>
                <div className="detail-wrap">
                    <h2>📔 Board</h2>
                    <div className="content">
                        <form className='form-wrap'>
                            <div className='form-item'>
                                <input 
                                    type="text" 
                                    placeholder='Subject'
                                    name="title"
                                    value={title}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-item'>
                                <textarea 
                                    placeholder='Content'
                                    name="content"
                                    value={content}
                                    onChange={onChange}
                                ></textarea>
                            </div>
                            <div className='btn-wrap'>
                                <button 
                                    className='btn-type'
                                    onClick={onSubmit}
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </BoardEditBlock>
            <div className="fixed-bottom">
                <button onClick={() => navigate(-1)}>뒤로가기</button>
            </div>
        </TodoTemplateBlock>
    );
}

export default BoardEdit;