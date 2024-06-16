import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

export default class App extends React.Component{

    render(){
        return(
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}