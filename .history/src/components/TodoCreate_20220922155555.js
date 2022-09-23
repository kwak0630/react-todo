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
    border-raduis: 100%;
    background:#000;
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