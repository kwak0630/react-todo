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
            <TodoItem text="TodoList Template" done/>
            <TodoItem text="TodoList header" />
            <TodoItem text="TodoList List" />
            <TodoItem text="TodoList Add" />
            <TodoItem text="TodoList Delete" />
            <TodoItem text="TodoList Update" />
        </TodoListBlock>
    )
}

export default TodoList;