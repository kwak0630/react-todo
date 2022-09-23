import React from 'react';
import styled from 'styled-components';
import TodoItem from './components/TodoItem';

const TodoListBlock = styled.div`
    padding:40px 0 0;
    
`;

function TodoList(){
    return (
        <TodoListBlock>
            <TodoItem  />
        </TodoListBlock>
    )
}

export default TodoList;