import React, { forwardRef } from 'react'
import { Button, ButtonContainer, Container, Header, Text, Title } from './styles'
import { FaAward, FaBriefcase } from 'react-icons/fa'

interface Props {
    id: string
}

const Qualifications = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Container ref={ref}>
            <Header>
                <Title>Minhas qualificações e experiências</Title>
            </Header>

            <ButtonContainer>
                <Button active={true}>
                    <FaAward /> 
                    <Text>Qualificações</Text>
                </Button>
                <Button active={false}>
                    <FaBriefcase /> 
                    <Text>Experiências</Text>
                </Button>
            </ButtonContainer>
        </Container>
    )
})

export default Qualifications