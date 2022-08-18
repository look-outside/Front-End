import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from '../../components/Pagination';
import authStore from '../../store/authStore';
import Col from '../../styles/mypage/MyList';
import * as i from '../../styles/mypage/TabInner';
import { PageT } from '../../types/types';

interface ArticleT {
    artNo: number,
    useNo: number,
    artSubject: string,
    artContents: string,
    artCreated: string,
    regAddr1: string,
    regAddr2: string,
}

const Posts = () => {
    const { userProfile } = authStore()

    const [data,setData] = useState<ArticleT[]>();

    const [page, setPage] = useState<PageT>();
    const [curPage, setCurPage] = useState(1); 

    useEffect(() => {
        axios.get(`/article/list/${userProfile?.no}`, { params: {page: (curPage-1)} })
        .then(res => {
            setData(res.data.data.list)
            setPage(res.data.data.pageable)
        })
    },[curPage])

    return (
        <i.Outline>
            <i.TabTitle>작성글 목록</i.TabTitle>
            <Col>
                <li id='content'>글 제목</li>
                <li id='day'>날짜</li>
            </Col>
            {
                data && (
                    data?.map((art, i) => (
                        <Post key={i}>
                            <img src={process.env.PUBLIC_URL + '/test.jpg'} alt='test' />
                            <li id='sub'>
                                <span id='title' >{art.artSubject}</span>
                                <span id='dist'>{art.regAddr1} {art.regAddr2}</span>
                            </li>
                            <li id='date'>{art.artCreated.slice(0,8)}</li>
                        </Post>
                    ))
                )
            }
            {
                data && (
                    <Pagination curPage={curPage} setCurPage={setCurPage} totalPage={page.totalPages} totalCount={page.totalElements} size={page.size} pageCount={3}/>
                )
            }
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