import React,{useState,useEffect} from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import Ownernavbar from './owner/ownernavbar';
import axios from 'axios';
import { useLocation } from 'react-router';

export default function Orderretrieve() {
    const[order,setorder] = useState([]);
    const location = useLocation();
const name = location.state.name;
const address = location.state.address;
const number = location.state.mobile;

    useEffect(() => {
       axios.get('http://localhost:8080/api/orders').then((response)=>{
           setorder(response.data.data);
           console.log(response);
       })
    }, [])
    const handleSubmit = (id)=>{
      console.log(id);
      axios.put('http://localhost:8080/api/orders/'+id).then((res)=>{
        console.log(res);
        alert(res.data.data)
          window.location.reload(true);
      })
    }
  return (
      <div>
         <Ownernavbar name={name}address={address}mobile={number}/>
          <br/><br/>
          <div className='row'>
              {
                  order.map((orders,index)=>{
                      return <MDBCard className="col-sm-3 mb-2" style={{ maxWidth: '22rem',marginLeft:'auto',marginRight:'auto' }}key={index}>
      <MDBCardBody>
        <br/><br/>
        <MDBCardText style={{marginLeft:'22%',}}>
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
          <br/>
          {orders.status === 'Pending' ? (
        <button className="w3-button w3-pink"style={{marginLeft:"33.5%"}}onClick={()=>handleSubmit(orders.id)}>Delivered</button>
          ) : ""}
      </MDBCardBody>
       <br/><br/>
    </MDBCard>
   
                  })
              }
    </div>
      </div>
   
  );
}