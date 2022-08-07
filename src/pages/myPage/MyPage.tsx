import React from 'react';
import {Outlet} from 'react-router-dom';
import MyTap from '../../components/myPage/MyTap';
import * as t from '../../styles/mypage/Tab';

const MyPage = () => {

    return (
        <t.Container>
            <MyTap />
                <t.TabInner>  
                    <Outlet />
                </t.TabInner>
        </t.Container>
    );
};

export default MyPage;