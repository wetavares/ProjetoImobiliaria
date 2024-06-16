import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
                <div className='footer'>
                    <div>
                        <img src='/img/logoFooter.png' alt='Logomarca Footer Russo'></img>
                    </div>
                    <div>
                        Endereço - Rua Maria Mangela do Espirito Santo, 100 <br/>
                        Telefone - (33) 9 8837-2587<br/>
                        E-mail - wetavares@outlook.com
                    </div>
                </div>
        );
    }
}