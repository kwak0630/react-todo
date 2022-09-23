import React from 'react';
import styled from 'styled-components';

const TodoEditBlock = styled.div`
    position: relative;
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
                        value={value}
                        onChange={onChange}
                        ref={ref}
                    />
                    <button 
                        type="submit" 
                        className='btn-type'
                        onClick={onSubmit}
                        onKeyPress={onKeyPress}
                    >
                        추가
                    </button>
            </form>
        </TodoEditBlock>
    );
}

export default TodoEdit;