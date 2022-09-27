import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    padding:40px 20px 0;
`;

function TodoList({todos, onCheck, onRemove, onChangeSelectedTodo, onInsertToggle, categories, navState}){

    const currentCategory = categories.filter(category => category.active === true);

    let _todos = todos.filter(todo => !todo.done);
    // const todoIncomplete  = _todos.filter(todo => todo.done === false);
    // const todoComplete = _todos = todos.filter(todo => todo.done === true);


    // let _todos = todos;

    if (currentCategory === 'incomplete') {
        // _todos = todos.filter(todo => todo.done === false);
    } else if (currentCategory === 'complete') {
        // _todos = todos.filter(todo => todo.done === true);
    }
    
    // console.log(currentCategory)
    // console.log(todoIncomplete)
    // console.log(todoComplete)
    
    return (
        <TodoListBlock>
            {_todos.map((todo) =>
                <TodoItem 
                    todo={todo}
                    key={todo.id}
                    onCheck={onCheck}
                    onRemove={onRemove}
                    onChangeSelectedTodo={onChangeSelectedTodo}
                    onInsertToggle={onInsertToggle}
                />
            )}
            {/* <TodoItem text="React 공부" />
            <TodoItem text="TodoList Template" done={true} /> */}
        </TodoListBlock>
    )
}

export default TodoList;