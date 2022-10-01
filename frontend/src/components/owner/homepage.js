import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Ownernavbar from './ownernavbar';
import { useLocation } from 'react-router';

function OwnerHomeproduct(){
 const location = useLocation();
  const[products,setproducts]=useState([]);
	useEffect(() => {
	 axios.get('http://localhost:8080/api/products').then((response)=>{
		setproducts(response.data.data);
		console.log(response.data);
	})
	}, [])
  const name = location.state.name;
  const address = location.state.address;
  const mobile = location.state.mobile;
  const deleteCake = (id)=>{
    let result=window.confirm('Are you sure you want to delete this product ?' +id);
    if(result){
      axios.delete('http://localhost:8080/api/products/'+id).then((response)=>{
        window.location.reload(true);
      });
    }
  }
  
    return  <React.Fragment>
            <Ownernavbar name={name}address={address}mobile={mobile}/>
             <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2></h2>
          <p></p>
        </div>

        <div className="row">
           { products.map((prod,index)=>{
          return <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={index}>
            <div className="member" data-aos="fade-up" data-aos-delay="100">
           
              <div className="member-img">
                <img src={'http://localhost:8080/'+prod.photo} className="img-fluid" alt=""/>
                <div className="social">
                  <a><i className="fa fa-trash" onClick={()=>deleteCake(prod.prodid)}></i></a>
                </div>
              </div>
              
              <div className="member-info">
                <h4>{prod.pname}</h4>
                <span>{'$'+prod.price}</span>
              </div>
           
            </div>    
          </div>
           })
              }
        </div>
      </div>
    </section>
			</React.Fragment>
}

export default OwnerHomeproduct;