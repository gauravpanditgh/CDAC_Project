import axios from 'axios';
import React,{useState} from 'react'
import Navbar from './navbar';

export const Contact = () => {
	const[name,setName] = useState('');
	const[email,setEmail] = useState('');
	const[mobile,setMobile] = useState('');
	const[subject,setSubject] = useState('');

	const handleSubmit = (e)=>{
		if(name === "" || email === "" || mobile === "" || subject === ""){
			alert("please fill all fields");
		}else{
		axios.post('http://localhost:3001/contact',{name:name,email:email,mobile:mobile,subject:subject}).then((response)=>{
			if(response.data === "Your Contact Was Successfully Submited"){
				alert("Your Contact Was Successfully Submited")
			}
		});
	}
}
    return (
        <div>
		<Navbar/>
            <div className="content">
			<div className="container">
			<h2>Contact</h2>
			<div className="main-content">
					<div className="contact">
					<div className="contact_info">
			    	 	<h3>Find Us Here</h3>
			    	 		<div className="map">
					   			<iframe width="100%" height="175" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Lighthouse+Point,+FL,+United+States&amp;aq=4&amp;oq=light&amp;sll=26.275636,-80.087265&amp;sspn=0.04941,0.104628&amp;ie=UTF8&amp;hq=&amp;hnear=Lighthouse+Point,+Broward,+Florida,+United+States&amp;t=m&amp;z=14&amp;ll=26.275636,-80.087265&amp;output=embed"></iframe><br/><small><a href="https://maps.google.co.in/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Lighthouse+Point,+FL,+United+States&amp;aq=4&amp;oq=light&amp;sll=26.275636,-80.087265&amp;sspn=0.04941,0.104628&amp;ie=UTF8&amp;hq=&amp;hnear=Lighthouse+Point,+Broward,+Florida,+United+States&amp;t=m&amp;z=14&amp;ll=26.275636,-80.087265"className="map">View Larger Map</a></small>
					   		</div>
      				</div>
						<div className="section group">				
				<div className="col span_1_of_3">
					
      			<div className="company_address">
				     	<h3>Bakery Information :</h3>
						    	<p>500 Lorem Ipsum Dolor Sit,</p>
						   		<p>22-56-2-9 Sit Amet, Lorem,</p>
						   		<p>USA</p>
				   		<p>Phone:(00) 222 666 444</p>
				   		<p>Fax: (000) 000 00 00 0</p>
				 	 	<p>Email: <span>info@mycompany.com</span></p>
				   		<p>Follow on: <span>Facebook</span>, <span>Twitter</span></p>
				   </div>
				</div>				
				<div className="col span_2_of_3">
				  <div className="contact-form">
				  	<h3>Contact Us</h3>
					    <form>
					    	<div>
						    	<span><label>NAME</label></span>
						    	<span><input name="userName"onChange={(e)=>setName(e.target.value)} type="text" className="textbox"required/></span>
						    </div>
						    <div>
						    	<span><label>E-MAIL</label></span>
						    	<span><input name="userEmail"onChange={(e)=>setEmail(e.target.value)} type="text" className="textbox"required/></span>
						    </div>
						    <div>
						     	<span><label>MOBILE</label></span>
						    	<span><input name="userPhone"onChange={(e)=>setMobile(e.target.value)} type="text" className="textbox"required/></span>
						    </div>
						    <div>
						    	<span><label>SUBJECT</label></span>
						    	<span><textarea name="userMsg"onChange={(e)=>setSubject(e.target.value)}required> </textarea></span>
						    </div>
						   <div>
						   		<span><input type="button" value="Submit"onClick={handleSubmit}className="w3-button w3-pink"/></span>
						  </div>
					    </form>

				    </div>
  				</div>				
			  </div>
			</div>
			<div className="clear"> </div>
		</div>
		</div>
		</div>

	<div className="footer">
		<div className="container">
			<div className="footer-top">
				<div className="col-md-3 location">
					<h4>location</h4>
					<p>#04 Dist.City,State,PK</p>
					<h4>hours</h4>
					<p>Weekdays 7 a.m.-7 p.m.</p>
					<p>Weekends 8 a.m.-7 p.m.</p>
					<p>Call for Holidays Hours.</p>
				</div>
				<div className="col-md-3 customer">
					<h4>customer service</h4>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. </p>
					<h4>phone</h4>
					<h6>1(234)567-8910</h6>
					<h4>contact us</h4>
					<h6>contact us page.</h6>
				</div>
				<div className="col-md-3 social">
					<h4>get social</h4>
					<div className="face-b">
						<img src="images/foot.png" title="name"/>
						<a href="#"><i className="fb"> </i></a>
					</div>
					<div className="twet">		
						<img src="images/foot.png" title="name"/>
							<a href="#"><i className="twt"> </i></a>
					</div>	
				</div>
				<div className="col-md-3 sign">
					<h4>sign up for news later</h4>	
						<form>
							<input type="text" className="text" value="YOUR EMAIL" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'YOUR EMAIL ';}"/>
						</form>
				</div>
					<div className="clearfix"> </div>
			</div>
			<div className="footer-bottom">
			
			</div>
		</div>
	</div>
        </div>
    )
}
