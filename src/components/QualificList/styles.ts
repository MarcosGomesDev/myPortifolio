import styled from "styled-components";

export const Container = styled.div`
    margin-top: 5rem;
`;

export const List = styled.ul`
    max-width: 60rem;
    margin: 0 auto;
    animation: Up 0.8s;
    position: relative;

    ::before {
        content: '';
        position: absolute;
        left: 50%;
        width: 2px;
        height: 100%;
        background-color: #474747;
    }
`;

export const ListItem = styled.li`
    width: 30rem;
    padding: 1rem 2rem;
    position: relative;
    margin: 3rem 0;
    margin-bottom: 4rem;

    &.left {
        left: 50%;
    }

    &.right {
        right: 0rem;
    }

    &.left::after {
        content: '';
        position: absolute;
        top: 3rem;
        left: -.3rem;
        width: .8rem;
        height: .8rem;
        background-color: #2ef8a0;
        box-shadow: .1rem 0rem 1rem .1rem #2ef8a0;
        border-radius: 100%;
    }

    &.right::after {
        content: '';
        position: absolute;
        top: 3rem;
        right: -.5rem;
        width: .8rem;
        height: .8rem;
        background-color: #2ef8a0;
        box-shadow: .1rem 0rem 1rem .1rem #2ef8a0;
        border-radius: 100%;
    }
`;