import axios from 'axios';
import React,{useState} from 'react';
import { useLocation } from 'react-router';
import Usernavbar from './usernavbar';

const Orderform = ()=>{
	const location = useLocation();
	const userdata = JSON.parse(sessionStorage.getItem("userdata"));
	const username = userdata.name;
	const useraddress = userdata.address;
	const usermobile = userdata.mobile;
	const cake = location.state.cakename;
	const quantity = location.state.quantity;
	const price = location.state.price;
	const[caketext,setCaketext] = useState('');
	const[deliverdate,setDeliverdate] = useState('');
	const id = location.state.id;
	console.log(deliverdate);
	const handleSubmit = (e)=>{
		if(caketext === "" || deliverdate === "" || username === "" || useraddress === "" || usermobile === ""){
			alert("please enter required details");
		}else{
		  axios.post('http://localhost:8080/api/orders',{email:userdata.email,prodid:id,caketext:caketext
		,deliverydate:deliverdate,quantity:quantity,amount:price}).then((res)=>{
			console.log(res.data);
			if(res.data.status === "success"){
				alert("order placed successfully");
			}else{
				alert("Try again");
			}
		});
        }
      }
    return <div>
        <Usernavbar name={location.state.name}address={location.state.address}mobile={location.state.mobile}id={id}/>
        <div className="content">
	<div className="main">
	   <div className="container">
		  <div className="register">
			  <div className="register-but">
		  	  <form> 
				 <div className="register-top-grid">
					<h3>ORDERING INFORMATION</h3>
					 <div className="wow fadeInLeft" data-wow-delay="0.4s">
						<span>Name<label>*</label></span>
						<input type="text" readOnly value={username} required/> 
					 </div>
					 <div className="wow fadeInRight" data-wow-delay="0.4s">
						<span>Address<label>*</label></span>
						<input type="text" readOnly value={useraddress} required/>
					 </div>
					 <div className="wow fadeInRight" data-wow-delay="0.4s">
						 <span>Mobile<label>*</label></span>
						 <input type="text" readOnly value={usermobile} required/> 
					 </div>
					 <div className="clearfix"> </div>
					   <a className="news-letter" href="#">
						 <label className="checkbox"></label>
					   </a>
					 </div>
				     <div className="register-bottom-grid">
						    <h3>ITEM INFORMATION</h3>
							 <div className="wow fadeInLeft" data-wow-delay="0.4s">
								<span>Name<label>*</label></span>
								<input type="text" readOnly value={cake}required/>
							 </div>
							 <div className="wow fadeInLeft" data-wow-delay="0.4s">
								<span>Info<label>*</label></span>
								<input type="text"value={caketext}onChange={(e)=>setCaketext(e.target.value)}required/>
							 </div>
							 <div className="wow fadeInLeft" data-wow-delay="0.4s">
								<span>Deliverdate<label>*</label></span>
								<input type="date"value={deliverdate}onChange={(e)=>setDeliverdate(e.target.value)}required/>
							 </div>
							 <div className="wow fadeInRight" data-wow-delay="0.4s">
								<span>Quantity<label>*</label></span>
								<input type="text" readOnly value={quantity}required/>
							 </div>
                              <div className="wow fadeInRight" data-wow-delay="0.4s">
								<span>Amount<label>*</label></span>
								<input type="text" readOnly value={price}required/>
							 </div>
					 </div>
					 <div className="clearfix"> </div>
					  <input type="button"onClick={handleSubmit} className="w3-button w3-pink" value="Order Now"/>
					   <div className="clearfix"> </div>
				</form>
				</div>
		   </div>
	     </div>
	    </div>
		</div>
        
    </div>
}
export default Orderform;