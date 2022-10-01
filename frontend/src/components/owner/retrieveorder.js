import axios from 'axios';
import React, {useState, useEffect } from 'react';
import{Button, Form} from 'react-bootstrap';
import{Card} from 'react-bootstrap';
import Ownernavbar from './ownernavbar';

const Retrieveorder = ()=>{
    const[date,setDate] = useState('');
    const[data,setData] = useState([]);

      const handleSubmit = ()=>{  axios.get('http://localhost:8080/api/orders/').then((response)=>{
            setData(response.data.data);
        })
    }
    
     return<>
    <Ownernavbar/>
        <br/><br/>
       <Form.Group controlId="formBasicStartdate">
    <Form.Label style={{marginRight:'auto',marginLeft: '25%'}}>Pick Date</Form.Label>
    <Form.Control type="date"onChange={(e)=>setDate(e.target.value)} placeholder="Pick date"className="retrieve-date"/>
    <Button style={{marginLeft: '77%',
    marginTop: '-4%'}}onClick={handleSubmit}>Get</Button>
  </Form.Group>
  
  <Card className="permission-card">
            <br/><br/>
            <Card.Body style={{textAlign:'center'}}>
              {
                  data.map((datas,index)=>{
                      return <div key={index}><p>{'Name : '+datas.customer.name}</p>
                      <p>{'Address : '+datas.customer.address}</p>
                      <p>{'Mobile : '+datas.customer.mobile}</p>
                      <p>{'Cakename : '+datas.cakename}</p>
                      <p>{'Caketext : '+datas.caketext}</p>
                      <p>{'Deliverdate : '+datas.deliverdate}</p>
                      <p>{'Status : '+datas.status}</p>
                      <p>{'Quantity : '+datas.quantity}</p>
                      <p>{'Amount : '+datas.amount}</p>
                      <br/><br/>
                      </div>
                      
                  })
              }
            </Card.Body>
        </Card>
    </>
}
       
export default Retrieveorder;