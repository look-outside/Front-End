import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as i from '../../styles/mypage/TabInner';

export interface User {
    useNo : number | undefined,
    userNick :string | undefined;
    userId :string | undefined;
    userName :string | undefined;
}

const Users = () => {

    const [data, setData] = useState<User[] | null>(null);

    useEffect(() => {
        axios.get('/user')
        .then(res => {
            setData(res.data);      
        })        
    },[])

    return (
        <i.Outline>
            <i.TabTitle>회원 목록</i.TabTitle>
            <Col>
                <li>회원 ID</li>
                <li>이름</li>
                <li>닉네임</li>
                <Del>삭제</Del>
            </Col>
            {
                data && (
                    data.map((user,i) => (
                        <Cnt key = {i}>
                            <li>{user.userId}</li>
                            <li>{user.userName}</li>
                            <li>{user.userNick}</li>
                            <input type='checkbox'/>
                        </Cnt>
                    ))
                )
            }
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
        width: 30%;
    }  
    @media screen and (max-width: 768px){
        font-size: 1rem;
    };
    @media screen and (max-width: 666px){
        li{ width: 28%; }
    };
    @media screen and (max-width: 480px){
        font-size: 0.9rem;
        li{ width: 27%; }
    };
    @media screen and (max-width: 401px){
        li{ width: 26%; }
    }
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
        width: 30%;
    }
    @media screen and (max-width: 768px){
        font-size: 0.9rem;
    };
    @media screen and (max-width: 666px){
        li{ width: 28%; }
    };
    @media screen and (max-width: 480px){
        font-size: 0.8rem;
        li{ width: 27%; }
    };
    @media screen and (max-width: 401px){
        li{ width: 26%; }
    }
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