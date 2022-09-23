import React from 'react';
import styled from 'styled-components';

const TodoItemBlock = styled.div`
    
`;

function TodoItem({id, text}){
    return (
        <TodoItemBlock>
            <p>{text}</p>
        </TodoItemBlock>
    )
}

export default TodoItem;