import React from 'react';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import MyTap from '../../components/myPage/MyTap';

const MyPage = () => {

    return (
        <Container>
            <MyTap />
            <TabContainer>  
                    <Outlet />
            </TabContainer>
        </Container>
    );
};

export default MyPage;

const Container = styled.div`
    padding: 0 2em;
    display: flex;
    @media screen and (min-width: 1160px){
        max-width: 1160px;
        margin: 0 auto;
    };
    @media screen and (max-width: 767px){
        flex-direction: column;
    };
`;

const TabContainer = styled.div`
    flex-basis: 80%;
    padding-left: 1.2em;
`;