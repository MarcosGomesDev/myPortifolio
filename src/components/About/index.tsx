import React from 'react'
import { ButtonCV, ButtonEmail, Container, ContainerAbout, ContainerButton, HighlightText, Image, Text, Title } from './styles'
import { IoIosArrowForward } from 'react-icons/io'
import { FaDownload } from 'react-icons/fa'
import Perfil from '../../assets/me.png'

const About = React.forwardRef<HTMLElement>((props, ref) => {
    return (
        <Container ref={ref}>
            <Image src={Perfil} />
            <ContainerAbout>
                <HighlightText>
                    <IoIosArrowForward color="#2ef8a0" style={{ marginLeft: -5, fontSize: 20 }} />
                    <IoIosArrowForward color="#2ef8a0" style={{ marginLeft: -20, fontSize: 20 }} />
                    DESENVOLVEDOR FULL-STACK
                </HighlightText>
                <Title>Desenvolvedor Full-Stack com experiências em React,
                    React-native, Node, JavaScript e Typescript.</Title>
                <Text>
                    Meu nome é Marcos, tenho 22 anos e atuo na área Web e Mobile. Possuo experiência como freelancer,
                    mas estou buscando uma primeira oportunidade no mercado como desenvolvedor Jr.</Text>
                <Text>
                    Logo abaixo tem o meu currículo com informçôes mais detalhadas sobre mim. Se preferir,
                    podemos marcar uma call atráves do meu e-mail que está disponibilizado.
                </Text>
                <ContainerButton>
                    <ButtonCV>
                        Baixar CV
                        <FaDownload style={{ marginLeft: 5 }} />
                    </ButtonCV>
                    <ButtonEmail>
                        Enviar e-mail
                    </ButtonEmail>
                </ContainerButton>
            </ContainerAbout>
        </Container>
    )
})

export default About