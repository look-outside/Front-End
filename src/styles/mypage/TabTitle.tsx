import styled from "styled-components";

const TabTitle = styled.div`
    width: 100%;
    padding: 1.2em ;
    font-size: 1.3rem;
    font-weight: 420;
    border-bottom: 1px solid gray;
    @media screen and (max-width: 1024px){
        display: flex;
        justify-content: center;
    };
    @media screen and (max-width: 480px){
        font-size: 1rem;
    };
`;

export default TabTitle;