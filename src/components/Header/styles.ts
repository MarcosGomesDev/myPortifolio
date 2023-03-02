import styled from "styled-components";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

export const HeaderContainer = styled.header`
    background-color: #131313;
    width: 100%;
    height: 8rem;
    margin: 0 auto;
    padding: 0 2rem;
    position: fixed;
`;

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MenuHeader = styled.nav`
    display: flex;
    height: 8rem;
    align-items: center;
`;

export const MenuOption = styled.button`
    font-family: 'InterRegular';
    font-size: 16px;
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

export const Image = styled.img`
    width: 5rem;
    height: 5rem;
`