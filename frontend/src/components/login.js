import axios from 'axios';
import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Navbar from './navbar';
// import {useNavigate} from 'react'

export const Login = () => {
	const history = useHistory();
	const[email,setEmail] = useState('');
	const[password,setPassword] = useState('');
	const[checkbox,setCheckbox] = useState(false);
	const[userdata,setUserdata] = useState({});
	const[ownerdata,setOwnerdata] = useState({});
	const handleSubmit=(e)=>{
		// e.preventDefault();
		if(checkbox === false){
			if(email === "" || password === ""){
				alert("please enter email and password");
			}else{
	axios.post('http://localhost:8080/api/customers/validate/',{userid:email,pwd:password,role:'Customer'}).then(async(response)=>{
		//console.log(response.data)
		sessionStorage.setItem("uname",response.data.data.name)
		sessionStorage.setItem("userid",response.data.data.email)
		sessionStorage.setItem("userdata",JSON.stringify(response.data.data))
		await setUserdata(response.data);
		})
		.catch(error=>{
			alert("Invalid username or password")
			history.push({ pathname:'/login'});
		})
	}
	}else{
		if(email === "" || password === ""){
			alert("please enter email and password");
		}else{
		axios.get('http://localhost:8080/api/admin/validate/',{}).then(async(response)=>{
			await setOwnerdata(response.data);
		})
	}
	}
	if(checkbox == false){	
		console.log(userdata)
		
		history.push({pathname:'/Homeproduct',state:{name:userdata.name,address:userdata.address,mobile:userdata.phone}});	
	}else{
		console.log("Owner",ownerdata)
		history.push({pathname:'/products',state:{name:ownerdata.name,address:'Test',mobile:'Test'}});
	}
}	
//console.log(userdata);

    return (
        <div>
			<Navbar/>
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
			  	<h3>REGISTERED CUSTOMERS</h3>
				<p>If you have an account with us, please log in.</p>
				<form>
				  <div>
					<span>Email Address<label>*</label></span>
					<input type="text" onChange={(e)=>setEmail(e.target.value)}required/> 
				  </div>
				  <div>
					<span>Password<label>*</label></span>
					<input type="password" onChange={(e)=>setPassword(e.target.value)}required/> 
				  </div>
				  <div className="option">
					   <a className="news-letter" href="#">
						 <label className="checkbox"><input type="checkbox" name="checkbox" onChange={(e)=>setCheckbox(true)}/><i> </i>check if you are a owner</label>
					   </a>
				  </div>
				 <div className="loginbutton">
					  <Link className="forgot" to="/Forgetpassword">Forgot Your Password?</Link>
				  {/* <input type="button"className="w3-button w3-green"onClick={handleSubmit} value="Login"/> */}
				  <button className="w3-button w3-green" onClick={handleSubmit}>login</button>
				 </div>
				 
			    </form>
			   </div>	
			   <div className="clearfix"> </div>
			 </div>
		   </div>
        </div>
    </div> 
</div>
    )
}
