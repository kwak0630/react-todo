import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 400px;
    height: 768px;
    margin: 100px auto 0;

    background: white;
    border-radius: 20px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

function TodoTemplate({children}){
    return (
        <TodoTemplateBlock>
            {children}
        </TodoTemplateBlock>
    )
}

export default TodoTemplate;