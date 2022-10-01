import axios from 'axios';
import React,{useState} from 'react';
import { useLocation } from 'react-router';
import Ownernavbar from './ownernavbar';


const Owneraccount = ()=>{
const location = useLocation();
const name = location.state.name;
const address = location.state.address;
const number = location.state.mobile;


    return <div>
         <Ownernavbar name={name}address={address}mobile={number}/>
        <div className="content">
	<div className="main">
	   <div className="container">
		  <div className="register">
			  <div className="register-but">
		  	  <form> 
				 <div className="register-top-grid">
					<h3>PERSONAL INFORMATION</h3>
					 <div className="wow fadeInLeft" data-wow-delay="0.4s">
						<span>Name<label>*</label></span>
						<input type="text"value={sessionStorage.getItem("uname")}required/> 
					 </div>
					 <div className="wow fadeInRight" data-wow-delay="0.4s">
						<span>Address<label>*</label></span>
						<input type="text"value={address} required/>
					 </div>
					 <div className="wow fadeInRight" data-wow-delay="0.4s">
						 <span>Mobile<label>*</label></span>
						 <input type="text"value={number} required/> 
					 </div>
					 <div className="clearfix"> </div>
					  
					 </div>
				    
				</form>
				</div>
		   </div>
	     </div>
	    </div>
		</div>
        
    </div>
}
export default Owneraccount;