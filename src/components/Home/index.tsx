import React, {} from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Button, ButtonIcon, Container, Description, Highlight, InsideText, MenuSocial, SubTitle, Title } from './styles'

interface Props {
    onClick(): void
}

const Home = React.forwardRef<HTMLElement, Props>(({onClick}, ref) => {
    return (
        <Container ref={ref}>
            <Highlight>Codificando ideias em resultados</Highlight>
            <Title>Olá, eu sou <InsideText>Marcos</InsideText></Title>
            <SubTitle>Full-stack Developer</SubTitle>
            <Description>Explore meu portfólio e veja como minhas linhas de código podem transformar ideias em soluções digitais incríveis.</Description>
            <Button onClick={onClick}>Saiba mais</Button>

            <MenuSocial>
                <ButtonIcon onClick={() => window.open('https://github.com/MarcosGomesDev')}>
                    <FaGithub />
                </ButtonIcon>
                <ButtonIcon onClick={() => window.open('https://www.instagram.com/markkin_sg/')}>
                    <FaInstagram />
                </ButtonIcon>
                <ButtonIcon onClick={() => window.open('https://www.instagram.com/markkin_sg/')}>
                    <FaLinkedin />
                </ButtonIcon>
            </MenuSocial>
        </Container>
    )
})

export default Home