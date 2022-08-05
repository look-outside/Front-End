import React from 'react';
import styled from 'styled-components';

const Delete = () => {
    return (
        <DeleteContainer>
            <TabTitle>회원 탈퇴</TabTitle>
            <DelTitle>탈퇴하시겠습니까?</DelTitle>
            <DelBtn>네</DelBtn>
            {/* 추후 alert 추가 */}
        </DeleteContainer>
    );
};

export default Delete;

const DeleteContainer = styled.div`
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

const DelTitle = styled.p`
    font-size: 1.5em;
    padding: 2em 0;
    @media screen and (max-width: 1024px){
        font-size: 1.3rem;
        padding: 2em 0;
    };
    @media screen and (max-width: 480px){
        font-size: 1rem;
    };
`;

const DelBtn = styled.button`
    color: white;
    background-color: skyblue;
    padding: 0.3em 1.5em;
    border-radius: 5px;
    border: 1px solid skyblue;
    &:hover {
        cursor: pointer;
    }
`;