import React, { forwardRef } from 'react'
import { Container, Content, Description, Header, Link, Title } from './styles'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Contact = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Container ref={ref}>
            <Header>
                <Title>Networking</Title>
                <Description>Você pode me enviar um email ou entrar em contato comigo através das minhas redes.</Description>
            </Header>
            <Content>
                <Link onClick={() => window.open('https://www.instagram.com/markkin_sg/')}>
                    <FaLinkedin />
                    Linkedin
                </Link>
                <Link onClick={() => window.open('https://github.com/MarcosGomesDev')}>
                    <FaGithub />
                    Github
                </Link>
                <Link onClick={() => window.open('https://www.instagram.com/markkin_sg/')}>
                    <FaInstagram />
                    Instagram
                </Link>
            </Content>
        </Container>
    )
})

export default Contact