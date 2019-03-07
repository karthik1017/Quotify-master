import React from 'react'
import {MDBBtn} from 'mdbreact'

class RandomQuote extends React.Component {
    constructor() {
        super() 
        this.state = {
            title: '',
            content: ''
        }

        this.handleClick = this.handleClick.bind(this);
        window.data = JSON.parse(localStorage.getItem('items'));
    }

    componentDidMount() {
        let itemsArray = []
        window.data.forEach(item => {
            itemsArray.push(item)
        })
        this.setState({
            title: itemsArray[0].title,
            content: itemsArray[0].content
        })
    }

    handleClick(event) {
        event.persist()
        let itemsArray = []
        window.data.forEach(item => {
            itemsArray.push(item)
        })
        let length = itemsArray.length;
        let randomNumber = Math.floor(Math.random() * length)
        this.setState({
            title: itemsArray[randomNumber].title,
            content: itemsArray[randomNumber].content
        })
    }

    render() {
        const divStyle = {
            backgroundColor: '#efefef',
            borderRadius: '25px'
          };
        return (
            <div>
                <div class="container p-4" style={divStyle}>
                    <h4>{this.state.title}</h4>
                    <h5>- {this.state.content}</h5>
                </div>
                <br></br>
                
                <MDBBtn onClick={this.handleClick}>Get another Quote</MDBBtn>
            </div>
            
        )
    }
}

export default RandomQuote