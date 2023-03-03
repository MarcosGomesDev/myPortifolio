import React from 'react'
import { Button, Container, Date, Description, Header, Icon, Image, Title } from './styles'

import { FaCalendarCheck, FaGraduationCap } from 'react-icons/fa'

interface Props {
    data: any
}

const QualificItem: React.FC<Props> = ({ data }) => {
    const active = true

    return (
        <Container>
            <Header>
                <Icon>
                    <FaGraduationCap style={{
                        color: '#2ef8a0',
                        fontSize: 28
                    }}
                    />
                </Icon>
                <Image src={data.image} />
            </Header>
            <Title>{data.title}</Title>
            <Description>
                {data.description}
            </Description>
            <Date>
                <FaCalendarCheck style={{ marginRight: 5 }} />
                {data.conclusion}
            </Date>
            {/* <Button>Ver certificado</Button> */}
        </Container>
    )
}

export default QualificItem