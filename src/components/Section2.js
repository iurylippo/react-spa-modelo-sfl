import React from 'react';
import Text1Sec2 from './Text1Sec2'

export default class Section2 extends React.Component{
    render(){
        return(
           <div className="section2">
              
                    <Text1Sec2 
                        srcImg1="/img/icone-teacher.png" 
                        text1= "A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto "/>
                    <Text1Sec2 
                        srcImg1="/img/icone-talk.png" 
                        text1="A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto"/>
                    <Text1Sec2 
                        srcImg1="/img/icone-article.png" 
                        text1="A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto"/>
                    <Text1Sec2 
                        srcImg1="img/icone-autor.png" 
                        text1="A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto"/>
                
            </div>
        )
    }
}