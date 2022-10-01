import axios from 'axios';
import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const Forgetpassword = ()=>{
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    
    const handleSubmit = ()=>{
        axios.put('http://localhost:3001/updatepassword',{email:email,password:password});
    }

    return   <div>
	
         <div className="content">
	<div className="container">
		<div className="login-page">
			   <div className="account_grid">
			   <div className="col-md-6 login-left wow fadeInLeft" data-wow-delay="0.4s">
			  	 <h3>NEW CUSTOMERS</h3>
				 <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
				 <Link className="acount-btn"to="/Register">Create an Account</Link>
			   </div>
			   <div className="col-md-6 login-right wow fadeInRight" data-wow-delay="0.4s">
			  	<h3>CHANGE PASSWORD</h3>
				<p>If you have an account with us, please log in.</p>
				<form onSubmit={handleSubmit}>
				  <div>
					<span>Email Address<label>*</label></span>
					<input type="text"onChange={(e)=>setEmail(e.target.value)}required/> 
				  </div>
				  <div>
					<span>New Password<label>*</label></span>
					<input type="text"onChange={(e)=>setPassword(e.target.value)}required/> 
				  </div>
				 
				 <div className="loginbutton">
				  <input type="submit" value="UPDATE"/>
				 </div>
				 
			    </form>
			   </div>	
			   <div className="clearfix"> </div>
			 </div>
		   </div>
        </div>
    </div> 
</div>
}

export default Forgetpassword;