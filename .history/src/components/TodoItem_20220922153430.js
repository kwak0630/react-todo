import React from 'react';
import styled from 'styled-components';

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 10px;
`;
const Line = styled.div`
    
`;
const Text = styled.div`
    
`;

function TodoItem({text, done}){
    return (
        <TodoItemBlock>
            <Line done={done}></Line>
            <Text>{text}</Text>
        </TodoItemBlock>
    )
}

export default TodoItem;