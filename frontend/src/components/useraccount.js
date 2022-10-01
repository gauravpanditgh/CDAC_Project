import axios from 'axios';
import React,{useState} from 'react';
import { useLocation } from 'react-router';
import Usernavbar from './usernavbar';

const Useraccount = ()=>{
const location = useLocation();
const userdata=JSON.parse(sessionStorage.getItem("userdata"))
const [name,setName] = useState(userdata.name);
const [address,setAddress] = useState(userdata.address);
const [mobile,setMobile] = useState(userdata.mobile);
const [pwd,setPwd] = useState('');
const [password, setpassword] = useState('');
	const handleSubmit = (e)=>{
	axios.post('http://localhost:8080/api/customers/update',{name:name,address:address,mobile:mobile,email:userdata.email,pwd:pwd}).then((response)=>{
			alert("Information updated");
	});
	}
    return <div>
         <Usernavbar name={userdata.name} address={userdata.address} mobile={userdata.mobile} id={1}/>
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
						<input type="text" name="name" onChange={(e)=>setName(e.target.value)} value={name}required/> 
					 </div>
					 <div className="wow fadeInRight" data-wow-delay="0.4s">
						<span>Address<label>*</label></span>
						<input type="text"  name="address" onChange={(e)=>setAddress(e.target.value)} value={address} required/>
					 </div>
					 <div className="wow fadeInRight" data-wow-delay="0.4s">
						 <span>Mobile<label>*</label></span>
						 <input type="text" maxLength="10" name="mobile" onChange={(e)=>setMobile(e.target.value)} value={mobile} required/> 
					 </div>
					 <div className="clearfix"> </div>
					   <a className="news-letter" href="#">						 
					   </a>
					 </div>
				     <div className="register-bottom-grid">
						    <h3>CHANGE PASSWORD</h3>
							
							 <div className="wow fadeInRight" data-wow-delay="0.4s">
								<span>New Password</span>
								<input type="password" value={pwd} onChange={(e)=>setPwd(e.target.value)}required/>
							 </div>
					 </div>
					 <div className="clearfix"> </div>
					
					  <input type="button"onClick={handleSubmit}className="w3-button w3-pink" value="Update Information"/>
					   <div className="clearfix"> </div>
				</form>
				</div>
		   </div>
	     </div>
	    </div>
		</div>
        
    </div>
}
export default Useraccount;