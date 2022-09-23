import React from 'react';
import styled from 'styled-components';

const TodoItemBlock = styled.div`
    display: block;
`;

function TodoItem({text}){
    return (
        <TodoItemBlock>
            <p>{text}</p>
        </TodoItemBlock>
    )
}

export default TodoItem;