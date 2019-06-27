import React from 'react'
import '../style.css'

class Title extends React.Component{
    render(){
        return(
            <div>
                <p className = "name">{this.props.children}</p>
            </div>
        )
    }
}
export default Title;