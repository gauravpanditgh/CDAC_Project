import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navbar';

const Product = ()=>{
	const[products,setproducts]=useState([]);
	useEffect(() => {
	 axios.get('http://localhost:8080/api/products').then((response)=>{
		setproducts(response.data.data);
		console.log(response.data);
	})
	}, [])
    return <div>
			<Navbar/>
        <script type="text/javascript" src="https://unpkg.com/load-js@1.2.0"></script>
        <div className="biseller-info">
<div className="container">
    <h2>Products</h2>
<h3 className="new-models">new varieties</h3>
			<ul id="flexiselDemo3">
			{ products.map((prod,index)=>{
				return <li key={index}>
					<div className="biseller-column">
					<img src={'http://localhost:8080/'+prod.photo} alt="" className="veiw-img"/>
						<div className="veiw-img-mark">
							<Link to={'/Quickview/'+prod.prodid}>Quick view</Link>
						</div>
					<div className="biseller-name">
						<h4>{prod.pname}</h4>
						<h5>Category: {prod.category}</h5>
						<p>&#8377; {prod.price}</p>
					</div>
								
					</div>
				</li>
			}) 
			}				
	     	</ul>
</div>
    </div>               
			<div className="clearfix"></div>

    </div>
}

export default Product;