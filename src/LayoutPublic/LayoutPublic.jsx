import React from "react";
import { Outlet } from "react-router-dom";
import { Context } from "../components/context/Context";

const LayoutPublic = () => {
	return (
		<Context>
			<div>
				<Outlet />
			</div>
		</Context>
	);
};

export default LayoutPublic;
