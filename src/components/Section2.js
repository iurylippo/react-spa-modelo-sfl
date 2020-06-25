import React from 'react';
import Text1Sec2 from './Text1Sec2'

import img1 from '../assets/img/icone-teacher.png';
import img2 from '../assets/img/icone-talk.png';
import img3 from '../assets/img/icone-article.png';
import img4 from '../assets/img/icone-autor.png';

export default class Section2 extends React.Component{
    render(){
        return(
           <div className="section2">

                    <Text1Sec2
                        srcImg1={img1}
                        text1= "A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto "/>
                    <Text1Sec2
                        srcImg1={img2}
                        text1="A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto"/>
                    <Text1Sec2
                        srcImg1={img3}
                        text1="A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto"/>
                    <Text1Sec2
                        srcImg1={img4}
                        text1="A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto"/>

            </div>
        )
    }
}
