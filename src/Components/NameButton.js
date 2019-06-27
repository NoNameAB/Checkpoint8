import React from 'react'
import '../style.css'
export default class StateButton extends React.Component {
    render(){
        return(
            <button className = "btn" onClick = {this.props.onSimpleClick}>
                {this.props.children}
            </button>
        )
    }
}