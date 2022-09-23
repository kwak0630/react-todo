import React from 'react';
import styled from 'styled-components';

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    
    margin-bottom: 10px;
`;
const Text = styled.div`
    
`;

function TodoItem({text}){
    return (
        <TodoItemBlock>
            <Text>{text}</Text>
        </TodoItemBlock>
    )
}

export default TodoItem;