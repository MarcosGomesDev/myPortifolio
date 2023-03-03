import React from 'react'
import { HeaderContainer, Image, HeaderContent, MenuOption, MenuHeader, Button } from './styles'
import Logo from '../../assets/icon.png'

interface Props {
    onClickToHome(elementRef: any): void,
    onClickToQuality(): void
    onClickToAbout(): void,
    onClickToService(): void,
}

const Header: React.FC<Props> = ({ onClickToHome, onClickToAbout, onClickToQuality }) => {
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
                    <MenuOption>Serviços</MenuOption>
                    <MenuOption>Conhecimento</MenuOption>
                    <MenuOption>Projetos</MenuOption>
                    <MenuOption>Contato</MenuOption>
                </MenuHeader>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header