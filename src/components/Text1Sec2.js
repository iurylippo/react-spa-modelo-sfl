import React from 'react'

export default class Text1Sec2 extends React.Component{
    render(){
        return(
             <div className="text1Sec2">
                    <span><img src={this.props.srcImg1}/></span>
                    <span className="spanForStyleSec2">
                        <h3>
                            Titulo
                        </h3>
                        <p>
                            {this.props.text1}  
                        </p>    
                    </span>
                
                </div>    
        )
    }
}