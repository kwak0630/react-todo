import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TodoEditBlock = styled.div`
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;

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
        width: 60%;
        padding:40px 20px 60px;
        background: #fff;
        border-radius: 12px;
        transform: translate(-50%, -50%);
    }

    h2{
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 2px solid #ffe281;
        font-size: 16px;
        text-align: center;
    }
    
    form{
        // display: flex;
        // align-items: center;
        text-align: center;
    }
    .input-text{
        width: 100%;
        height: 45px;
        padding: 0 10px;
        border:1px solid #ddd;
        border-radius: 5px;
    }
    .btn-type{
        width: 80px;
        height: 45px;
        margin: 15px auto 0;
        border: none;
        border-radius: 5px;
        background: #ffe281;
        font-weight: 700;
    }
`;

function TodoEdit ({selectedTodo, onUpdate}){

    const [value, setValue] = useState('');

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
        // props.onSubmit(value);
        onUpdate(selectedTodo.id, value);
        setValue("");
        // submit을 한 후에는 input 창을 비우기
    };

    useEffect(() => {
        if (selectedTodo) {
            setValue(selectedTodo.text);
        }
    }, [selectedTodo]);

    return (
        <TodoEditBlock>
            <div className="edit-wrap">
            <h2>수정하기</h2>
            <form onClick={onSubmit}>
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
                        onClick={onSubmit}
                        onKeyPress={onKeyPress}
                    >
                        수정
                    </button>
            </form>
            </div>
        </TodoEditBlock>
    );
}

export default TodoEdit;