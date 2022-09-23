import React from 'react';
import styled from 'styled-components';

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 10px;
`;
const Text = styled.div`
    
`;

function TodoItem({id, text}){
    return (
        <TodoItemBlock>
            <Text>{text}</Text>
            <button onClick={() => onRemove(id)}>{text}</button>
        </TodoItemBlock>
    )
}

export default TodoItem;