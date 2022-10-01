import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router';
import Usernavbar from './usernavbar';
const Homeproduct=()=>{
  const history = useHistory();
  const[products,setproducts]=useState([]);
	useEffect(() => {
 axios.get('http://localhost:8080/api/products').then((response)=>{
		setproducts(response.data.data);
		console.log(response); 
	})
	}, [])
    return  <div>
              <Usernavbar name="test" address="test" mobile="test" id="0"/>
             <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">

          <h2 style={{color:'red'}}>Products List</h2>
          <p></p>
        </div>

        <div className="row">
           {products.map((prod,index)=>{
          return <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={prod.prodid}>
            <div className="member" data-aos="fade-up" data-aos-delay="100">
           
              <div className="member-img">
                <img src={'http://localhost:8080/'+prod.photo} className="img-fluid" alt=""/>
                <div className="social">
                  <a><i className="fa fa-shopping-cart"onClick={()=>history.push({pathname:"/detailspage/"+prod.prodid,state:{image:'uploads/images/'+prod.image,cakename:prod.pname,price:prod.price,description:'Test',id:prod.prodid}})}></i></a>
                </div>
              </div>
              
              <div className="member-info">
                <h4>{prod.pname}</h4>
                <span>{'Rs.'+prod.price}</span>
              </div>
           
            </div>    
          </div>
           })
              }
        </div>
      </div>
     
    </section>
			</div>
}

export default Homeproduct;