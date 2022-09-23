import React from 'react';
import styled from 'styled-components';

const TodoHeaderBlock = styled.div`
    text-align: center;
    .header-box{
        display: flex;
        flex-
    }
`;

function TodoHeader(){
    return (
        <TodoHeaderBlock>
            <h1>Sally TodoList</h1>
            <div className="header-box">
                <span className='day'>목요일</span>
            </div>
        </TodoHeaderBlock>
    )
}

export default TodoHeader;