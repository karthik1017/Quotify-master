import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MDBBtn } from 'mdbreact'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';


class Quote extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            content: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.saveClick = this.saveClick.bind(this);
    }

    componentDidMount() {
        axios.get(`https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]`)
        .then(response => {      
            this.setState({
                title:response.data[0].content.replace(/<\/?[^>]+(>|$)/g,""),
                content:response.data[0].title
            })
        })      
    }

    saveClick() {
        var data;
        if (localStorage.getItem('items')) {
            data = JSON.parse(localStorage.getItem('items'));
            } else {
            data = [];
        }
        let itemsArray = []
        data.forEach(item => {
            itemsArray.push(item)
        })
        let quote = {};
        quote['title'] = this.state.title;
        quote['content'] = this.state.content;
        itemsArray.push(quote);
        localStorage.setItem('items', JSON.stringify(itemsArray));
    }

    handleClick(event) {
        event.persist()
        let num = Math.floor(Math.random() * 42) + 1
        axios.get(`https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=${num}`)
        .then(response => {      
            this.setState({
                title:response.data[0].content.replace(/<\/?[^>]+(>|$)/g,""),
                content:response.data[0].title
            })
        })
        console.log('Button Cicked')
        console.log(this.state)
    }

    render() {
        const divStyle = {
            backgroundColor: '#efefef',
            borderRadius: '25px'
          };
        
        const div2Style = {
            marginRight: '-65%'
        }
        

        return (
            <div>
                <div class="container p-4" style={divStyle}>
                    <h4>{this.state.title}</h4>
                    <h5>- {this.state.content}</h5>
                </div>
                <div style={div2Style} class="pt-2">
                    {/* <FontAwesomeIcon icon="bookmark" size="1.8x"/> Save to local */}
                    <Button size="small" onClick={this.saveClick}>
                        <BookmarkIcon/>
                        Save to Local
                    </Button>
                </div>
                <br></br>
                
                <MDBBtn onClick={this.handleClick}>Get another Quote</MDBBtn>
            </div>
        )
    }
}

export default Quote