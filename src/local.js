import React from 'react'
import TextField from '@material-ui/core/TextField';
import { MDBBtn, MDBIcon } from 'mdbreact'
import { Redirect } from 'react-router-dom'

class Local extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            content: '', 
            redirectTo: false 
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // window.itemsArray = [];
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
        var itemsArray = []
        data.forEach(item => {
            itemsArray.push(item)
            // console.log(item);
        })

        this.setState({ redirectTo: true })

        itemsArray.push(this.state);
        console.log(itemsArray)
        localStorage.setItem('items', JSON.stringify(itemsArray));
    }
    render() {
        if(this.state.redirectTo) {
            return <Redirect to="/list" /> 
        }
        return (
            <div class="container text-center">
                <div class="container"><div class="container"><div class="container"><div class="container"><div class="container"><div class="container"><div class="container"><div class="container"><div class="container">
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
                        <MDBBtn color="primary" rounded onClick={this.handleClick}>Save <MDBIcon icon="save" className="ml-1"/></MDBBtn>
                    </form>
                </div></div></div></div></div></div></div></div></div>
            </div>
        )
    }
}

export default Local