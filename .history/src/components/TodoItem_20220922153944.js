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
      color: #ced4da;
    `}
    
`;

function TodoItem({text, done}){
    return (
        <TodoItemBlock>
            {/* <LineWrap done={done}>{done && <Line />}</LineWrap> */}
            <Text done={done}>{text}</Text>
        </TodoItemBlock>
    )
}

export default TodoItem;