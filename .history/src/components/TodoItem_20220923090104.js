import React from 'react';
import styled, {css} from 'styled-components';

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 15px;

    .check{
        margin-right: 5px;
        span{
            width: 17px;
            height: 17px;
            background: #ffe281;
            ${props =>
            props.done &&
            css`
                background: #ffe281;
                border-color: #ffe281;
            `}
        }
    }
`;
const CheckBox = styled.div`
    width: 17px;
    height: 17px;
    border-color: #ffe281;
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
            {/* <Check done={done}>✅</Check> */}
            <div className="check" done={done}>
                {done ? <CheckBox /> : '🟩'}
            </div>
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