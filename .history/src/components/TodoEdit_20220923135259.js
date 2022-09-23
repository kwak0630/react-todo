import React from 'react';
import styled from 'styled-components';

const TodoEditBlock = styled.div`
    position: relative;
    form{
        display: flex;
        align-items: center;
    }
    .input-text{
        width: 170px;
        height: 45px;
        padding: 0 10px;
        border:1px solid #ddd;
        border-radius: 5px;
    }
    .btn-type{
        width: 60px;
        height: 45px;
        margin-left: 10px;
        border: none;
        border-radius: 5px;
        background: #ffe281;
        font-weight: 700;
    }
`;

function TodoEdit (){
    return (
        <TodoEditBlock>
            <h2>수정하기</h2>
            <form>
                    <input
                        type="text"
                        className="input-text" 
                        placeholder='할 일을 입력하세요.'
                    />
                    <button 
                        type="submit" 
                        className='btn-type'
                    >
                        추가
                    </button>
            </form>
        </TodoEditBlock>
    );
}

export default TodoEdit;