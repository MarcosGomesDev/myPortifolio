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
                <ButtonIcon href='https://github.com/MarcosGomesDev' target='_blank' rel='noopener'>
                    <FaGithub />
                </ButtonIcon>
                <ButtonIcon href='https://www.instagram.com/markkin_sg/' target='_blank' rel='noopener'>
                    <FaInstagram />
                </ButtonIcon>
                <ButtonIcon href='https://www.linkedin.com/in/marcos-gomes-dev/' target='_blank' rel='noopener'>
                    <FaLinkedin />
                </ButtonIcon>
            </MenuSocial>
        </Container>
    )
})

export default Home