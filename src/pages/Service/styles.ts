import styled from "styled-components";

export const Container = styled.section``;

export const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-bottom: 6rem;
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 4rem;
`;

export const Card = styled.div`
    width: 100%;
    min-width: 30rem;
    max-width: 37rem;
    height: 25rem;
    padding: 2rem;
    border: .2rem solid #131313;
    border-radius: .5rem;
`;

export const Title = styled.h3`
    max-width: 45rem;
    font-family: var(--font-poppins);
    font-weight: 700;
    font-size: 3.4rem;
    color: #fff;
`;

export const Text = styled.p`
    font-size: 1.9rem;
    letter-spacing: .1rem;
    color: #818181;
`;