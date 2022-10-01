import axios from 'axios';
import React,{useState} from 'react';
import { useLocation } from 'react-router';
import Ownernavbar from './ownernavbar';

const Productupload = ()=>{
	const [selectedFile, setselectedFile] = useState('');
	const [name, setname] = useState('');
	const [price, setprice] = useState('');
	const [category, setcategory] = useState('');
	const [description, setdescription] = useState('');
	const location = useLocation();
	const username = location.state.name;
	const address = location.state.address;
	const number = location.state.mobile;


	const fileUploadHandler = ()=>{
		if(selectedFile === "" || name === "" || price === "" || description === ""){
			alert("please fill fields");
		}else{
		const fd = new FormData();
		fd.append('image',selectedFile);
		fd.append('pname',name);
		fd.append("price",price);
		fd.append("description",description)
		fd.append("category",category)
		axios.post('http://localhost:8080/api/products',fd).then((res)=>{
			if(res.status === "success"){
				alert("cake uploaded successfully");
			}
		});
		
	}
}
		 return <div>
        <Ownernavbar name={username}address={address}mobile={number}/>
        <div className="content">
	<div className="main">
	   <div className="container">
		  <div className="register">
			  <div className="register-but">
		  	  <form> 
				 <div className="register-top-grid">
					<h3>UPLOAD PRODUCT</h3>
					 <div className="wow fadeInLeft" data-wow-delay="0.4s">
						<span>Pick Image<label>*</label></span>
						<input type="file"name="image"onChange={(e)=>setselectedFile(e.target.files[0])}required/> 
					 </div>
					 <div className="wow fadeInRight" data-wow-delay="0.4s">
						<span>Name<label>*</label></span>
						<input type="text"name="name"value={name}onChange={(e)=>setname(e.target.value)} required/>
					 </div>
					 <div className="wow fadeInRight" data-wow-delay="0.4s">
						 <span>Price<label>*</label></span>
						 <input type="text"name="price"value={price}onChange={(e)=>setprice(e.target.value)} required/> 
					 </div>
					 <div className="wow fadeInRight" data-wow-delay="0.4s">
						 <span>description<label>*</label></span>
						 <input type="text"name="description"value={description}onChange={(e)=>setdescription(e.target.value)} required/> 
					 </div>
					 <div className="wow fadeInRight" data-wow-delay="0.4s">
						 <span>Category<label>*</label></span>
						 <select name="category" value={category} onChange={(e)=>setcategory(e.target.value)} required> 
						 <option value=''>Select Category</option>
						 	 <option>Vegetables</option>
							 <option>Fruits</option>
							 <option>Spices</option>
							 <option>Flowers</option>
							 <option>Grains</option>
						 </select>
					 </div>
					 <div className="clearfix"> </div>
					  
					 </div>
				    
					 <div className="clearfix"> </div>
					  <input type="button"onClick={fileUploadHandler}className="w3-button w3-pink" value="submit"/>
					   <div className="clearfix"> </div>
				</form>
				
				</div>
		   </div>
	     </div>
	    </div>
		</div>
        
    </div>
	}
   
export default Productupload;