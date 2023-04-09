import {useContext} from "react";
import { UsedContext } from "../context/Context";


export const useContx = () => {
	const hookContext = useContext(UsedContext);
	return hookContext;
};
