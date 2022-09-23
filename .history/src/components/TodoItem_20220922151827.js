import React from 'react';
import styled from 'styled-components';

const TodoItemBlock = styled.div`
    
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