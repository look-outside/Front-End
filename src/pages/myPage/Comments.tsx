import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from '../../components/Pagination';
import authStore from '../../store/authStore';
import Col from '../../styles/mypage/MyList';
import * as i from '../../styles/mypage/TabInner';
import { PageT } from '../../types/types';

interface CommentT {
    repNo :number,
    repContents :string,
    repCreated :string,
}

const Comments = () => {
    const {userProfile} = authStore()

    const [data,setData] = useState<CommentT[]>();
    const [page, setPage] = useState<PageT>();
    const [curPage, setCurPage] = useState(1); 

    useEffect(() => {
        axios.get(`/article/reply/${userProfile?.no}`, { params: {page: (curPage-1)} })
        .then(res => {
            setData(res.data.data.list);
            setPage(res.data.data.pageable);
        })
    },[curPage])

    return (
        <i.Outline>
            <i.TabTitle>댓글 목록</i.TabTitle>
            <Col>
                <li id='content'>댓글</li>
                <li id='day'>날짜</li>
            </Col>
            {data && (
                data.map((com, i) => (
                    <Cmt key={i}>
                        <li id='cmt'>{com.repContents}</li>
                        <li id='date'>{com.repCreated.slice(0,8)}</li>
                    </Cmt>
                ))
            )}
            {page && (
                <Pagination curPage={curPage} setCurPage={setCurPage} totalPage={page.totalPages} totalCount={page.totalElements} size={page.size} pageCount={5}/>
            )}
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