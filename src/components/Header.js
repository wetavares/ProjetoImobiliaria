import React from 'react';
import Address from './header/Address';
import Button from './header/ButtonMob';
import Logo from './header/Logo';
import Nav from './header/Nav';

export default class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                <Nav/>
                <Button/>
                <Logo/>
                <Address/>
                              

            </div>
        );
    }
}