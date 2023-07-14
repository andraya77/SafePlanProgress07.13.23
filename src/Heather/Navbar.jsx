import React from "react";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/contact">Contact</a>
				</li>
				{/* Add more navigation links as needed */}
			</ul>
		</nav>
	);
};

export default Navbar;
