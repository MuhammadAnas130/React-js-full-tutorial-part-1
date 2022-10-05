import React from "react";
import Navbar from "./MyComponents/Navbar";
import Home from "./MyComponents/pages/HomePage/Home";
import Services from "./MyComponents/pages/Services/Services";
import Products from "./MyComponents/pages/Products/Products";
import SignUp from "./MyComponents/pages/SignUp/SignUp";
import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Redirect,
	Navigate,
} from "react-router-dom";
import Footer from "./MyComponents/pages/Footer.js/Footer";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/services" exact element={<Services />} />
				<Route path="/products" exact element={<Products />} />
				<Route path="/sign-up" exact element={<SignUp />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
