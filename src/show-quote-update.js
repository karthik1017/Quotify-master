import React from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { MDBBtn, MDBIcon } from 'mdbreact'

class ShowQuote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.persist()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick(event) {
        event.persist()
        const data = JSON.parse(localStorage.getItem('items'));
        // console.log(typeof data)
        data.forEach(i => {
            if(i.content === this.props.location.state.content) {
                i.content = this.state.content;
                i.title = this.state.title;
                // console.log('true')
            }
        }); 

        var itemsArray = []
        data.forEach(item => {
            itemsArray.push(item)
        })

        localStorage.setItem('items', JSON.stringify(itemsArray));
        
    }

    render() {
        const divStyle = {
            backgroundColor: '#efefef',
            borderRadius: '25px'
          };
        const { title, content } = this.props.location.state;
        return (
            <div>
                <div class="container p-4" style={divStyle}>
                    <h4>{title}</h4>
                    <h5>- {content}</h5>
                </div>
                <div class="container">
                    <hr></hr>
                </div>
                <div class="container" style={divStyle}><div class="container p-4">
                    <form>
                        <TextField
                            id="outlined-multiline-static"
                            label="Quote"
                            multiline
                            rows="4"
                            margin="normal"
                            variant="outlined"
                            name="title"
                            onChange={this.handleChange}
                            fullWidth
                            /><br></br>
                        <TextField
                            id="outlined-name"
                            label="Author"
                            margin="normal"
                            variant="outlined"
                            name="content"
                            onChange={this.handleChange}
                            fullWidth
                            />
                        <MDBBtn outline onClick={this.handleClick} >Update <MDBIcon icon="edit" className="ml-1"/></MDBBtn>
                        <Link to='/list'><MDBBtn outline >Cancel <MDBIcon icon="ban" className="ml-1" /></MDBBtn></Link>
                    </form>
                </div></div>
            </div>
        )
    }

}

export default ShowQuote