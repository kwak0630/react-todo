import React from 'react';
import styled, {css} from 'styled-components';

const TodoCreateBlock = styled.div`
    position: absolute;
    bottom: 50px;
    right: 20px;
`;
const CreateBtn = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: #ffe281;
    &:before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 30px;
        height: 3px;
        margin: -1.5px 0 0 -15px;
        background: #fff;
    }
    &:after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 3px;
        height: 30px;
        margin: -15px 0 0 -1.5px;
        background: #fff;
    }
`;

function TodoCreate({text, done}){
    return (
        <TodoCreateBlock>
            <CreateBtn>
                추가
            </CreateBtn>
        </TodoCreateBlock>
    )
}

export default TodoCreate;