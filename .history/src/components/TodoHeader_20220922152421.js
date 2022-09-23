import React from 'react';
import styled from 'styled-components';
// import imgSally from './assets/images/ico_sally.png';

const TodoHeaderBlock = styled.div`
    padding:40px 0 0;
    text-align: center;
    h1{
        font-size: 25px;
    }
    .header-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid #ddd;
    }
`;

function TodoHeader(){
    return (
        <TodoHeaderBlock>
            <img src={ require('../assets/images/ico_sally.png') } />
            <h1>Sally TodoList</h1>
            <div className="header-box">
                <span className='day'>2022.09.22</span>
                <span className='date'>목요일</span>
            </div>
        </TodoHeaderBlock>
    )
}

export default TodoHeader;