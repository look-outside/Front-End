import React from 'react';
import styled from 'styled-components';

const Info = () => {
    return (
        <UpdateContainer>
            <TabTitle>회원정보 수정</TabTitle>
            <UpdateLine>
                <UpdateTitle>이름</UpdateTitle>
                <UpdateValue/>
            </UpdateLine>
            <UpdateLine>
                <UpdateTitle>닉네임</UpdateTitle>                
                <UpdateValue></UpdateValue>
            </UpdateLine>
            <UpdateLine>
                <UpdateTitle>아이디</UpdateTitle>
                <UpdateValue placeholder='기존아이디'></UpdateValue>
                {/* 추후 readonly, name,value 추가 */}
            </UpdateLine>
            <UpdateLine>
                <UpdateTitle>현재 비밀번호</UpdateTitle>
                <UpdateValue type='password'></UpdateValue>
            </UpdateLine>
            <UpdateLine>
                <UpdateTitle>새 비밀번호</UpdateTitle>
                <UpdateValue type='password'></UpdateValue>
            </UpdateLine>
            <UpdateLine>
                <UpdateTitle>새 비밀번호 확인</UpdateTitle>
                <UpdateValue type='password'></UpdateValue>
            </UpdateLine>
            <UpdateLine>
                <UpdateTitle>이메일</UpdateTitle>
                <UpdateValue placeholder='ex) look@outside.com'></UpdateValue>
            </UpdateLine>
            <UpdateBtn>수정 완료</UpdateBtn>
        </UpdateContainer>
    );
};

export default Info;

const UpdateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TabTitle = styled.div`
    width: 100%;
    padding: 1.2em ;
    font-size: 1.3rem;
    font-weight: 420;
    border-bottom: 1px solid gray;
    @media screen and (max-width: 1024px){
        display: flex;
        justify-content: center;
    };
    @media screen and (max-width: 480px){
        font-size: 1rem;
    };
`;

const UpdateLine = styled.div`
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

const UpdateTitle = styled.label`
    padding: 0.6em;
`;

const UpdateValue = styled.input`
    font-size: 1rem;
    padding: 0.6em;
    border-radius: 5px;
    border: 1px solid #C3C3C3;
`;

const UpdateBtn = styled.button`
    color: white;
    background-color: skyblue;
    font-size: 1rem;
    font-weight: 650;
    padding: 0.4em 1.5em;
    margin: 2em;
    border-radius: 5px;
    border: 1px solid skyblue;
    &:hover {
        cursor: pointer;
    }
`;