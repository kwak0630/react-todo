import React from 'react';
import styled from 'styled-components';

const TodoHeaderBlock = styled.div`
    position: relative;
    padding:40px 0 0;
    text-align: center;
    h1{
        font-size: 25px;
    }
    .sally{
        width: 60px;
        position: absolute;
        top: -50px;
        left: 50%;
        transform: translate(0, -50%);
    }
    .header-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid #ddd;
        .task{
            display: flex;
            justify-content: space-between;
            align-items: center;
            em{
                padding-right: 5px;
                font-size: 18px;
                font-weight: 700;
                color: #ff9800;
            }
        }
    }
`;

function TodoHeader(){
    // 날짜
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'short' }); // long or short (금요일 or 금)

    return (
        <TodoHeaderBlock>
            <img className="sally" src={require('../assets/images/ico_sally.png')} alt="sally icon" />
            <div className="header-box">
                <span className='day'>{dateString}({dayName})</span>
                <span className='task'><em>2</em>남음</span>
            </div>
        </TodoHeaderBlock>
    )
}

export default TodoHeader;