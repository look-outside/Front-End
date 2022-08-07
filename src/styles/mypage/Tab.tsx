import styled from "styled-components";

export const Container = styled.div`
    padding: 0 2em;
    display: flex;
    @media screen and (min-width: 1160px){
        max-width: 1160px;
        margin: 0 auto;
    };
    @media screen and (max-width: 1024px){
        flex-direction: column;
    };
`;

export const Menu = styled.div`
    display: flex;
    flex-basis: 15%;
    flex-direction: column;
    @media screen and (max-width: 1024px){
        flex-direction: row;
        text-align: center;
    };
`;

export const PageName = styled.div`
    height: 75px;
    font-size: 1.8rem;
    font-weight: 450;
    @media screen and (max-width: 1024px){
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 38%;
        font-size: 1.5rem;
    };
    @media screen and (max-width: 480px) {
        flex-basis: 35%;
        font-size: 0.9rem;
    };
`;

export const List = styled.ul`
    @media screen and (max-width: 1024px){
        display: flex;
    };
`;

export const Tabs = styled.li`
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

export const TabInner = styled.div`
    flex-basis: 80%;
    padding-left: 1.2em;
`;