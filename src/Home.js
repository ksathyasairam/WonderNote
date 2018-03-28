//Home.js
import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

class Home extends React.Component{


	
	render(){


		return(

				<div className="center">

				<h1> Welcome to Wonder Note</h1>

				<Link to="/login">
			
				<button>Login </button>
				</Link>
				<Link to="/register">
			
				<button>Register </button>
				</Link>

				<Link to="/todo">
				<h2> Go to App Directly </h2>
				<button>Todo </button>
				</Link>
				</div>




			);

	}


};



export default Home;