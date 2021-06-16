import React, {useState} from 'react';
import logoImg from '../../assets/logo.svg';
import Toggle from '../Toggle';
import {Container, Header, LogoImg, Title, MenuContainer, MenuItemLink, MenuItemButton, ToggleMenu, ThemeToggleFooter} from './styles';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu
    
} from 'react-icons/md';

import {useAuth} from '../../hooks/auth';
import {useTheme} from '../../hooks/theme';

const Aside: React.FC = () => {
    const {signOut} = useAuth();
    const {toggleTheme, theme} = useTheme();

    const [toggleMenuIsOpenned, setToggleMenuIsOpenned] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);



    const handleToggleMenu = () => {
        setToggleMenuIsOpenned(!toggleMenuIsOpenned);
    }

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme()
    }

    return(
        <Container menuIsOpen= {toggleMenuIsOpenned}>
           <Header>
                <ToggleMenu onClick = {handleToggleMenu}>
                    {toggleMenuIsOpenned ? <MdClose/> : <MdMenu/>}
                </ToggleMenu>


                <LogoImg src={logoImg} alt="Logo Minha Carteira" />  
                <Title>Minha Carteira</Title> 
            </Header> 
            <MenuContainer>
                <MenuItemLink href='/'>
                    <MdDashboard />
                    DashBoard
                </MenuItemLink>    
                <MenuItemLink href='/list/entry-balance'>
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>    
                <MenuItemLink href='/list/exit-balance'>
                    <MdArrowDownward />
                    Saídas
                    
                </MenuItemLink>    
                <MenuItemButton onClick={signOut}>
                    <MdExitToApp />
                    Sair
                </MenuItemButton>    
            </MenuContainer>
            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpenned}>
            <Toggle
                labelLeft='Light'
                labelRight='Dark'
                checked={darkTheme}
                onChange={handleChangeTheme}
            />
            </ThemeToggleFooter>
        </Container>
        
    );
}

export default Aside;