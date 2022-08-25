import styled from "styled-components";

export const Container = styled.div`
    padding: 0 2em;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1160px){
    max-width: 1160px;
    margin: 0 auto;
    };
`;

export const Title = styled.span`
    color: skyblue;
    font-size: 2.2rem;
    font-weight: bold;
    margin: 0 auto;
    @media screen and (max-width: 480px) {
        margin-bottom: 1em;
        font-size: 1.8rem;
    };
`;

export const Btn = styled.button`
    margin-left: auto;
    font-size: 1rem;
    color: white;
    background-color: skyblue;
    padding: 0.3em 0.7em;
    border-radius: 5px;
    border: 1px solid skyblue;
    &:hover {
        cursor: pointer;
    }
    @media screen and (max-width: 480px) {
        padding: 0.5em 0.7em;
        font-size: 0.7rem;
    };
`;

export const Filter = styled.div`
    width: 80%;
    margin: 3em auto;
    background-color: lightblue;
    @media screen and (max-width: 480px) {
        margin: 1.5em auto;
    };
`;

export const Imgs = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Card = styled.div`
    flex-basis: 23%;
    margin-bottom: 3em;
    p {
        margin-bottom: 0.5em;
    }
    #dis {
        color: gray;
        font-size: 0.9rem;
    }
    #color {
        color: black;
    }
    
    @media screen and (max-width: 768px) {
        font-size: 0.9rem;
    };
    @media screen and (max-width: 480px) {
        flex-basis: 47%;
        font-size: 0.8rem;
        #dis {
            font-size: 0.7rem;
        }
    };
`;

export const Img = styled.img`
    max-width: 100%;
    height: auto;
    margin-bottom: 0.7em;
    border-radius: 10px;
    @media screen and (max-width: 480px) {
        margin-bottom: 0.5em;
    };
`;