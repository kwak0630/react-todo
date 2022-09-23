import React from 'react';
import styled from 'styled-components';

const TodoHeaderBlock = styled.div`
    padding:40px 0 0;
    text-align: center;
    h1{
        font-size: 25px;
    }
    .sally{
        width: 60px;
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
            <img className="sally" src={ require('../assets/images/ico_sally.png') } />

            <div className="header-box">
                <span className='day'>2022.09.22(목)</span>
                <span className='task'><em>2</em>남음</span>
            </div>
        </TodoHeaderBlock>
    )
}

export default TodoHeader;