import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 3rem;
    padding-top: 9rem;

    @media (max-width: 1130px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Image = styled.img`
    min-width: 45rem;
    height: 45rem;
    object-fit: contain;
    border-radius: 100%;
    box-shadow: .1rem .1rem 1rem .1rem #2ef8a0;

    @media (max-width: 1000px) {
        min-width: 40rem;
        height: 40rem;
    }

    @media (max-width: 425px) {
        min-width: 30rem;
        height: 30rem;
    }

    @media (max-width: 300px) {
        display: none;
    }
`;

export const ContainerAbout = styled.div`
    max-width: 60rem;
`;

export const Title = styled.h3`
    font-family: 'BarlowRegular';
    font-size: 3.2rem;
    color: #fff;
    margin: 2rem 0;

    @media (max-width: 620px) {
        font-size: 2.3rem;
    }

    @media (max-width: 430px) {
        font-size: 2rem;
    }
`;


export const HighlightText = styled.p`
    font-family: 'InterRegular';
    font-size: 1.2rem;
    letter-spacing: .3rem;
    align-items: center;
    display: flex;
    gap: .5rem;
    color: #fff;
`;

export const Text = styled.p`
    font-size: 1.5rem;
    color: #ccc;
    margin-bottom: 3rem;
    font-family: 'InterRegular';
`;

export const ContainerButton = styled.div`
    width: 60%;
    display: flex;
    gap: 1rem;

    @media (max-width: 900px) {
        width: 100%;
        margin: 0 auto;
    }
`;

export const Link = styled.a`
    width: 100%;
`;

export const ButtonCV = styled.button`
    width: 100%;
    height: 4.5rem;
    border-radius: .5rem;
    font-weight: 600;
    cursor: pointer;
    transition: ease 500ms;
    background-color: #2ef8a0;

    :hover {
        background-color: rgba(46, 248, 160, 0.6);
        transform: scale(0.9);
    }

    @media (max-width: 900px) {
        :hover {
            transform: none;
            background-color: #2ef8a0;
        }
    }
`;

export const ButtonEmail = styled.button`
    width: 100%;
    height: 4.5rem;
    border-radius: .5rem;
    border: .1rem solid #2ef8a0;
    font-weight: 600;
    cursor: pointer;
    transition: all .3s;
    background-color: transparent;
    color: #2ef8a0;

    :hover {
        background-color: rgba(46, 248, 160, 1);
        color: #000;
        transform: scale(0.9);
    }

    @media (max-width: 900px) {
        :hover {
            transform: none;
            background-color: transparent;
            color: #2ef8a0;
        }
    }
`;