import React from 'react';

export default class Maps extends React.Component{
    render(){
        return(
            <div className='mapsImovel'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1909.2815625473709!2d-42.064329344758384!3d-16.848015601339824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x74d1833545a9073%3A0x9349aa9fe7ccebd4!2sPousada%20Serra%20Azul!5e0!3m2!1spt-PT!2sbr!4v1688776546766!5m2!1spt-PT!2sbr" title='google maps' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>  
        );
    }
}