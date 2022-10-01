import React from 'react';
import Navbar from './navbar';
import {Link} from 'react-router-dom';
const Homepage = ()=>{
    return <div>
			<Navbar/>
        <div className="container">
  {/* <div className="img-slider">
    <script src="js/responsiveslides.min.js"></script>
		
             <div  id="top" className="callbacks_container">
                <ul className="rslides" id="slider4">
                  <li>
                     <img  src="images/bg.png" className="img-responsive" alt=""/>
                     <div className="slider-caption">
                        <div className="slider-caption-left text-center">
					          	 	<h1>ARE YOU LOOKING FOR SWEET, STYLISH AND DELECIOUS BIRTHDAY CAKES?</h1>
					          	 	<p>DON'T WORRY, WE CAN HELP YOU! CHECK OUR BEST CAKE SECTION.</p>
					          	 	<Link to="/login"className="buy-btn">Buy Now</Link>
					          	 </div>
                       <div className="slider-caption-right">
					          	  	<a href="#"><img src="images/iteam.png" className="img-responsive" title="name" /></a>
					          	  </div>
					          	  <div className="clearfix"> </div>
                     </div>

                      <div className="share-on">
					          	<div className="share-on-grid">
					          		<div className="share-on-grid-left">
					          			<h3>Share On</h3>
					          		</div>
					          		<div className="share-on-grid-right">
					          			<a href="#"><span className="facebook"> </span></a>
					          			<a href="#"><span className="twitter"> </span></a>
					          			<div className="clearfix"> </div>
					          		</div>
					          		<div className="clearfix"> </div>
					          	</div>
					          	<div className="clearfix"> </div>
					          </div>
                  </li>
                  <li>
                    <img  src="images/bg.png" className="img-responsive" alt=""/>
                    <div className="slider-caption">
                      <div className="slider-caption-left text-center">
					          	 	<h1>ARE YOU LOOKING FOR SWEET, STYLISH AND DELECIOUS BIRTHDAY CAKES?</h1>
					          	 	<p>DON'T WORRY, WE CAN HELP YOU! CHECK OUR BEST CAKE SECTION.</p>
					          	 	<a className="buy-btn" href="#">Buy Now</a>
					          	 </div>
					          	  <div className="slider-caption-right">
					          	  	<a href="#"><img src="images/iteam.png" className="img-responsive" title="name"alt="image"/></a>
					          	  </div>
					          	  <div className="clearfix"> </div>
                    </div>
                    <div className="share-on">
					          	<div className="share-on-grid">
					          		<div className="share-on-grid-left">
					          			<h3>Share On</h3>
					          		</div>
					          		<div className="share-on-grid-right">
					          			<a href="#"><span className="facebook"> </span></a>
					          			<a href="#"><span className="twitter"> </span></a>
					          			<div className="clearfix"> </div>
					          		</div>
					          		<div className="clearfix"> </div>
					          	</div>
					          	<div className="clearfix"> </div>
					          </div>
                  </li>
                  <li>
                     <img src="images/bg.png" className="img-responsive" alt=""/>
                     <div className="slider-caption">
					          	 <div className="slider-caption-left text-center">
					          	 	<h1>ARE YOU LOOKING FOR SWEET, STYLISH AND DELECIOUS BIRTHDAY CAKES?</h1>
					          	 	<p>DON'T WORRY, WE CAN HELP YOU! CHECK OUR BEST CAKE SECTION.</p>
					          	 	<a className="buy-btn" href="#">Buy Now</a>
					          	 </div>
					          	  <div className="slider-caption-right">
					          	  	<a href="#"><img src="images/iteam.png" className="img-responsive" title="name" /></a>
					          	  </div>
					          	  <div className="clearfix"> </div>
					          </div>
                     <div className="share-on">
					          	<div className="share-on-grid">
					          		<div className="share-on-grid-left">
					          			<h3>Share On</h3>
					          		</div>
					          		<div className="share-on-grid-right">
					          			<a href="#"><span className="facebook"> </span></a>
					          			<a href="#"><span className="twitter"> </span></a>
					          			<div className="clearfix"> </div>
					          		</div>
					          		<div className="clearfix"> </div>
					          	</div>
					          	<div className="clearfix"> </div>
					          </div>
                  </li>
                  <li>
                     <img src="images/bg.png" className="img-responsive" alt=""/>
                     <div className="slider-caption">
					            <div className="slider-caption-left text-center">
					          	 	<h1>ARE YOU LOOKING FOR SWEET, STYLISH AND DELECIOUS BIRTHDAY CAKES?</h1>
					          	 	<p>DON'T WORRY, WE CAN HELP YOU! CHECK OUR BEST CAKE SECTION.</p>
					          	 	<a className="buy-btn" href="#">Buy Now</a>
					          	 </div>
					          	  <div className="slider-caption-right">
					          	  	<a href="#"><img src="images/iteam.png" className="img-responsive" title="name" /></a>
					          	  </div>
					          	  <div className="clearfix"> </div>
					          </div>
                    <div className="share-on">
					          	<div className="share-on-grid">
					          		<div className="share-on-grid-left">
					          			<h3>Share On</h3>
					          		</div>
					          		<div className="share-on-grid-right">
					          			<a href="#"><span className="facebook"> </span></a>
					          			<a href="#"><span className="twitter"> </span></a>
					          			<div className="clearfix"> </div>
					          		</div>
					          		<div className="clearfix"> </div>
					          	</div>
					          	<div className="clearfix"> </div>
					          </div>
                  </li>
                </ul>
             </div>
              <div className="clearfix"> </div>
  </div> */}
</div>

<div className="top-grids">
			<div className="container">
				<div className="col-md-4 top-grid">
					<div className="top-grid-head">
						{/* <h3>OUR CAKES</h3> */}
					</div>
					<div className="top-grid-info">
						<img src="images/img1.jpg" className="img-responsive" title="name"/>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
						{/* <span>$60</span> */}
						<div className="clearfix"> </div>
						<a className="btn" href="/Login">Buy Now</a>
					</div>
				</div>
				<div className="col-md-4 top-grid">
					<div className="top-grid-head">
						{/* <h3>OUR CAKES</h3> */}
					</div>
					<div className="top-grid-info">
						<img src="images/img2.jpg" className="img-responsive" title="name"/>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
						{/* <span>$80</span> */}
						<div className="clearfix"> </div>
						<a className="btn" href="/Login">Buy Now</a>
					</div>
				</div>
				<div className="col-md-4 top-grid">
					<div className="top-grid-head">
						{/* <h3>OUR CAKES</h3> */}
					</div>
					<div className="top-grid-info">
						<img src="images/img3.jpg" className="img-responsive" title="name"/>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
						{/* <span>$120</span> */}
						<div className="clearfix"> </div>
						<a className="btn" href="/Login">Buy Now</a>
					</div>
				</div>
				<div className="col-md-4 top-grid">
					<div className="top-grid-head">
						{/* <h3>OUR CAKES</h3> */}
					</div>
					<div className="top-grid-info">
						<img src="images/img4.jpg" className="img-responsive" title="name"/>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
						{/* <span>$120</span> */}
						<div className="clearfix"> </div>
						<a className="btn" href="/Login">Buy Now</a>
					</div>
				</div>
				<div className="col-md-4 top-grid">
					<div className="top-grid-head">
						{/* <h3>OUR CAKES</h3> */}
					</div>
					<div className="top-grid-info">
						<img src="images/img5.jpg" className="img-responsive" title="name"/>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
						{/* <span>$120</span> */}
						<div className="clearfix"> </div>
						<a className="btn" href="/Login">Buy Now</a>
					</div>
				</div>
				<div className="col-md-4 top-grid">
					<div className="top-grid-head">
						{/* <h3>OUR CAKES</h3> */}
					</div>
					<div className="top-grid-info">
						<img src="images/img6.jpg" className="img-responsive" title="name"/>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
						{/* <span>$120</span> */}
						<div className="clearfix"> </div>
						<a className="btn" href="/Login">Buy Now</a>
					</div>
				</div>
			</div>
			<div className="top-grids-bg">
				<span> </span>
			</div>
		</div>

		{/* <div className="bottom-grids">
			<div className="container">
				<div className="col-md-8 bottom-grid-left">
					<div className="col-md-3 bottom-grid-left-grid text-center">
						<img src="images/pic2.jpg" title="name"/>
						<h4>kids birthday cake</h4>
						<p>$40</p>
					</div>
					<div className="col-md-3 bottom-grid-left-grid text-center">
						<img src="images/pic1.jpg" title="name"/>
						<h4>kids birthday cake</h4>
						<p>$40</p>
					</div>
					<div className="col-md-3 bottom-grid-left-grid text-center">
						<img src="images/pic3.jpg" title="name"/>
						<h4>kids birthday cake</h4>
						<p>$40</p>
					</div>
					<div className="col-md-3 bottom-grid-left-grid text-center">
						<img src="images/pic4.jpg" title="name"/>
						<h4>kids birthday cake</h4>
						<p>$40</p>
					</div>
					<div className="clearfix"> </div>
					<span className="best-sale">Best sellers</span>
					<a href="#" className="order"> </a>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div> */}

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
						{/* <img src="images/foot.png" title="name"/> */}
						<a href="#"><i className="fb"> </i></a>
					</div>
					<div className="twet">		
						{/* <img src="images/foot.png" title="name"/> */}
							<a href="#"><i className="twt"> </i></a>
					</div>	
				</div>
				<div className="col-md-3 sign">
					
				</div>
					<div className="clearfix"> </div>
			</div>
		</div>
	</div>
    </div>
}

export default Homepage;