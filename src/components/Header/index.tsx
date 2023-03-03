import React from 'react'
import { HeaderContainer, Image, HeaderContent, MenuOption, MenuHeader, Button } from './styles'
import Logo from '../../assets/icon.png'

interface Props {
    onClickToHome(elementRef: any): void,
    onClickToQuality(): void
    onClickToAbout(): void,
    onClickToService(): void,
    onClickToKnowledge(): void,
    onClickToProjects(): void,
    onClickToContact(): void
}

const Header: React.FC<Props> = ({ 
    onClickToHome,
    onClickToAbout,
    onClickToQuality,
    onClickToService,
    onClickToKnowledge,
    onClickToProjects,
    onClickToContact
}) => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Button onClick={onClickToHome}>
                    <Image src={Logo} />
                </Button>
                <MenuHeader>
                    <MenuOption onClick={onClickToHome}>Home</MenuOption>
                    <MenuOption onClick={onClickToAbout}>Sobre</MenuOption>
                    <MenuOption onClick={onClickToQuality}>Qualificações</MenuOption>
                    <MenuOption onClick={onClickToService}>Serviços</MenuOption>
                    <MenuOption onClick={onClickToKnowledge}>Conhecimentos</MenuOption>
                    <MenuOption onClick={onClickToProjects}>Projetos</MenuOption>
                    <MenuOption onClick={onClickToContact}>Contato</MenuOption>
                </MenuHeader>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header