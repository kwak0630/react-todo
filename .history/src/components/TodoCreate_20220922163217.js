import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const TodoCreateBlock = styled.div`
    // width: 100%;
`;
const CreateBox = styled.div`

    position: absolute;
    bottom: 30px;
    right: 60px;
    display: flex;
    align-items: center;

    .input-text{
        width: 240px;
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

const CreateBtn = styled.div`
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: #ffe281;
    font-size: 0;
    &:before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 2px;
        background: #000;
        transform: translate(-50%, -50%);
    }
    &:after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2px;
        height: 20px;
        background: #000;
        transform: translate(-50%, -50%);
    }
    ${props =>
        props.open &&
        css`
        &:before {
            transform: translate(-50%, -50%) rotate(45deg);
        }
        &:after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
      `}
`;

function TodoCreate(){
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);

    return (
        <TodoCreateBlock>
            {open && (
            <CreateBox>
                <input
                    type="text"
                    className="input-text" 
                    placeholder='할 일을 입력하세요.'
                />
                <button type="submit" className='btn-type'>추가</button>
            </CreateBox>
            )}
            <CreateBtn onClick={onToggle} open={open}>
                추가
            </CreateBtn>
        </TodoCreateBlock>
    )
}

export default TodoCreate;