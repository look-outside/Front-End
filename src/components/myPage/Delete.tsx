import React from 'react';
import styled from 'styled-components';
import Outline from '../../styles/mypage/Outline';
import TabTitle from '../../styles/mypage/TabTitle';

const Delete = () => {
    return (
        <Outline>
            <TabTitle>회원 탈퇴</TabTitle>
            <Title>탈퇴하시겠습니까?</Title>
            <Btn>네</Btn>
            {/* 추후 alert 추가 */}
        </Outline>
    );
};

export default Delete;

const Title = styled.p`
    font-size: 1.2em;
    padding: 2em 0;
    @media screen and (max-width: 1024px){
        font-size: 1.3rem;
        padding: 2em 0;
    };
    @media screen and (max-width: 480px){
        font-size: 1rem;
    };
`;

const Btn = styled.button`
    color: white;
    background-color: skyblue;
    padding: 0.3em 1.3em;
    border-radius: 5px;
    border: 1px solid skyblue;
    &:hover {
        cursor: pointer;
    }
`;