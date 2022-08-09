import React from 'react';
import styled from 'styled-components';
import * as i from '../../styles/mypage/TabInner';

const Info = () => {
    return (
        <i.Outline>
            <i.TabTitle>회원정보 수정</i.TabTitle>
            <Line>
                <Title>이름</Title>
                <Val></Val>
            </Line>
            <Line>
                <Title>닉네임</Title>                
                <Val></Val>
            </Line>
            <Line>
                <Title>아이디</Title>
                <Val placeholder='기존아이디'></Val>
                {/* 추후 readonly, name,value 추가 */}
            </Line>
            <Line>
                <Title>현재 비밀번호</Title>
                <Val type='password'></Val>
            </Line>
            <Line>
                <Title>새 비밀번호</Title>
                <Val type='password'></Val>
            </Line>
            <Line>
                <Title>새 비밀번호 확인</Title>
                <Val type='password'></Val>
            </Line>
            <Line>
                <Title>이메일</Title>
                <Val placeholder='ex) look@outside.com'></Val>
            </Line>
            <Btn>수정 완료</Btn>
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