import React from 'react';
import { NavLink } from 'react-router-dom';
import * as t from '../../styles/mypage/Tab';

const MyTap = () => {
    return (
        <t.Menu>
            <t.PageName>마이페이지</t.PageName>
            <t.List>
                <NavLink to="/my/info" style={({ isActive }) => { return { 
                        color: isActive ? "skyblue" : "black",
                        fontWeight: isActive ? "bold" : ""
                    } }} >
                    <t.Tabs>회원정보 수정</t.Tabs>
                </NavLink>

                <NavLink to="/my/posts" style={({ isActive }) => { return { 
                        color: isActive ? "skyblue" : "black",
                        fontWeight: isActive ? "bold" : ""
                    } }} >
                    <t.Tabs>작성글 목록</t.Tabs>
                </NavLink>

                <NavLink to="/my/comments" style={({ isActive }) => { return { 
                        color: isActive ? "skyblue" : "black",
                        fontWeight: isActive ? "bold" : ""
                    } }} >
                    <t.Tabs>댓글 목록</t.Tabs>
                </NavLink>

                <NavLink to="/my/delete" style={({ isActive }) => { return { 
                        color: isActive ? "skyblue" : "black",
                        fontWeight: isActive ? "bold" : ""
                    } }} >
                    <t.Tabs>회원 탈퇴</t.Tabs>
                </NavLink>                    
            </t.List>
        </t.Menu>
    );
};

export default MyTap;