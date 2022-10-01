import React,{useState} from 'react';
import $ from 'jquery';
import { BrowserRouter, Link, useHistory } from 'react-router-dom';

const Usernavbar = ()=>{
	const history = useHistory();
	const[search,setSearch] = useState('');
	function logOut(){
		sessionStorage.clear()
		history.push({pathname:"/"})
	}
	const handleSubmit = ()=>{
		 history.push({pathname:"/useraccount"});
	}
	const myOrder = ()=>{
		 history.push({pathname:"/myorder"});
	}
	const searchFunction = ()=>{
		if(search === ""){
			alert("Enter Cake Name");
		}else{
		history.push({pathname:"/search?searchtext="+search});
	}
	
}
    return <React.Fragment>
         <div className="top-header">
			<div className="container">
				<div className="top-header-left">
          			<ul>
						<li><a style={{color:'white'}} href="/useraccount" onClick={handleSubmit}>Hi {sessionStorage.getItem("uname")}</a></li>
						<li><a style={{color:'white'}} href="/Homeproduct">Products</a></li>
					</ul>
        </div>
        <div className="top-header-right">
          <ul>
            <li>
              <form>
                <input type="text"value={search}onChange={(e)=>setSearch(e.target.value)} />
					<input type="button" className="search"onClick={searchFunction} />			
              </form>
			  
            </li>
			<li><a style={{color:'white'}}href="" onClick={myOrder}>My Orders</a></li>
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
		</div>

    </React.Fragment>
}

export default Usernavbar;