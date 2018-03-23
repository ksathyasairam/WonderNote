//CreateList.js
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardHeader,CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';





class CreateList extends React.Component{

	constructor(props){

		super(props);
		this.state=
		{
			expanded:false,
			editText:"",
		}
	}

	handleChange(e){

		this.setState({
			editText: e.target.value,
		})


	}

	handleClick(string){

		const text = this.state.editText;

		if(text!=""){

        this.setState({
			editText: ""
		})
		this.props.onClick(text);

		}
		

	}

	render(){

		const style = {
  			margin: 50,
  			width : 500,
  			
		};

		return(
			<div>
				<MuiThemeProvider>
					<Card style={style}>


	   				 <TextField value={this.state.editText} onChange = {this.handleChange.bind(this)}/>
	     		     <FlatButton label = "Add Note" onClick = {this.handleClick.bind(this)}/> 



	     		     </Card>
	     		</MuiThemeProvider>
	   		 </div>
	  	);
	}
   

}

export default CreateList;
