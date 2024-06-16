import React from 'react';

export default class Logo extends React.Component{
    render(){
        return(
            <div className='logo'>
                <picture>
                    <source media='(max-width: 768px' srcSet='/img/logoRussoMobail.png' />
                    <source media='(min-width: 769px' srcSet='/img/logoRussoLarge100px.png' />
                    <img src='/img/logoRussoLarge100px.png' alt='Logo Russo'></img>
                    {/* <img src='/img/logoRussoLarge90x110.png' alt='Logo Russo '/> */}
                </picture>
            </div>
        );
    }
}