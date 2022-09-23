import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const TodoEditBlock = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

    &:before{
        position:absolute;
        top:0;
        left:0;
        display: block;
        content: '';
        width: 100%;
        height: 100%;
        background:rgba(0,0,0,0.5);
    }
    .edit-wrap{

        position: fixed;
        top: 50%;
        left: 50%;
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 20px;
        transform: translate(-50%, -50%);
    }

    h2{
        font-size: 16px;
    }
    
    form{
        display: flex;
        align-items: center;
    }
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
`;

function TodoEdit ({selectedTodo, onUpdate, props}){

    const [value, setValue] = useState('');
    const ref = useRef();

    // 이벤트가 발생할 때마다(글자가 하나씩 입력될 때 마다) 변화를 감지
    const onChange = (e) =>{
        setValue(e.target.value);
    }

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    };
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
        <TodoEditBlock>
            <div className="edit-wrap">
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
            </div>
        </TodoEditBlock>
    );
}

export default TodoEdit;