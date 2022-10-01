import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useHistory, useLocation } from 'react-router';
import { useParams } from 'react-router-dom';
import Usernavbar from './usernavbar';

export const Detailspage = (props) => {
const {prodid}=useParams()
const[check,setCheck] = useState('');
const history = useHistory();
const location = useLocation();
const amount = check*(location.state.price);
const id=location.state.id;
const [product,setProduct]=useState({})
	useEffect(()=>{
		axios.get('http://localhost:8080/api/products/'+prodid)
			.then(response=>{
				console.log(response.data)
				setProduct(response.data.data)
		})
	},[])
    return (
        <div>
			  <Usernavbar name={location.state.name}address={location.state.address}mobile={location.state.mobile}id={id}/>
            <div className="details">
<div className="container">
<div className="row single">
<div className="col-md-9">
				  <div className="single_left">
				 
					<div className="grid images_3_of_2">
						<img src={'http://localhost:8080/'+product.photo} className="img-responsive" />
						 <div className="clearfix"></div>		
				  </div>
				  <div className="desc1 span_3_of_2">
					<h3>{product.pname}</h3>
					<p>{'Rs: '+product.price}</p>
					
					<div className="det_nav1">
						<h4>Select Quantity :</h4>
							<div className=" sky-form col col-4">
								<ul onChange={(e)=>setCheck(e.target.value)}value={check}>
									<li><label className="checkbox"><input type="radio" name="checkbox"value="1"/><i></i>1kg</label></li>
									<li><label className="checkbox"><input type="radio" name="checkbox"value="2"/><i></i>2kg</label></li>
									<li><label className="checkbox"><input type="radio" name="checkbox"value="3"/><i></i>3kg</label></li>
									<li><label className="checkbox"><input type="radio" name="checkbox"value="4"/><i></i>4kg</label></li>
									 <div className="clearfix"></div>
								</ul>
							</div>
							 <div className="clearfix"></div>
					</div>
					<div className="single-bottom1">
						<h6>Details</h6>
						<h5 className="prod-desc">{product.description}</h5>
					</div>
					<div>
						<button className="w3-button w3-pink"onClick={()=>{if(check === ""){alert("Select quantity")}else{history.push({pathname:"/order",state:{name:location.state.name,address:location.state.address,mobile:location.state.mobile,cakename:location.state.cakename,quantity:check,price:amount,id:prodid}})}}}>Buy</button>
					</div>
					
			   	 </div>
          	    <div className="clearfix"></div>
          	   </div>
          	    
				
			</div>
		</div>
	</div>
</div> 
</div>
    )
}
