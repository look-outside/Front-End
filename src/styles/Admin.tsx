import styled from "styled-components";

export const CkBtn = styled.button`
    color: white;
    background-color: skyblue;
    border: none;
    padding: 0.4em 0.6em;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
    }
    @media screen and (max-width: 480px){
        font-size: 0.6rem;
    };
`;

export const Cate = styled.div`
    width: 100%;
`;

export const Sel = styled.select`
    margin: 1em;
    width: 15%;
    padding: 0.5em;
    border-radius: 5px;
    &:focus {
        border: 1px solid skyblue;
    }
    @media screen and (max-width: 1024px){
        width: 20%;
    };
    @media screen and (max-width: 480px){
        width: 40%;
        font-size: 0.7rem;
        padding: 0.3em;
    };
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`;