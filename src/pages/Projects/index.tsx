import React, { forwardRef } from 'react'
import { Button, ButtonOutline, Card, CardContent, CardTitle, Container, ContainerButton, Content, Description, Image, Title } from './styles'

import Background from '../../assets/background.jpg'

const Projects = forwardRef((props, ref) => {
    return (
        <Container>
            <Title>Projetos</Title>
            <Content>
                <Card>
                    <Image src={Background} />
                    <Description>
                        <CardTitle>Landing Page</CardTitle>
                        <CardContent>
                            <a href='https://github.com/MarcosGomesDev' target='_blank'>
                                <Button bg='#9900d3'>Github</Button>
                            </a>
                            <a>
                                <Button bg='#2ef8a0'>Site</Button>
                            </a>
                        </CardContent>
                    </Description>
                </Card>
            </Content>
            <ContainerButton>
                <a href='https://github.com/MarcosGomesDev' target='_blank'>
                    <ButtonOutline>Abrir Github</ButtonOutline>
                </a>
            </ContainerButton>
        </Container>
    )
})

export default Projects