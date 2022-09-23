import React from 'react';
import styled, {css} from 'styled-components';

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 10px;
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
            {done && <Check />}
            <Text done={done}>{text}</Text>
        </TodoItemBlock>
    )
}

export default TodoItem;