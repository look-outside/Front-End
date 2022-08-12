import React from 'react'
import { AiOutlineCaretRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import * as c from '../../styles/Category';

const Clothes = () => {
  
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

      <c.Imgs>
        <Card>
          <Img src='/test.jpg' alt='test1' />
          <span>서울 강동구</span>
        </Card>
        <Card>
          <Img src='/test.jpg' alt='test1' />
          <span>서울 송파구</span>
        </Card>
        <Card>
          <Img src='/test.jpg' alt='test1' />
          <span>서울 강남구</span>
        </Card>
        <Card>
          <Img src='/test.jpg' alt='test1' />
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

      <c.Imgs>
        <Card>
          <Img src='/test.jpg' alt='test1' />
          <span>서울 강동구</span>
        </Card>
        <Card>
          <Img src='/test.jpg' alt='test1' />
          <span>경기 하남시</span>
        </Card>
        <Card>
          <Img src='/test.jpg' alt='test1' />
          <span>서울 강남구</span>
        </Card>
        <Card>
          <Img src='/test.jpg' alt='test1' />
          <span>울산 울주군</span>
        </Card>
      </c.Imgs>
      
    </c.Container>
  )
}

export default Clothes

const Line = styled.div`
  /* border: 1px solid pink; */
  padding: 0.8em;
  display: flex;
  margin-top: 3em;
  #sub {
    /* border: 1px solid purple; */
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
    /* border: 1px solid black; */
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
  /* border: 1px solid red; */
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

const Img = styled.img`
  /* border: 1px solid yellow; */
  max-width: 100%;
  height: auto;
  margin-bottom: 0.7em;
  border-radius: 10px;
  @media screen and (max-width: 480px) {
    margin-bottom: 0.5em;
  };
`;