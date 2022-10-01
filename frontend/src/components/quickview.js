import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import axios from 'axios';

export const Quickview = () => {
	const {id}=useParams()
	const [product,setProduct]=useState({})
	useEffect(()=>{
		axios.get('http://localhost:8080/api/products/'+id)
			.then(response=>{
				console.log(response.data)
				setProduct(response.data.data)
		})
	},[])
    return (
        <div>
            	<Navbar/>
            <div className="details">y
<div className="container">
<div className="row single">
<div className="col-md-9">
				  <div className="single_left">
				 
					<div className="grid images_3_of_2">								
						<img src={'http://localhost:8080/'+product.photo} />	
				  </div>
				  <div className="desc1 span_3_of_2">
					<h3>Special Cake -{product.pname}</h3>
					<p>Rs. {product.price}</p>
					<div className="det_nav">
						<h4>related cakes :</h4>
						<ul>
							<li><a href="#"><img src="/images/11.jpg" className="img-responsive" alt=""/></a></li>
							<li><a href="#"><img src="/images/12.jpg" className="img-responsive" alt=""/></a></li>
							<li><a href="#"><img src="/images/13.jpg" className="img-responsive" alt=""/></a></li>
							<li><a href="#"><img src="/images/14.jpg" className="img-responsive" alt=""/></a></li>
						</ul>
					</div>
					<div className="det_nav1">
						<h4>Select a cake :</h4>
							<div className=" sky-form col col-4">
								<ul>
									<li><label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>1kg</label></li>
									<li><label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>2kg</label></li>
									<li><label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>3kg</label></li>
									<li><label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>4kg</label></li>
									 <div className="clearfix"></div>
								</ul>
							</div>
							 <div className="clearfix"></div>
					</div>
					<div className="btn_form">
						<a href="#">buy</a>
					</div>					
			   	 </div>
          	    <div className="clearfix"></div>
          	   </div>
          	    <div className="single-bottom1">
					<h6>Details</h6>
					<p className="prod-desc">{product.description}</p>
				</div>
				<div className="single-bottom2">
					<h6>Related Products</h6>
						<div className="product">
						   <div className="product-desc">
								<div className="product-img">
		                           <img src="images/15.jpg" className="img-responsive " alt=""/>
		                       </div>
		                       <div className="prod1-desc">
		                           <h5><a className="product_link" href="#">Excepteur sint</a></h5>
		                           <p className="product_descr"> Vivamus ante lorem, eleifend nec interdum non, ullamcorper et arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>									
							   </div>
							  <div className="clearfix"></div>
					      </div>
						  <div className="product_price">
								<span className="price-access">$597.51</span>								
								<button className="button1"><span>Add to cart</span></button>
		                  </div>
						 <div className="clearfix"></div>
				     </div>
					  <div className="product">
						   <div className="product-desc">
								<div className="product-img">
		                           <img src="images/16.jpg" className="img-responsive " alt=""/>
		                       </div>
		                       <div className="prod1-desc">
		                           <h5><a className="product_link" href="#">Excepteur sint</a></h5>
		                           <p className="product_descr"> Vivamus ante lorem, eleifend nec interdum non, ullamcorper et arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>									
							   </div>
							   <div className="clearfix"></div>
					      </div>
						  <div className="product_price">
								<span className="price-access">$597.51</span>								
								<button className="button1"><span>Add to cart</span></button>
		                  </div>
						 <div className="clearfix"></div>
				     </div>
				     <div className="product">
						   <div className="product-desc">
								<div className="product-img">
		                           <img src="images/17.jpg" className="img-responsive " alt=""/>
		                       </div>
		                       <div className="prod1-desc">
		                           <h5><a className="product_link" href="#">Excepteur sint</a></h5>
		                           <p className="product_descr"> Vivamus ante lorem, eleifend nec interdum non, ullamcorper et arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>									
							   </div>
							   <div className="clearfix"></div>
					      </div>
						  <div className="product_price">
								<span className="price-access">$597.51</span>								
								<button className="button1"><span>Add to cart</span></button>
		                  </div>
						 <div className="clearfix"></div>
				     </div>
		   	  </div>
	       </div>
<div className="col-md-3 single_left">
			   <div className="block block-layered-nav first">
                  <p className="block-subtitle">Shopping Options</p>
            <dl id="narrow-by-list">
                 <dt className="odd">Price</dt>
                    <dd className="odd">
					<ol>
					    <li>
					                <a href="#"><span className="price">$100.00</span> - <span className="price">$199.99</span></a>
					                        (3)
					            </li>
					    <li>
					                <a href="#"><span className="price">$200.00</span> - <span className="price">$299.99</span></a>
					                        (2)
					            </li>
					    <li>
					                <a href="#"><span className="price">$300.00</span> and above</a>
					                        (1)
					            </li>
					</ol>
					</dd>
					                                                                    <dt className="even">Items</dt>
					                    <dd className="even">
					<ol>
					    <li>
					                <a href="#">Pineapple</a>
					                        (1)
					            </li>
					    <li>
					                <a href="#">Black Forest</a>
					                        (1)
					            </li>
					    <li>
					                <a href="#">Chocolate</a>
					                        (2)
					            </li>
					    <li>
					                <a href="#">Blueberry</a>
					                        (1)
					            </li>
					    
					</ol>
					</dd>
                                                                    <dt className="last odd">Flavours</dt>
                    <dd className="last odd">
					<ol>
					    <li>
					                <a href="#">Vennela</a>
					                        (2)
					            </li>
					    <li>
					                <a href="#">Strawberry</a>
					                        (2)
					            </li>
					    <li>
					                <a href="#">Butterscotch</a>
					                        (2)
					            </li>
					</ol>
					</dd>
                                            </dl>
          
                </div>
				
		     
			  <div className="tags">
				    	<h4 className="tag_head">Popular cakes</h4>
				         <ul className="tags_links">
							<li><a href="#">FlowerAura</a></li>
							<li><a href="#">My Flower Tree</a></li>
							<li><a href="#">Butterscotch</a></li>
							<li><a href="#">Strawberry</a></li>
							<li><a href="#">Vennela</a></li>
							<li><a href="#">Blueberry</a></li>
							<li><a href="#">Chocolate</a></li>
							<li><a href="#">Pineapple</a></li>
							
						</ul>
						<a href="#" className="link1">View all tags</a>
				 </div>
		   </div>		   
				<div className="clearfix"></div>	
	</div>
	</div>
	</div>
        </div>
    )
}
export default Quickview;
