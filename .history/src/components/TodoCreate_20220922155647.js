import React from 'react';
import styled, {css} from 'styled-components';

const TodoCreateBlock = styled.div`
    position: absolute;
    bottom: 50px;
    right: 20px;
`;
const CreateBtn = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: #ffe281;
    &:before{
        width:30px;
        height: 3px;
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