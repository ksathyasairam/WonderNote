//ShowList.js

import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardHeader,CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';




function ItemRow (props){
	const style = {
  			position:'relative',
  			width : '50%',
  			margin: '0 auto',
  			padding: '10px'
  			
  			};

  	const divstyle = {


  		display: 'flex',
  		flexDirection: 'row',
  		overflow : 'auto'
  	}

  	const buttonstyle = {
  		float:'right',
  		color:'red',
  	}
	return(
		<div>
		
			<MuiThemeProvider>
				<Card style= {style}>
					<div style = {divstyle}>
					<p style = {{width:'85%',overflow:'auto'}}>
					{props.text}
					</p>
					<FlatButton style = {buttonstyle}label = {"DELETE"}  onClick={()=> props.onClick(props.value)} /> 
					</div>
					
				</Card>
				<br/>
			</MuiThemeProvider>

		</div>
	);
}


class ShowList extends React.Component{

	renderList(listlength){
		var list  = [];
			for (var i = 0; i < listlength; i++) {


				 list.push(<ItemRow key={i} value= {i} text={this.props.value[i]}  onClick= {this.handleClick.bind(this)}/>);
			}
		return (list);

	}

	handleClick(i){

		this.props.onClick(i);

	}

	render(){

		return(
			<div>
			
			{this.renderList(this.props.value.length)}
			
			</div>

			);
	}



}

export default ShowList;