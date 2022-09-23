import React from 'react';
import styled, {css} from 'styled-components';

const Check = styled.div`
    width: 23px;
    height: 23px;
    margin-right: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
    // box-shadow: 1px 0 8px 2px rgba(0,0,0,0.05);
    transition: 0.125s all ease-in;
    ${props =>
    props.done &&
    css`
      background: #ffe281;
      border-color: #ffe281;
    `}
    
`;

const Text = styled.div`
    position: relative;
    font-size: 17px; 
    // font-family: 'NanumSquareRound';
    transition: 0.125s all ease-in;
    ${props =>
    props.done &&
    css`
      color: #929292;
    `}
    
`;
const Remove = styled.div`
    position: absolute;
    top: 12%;
    right: 0px;
    width: 20px;
    height: 20px;
    font-size: 0;
    opacity: 0;
    transition: 0.125s all ease-in;
    &:before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 1px;
        background: #000;
        transform: translate(-50%, -50%) rotate(45deg);
    }
    &:after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1px;
        height: 20px;
        background: #000;
        transform: translate(-50%, -50%) rotate(45deg);
    }
    ${props =>
    props.done &&
    css`
      color: #929292;
    `}
    
`;

const TodoItemBlock = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    margin-bottom: 15px;
    &:hover {
        ${Remove} {
            cursor: pointer;
            opacity: 1;
        }
    }
`;

function TodoItem({todo, onCheck, onRemove, onChangeSelectedTodo, onInsertToggle}){
    const {id, text, done } = todo;
    return (
        <TodoItemBlock>
            <Check done={done} onClick={() => onCheck(id)}></Check>
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
            <div className="edit" onClick={() =>
                {onChangeSelectedTodo(todo)
                onInsertToggle();
                }
                }>
                    수정
            </div>
            <Remove onClick={() => onRemove(id)}>
                삭제
            </Remove>
        </TodoItemBlock>
    )
}

export default TodoItem;