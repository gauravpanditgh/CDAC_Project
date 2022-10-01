import React from 'react';
import $ from 'jquery';
import { BrowserRouter, Link } from 'react-router-dom';

const Navbar = ()=>{
    return <React.Fragment>
         <div className="top-header">
			<div className="container">
				<div className="top-header-right">
          <ul>
						
						<div className="clearfix"> </div>
					</ul>
        </div>
        <div className="top-header-right">
          <ul>
            <li className="">
			<Link to="/Login">
            Online Farmer's Market
			</Link>
            </li>
           <li><Link to="/Login">Login</Link></li>
						<li><Link to="/Register">Register</Link></li>
          </ul>
        </div>
        <div className="clearfix"> </div>
        </div>
        </div>


        {/* <div className="main-menu">
			<div className="container">
			<div className="head-nav">
				<span className="menu"onClick={()=>$( ".head-nav ul" ).slideToggle(300, function() {
							// Animation complete.
						  })}> </span>
				<ul>
					<li className="active"><Link to="/">Home</Link></li>
					<li><Link to="/Product">products</Link></li>
					<li><Link to="/About">about</Link></li>
					<li><Link to="/Contact">Contact</Link></li>
					<div className="clearfix"> </div>
				</ul>
			</div>	
									
				<div className="logo">
					<a href="/"><img src="/images/ab.png" title="" /></a>
				</div>		
			</div>
		</div> */}

    </React.Fragment>
}

export default Navbar;