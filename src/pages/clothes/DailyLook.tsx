import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdEdit } from 'react-icons/md';
import * as c from '../../styles/Category';

interface Post {
    artNo: number,
    artTitle: string,
    useNick: string,
    useDis: string
}

const DailyLook = () => {
    const [data, setData] = useState<Post[]>([]);
    
    useEffect(() => {
        axios.get('/articles')
        .then(res => {
            setData(res.data);
        })
    },[])

    return (
        <c.Container>
            <c.Title>데일리룩</c.Title>
            <c.Btn><MdEdit />글쓰기</c.Btn>
            <c.Filter>지역 선택 필터</c.Filter>{/* 추후 추가 */}
            <c.Imgs>
                {
                    data && (
                        data.map((art,i) => (
                            <c.Card key={i}>
                                <c.Img src='/test.jpg' alt='test1' />
                                <p>{art.artTitle}</p>
                                <span>{art.useNick}&nbsp;</span>
                                <span id='dis'>{art.useDis}</span>
                            </c.Card>
                        ))
                    )
                }
            </c.Imgs>
        </c.Container>
    );
};

export default DailyLook;