import React from 'react';
import styled from 'styled-components';

const BoardDetailBlock = styled.div`
    position: absolute;
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
        border-radius: 20px;
    }
    .edit-wrap{
        position: absolute;
        top: 50%;
        left: 50%;
        display: flex;
        flex-direction: column;
        width: 80%;
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

function BoardDetailModal (){
    return (
        <BoardDetailBlock>
            <div className="edit-wrap">
            dddd
            </div>
        </BoardDetailBlock>
    );
}

export default BoardDetailModal;