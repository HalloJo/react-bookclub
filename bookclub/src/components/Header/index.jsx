import React from 'react';
import { HeaderContainer, Logo } from './Header.styles';


const Header = () => (
    <HeaderContainer>
        <a href='/'>
            <Logo title="Book Club logo" />
        </a>
    </HeaderContainer>
)

export default Header