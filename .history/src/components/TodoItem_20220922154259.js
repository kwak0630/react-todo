import React from 'react';
import styled, {css} from 'styled-components';

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 10px;
`;
const Check = styled.div`
    width: 15px;
    height: 15px;
    border: 1px solid #ddd;
    border-radius: 100%;
    ${props =>
    props.done &&
    css`
      color: #929292;
    `}
    
`;

const Text = styled.div`
    ${props =>
    props.done &&
    css`
      color: #929292;
    `}
    
`;

function TodoItem({text, done}){
    return (
        <TodoItemBlock>
            {/* <LineWrap done={done}>{done && <Line />}</LineWrap> */}
            <Check>{done && <Done />}</Check>
            <Text done={done}>{text}</Text>
        </TodoItemBlock>
    )
}

export default TodoItem;