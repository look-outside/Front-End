import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Del from '../../styles/Admin';
import * as i from '../../styles/mypage/TabInner';

interface User {
    userNo : number,
    userNick :string,
    userId :string,
    userName :string,
}

const Users = () => {

    const [data, setData] = useState<User[]>([]);
    const cks :number[] = [];

    useEffect(() => {
        axios.get('/user')
        .then(res => {
            setData(res.data);
        })        
    },[])

    const checks = (ck: boolean, n:number) => {
        if (ck) {
            cks.push(n);
        }else {
            cks.splice(cks.indexOf(n), 1);
        }
    }

    const del = () => {
        axios.delete('/manager/user', {data: { useNos : cks }})
        .then(res => {alert('삭제되었습니다!')})
    }

    return (
        <i.Outline>
            <i.TabTitle>회원 목록</i.TabTitle>
            <Col>
                <li>회원 ID</li>
                <li>이름</li>
                <li>닉네임</li>
                <Del onClick={()=> del()}>삭제</Del>
            </Col>
            {
                data && (
                    data.map((user,i) => (
                        <Cnt key = {i}>
                            <li>{user.userId}</li>
                            <li>{user.userName}</li>
                            <li>{user.userNick}</li>
                            <input type='checkbox' name={user.userId} value={user.userNo} onChange={(e)=>{checks(e.target.checked,user.userNo)}} />
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