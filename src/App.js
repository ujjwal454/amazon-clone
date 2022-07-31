import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { auth } from "./Firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/actions/action";
import SingleItem from "./Pages/SingleItem";
import ChexkOut from "./Pages/ChexkOut";
import Payment from "./Pages/Payment";
import Orders from "./Pages/Orders";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch(setUser(authUser));
			} else {
				dispatch(setUser(null));
			}
		});
	}, [dispatch]);
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Navbar />
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/register">
						<SignUp />
					</Route>
					<Route path="/productDetail/:id">
						<Navbar />
						<SingleItem />
					</Route>
					<Route path="/checkout">
						<Navbar />
						<ChexkOut />
					</Route>
					<Route path="/payment">
						<Navbar />
						<Payment />
					</Route>
					<Route path="/orders">
						<Navbar />
						<Orders />
					</Route>
					<Route>
						404 not found <br />
						<Link to="/"> Back to home </Link>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
