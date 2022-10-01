import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router'
import Usernavbar from './usernavbar'
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

export const Myorder = () => {
    const email=sessionStorage.getItem('userid')
    const[order,setorder] = useState([]);
    useEffect(() => {
       axios.get('http://localhost:8080/api/orders/customer?email='+email).then((response)=>{
           setorder(response.data.data);
           console.log(response);
       })
    }, [])
    return (
        <div>
            <Usernavbar/> 
            <br/><br/>
          <div className='row'>
              {
                  order.map((orders,index)=>{
                      return <MDBCard className='col-sm-3' style={{ maxWidth: '22rem',marginLeft:'auto',marginRight:'auto' }}key={index}>
      <MDBCardBody>
        <MDBCardText style={{marginLeft:'22%',}}>
            <h5>Order No. {orders.id}</h5>
          {'Username : '+orders.customer.name}
          <br/><br/>
          {'Address : '+orders.customer.address}
           <br/><br/>
          {'Mobile : '+orders.customer.mobile}
           <br/><br/>
          {'Cakename : '+orders.product.pname}
           <br/><br/>
          {'Caketext : '+orders.caketext}
           <br/><br/>
          {'Deliverdate : '+orders.deliverydate}
           <br/><br/>
          {'Quantity : '+orders.quantity}
           <br/><br/>
          {'Amount : '+orders.amount}
          <br/><br/>
          {'Status : '+orders.status}
        </MDBCardText>        
      </MDBCardBody>
       <br/><br/>
    </MDBCard>
   
                  })
              }
    </div>  
        </div>
    )
}
