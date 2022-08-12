import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Del from '../../styles/Admin';
import * as i from '../../styles/mypage/TabInner';

interface User {
    useNo : number,
    useNick :string,
    useId :string,
    useName :string,
}

const Users = () => {

    const [data, setData] = useState<User[]>([]);
    const cks :number[] = [];

    useEffect(() => {
        axios.get('/manager')
        .then(res => {
            setData(res.data.data.content);
        })        
    },[])
    
    const checks = (ck: boolean, n:number) => { //삭제할 회원 선택
        if (ck) {
            cks.push(n);
        }else {
            cks.splice(cks.indexOf(n), 1);
        }
    }

    const del = () => { //회원 삭제
        const formData = new FormData();
        formData.append("useNos", JSON.stringify(cks));
        // console.log('formdata: ' + formData);
        // console.log('formdata-get: ' + formData.get("useNos")); 

        return axios.delete('/manager/user', {
            data: {useNos : formData},
            headers: {"content-type": "multipart/form-data"}
        })
        .then(res => console.log('삭제'));
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
                            <li>{user.useId}</li>
                            <li>{user.useName}</li>
                            <li>{user.useNick}</li>
                            <input type='checkbox' name={user.useId} value={user.useNo} onChange={(e)=>{checks(e.target.checked,user.useNo)}} />
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