import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import authStore from '../../store/authStore';
import * as i from '../../styles/mypage/TabInner';

const PwCheck = () => {
    const { userProfile } = authStore();

    const [pw,setPw] = useState('');
    const [ck,setCk] = useState(false);

    const navigate = useNavigate();

    useEffect(()=> {
        axios.post('/user/myPw', {
            useId: userProfile?.id,
            usePw: pw
        })
        .then((res) => {
            if (res.data.data === true) {
                setCk(true) //성공
            }else {
                setCk(false)
            }
        })
    }, [pw])

    const Pass = () => {
        if (ck === true) {
            navigate('update');
        }else {
            Swal.fire({
                icon: 'error',
                text: '비밀번호가 일치하지 않습니다.',
                showConfirmButton: false,
                timer: 1000
            }).then(() => {setPw('')})
        }
    }

    return (
        <i.Outline>
            <i.TabTitle>회원정보 수정</i.TabTitle>
            <i.Title>비밀번호 재확인</i.Title>
            <Pw type='password' placeholder='비밀번호를 입력해주세요' value={pw} onChange={(e) => setPw(e.target.value)} />
            <i.Btn onClick={() => Pass()}>확인</i.Btn>
        </i.Outline>
    );
};

export default PwCheck;

const Pw = styled(i.Val)`
    width: 40%;
    @media screen and (max-width: 480px){
        width: 70%;
        font-size: 0.9rem;
    };
`;