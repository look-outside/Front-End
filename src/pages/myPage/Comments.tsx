import React from 'react';
import styled from 'styled-components';
import Col from '../../styles/mypage/MyList';
import * as i from '../../styles/mypage/TabInner';

const Comments = () => {
    return (
        <i.Outline>
            <i.TabTitle>댓글 목록</i.TabTitle>
            <Col>
                <li id='content'>댓글</li>
                <li id='day'>날짜</li>
            </Col>
            <Cmt>
                <li id='cmt'>해피데이 </li>
                <li id='date'>20.08.06</li>
            </Cmt>
            <Cmt>
                <li id='cmt'>내추럴 소프트 숲속향</li>
                <li id='date'>22.12.25</li>
            </Cmt>
        </i.Outline>
    );
};

export default Comments;

const Cmt = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0.9em;
    border-bottom: 1px solid lightgray;
    #cmt {
        flex-basis: 80%;
        padding-left: 1em;
    }
    #date {
        flex-basis: 20%;
        text-align: center;
        color: #999999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width: 768px){
        font-size: 0.9rem;
    };
    @media screen and (max-width: 480px){
        font-size: 0.8rem;
    };
`;