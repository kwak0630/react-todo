import React, { useState, useEffect, useRef } from 'react';
import styled, {css} from 'styled-components';

const TodoCreateBlock = styled.div`
`;
const CreateBox = styled.div`
    position: absolute;
    bottom: 35px;
    right: 95px;
    display: flex;
    align-items: center;
    transition: 0.2s all ease-in;
    opacity: 0;
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
    ${props =>
        props.open &&
        css`
            opacity: 1;
      `}
`;

const CreateBtn = styled.div`
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 55px;
    height: 55px;
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
        transition: 0.125s all ease-in;
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
        transition: 0.125s all ease-in;
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

function TodoCreate(props){
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const ref = useRef();

    // 클릭시 오픈/닫기
    const onToggle = () => setOpen(!open);
    // 이벤트가 발생할 때마다(글자가 하나씩 입력될 때 마다) 변화를 감지
    const onChange = (e) =>{
        setValue(e.target.value);
    }

  const onSubmit = (e) => {
    e.preventDefault(); // onSubmit 이벤트는 브라우저를 새로고치기 때문에 막아주기
    if (!value) return;
    // 만약 input 창이 빈채로 submit을 하려고 할 땐 return시키기
    props.onSubmit(value);
    setValue("");
    // submit을 한 후에는 input 창을 비우기
  };

  useEffect(() => {
    ref.current.focus();
  }, []);
    
    return (
        <TodoCreateBlock>
            {/* {open && ( */}
            <CreateBox open={open}>
                <input
                    type="text"
                    className="input-text" 
                    placeholder='할 일을 입력하세요.'
                    value={value}
                    onChange={onChange}
                />
                <button 
                    type="submit" 
                    className='btn-type'
                    onclick={onSubmit}
                >
                    추가
                </button>
            </CreateBox>
            {/* )} */}
            <CreateBtn onClick={onToggle} open={open}>
                추가
            </CreateBtn>
        </TodoCreateBlock>
    )
}

export default TodoCreate;