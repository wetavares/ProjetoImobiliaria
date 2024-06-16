import React from 'react';

export default class Address extends React.Component{
    render(){
        return(
            <div className='address'>
                    <picture>
                        <source media='(max-width: 768px' srcSet='/img/Telegram-icone-20L.png' />
                        <source media='(min-width: 769px' srcSet='/img/Telegram-icone-20L.png' />
                        <img src='/img/Telegram-icone-20L.png' alt='Telegram Imobiliaria'/>
                    </picture>

                <strong>(33) 98837-2587</strong><br/>
                <strong>Rua Vitória, 33 Vila Magnólia - Araçuai</strong><br/>
                <strong>R$ 0.000,00</strong>
            </div>
        );
    }
}