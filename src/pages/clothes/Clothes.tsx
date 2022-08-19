import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineCaretRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import * as c from '../../styles/Category';

const Clothes = () => {
  const [daily, setDaily] = useState([]);
  const [free, setFree] = useState([]);

  // useEffect(() => {
  //   // axios.get('/article/list/0')
  //   axios.get('/article/list/1/0101') // 임시
  //     .then(res => {
  //       setDaily(res.data.data.list)
  //     })
  //   // axios.get('/article/list/1')
  //   axios.get('/article/list/1/0101')
  //     .then(res => {
  //       setDaily(res.data.data.list)
  //   })
  // })
  
  return (
    <c.Container>
      <c.Title>오늘의 옷</c.Title>
      <Line>
        <span id='sub'>
          <Link to='../dailylook' id='black'>데일리룩</Link>
        </span>
        <span id='more'>
          <Link to='../dailylook' id='black'>더보기<AiOutlineCaretRight /></Link>
        </span>
      </Line>

      {/* 임시 (맨 밑의 코딩o) */}
      <c.Imgs>        
        <Card>
          <c.Img src='/test.jpg' alt='test1' />
          <span>서울 강동구</span>
        </Card>
        <Card>
          <c.Img src='/test.jpg' alt='test1' />
          <span>서울 송파구</span>
        </Card>
        <Card>
          <c.Img src='/test.jpg' alt='test1' />
          <span>서울 강남구</span>
        </Card>
        <Card>
          <c.Img src='/test.jpg' alt='test1' />
          <span>서울 마포구</span>
        </Card>
      </c.Imgs>

      <Line>        
      <span id='sub'>
          <Link to='../free' id='black'>오늘 뭐 입지?</Link>
        </span>
        <span id='more'>
          <Link to='../free' id='black'>더보기<AiOutlineCaretRight /></Link>
        </span>
      </Line>

      {/* 임시 (맨 밑의 코딩o) */}
      <Article>
        <span id='title'>내추럴 소프트 숲속향</span>
        <span id='dist'>서울특별시 강동구</span>
      </Article>
      <Article>
        <span id='title'>이틀 뒤 나는 제주도</span>
        <span id='dist'>제주도 서귀포시</span>
      </Article>
      <Article>
        <span id='title'>내추럴 소프트 숲속향내추럴 소프트 숲속향</span>
        <span id='dist'>서울특별시 강동구</span>
      </Article>
      <Article>
        <span id='title'>이틀 뒤 나는 제주도이틀 뒤 나는 제주도이틀 뒤 나는 제주도</span>
        <span id='dist'>제주도 서귀포시</span>
      </Article>
      <Article>
        <span id='title'>이틀 뒤 나는 제주도이틀 뒤 나는 제주도</span>
        <span id='dist'>제주도 서귀포시</span>
      </Article>
    </c.Container>
  )
}

export default Clothes

const Line = styled.div`
  padding: 0.8em;
  display: flex;
  margin-top: 3em;
  #sub {
    width: 60%;
    font-size: 1.5rem;
    font-weight: 500;
    margin-right: auto;
    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
    };
    @media screen and (max-width: 480px) {
      font-size: 1.2rem;
    };
  }
  #more {
    width: 30%;
    margin-left: auto;
    font-size: 0.9rem;
    display: flex;
    justify-content: end;
    align-items: flex-end;
    @media screen and (max-width: 480px) {
      font-size: 0.8rem;
    };
  }
  #black {
    color: black;
  }
`;

const Card = styled.div`
  flex-basis: 22%;
  margin-bottom: 0.5em;
  color: gray;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  };
  @media screen and (max-width: 480px) {
    flex-basis: 46%;
    font-size: 0.8rem;
  };
`;

const Article = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6em 0.5em;
  border-bottom: 1px solid lightgray;
  #title {
    width: 75%;
    @media screen and (max-width: 523px) {
      width: 72%;
    };
    @media screen and (max-width: 480px) {
      flex-direction: column;
      width: 100%;
      margin-bottom: 0.4em;
    };
  }
  #dist {
    width: 25%;
    color: gray;
    text-align: right;
    @media screen and (max-width: 523px) {
      width: 28%;
    };
    @media screen and (max-width: 480px) {
      width: 100%;
      text-align: left;
      font-size: 0.8rem;
    };
  }
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5em;
  };
  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 0.4em 0;
  };
`;

/*
api 완성 시 추가
{
  daily && (
    daily.map((art, i) => (
      <Card>
        <c.Img src='/test.jpg' alt='test1' />
        <span>{art.regAddr1} {art.regAddr2}</span>
      </Card>
    ))
  )
}
{
  free && (
    free.map((art, i) => (
      <Article>
        <span id='title'>{art.artSubject}</span>
        <span id='dist'>{art.regAddr1} {art.regAddr2}</span>
      </Article>
    ))
  )
}
*/