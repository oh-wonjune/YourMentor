import styled, { createGlobalStyle, css } from 'styled-components';

const globalStyles = css`
    /* Resets */
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: 'Oswald', sans-serif;
        color: #fff;
    }

    button {
        cursor: pointer;
    }
`;

export const GlobalStyles = createGlobalStyle`
    ${globalStyles}
`;

export const Container = styled.div`
    margin: 0;
    width: 100%;
    min-height: 100vh;
`;

export const PrimaryHeader = styled.header`
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 1rem;
`;

export const MenuButton = styled.button`
    display: none;
    position: absolute;
    right: 2rem;
    height: 2rem;
    width: 2rem;
    z-index: 100;
    background: none;
    border: none;
    padding: 0;
    margin: 0;

    @media (max-width: 50rem) {
        display: block;
    }
`;

export const PrimaryNav = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 2rem;
    z-index: 99;
    padding: 1rem 1rem .5rem;
    justify-content: space-between;

    @media (max-width: 50rem) {
        flex-direction: column;
        position: fixed;
        padding-top: min(20vh, 10rem);
        padding-right: max(30%, 6rem);
        display: none;
    }
`;

export const NavItem = styled.li`
    p {
        text-decoration: none;
        color: inherit;
        font-size: 1.5rem;
        position: relative;
        transition: color 400ms ease-in-out;
        cursor: pointer;
        
        &::before {
            content: "";
            position: absolute;
            z-index: -1;
            width: 110%;
            left: -5%;
            top: -5%;
            background: white;
            height: 1%;
            transition: height 400ms ease-in-out;
        }

        &:hover {
            color: black;
            
            &::before {
                height: 105%;
            }
        }
    }
`;

export const MainTitle = styled.h1`
    text-align: center;
    line-height: 1;
    font-size: 5rem;
`;

export const Description = styled.p`
    text-align: center;
    line-height: 1;
    font-size: 2.5rem;
`;
