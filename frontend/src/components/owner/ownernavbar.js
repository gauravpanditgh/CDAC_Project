import React from 'react';
import $ from 'jquery';
import { BrowserRouter, Link ,useHistory} from 'react-router-dom';

const Ownernavbar = (props)=>{
	const history = useHistory();
	function logOut(){
		sessionStorage.clear()
		history.push({pathname:"/"})
	}
	const name = props.name;
	const address = props.address;
	const mobile = props.mobile;
	const handleSubmit = ()=>{
		 history.push({pathname:"/owneraccount",state:{name:name,address:address,mobile:mobile}});
	}
	const update = ()=>{
		 history.push({pathname:"/Productupload",state:{name:name,address:address,mobile:mobile}});
	}
	const orders = ()=>{
		 history.push({pathname:"/orderretrieve",state:{name:name,address:address,mobile:mobile}});
	}
	const retrieve = ()=>{
		 history.push({pathname:"/retrieveorder",state:{name:name,address:address,mobile:mobile}});
	}
	const remainder = ()=>{
		 history.push({pathname:"/remainder",state:{name:name,address:address,mobile:mobile}});
	}
	const products = ()=>{
		 history.push({pathname:"/products",state:{name:name,address:address,mobile:mobile}});
	}
	
    return <React.Fragment>
         <div className="top-header">
			<div className="container-fluid">
				<div className="top-header-left">
          <ul>
						<li><a style={{color:'white'}}href="" onClick={handleSubmit}>Profile</a></li>
						<li><a style={{color:'white'}}href="" onClick={update}>Add Product</a></li>
						<li><a style={{color:'white'}}href="" onClick={orders}>Orders</a></li>				
						<li><a style={{color:'white'}}href="" onClick={products}>Products</a></li>
						<div className="clearfix"> </div>
					</ul>
        </div>
        <div className="top-header-right">
          <ul>
            <li>
              <form action="/search">
                <input type="text" name="searchtext" />
				<input type="submit" value="" />
              </form>
            </li>
				<li><a href="#" onClick={logOut}>Logout</a></li>						
          </ul>
        </div>
        <div className="clearfix"> </div>
        </div>
        </div>


        <div className="main-menu">
			<div className="container">
			<div className="head-nav">
				<span className="menu"onClick={()=>$( ".head-nav ul" ).slideToggle(300, function() {
				})}> </span>
				<ul>
					<li className="active"><Link to="/">Home</Link></li>
					<li><a href="/product">products</a></li>
					<li><Link to="/About">about</Link></li>
					<li><Link to="/Contact">Contact</Link></li>
					<div className="clearfix"> </div>
				</ul>
			</div>		
				<div className="logo">
					<a href="/"><img src="images/ab.png" title="" /></a>
				</div>		
			</div>
		</div>

    </React.Fragment>
}

export default Ownernavbar;