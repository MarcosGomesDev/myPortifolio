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
            <SubTitle>Olá, eu sou <InsideText>Marcos</InsideText></SubTitle>
            <Title>Full-stack Developer</Title>
            <Description>Explore meu portfólio e veja como minhas linhas de código podem transformar ideias em soluções digitais incríveis.</Description>
            <Button onClick={onClick}>Saiba mais</Button>

            <MenuSocial>
                <ButtonIcon>
                    <FaGithub />
                </ButtonIcon>
                <ButtonIcon>
                    <FaInstagram />
                </ButtonIcon>
                <ButtonIcon>
                    <FaLinkedin />
                </ButtonIcon>
            </MenuSocial>
        </Container>
    )
})

export default Home