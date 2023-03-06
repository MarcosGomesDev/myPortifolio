import styled from "styled-components";

export const Container = styled.section`
    padding: 0 2rem;
    padding-top: 9rem;
    max-width: 140rem;
    margin: 0 auto;
`;

export const Title = styled.h2`
    font-family: 'BarlowBold';
    font-size: 3rem;
    margin-bottom: 5rem;
    color: #2ef8a0;
    text-align: center;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    border-radius: .5rem;
`;

export const Description = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    opacity: 0;
`;

export const Card = styled.div`
    width: 45rem;
    min-width: 31rem;
    height: 25rem;
    border: .2rem solid #131313;
    background-color: #000;
    border-radius: .5rem;
    position: relative;

    :hover ${Image} {
        opacity: .2;
        transition: all .3s;
    }

    :hover ${Description} {
        opacity: 1;
        animation: Up 0.8s;
    }
`;

export const CardTitle = styled.h3`
    color: #fff;
    font-size: 2.4rem;
    font-family: 'BarlowRegular';
`;

export const CardContent = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    z-index: 2;
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 3rem 0;
`;

interface ButtonProps {
    bg?: string
}

export const Button = styled.button<ButtonProps>`
    width: 10rem;
    height: 3rem;
    border-radius: .5rem;
    background-color: ${({bg}) => bg ? bg : 'transparent'};
    border: 1px solid transparent;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .3s;

    :hover {
        transform: scale(1.1);
    }
`;

export const ButtonOutline = styled.button`
    width: 30rem;
    height: 4rem;
    border-radius: .5rem;
    background-color: transparent;
    border: .1rem solid #2ef8a0;
    color: #2ef8a0;
    cursor: pointer;
    transition: all .3s;

    :hover {
        background-color: #2ef8a0;
        transform: scale(1.1);
        color: #000;
    }
`;