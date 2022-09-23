import React from 'react';
import styled, {css} from 'styled-components';

const TodoItemBlock = styled.div`
    position: relative;
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
    // box-shadow: 1px 0 8px 2px rgba(0,0,0,0.05);
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
    // font-family: 'NanumSquareRound';
    ${props =>
    props.done &&
    css`
      color: #929292;
    `}
    
`;
const Delete = styled.div`
    position: absolute;
    top: 50%;
    right: 10px;
    font-size: 0;
    transform: translate(-50%, 0%);
    &:before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 13px;
        height: 1px;
        background: #999;
        transform: translate(-50%, -50%) rotate(45deg);
        transition: 0.125s all ease-in;
    }
    &:after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1px;
        height: 13px;
        background: #999;
        transform: translate(-50%, -50%) rotate(45deg);
        transition: 0.125s all ease-in;
    }
    &:hover {
        &:before, &:after{
            background: #000;
        }
      }
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
            <Delete>
                <i className="ico-del">지우기</i>
            </Delete>
        </TodoItemBlock>
    )
}

export default TodoItem;