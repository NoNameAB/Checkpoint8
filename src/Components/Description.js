import React from 'react'

class Description extends React.Component{
    render(){   
        return(
            <p className="description">{this.props.children}</p>
        )
    }
}
export default Description;