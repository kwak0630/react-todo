import React from 'react';
import styled, {css} from 'styled-components';

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 15px;
    line-height: 0;
`;
const Check = styled.div`
    width: 17px;
    height: 17px;
    margin-right: 8px;
    border: 1px solid #ddd;
    border-radius: 100%;
    ${props =>
    props.done &&
    css`
      background: #ff9800;
      border-color: #ff9800;
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
            <Check done={done}></Check>
            <Text done={done}>{text}</Text>
        </TodoItemBlock>
    )
}

export default TodoItem;