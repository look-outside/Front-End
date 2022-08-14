import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import authStore from '../../store/authStore';
import * as i from '../../styles/mypage/TabInner';

const Delete = () => {

    const { userProfile, removeUser } = authStore()

    const navigate = useNavigate()

    const userDel = () => {
        axios.delete(`../user/${userProfile?.no}`)
        .then(res => {
            if (res.data.status === 200) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: res.data.data,
                    showConfirmButton: false,
                    timer: 1000
                })
                .then(() => {
                    removeUser();
                    navigate('/');
                }) //메인페이지 이동
            }else {
                console.log(res.data)
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Error',
                    text: res.data.data
                })
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