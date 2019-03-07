import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import Quote from './quote';
import Local from './local';
import RandomQuote from './random-quote';
import List from './list';
import ShowQuote from './show-quote-update';
import IosQuoteOutline from 'react-ionicons/lib/IosQuoteOutline'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" class="text-center pt-3">
          <br></br>
          <h1 style={{'fontSize': '45px'}}>Quotify <IosQuoteOutline shake={false} fontSize="40px" /></h1>

          <div class="container pt-4">
            <div class="row">
              <MDBCol><Link to='./'>Random Quote (API)</Link></MDBCol>
              <MDBCol><Link to='./local'>Random Quote (Local)</Link></MDBCol>
              <MDBCol><Link to='./add'>Add Quote</Link></MDBCol>
              <MDBCol><Link to='./list'>List All Quote (Local)</Link></MDBCol>
            </div>
          </div><br></br><br></br>

          <Switch>
            <Route path='/' exact component={Quote} />
            <Route path='/add' exact component={Local} />
            <Route path='/local' exact component={RandomQuote} />
            <Route path='/list' exact component={List} />
            <Route path='/list/:title' component={ShowQuote} />
          </Switch>
        </div>    
      </BrowserRouter>      
      
    );
  }
}

export default App;
