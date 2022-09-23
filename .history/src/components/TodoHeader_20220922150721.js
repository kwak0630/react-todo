import React from 'react';
import styled from 'styled-components';

const TodoHeaderBlock = styled.div`
    text-align: center;
    h1{
        font-size: 25px;
    }
    .header-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
    }
`;

function TodoHeader(){
    return (
        <TodoHeaderBlock>
            <h1>Sally TodoList</h1>
            <div className="header-box">
                <span className='day'>2022.09.22</span>
                <span className='date'>목요일</span>
            </div>
        </TodoHeaderBlock>
    )
}

export default TodoHeader;