import React from 'react'
import { MDBBtn } from 'mdbreact'
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';

class List extends React.Component {
    constructor() {
        super() 
        this.state = {
            quotes: JSON.parse(localStorage.getItem('items'))
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        console.log(e.currentTarget.getAttribute('data-column'));
        let main = e.currentTarget.getAttribute('data-column');
        this.setState(prevState => {
            return {
                quotes: prevState.quotes.filter(q => q.title !== main)
            }
        })    
    }

    render() {
        const divStyle = {
            backgroundColor: '#efefef',
            borderRadius: '25px'
          };
        return (
            <div>
                {
                    this.state.quotes.map(i => {
                        return <div>
                                    <div class="container p-4" style={divStyle}>
                                    <h4>{i.title}</h4>
                                    {/* <div class="row justify-content-end">
                                        <div class="col-4">
                                        <h5>- {i.content}</h5>
                                        </div>
                                        <div class="col-4">
                                        <IconButton aria-label="Delete" >
                                            <DeleteIcon />
                                        </IconButton>
                                        </div>
                                    </div> */}
                                    <h5>- {i.content}</h5>
                                    <Link to={
                                        {
                                            pathname: `/list/${i.title}`,
                                            state: {
                                                title: i.title,
                                                content: i.content
                                            }
                                        }
                                    }><IconButton aria-label="Create">
                                        <CreateIcon />
                                    </IconButton></Link> 
                                    <IconButton aria-label="Delete" onClick={this.handleDelete} data-column={i.title}>
                                            <DeleteIcon />
                                    </IconButton>
                                    </div>
                                    <br></br>
                                </div>
                            
                    })    
                }  
            </div>
        )
    }
}

export default List