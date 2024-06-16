import React from 'react';

export default class Information extends React.Component{
    render(){
        return(
            <div>
                <div className="information">
                    <ul>
                        <li>3 quartos</li>
                        <li>1 Suite</li>
                        <li>Ampla Sala </li>
                        <li>Copa conjugada</li>
                        <li>Ampla cozinha</li>
                        <li>Área de serviço</li>
                        <li>Área gourmet</li>
                        <li>uma vaga de garagem</li>
                        <li>Excelente localização</li>
                    </ul>
                    <br></br>
                    <br></br>
                </div>
                <div className="informationText">
                    <p>Apartamento com três quartos, piso em porcelanato, sala ampla, cozinha tipo americana com piso e revestimento em 
                        porcelanato, bancada em granito rosê, banho com box blindex transparente, área de serviço exclusiva e bem arejada.
                        Uma vaga de garagem demarcada e coberta com portaria 24hs.</p>
                    <p>Agende hoje mesmo uma visita e venha conhecer este imóvel. Preços poderão sofrer alterações sem aviso prévio, 
                        consulte condições com nosso departamento de locação.</p>
                </div>
            </div>
        );
    }
}