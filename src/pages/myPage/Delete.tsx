import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import * as i from '../../styles/mypage/TabInner';

const Delete = () => {

    const userDel = () => {
        axios.delete('/user/id2') //:id 추후 변경예정
        .then(res => {
            if (res.data.status === 200) {
                document.location.href = '/' //메인페이지 이동
            }else {
                alert('오류가 발생했습니다. 관리자에게 문의바랍니다.');
            }
        })
    }

    return (
        <i.Outline>
            <i.TabTitle>회원 탈퇴</i.TabTitle>
            <Title>탈퇴하시겠습니까?</Title>
            <Btn onClick={() => userDel()}>네</Btn>
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