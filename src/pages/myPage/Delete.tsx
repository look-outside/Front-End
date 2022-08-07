import React from 'react';
import styled from 'styled-components';
import * as i from '../../styles/mypage/TabInner';

const Delete = () => {
    return (
        <i.Outline>
            <i.TabTitle>회원 탈퇴</i.TabTitle>
            <Title>탈퇴하시겠습니까?</Title>
            <Btn>네</Btn>
            {/* 추후 alert 추가 */}
        </i.Outline>
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