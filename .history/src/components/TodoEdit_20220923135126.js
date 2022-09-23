import React from 'react';
import styled from 'styled-components';

const TodoEditBlock = styled.div`
    position: relative;
`;

function TodoEdit (){
    return (
        <TodoEditBlock>
            수정
        </TodoEditBlock>
    );
}

export default TodoEdit;