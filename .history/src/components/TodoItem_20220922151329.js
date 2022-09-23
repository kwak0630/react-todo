import React from 'react';
import styled from 'styled-components';

const TodoItemBlock = styled.div`
    
`;

function TodoItem({id, text}){
    return (
        <TodoItemBlock>
            <Text>{text}</Text>
        </TodoItemBlock>
    )
}

export default TodoItem;