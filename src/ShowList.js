//ShowList.js

import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardHeader,CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';




function ItemRow (props){
	var style = {
		 margin: 30,
	};
	return(
		<div>
		
			<MuiThemeProvider>
				<Card style= {style}>
					<div>
					<CardText>{props.text}<FlatButton label = {"x"}  onClick={()=> props.onClick(props.value)} /> </CardText>
					
					</div>
					
				</Card>

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