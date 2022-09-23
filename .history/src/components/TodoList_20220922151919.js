import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    padding:40px 20px 0;
    
`;

function TodoList(){
    return (
        <TodoListBlock>
            <TodoItem text="React 공부" />
            <TodoItem text="TodoList Template" />
            <TodoItem text="TodoList header" />
            <TodoItem text="TodoList List" />
        </TodoListBlock>
    )
}

export default TodoList;