import React from 'react';
import { GlobalStyles,Container, PrimaryHeader, MenuButton, PrimaryNav, NavItem, MainTitle, Description } from './styles'; // Assuming that the styles are in styles.js file
import { Helmet } from "react-helmet";
import { useRouter } from 'next/router';

const EntryComponent = () => {

    const router = useRouter();

    // Some function that changes page when called
    const goToMain = () => {
        router.push("/mainPage");
    };

    return (
        <div>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <GlobalStyles/>
            <Container style={{background: 'url("/entry.jpeg")',backgroundRepeat: "no-repeat", backgroundSize: "cover",backgroundPosition: "center"}}>
            <PrimaryHeader>
                <MenuButton aria-expanded={false}>
                </MenuButton>
                <PrimaryNav>
                    <NavItem><p onClick={goToMain}>Home</p></NavItem>
                    <NavItem><p>Login</p></NavItem>
                    <NavItem><p>Sign Up</p></NavItem>
                </PrimaryNav>
            </PrimaryHeader>
            <main>
                <MainTitle>당신의 멘토</MainTitle>
                <Description>오늘도 당신의 꿈을 응원해요.</Description>
            </main>
                </Container>
        </div>
    );
}

export default EntryComponent;