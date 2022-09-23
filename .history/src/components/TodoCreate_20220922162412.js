import React from 'react';
import styled from 'styled-components';

const TodoCreateBlock = styled.div`
    position: absolute;
    bottom: 30px;
    right: 30px;
`;
const CreateBox = styled.div`
    .input-text{
        height: 45px;
        padding: 0 10px;
        border:1px solid #ddd;
    }
    .btn-type{
        width: 60px;
        height: 45px;
        border: none;
        border-radius: 5px;
        background: #ffe281;
    }
`;

const CreateBtn = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
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
        margin: -1px 0 0 -10px;
        background: #000;
    }
    &:after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2px;
        height: 20px;
        margin: -10px 0 0 -1px;
        background: #000;
    }
`;

function TodoCreate(){

    return (
        <TodoCreateBlock>
            <CreateBox>
                <input
                    type="text"
                    className="input-text" 
                    placeholder='할 일을 입력하세요.'
                />
                <button type="submit" className='btn-type'>추가</button>
            </CreateBox>
            {/* <CreateBtn>
                추가
            </CreateBtn> */}
        </TodoCreateBlock>
    )
}

export default TodoCreate;