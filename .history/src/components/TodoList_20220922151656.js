import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    padding:40px 0 0;
    
`;

function TodoList(){
    return (
        <TodoListBlock>
            <TodoItem text="React 공부" />
        </TodoListBlock>
    )
}

export default TodoList;