import React from 'react';
import styled from 'styled-components';
import Col from '../../styles/mypage/MyList';
import * as i from '../../styles/mypage/TabInner';

const Posts = () => {
    return (
        <i.Outline>
            <i.TabTitle>작성글 목록</i.TabTitle>
            <Col>
                <li id='content'>글 제목</li>
                <li id='day'>날짜</li>
            </Col>
            <Post>
                <img src={process.env.PUBLIC_URL + '/test.jpg'} alt='test' />
                {/* 임시 이미지 */}
                <li id='sub'>
                    <span id='title' >글 제목 추가</span>
                    <span id='dist'>서울시 강동구</span>
                </li>
                <li id='date'>20.08.06</li>
            </Post>
        </i.Outline>
    );
};

export default Posts;

const Post = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0.9em;
    border-bottom: 1px solid lightgray;
    img {
        width: 5.2em;
        @media screen and (max-width: 480px){
        width: 3.5em;
        };
    }
    span {
        margin: 0.3em;
        @media screen and (max-width: 480px){
            margin: 0.2em;
        };
    }
    #sub {
        flex-basis: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 1.5em;
        @media screen and (max-width: 480px){
            padding-left: 0.7em;
        };
    }
    #dist {
        color: gray;
        font-size: 0.8rem;
        @media screen and (max-width: 480px){
            font-size: 0.65rem;
        };
    }
    #date {
        flex-basis: 20%;
        color: #999999;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 768px){
        font-size: 0.9rem;
    };
    @media screen and (max-width: 480px){
        font-size: 0.8rem;
        padding: 0.7em;
        height: 5em;
    };
`;