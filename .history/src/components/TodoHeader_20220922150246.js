import React from 'react';
import styled from 'styled-components';

const TodoHeaderBlock = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 400px;
    height: 768px;
    margin: 100px auto 0;
    padding: 20px;
    
    background: white;
    border-radius: 20px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

function TodoHeader(){
    return (
        <TodoHeaderBlock>
            <h1>Sally TodoList</h1>
        </TodoHeaderBlock>
    )
}

export default TodoHeader;