import React, { useState } from 'react'
import { HeaderContainer, Image, HeaderContent, MenuOption, MenuHeader, Button, ButtonMenu, ListMenu, IconButton, MenuMobile, ItemMenu } from './styles'
import Logo from '../../assets/icon.png'

import { AiOutlineMenu } from 'react-icons/ai'

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
    const [active, setActive] = useState<boolean>(false)

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

                <MenuMobile className={active ? 'active' : ''}>
                    <ButtonMenu onClick={() => setActive(!active)}>
                        <IconButton />
                    </ButtonMenu>
                    <ListMenu>
                        <ItemMenu>
                            <MenuOption onClick={onClickToHome}>Home</MenuOption>
                        </ItemMenu>
                        <ItemMenu>
                            <MenuOption onClick={onClickToAbout}>Sobre</MenuOption>
                        </ItemMenu>
                        <ItemMenu>
                            <MenuOption onClick={onClickToQuality}>Qualificações</MenuOption>
                        </ItemMenu>
                        <ItemMenu>
                            <MenuOption onClick={onClickToService}>Serviços</MenuOption>
                        </ItemMenu>
                        <ItemMenu>
                            <MenuOption onClick={onClickToKnowledge}>Conhecimentos</MenuOption>
                        </ItemMenu>
                        <ItemMenu>
                            <MenuOption onClick={onClickToProjects}>Projetos</MenuOption>
                        </ItemMenu>
                        <ItemMenu>
                            <MenuOption onClick={onClickToContact}>Contato</MenuOption>
                        </ItemMenu>
                    </ListMenu>
                </MenuMobile>
            </HeaderContent>


        </HeaderContainer>
    )
}

export default Header