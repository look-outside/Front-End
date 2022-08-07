import React from 'react';
import styled from 'styled-components';
import * as i from '../../styles/mypage/TabInner';

const Users = () => {
    return (
        <i.Outline>
            <i.TabTitle>회원 목록</i.TabTitle>
            <Col>
                <li id='id'>회원 ID</li>
                <li id='name'>이름</li>
                <li id='nick'>닉네임</li>
                <Del>삭제</Del>
            </Col>
            <Cnt>
                <li id='id'>test</li>
                <li id='name'>루루룩</li>
                <li id='nick'>룩아웃사이드</li>
                <input type='checkbox'/>
            </Cnt>
        </i.Outline>
    );
};

export default Users;

const Col = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0.8em;
    font-size: 1.1rem;
    border-bottom: 1px solid gray;
    text-align: center;
    li{
        border: 1px solid lightblue;
    }
    #id{
        flex-basis: 30%;
    }
    #name{
        flex-basis: 30%;
    }
    #nick{
        flex-basis: 30%;
    }
    @media screen and (max-width: 768px){
        font-size: 1rem;
    };
    @media screen and (max-width: 480px){
        font-size: 0.9rem;
        padding: 0.6em;
    };
`;

const Cnt = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0.9em;
    border-bottom: 1px solid lightgray;
    text-align: center;
    input {
        margin-left: 2em;
    }
    li{
        border: 1px solid palevioletred;
    }
    #id{
        flex-basis: 30%;
    }
    #name{
        flex-basis: 30%;
    }
    #nick{
        flex-basis: 30%;
    }
    
    @media screen and (max-width: 768px){
        font-size: 0.9rem;
    };
    @media screen and (max-width: 480px){
        font-size: 0.8rem;
    };
`;

const Del = styled.button`
    color: white;
    background-color: skyblue;
    border: 2px solid skyblue;
    border-radius: 5px;
    margin-left: 1em;
    &:hover {
        cursor: pointer;
    }
`;