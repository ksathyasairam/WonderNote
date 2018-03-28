//Todo.js

import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardHeader,CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';

import ShowList from './ShowList';
import CreateList from './CreateList';



class Todo extends React.Component{

	constructor(props){
   		super(props);
		
		this.state = {
			data: [],
		
		}

	}

	

	handleClick(string){

    var temp= this.state.data.push(string);

	this.setState({

		temp

	})

	;



	}

	handleClickDelete(i){

		var temp = this.state.data.splice(i,1);

		this.setState({


			temp
		})
		;


	}

	render(){
		
			const divstyle = {
				width:'50%',
				margin: '0 auto'

			}

		return (
			<div >
				<MuiThemeProvider>
 						<AppBar title="Todo"/>
 						<div style= {style}>

 							<CreateList onClick= { this.handleClick.bind(this)} />
 							<br/>
						<ShowList value = {this.state.data} onClick={this.handleClickDelete.bind(this)}/>
    				
 						</div>
						
  				</MuiThemeProvider>
			</div>
		);

 	}
}


const style = {
  margin: 15,
};


export default Todo;