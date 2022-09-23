import React from 'react';
import styled, {css} from 'styled-components';

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 15px;
`;
const Check = styled.div`
    width: 17px;
    height: 17px;
    margin-right: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 10px 10px 12px 4px rgba(0,0,0,0.4)
    ${props =>
    props.done &&
    css`
      background: #ffe281;
      border-color: #ffe281;
    `}
    
`;

const Text = styled.div`
    position: relative;
    font-size: 15px;
    ${props =>
    props.done &&
    css`
      color: #929292;
    `}
    
`;

function TodoItem({todo}){
    const { text, done } = todo;
    return (
        <TodoItemBlock>
            <Check done={done}></Check>
            {/* <div className="check" done={done}>
                {done ? '✅' : '🟩'}
            </div> */}
            <Text done={done}>
                {text}
            </Text>
            {/* <LineWrap done={done}>{done && <Line />}</LineWrap> */}
            {/* <Check done={done}></Check>
            <Text done={done}>
                {text}
                {done && <Line done={done}/>}
            </Text> */}
            {/* {text} */}
        </TodoItemBlock>
    )
}

export default TodoItem;