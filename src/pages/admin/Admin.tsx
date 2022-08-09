import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import * as t from '../../styles/mypage/Tab';

const Admin = () => {
    return (
        <t.Container>
            <t.Menu>
                <t.PageName>관리자페이지</t.PageName>

                <t.List>
                    <NavLink to="/admin/users" style={({ isActive }) => { return { 
                            color: isActive ? "skyblue" : "black",
                            fontWeight: isActive ? "bold" : ""
                        } }} >
                        <t.Tabs>회원 목록</t.Tabs>
                    </NavLink>
                    <NavLink to="/admin/board" style={({ isActive }) => { return { 
                            color: isActive ? "skyblue" : "black",
                            fontWeight: isActive ? "bold" : ""
                        } }} >
                        <t.Tabs>게시글 목록</t.Tabs>
                    </NavLink>
                </t.List>

            </t.Menu>
            <t.TabInner>  
                <Outlet />
            </t.TabInner>
        </t.Container>
    );
};

export default Admin;