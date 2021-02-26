import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Header from "./Header";

const Navbar: React.FC<RouteComponentProps> = ({ location, history }) => {
	const checkLanding: boolean = location.pathname === "/";
	const keyword = new URLSearchParams(location.search).get("keyword") || "";
	const handleSearch = (searchV: string) => {
		history.push(`/home?keyword=${searchV}`);
	};

	return !checkLanding ? (
		<Header handleSearch={handleSearch} keyword={keyword} />
	) : null;
};

export default withRouter(Navbar);
