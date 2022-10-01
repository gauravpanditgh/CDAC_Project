import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router';
import Ownernavbar from './ownernavbar';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

const Remainder = ()=>{
     const location = useLocation();
const name = location.state.name;
const address = location.state.address;
const number = location.state.mobile;

	const[date,setDate] = useState('');
	const[cakename,setCakename] = useState('');
	const[quantity,setQuantity] = useState('');
	const[useraddress,setAddress] = useState('');
    const[order,setorder] = useState([]);
    useEffect(() => {
       axios.get('http://localhost:3001/retrieveremainder').then((response)=>{
           setorder(response.data);
           console.log(response);
       })
    }, [])
	const handleSubmit = (e)=>{
        if(date==="" || cakename==="" || quantity === "" || useraddress===""){
            alert("please fill fields");
        }else{
		axios.post('http://localhost:3001/remainder',{date:date,cakename:cakename,quantity:quantity,address:useraddress}).then((response)=>{
            if(response.data === "Remainder added successfully"){
                alert("Remainder added successfully");
                window.location.reload(true);
            }
        });
         
	}
}
    const deleteRemainder = (id)=>{
        axios.delete('http://localhost:3001/deleteremainder/'+id);
        window.location.reload(true);
    }

    return <div>
        <Ownernavbar name={name}address={address}mobile={number}/>
        <div className="content">
	<div className="main">
	   <div className="container">
		  <div className="register">
			  <div className="register-but">
		  	  <form> 
				 <div className="register-top-grid">
					 <div className="wow fadeInLeft" data-wow-delay="0.4s">
						<span>Date<label>*</label></span>
						<input type="date"onChange={(e)=>setDate(e.target.value)}style={{width: "94%"}}required/> 
					 </div>
					 <div className="wow fadeInRight" data-wow-delay="0.4s">
						<span>Cakename<label>*</label></span>
						<input type="text" onChange={(e)=>setCakename(e.target.value)}required/>
					 </div>
					 <div className="wow fadeInRight" data-wow-delay="0.4s">
						 <span>Quantity<label>*</label></span>
						 <input type="text"onChange={(e)=>setQuantity(e.target.value)}required/> 
					 </div>
                      <div className="wow fadeInRight" data-wow-delay="0.4s">
						 <span>Address<label>*</label></span>
						 <input type="text"onChange={(e)=>setAddress(e.target.value)}required/> 
					 </div>
					 <div className="clearfix"> </div>
					 
					 </div>
                    
		
					 <div className="clearfix"> </div>
					  <input type="button"onClick={handleSubmit}className="w3-button w3-pink" value="submit"/>
					   <div className="clearfix"> </div>
				</form>
				</div>
		   </div>
	     </div>
	    </div>
		</div>

         <br/><br/>
          <div>
              {
                  order.map((orders,index)=>{
                      return <MDBCard style={{ maxWidth: '22rem',marginLeft:'auto',marginRight:'auto' }}key={index}>
      <MDBCardBody>
        <br/><br/>
        <MDBCardText style={{marginLeft:'22%',}}>
          {'Date : '+orders.date}
          <br/><br/>
          {'Cakename : '+orders.cakename}
           <br/><br/>
          {'Quantity : '+orders.quantity}
           <br/><br/>
          {'Address : '+orders.address}
        </MDBCardText>
        <br/>
       <input type="button"style={{marginLeft:"33%"}}onClick={()=>deleteRemainder(orders._id)} className="w3-button w3-pink"value="Delete"/>
      </MDBCardBody>
       <br/><br/>
    </MDBCard>
   
                  })
              }
    </div>      
    </div>

}
export default Remainder;