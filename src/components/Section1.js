import React from 'react'; //pesquisar sobre formulários com bootstrep

export default class Section1 extends React.Component{
   
    render(){
       
        return(
        <div className= "section1">
               
                <div className="textSection1">
                
                        <span className="designSpanH1">
                                {this.props.texth1}
                        </span>
                        <span className="designSpanH2">
                                {this.props.texth2}
                        </span>
                        </div>
                <div className="formSection1">  
                        <img src={this.props.src} id="imgLogo"/>
                        <div className="formtext">
                                <span className="designSpanformH1">
                                        {this.props.textfh1}
                                </span>
                                <br/>
                                <span className="designSpanformH2">
                                        {this.props.textfh2}
                                </span>
                        </div>
                        <form>
                                <span className="spanForStyle"> 
                                        Name
                                </span>
                                <br/>
                                <input type="text" name= "texte"/>
                                <br/>
                                <span className= "spanForStyle">
                                        e-mail 
                                </span>
                                <br/>
                                <input type="email" name= "email"/>
                                <br/>
                                <span className="spanForStyle"> 
                                        Qual sua faixa etária?
                                </span>
                                <br/>  
                                <div className="selectStyle">
                                        <select className="style">
                                                <option></option>
                                                <option>15-18</option>
                                                <option>35-45</option>
                                                <option>45-55</option>
                                                <option>55-65</option>
                                                <option>65+</option>
                                         </select>
                                </div>                                      
                                <span className="spanForStyle">
                                                Empresa
                                </span>
                                <br/>
                                <input type="text" name= "texteEm"/>
                                           
                        </form>
                        <input type="button" value={this.props.value}/>  
                </div>
        </div>
    
        )
    }
}