import React from 'react';
import styled from 'styled-components';

const TodoListBlock = styled.div`
    padding:40px 0 0;
    
`;

function TodoList(){
    return (
        <TodoListBlock>
            <h1>Sally TodoList</h1>
            <div className="header-box">
                <span className='day'>2022.09.22</span>
                <span className='date'>목요일</span>
            </div>
        </TodoListBlock>
    )
}

export default TodoList;