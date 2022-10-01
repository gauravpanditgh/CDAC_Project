import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';

function Homeproduct(){
	const[newvariety,setNewvariety]=useState([]);
	useEffect(() => {
	 axios.get('http://localhost:3001/retrieveimages').then((response)=>{
		setNewvariety(response.data);
		console.log(response);
	})
	}, [])

    return <div>
		
		<div className="row1">
			<div className="column1">
					{	newvariety.map((prod,index)=>{
			return	<li key={index}>
					<div className="biseller-column">
					<img src={'uploads/images/'+prod.image} alt="" />
						
					<div className="biseller-name">
						<h4>{prod.name}</h4>
						<p>{prod.price}</p>
					</div>
								
					</div>
				</li>
				})	
	}	
			</div>
		</div>
		 
    </div>
}

export default Homeproduct;