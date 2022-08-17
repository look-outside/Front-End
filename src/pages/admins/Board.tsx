import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import Del from '../../styles/Admin';
import * as i from '../../styles/mypage/TabInner';

interface Article {
    artNo: number,
    artSubject: string,
    regNo: string,
    artCreated: string
}

const Board = () => {
    const [article, setArticle] = useState<Article[]>([]);
    const [selected,setSelected] = useState ('4');

    const cks :number[] = [];

    useEffect(() => {
        if (selected === '4') {
            axios.get('/manager/article')
            .then(res => {
                setArticle(res.data.data.content);
            })
        } else {
            axios.get(`/manager/article/${selected}`)
            .then(res => {
                setArticle(res.data.data.content);
            })
        }
        
    },[selected])

    const checks = (ck: boolean, no: number) => { //삭제글 선택
        if (ck) {
            cks.push(no);
        }else {
            cks.splice(cks.indexOf(no), 1);
        }
    }

    const del = () => { //글 삭제
        return axios.delete(`/manager/article/${cks}`)
        .then(res => {
            Swal.fire({
                icon: 'success',
                text: '삭제 완료!',
                showConfirmButton: false,
                timer: 1000
            })
            .then(() => window.location.reload())            
        });
    }

    const cateChange = (cate :string) => {
        setSelected(cate);
    }

    return (
        <i.Outline>
            <i.TabTitle>게시글 목록</i.TabTitle>
            <Sel onChange={(e) => cateChange(e.target.value)} value={selected}>
                <option value='4'>전체</option>
                <option value='0'>데일리룩</option>
                <option value='1'>오늘 뭐 입지</option>
                <option value='2'>오늘의 하늘</option>
                <option value='3'>오늘의 모임</option>
            </Sel>
            <Col>
                <li id='head1'>글 제목</li>
                <li>지역</li>
                <li>날짜</li>
                <Del onClick={()=> del()}>삭제</Del>
            </Col>
            {
                article && (
                    article.map((post,i) => (
                        <Cnt key={i}>
                            <li id='head2'>{post.artSubject}</li>
                            <li>{post.regNo}</li>
                            <li>{post.artCreated.slice(0,8)}</li>
                            <input type='checkbox'  onChange={(e)=>{checks(e.target.checked, post.artNo)}}/>
                        </Cnt>
                    ))
                )
            }
        </i.Outline>
    );
};

export default Board;

const Col = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0.8em;
    font-size: 1.1rem;
    border-bottom: 1px solid gray;
    text-align: center;
    li{  width: 16%; }
    #head1 { width: 60%; }
    @media screen and (max-width: 806px){
        font-size: 1rem;
        li{ width: 16%; }
        #head1 { width: 58%; }
    };
    @media screen and (max-width: 666px){
        li{ width: 16.5%; }
        #head1 { width: 55%; }
    };
    @media screen and (max-width: 572px){
        font-size: 0.9rem;
        li{ width: 15%; }
    };
    @media screen and (max-width: 480px){
        font-size: 0.9rem;
        li{ width: 16%; }
    };
    @media screen and (max-width: 401px){
        li{ width: 16%; }
    }
`;

const Cnt = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0.9em;
    border-bottom: 1px solid lightgray;
    text-align: center;
    color: gray;
    input {
        margin-left: 2em;
        @media screen and (max-width: 570px){
            margin-left: 1.5em;
        };
        @media screen and (max-width: 480px){
            margin-left: 1em;
        };
    }
    li{ width: 16%; }
    #head2 {
        width: 60%;
        color: black;
    }
    @media screen and (max-width: 806px){
        font-size: 0.9rem;
        li{ width: 16.5%; }
        #head2 { width: 57%; }
    };
    @media screen and (max-width: 666px){
        font-size: 0.8rem;
        li{ width: 16%; }
        #head2 { width: 55%; }
    };
    @media screen and (max-width: 480px){
        font-size: 0.8rem;
        li{ width: 27%; }
    };
    @media screen and (max-width: 401px){
        li{ width: 26%; }
    }/* 세부반응형 추후 추가 */
`;

const Sel = styled.select`
    margin: 1em;
    width: 15%;
    padding: 0.5em;
    border-radius: 5px;
    &:focus {
        border: 1px solid skyblue;
    }
`;