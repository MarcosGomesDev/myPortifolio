import React, { forwardRef } from 'react'
import { Button, ButtonOutline, Card, CardContent, CardTitle, Container, ContainerButton, Content, Description, Image, Title } from './styles'

import Background from '../../assets/background.jpg'

const Projects = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Container ref={ref}>
            <Title>Projetos</Title>
            <Content>
                <Card>
                    <Image src={Background} />
                    <Description>
                        <CardTitle>Landing Page</CardTitle>
                        <CardContent>
                                <Button
                                    onClick={() => window.open('https://github.com/MarcosGomesDev')}
                                    bg='#9900d3'
                                >
                                    Github
                                </Button>
                                <Button bg='#2ef8a0'>Site</Button>
                        </CardContent>
                    </Description>
                </Card>
            </Content>
            <ContainerButton>
                <ButtonOutline onClick={() => window.open('https://github.com/MarcosGomesDev')}>Abrir Github</ButtonOutline>
            </ContainerButton>
        </Container>
    )
})

export default Projects