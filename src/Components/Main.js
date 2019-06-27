import React from 'react';
import NameButton from './NameButton.js'
import Title from './Title.js'
import Description from './Description.js'
import Image from './Image.js'

class Main extends React.Component{
    state = {
        name: "Harry",  
        description: "Harry's Description",
        img : "https://www.icetruck.tv/wp-content/uploads/2017/11/539828134-1.jpg",
    }
    render(){
        return(
            <div>
                <center>
                    <NameButton onSimpleClick = {() => {
                        this.setState({name: "Harry"})
                        this.setState({description: "Harry's Description"})
                        this.setState({img: "https://www.icetruck.tv/wp-content/uploads/2017/11/539828134-1.jpg"})
                    }}>Harry</NameButton>
                    <NameButton onSimpleClick = {() => {
                        this.setState({name: "Micheal"})
                        this.setState({description: "Micheal's Description"})
                        this.setState({img: "https://img.buzzfeed.com/buzzfeed-static/static/2015-09/18/16/campaign_images/webdr02/whats-your-ideal-man-2-17606-1442609791-1_dblbig.jpg"})
                    }}>Micheal</NameButton>
                    <NameButton onSimpleClick = {() => {
                        this.setState({name: "Jessica"})
                        this.setState({description: "Jessica's Description"})
                        this.setState({img: "https://jooinn.com/images/photo-of-woman-21.jpg"})
                    }}>Jessica</NameButton>
                </center>
                <center>
                    <Title>{this.state.name}</Title>
                </center>
                <center>
                    <Image>{this.state.img}</Image>
                </center>
                <center>
                    <Description>{this.state.description}</Description>
                </center>
                
            </div>
        )
    }
}
export default Main;