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
        text-align: center;
    };
`;

export const PageName = styled.div`
    height: 75px;
    font-size: 1.8rem;
    font-weight: 450;
    text-align: center;
    @media screen and (max-width: 1024px){
        height: 50px;
        font-size: 1.5rem;
    };
    @media screen and (max-width: 548px){
        height: 35px;
        font-size: 1.3rem;
    };
`;

export const List = styled.ul`
    @media screen and (max-width: 1024px){
        display: flex;
        justify-content: center;
    };
`;

export const Tabs = styled.li`
    height: 45px;
    display: flex;
    align-items: center;
    padding-left: 1em;
    background-color: #fafafa;
    border-radius: 5px;
    border: 1px solid #CCCCCC;
    &:hover {
        background-color: skyblue;
        color: white;
        cursor: pointer;
    }
    @media screen and (max-width: 1024px){
        padding: 0 2em;
        margin: 0 0.6em;
    };
    @media screen and (max-width: 768px){
        height: 40px;
        font-size: 0.9rem;
        padding: 0 1.5em;
        margin: 0 0.3em;
    };
    @media screen and (max-width: 548px){
        height: 30px;
        font-size: 0.8rem;
        padding: 0 0.5em;
        margin: 0 0.1em;
    };
`;

export const TabInner = styled.div`
    flex-basis: 80%;
    padding-left: 1.2em;
`;