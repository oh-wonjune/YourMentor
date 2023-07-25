import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        text-decoration: none;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`;

export const NavLeft = styled.nav`
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    left: 0;
    width: 100px;
    overflow: hidden;
    background-color: #404040;

    @media(max-height: 600px) {
        overflow: auto;
        overflow-x: hidden;
        ::-webkit-scrollbar {
            border-radius: 10px;
            width: 10px;
            box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            width: 10px;
            box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            background-color: #999999;
        }
    }
`;

export const NavRight = styled.nav`
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    left: 100px;
    width: calc(100% - 100px);
    overflow: hidden;
`;

export const StyledUl = styled.ul`
    list-style-type: none;

    li {
        p {
            position: relative;
            color: rgb(255, 255, 255);
            font-size: 14px;
            display: flex;
            justify-content: center;
            font-weight: bold;
            text-align: center;
            padding: 25px;
            cursor: pointer;
            
            .icon{
                width: 28px;
                height: 28px;
                font-size: 17px;
                text-align: center;
                display: inline-block;
            }

            :hover {
                background-color: #333333;
                border-radius: 20px;
                transition: 0.7s;
            }
        }
    }
`;

export const Logo = styled.img`
    width: 50px;
    height: 50px;
`;