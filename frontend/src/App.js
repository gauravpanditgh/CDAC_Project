import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Homepage from './components/home';
import { Login} from './components/login';
import Register from './components/register';
import { Contact } from './components/contact';
import { About } from './components/about';
import Product from './components/products';
import Quickview from './components/quickview';
import Homeproduct from './components/homeproduct';
import Forgetpassword from './components/forget_password';
import Productupload from './components/owner/productupload';
import { Detailspage } from './components/detailspage';
import Orderform from './components/orderpage';
import OwnerHomeproduct from './components/owner/homepage';
import Orderretrieve from './components/orderretrieve';
import Useraccount from './components/useraccount';
import { Myorder } from './components/myorder';
import Owneraccount from './components/owner/owneraccount';
import Retrieveorder from './components/owner/retrieveorder';
import Remainder from './components/owner/reminder';
import { Searchpage } from './components/searchpage';

function App() {
  return (
    <div className="App">
			
	<Router forceRefresh={true}>
	
		<Switch>
			<Route exact path="/">
				<Homepage/>
			</Route>
			<Route exact path="/Login">
				<Login/>
			</Route>
			<Route exact path="/Register">
				<Register/>
			</Route>
			<Route exact path="/Homeproduct">
				<Homeproduct/>
			</Route>
			<Route exact path="/Contact">
				<Contact/>
			</Route>
			<Route exact path="/About">
				<About/>
			</Route>
			<Route exact path="/Product">
				<Product/>
			</Route>
			<Route excat path="/Quickview/:id">
				<Quickview/>
			</Route>
			<Route exact path="/Forgetpassword">
				<Forgetpassword/>
			</Route>
			<Route exact path="/products">
				<OwnerHomeproduct/>
			</Route>
			<Route exact path="/Productupload">
				<Productupload/>
			</Route>
			<Route exact path="/detailspage/:prodid">
				<Detailspage/>
			</Route>
			<Route exact path="/order">
				<Orderform/>
			</Route>
			<Route exact path="/orderretrieve">
				<Orderretrieve/>
			</Route>
			<Route exact path="/useraccount">
				<Useraccount/>
			</Route>
			<Route exact path="/myorder">
			<Myorder/>
			</Route>
			<Route exact path="/owneraccount">
			<Owneraccount/>
			</Route>
			<Route exact path="/retrieveorder">
			<Retrieveorder/>
			</Route>
			<Route exact path="/remainder">
				<Remainder/>
			</Route>
			<Route exact path="/search">
				<Searchpage/>
			</Route>
		</Switch>
	</Router>
    </div>
  );
}

export default App;
