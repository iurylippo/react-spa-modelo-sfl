import React from 'react';
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "./Footer"

import img from '../assets/img/logo-cd-p.png';

export default class App extends React.Component{

    render(){
        const conteudoTxt = {
            texth1: "E -BOOK" ,
            texth2: "A MORALIDADE DO CAPITALISMO"
        }
        const conteudoForm = {
            textfh1: "Conheça o outro lado do debate" ,
            textfh2: "Preencha o formulário e receba o livro!",
            src: img,
            value:"BAIXAR O E -BOOK"
        }
        return(
            <div className="main">
                <Section1  {...conteudoTxt} {...conteudoForm}/>
                <Section2/>
                <Section3/>
                <Footer/>
            </div>



        )
    }
}
