import React from 'react'
import '../style.css'
class Image extends React.Component{
    render(){
        return(
            <img className = "img"src = {this.props.children} alt = "Error"></img>
        )
    }
}
export default Image;