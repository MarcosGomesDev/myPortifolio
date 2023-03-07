import styled from "styled-components";

export const Container = styled.section`
    max-width: 140rem;
    margin: 0 auto;
    padding-top: 9rem !important;
    padding: 0 2rem;
    margin-bottom: 10rem !important;
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2`
    font-family: 'InterBold';
    font-size: 6rem;
    letter-spacing: .2rem;
    color: #2ef8a0;
    display: inline;
    padding-right: 1rem;

    @media (max-width: 430px) {
        font-size: 4.2rem;
    }
`;

export const Description = styled.p`
    width: 100%;
    max-width: 50rem;
    color: #fff;
    margin: 1rem 0 2rem 0;
    font-size: 1.8rem;
    text-align: center;
    font-family: 'BarlowRegular';
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 3rem;
`;

export const Link = styled.button`
    width: 29.7rem;
    height: 6rem;
    border-radius: .5rem;
    background-color: transparent;
    border: 2px solid #131313;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 2rem;
    transition: all ease .3s;
    color: #fff;
    cursor: pointer;
    
    :hover {
        border-color: #2ef8a0;
        transform: scale(1.1);
        color: #2ef8a0
    }
`;