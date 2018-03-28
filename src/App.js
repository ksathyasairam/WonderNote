import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';

import './App.css';
import Todo from './Todo';
import Login from './Login';
import Home from './Home';
import Register from './Register';



class App extends Component {

  constructor(props){

    super(props);

    this.state={

      db: {

        users: [{

          userName: "sathya",
          password: "password",


        }],
      

      },



    }
  }
 
  render() {
    return (

       //<div>

       <Todo/>
       //  <Switch>

       // <Route exact path='/' component={Home} />
       // <Route path='/login' component={Login} db= {this.state.db}/>
       // <Route path='/todo' component={Todo}/>
       // <Route path = '/register' component= {Register}/>
       // </Switch>


       // </div>          
       

    );
  }
}
const style = {
  margin: 15,
};
export default App;