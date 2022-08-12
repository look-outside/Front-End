import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as i from '../../styles/mypage/TabInner';

interface InfoT {
    useNo: number,
    useNick: string,
    useId: string,
    usePw: string,
    useName: string,
    useEmail: string,
}

// interface UpdateT {
//     useNick: string,
//     usePw: string,
//     useNPw: string,
//     useNPwCk: string,
//     useEmail: string,
// }

const Info = () => {

    const [data, setData] = useState<InfoT>();

    useEffect(() => {
        axios.get('/user/id')
        .then(res => {
            setData(res.data.data);
            // console.log(res.data.data);
        })
    }, [])

    const [inputs,setInputs] = useState({
        useNick : '',
        useNPw : '',
        useNPwCk : '',
        useEmail : '',
    })

    const {useNick, useNPw, useNPwCk, useEmail} = inputs;

    const [nickMsg,setNickMsg] = useState('');
    const [nPwMsg,setNPwMsg] = useState('');
    const [nPwCkMsg,setNPwCkMsg] = useState('');
    // const [emailMsg,setEmailMsg] = useState('');

    const changeInput = (e :React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        })

        if (useNick.length > 6){
            setNickMsg('닉네임은 6자 이하로 가능합니다')
        }else {
            setNickMsg('');
        }

        if (useNPw.length < 6){
            setNPwMsg('비밀번호는 6자 이상 가능합니다')
            // console.log(useNPw) -- 비동기 살펴보기
        }else {
            setNPwMsg('')
        }

        if (useNPw !== useNPwCk) {
            setNPwCkMsg('비밀번호가 맞지 않습니다')
        }else {
            setNPwCkMsg('')
        }
    }

    const updateInfo = () => {
        axios.put('/user/id',{ //api완성되면 수정
            useNick : 'zuzu'
        })
        .then(res => console.log('수정 완료'));
    }

    return (
        <i.Outline>
            <i.TabTitle>회원정보 수정</i.TabTitle>
            <Line>
                <Title>이름</Title>
                <Val placeholder={data?.useName} readOnly></Val>
            </Line>
            <Line>
                <Title>닉네임</Title>                
                <Val placeholder={data?.useNick} name='useNick' value={useNick} onChange={(e)=> changeInput(e)}></Val>
                <span>{nickMsg}</span>
            </Line>
            <Line>
                <Title>아이디</Title>
                <Val placeholder={data?.useId} readOnly></Val>
            </Line>
            <Line>
                <Title>현재 비밀번호</Title>
                <Val type='password'></Val>
            </Line>
            <Line>
                <Title>새 비밀번호</Title>
                <Val type='password' placeholder='새 비밀번호를 입력해주세요' name='useNPw' value={useNPw} onChange={(e)=> changeInput(e)}></Val>
                <span>{nPwMsg}</span>
            </Line>
            <Line>
                <Title>새 비밀번호 확인</Title>
                <Val type='password' placeholder='새 비밀번호를 다시 입력해주세요' name='useNPwCk' value={useNPwCk} onChange={(e)=> changeInput(e)}></Val>
                <span>{nPwCkMsg}</span>
            </Line>
            <Line>
                <Title>이메일</Title>
                <Val placeholder={data?.useEmail} name='useEmail' value={useNPwCk} onChange={(e)=> changeInput(e)}></Val>
                {/* <span>{emailMsg}</span> */}
            </Line>
            <Btn onClick={()=> updateInfo()}>수정 완료</Btn>
        </i.Outline>
    );
};

export default Info;

const Line = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 0.5em;
    @media screen and (max-width: 1024px){
        font-size: 1rem;
        width: 60%;
    };
    @media screen and (max-width: 480px){
        font-size: 1rem;
        width: 80%;
    };
`;

const Title = styled.label`
    padding: 0.6em;
`;

const Val = styled.input`
    font-size: 1rem;
    padding: 0.6em;
    border-radius: 5px;
    border: 1px solid #C3C3C3;
`;

const Btn = styled.button`
    color: white;
    background-color: skyblue;
    font-size: 1rem;
    padding: 0.4em 1.5em;
    margin: 2em;
    border-radius: 5px;
    border: 1px solid skyblue;
    &:hover {
        cursor: pointer;
    }
`;