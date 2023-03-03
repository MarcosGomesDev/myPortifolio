import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: #131313;
    width: 100%;
    height: 8rem;
    z-index: 10000;
    position: fixed;
    top: 0;
`;

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    position: relative;
    padding: 0 2rem;
`;

export const MenuHeader = styled.nav`
    display: flex;
    height: 8rem;
    align-items: center;

    @media (max-width: 1366px) {
        display: none;
    }
`;

export const MenuOption = styled.button`
    font-family: 'InterRegular';
    font-size: 2rem;
    color: #fff;
    background: none;
    border: none;
    margin: 0 15px;
    cursor: pointer;

    :hover {
        color: #2ef8a0;
        transition: ease 500ms;
        transform: scale(1.1);
    }
`;

export const Button = styled.button`
    background-color: transparent;
    cursor: pointer;
`;

export const Image = styled.img`
    width: 5rem;
    height: 5rem;
`