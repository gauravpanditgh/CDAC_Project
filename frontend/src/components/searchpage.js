import React,{useState,useEffect} from 'react';
import { useHistory, useLocation } from 'react-router';
import Usernavbar from './usernavbar';
import axios from 'axios';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const Searchpage = () => {
    const history = useHistory();
    let query=useQuery()
    console.log(query.get("searchtext"));
    const[newvariety,setNewvariety]=useState([]);
	useEffect(() => {
 axios.get('http://localhost:8080/api/products/search?searchtext='+query.get("searchtext")).then((response)=>{
		setNewvariety(response.data.data);
		console.log(response.data); 
	})
	}, [])
    return (
        <div>
             <Usernavbar/>
             <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">

          <h2></h2>
          <p></p>
        </div>

        <div className="row">
           {newvariety.map((prod,index)=>{
          return <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={index}>
            <div className="member" data-aos="fade-up" data-aos-delay="100">
           
              <div className="member-img">
                <img src={'http://localhost:8080/'+prod.photo} className="img-fluid" alt=""/>
                <div className="social">
                  <a><i className="fa fa-shopping-cart"onClick={()=>history.push({pathname:"/detailspage",state:{image:'uploads/images/'+prod.image,cakename:prod.name,price:prod.price,description:prod.description,id:prod.prodid}})}></i></a>
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
    )
}
