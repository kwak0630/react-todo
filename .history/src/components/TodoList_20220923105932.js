import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    padding:40px 20px 0;
    
`;

function TodoList({todos, onCheck, onRemove}){
    return (
        <TodoListBlock>
            {todos.map((todo) =>
                <TodoItem 
                    todo={todo}
                    key={todo.id}
                    onCheck={onCheck}
                    onRemove={onRemove}
                />
            )}
            {/* <TodoItem text="React 공부" />
            <TodoItem text="TodoList Template" done={true} /> */}
        </TodoListBlock>
    )
}

export default TodoList;