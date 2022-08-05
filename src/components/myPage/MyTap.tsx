import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MyTap = () => {

    return (
        <div>
            <MyMenu>
                <MyTitle>마이페이지</MyTitle>
                <MyList>
                    <NavLink to="/my_page/info" style={({ isActive }) => { return { 
                            color: isActive ? "skyblue" : "black",
                            fontWeight: isActive ? "bold" : ""
                        } }} >
                        <MyTab>회원정보 수정</MyTab>
                    </NavLink>

                    <NavLink to="/my_page/posts" style={({ isActive }) => { return { 
                            color: isActive ? "skyblue" : "black",
                            fontWeight: isActive ? "bold" : ""
                        } }} >
                        <MyTab>작성글 목록</MyTab>
                    </NavLink>

                    <NavLink to="/my_page/comments" style={({ isActive }) => { return { 
                            color: isActive ? "skyblue" : "black",
                            fontWeight: isActive ? "bold" : ""
                        } }} >
                        <MyTab>댓글 목록</MyTab>
                    </NavLink>

                    <NavLink to="/my_page/delete" style={({ isActive }) => { return { 
                            color: isActive ? "skyblue" : "black",
                            fontWeight: isActive ? "bold" : ""
                        } }} >
                        <MyTab>회원 탈퇴</MyTab>
                    </NavLink>                    
                </MyList>
            </MyMenu>
        </div>
    );
};

export default MyTap;

const MyMenu = styled.div`
    color: black;
    display: flex;
    flex-basis: 20%;
    flex-direction: column;
    @media screen and (max-width: 1024px){
        flex-direction: row;
        text-align: center;
    };
`;

const MyTitle = styled.div`
    height: 75px;
    font-size: 1.8rem;
    font-weight: 430;
    @media screen and (max-width: 1024px){
        height: 50px;
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 700;
        font-weight: bolder;
        flex-basis: 38%;
        align-items: center;
    };
    @media screen and (max-width: 480px) {
        font-size: 0.9rem;
        flex-basis: 35%;
    };
`;

const MyList = styled.ul`
    @media screen and (max-width: 1024px){
        display: flex;
    };
`;

const MyTab = styled.li`
    height: 50px;
    display: flex;
    padding-left: 1em;
    align-items: center;
    background-color: #fafafa;
    border: 1px solid #CCCCCC;
    &:hover {
        background-color: skyblue;
        color: white;
        cursor: pointer;
    }
    @media screen and (max-width: 767px){
        padding: 0;
        align-items: center;
        font-size: 0.9rem;
    };
    @media screen and (min-width: 369px) and (max-width: 614px) {
        padding: 0 0.4em;
    };
    @media screen and (min-width: 526px) and (max-width: 1024px) {
        padding: 0 0.5em;
    };
`;