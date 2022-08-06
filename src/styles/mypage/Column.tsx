import styled from "styled-components";

const Column = styled.ul`
    border-bottom: 1px solid gray;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0.8em;
    font-size: 1.1rem;
    #content {
        flex-basis: 80%;
        text-align: center;
    }
    #day {
        flex-basis: 20%;
        text-align: center;
    }
    @media screen and (max-width: 768px){
        font-size: 1rem;
    };
    @media screen and (max-width: 480px){
        font-size: 0.9rem;
        padding: 0.6em;
    };
`;

export default Column;