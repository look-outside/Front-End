import React from 'react';
import styled from 'styled-components';
import * as i from '../../styles/mypage/TabInner';

const Board = () => {
    return (
        <i.Outline>
            {/* 필터 추가 */}
            <i.TabTitle>게시글 목록</i.TabTitle>
            <Col>
                <li id='head1'>글 제목</li>
                <li>지역</li>
                <li>날짜</li>
                <Del>삭제</Del>
            </Col>
            <Cnt>
                <li id='head2'>글 제목 추가글 제목 추가글</li>
                <li>서울시 강동구</li>
                <li>20.08.06</li>
                <input type='checkbox'/>
            </Cnt>
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

const Del = styled.button`
    color: white;
    background-color: skyblue;
    border: 2px solid skyblue;
    border-radius: 5px;
    margin-left: 1em;
    &:hover {
        cursor: pointer;
    }    
`;