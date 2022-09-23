import React from 'react';
import styled from 'styled-components';

const TodoItemBlock = styled.div`
    display: block;
`;

function TodoItem({text}){
    return (
        <TodoItemBlock>
            <Text>{text}</Text>
        </TodoItemBlock>
    )
}

export default TodoItem;