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
  			position: 'relavtive',
  			width : '50%',
  			margin: '0 auto',
  			padding: '10px'

  			
		};



  const buttonstyle = {
        float : 'right',
        
  }
		return(
			<div>
				<MuiThemeProvider>
					<Card style = {style}>
					<div style = {{display:'flex', overflow:'auto'}}>
					<div style = {{width:'85%'}}>
	   				 <TextField fullWidth= {true} underlineShow = {false} hintText = {"Enter a note"} multiLine={true} value={this.state.editText} onChange = {this.handleChange.bind(this)}/>
	   				</div>

	     		     <div style= {buttonstyle} >
	     		     <FlatButton label = "Add Note" onClick = {this.handleClick.bind(this)}/> 
	     		     </div>

	     		     </div>
	     		     </Card>
	     		</MuiThemeProvider>
	   		 </div>
	  	);
	}
   

}

export default CreateList;
