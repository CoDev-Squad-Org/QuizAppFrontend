import CreateQuizPage from "../pages/CreateQuizPage/CreateQuizPage";
import FinalQuizPage from "../pages/FinalQuizPage/FinalQuizPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import RankingPage from "../pages/RankingPage/RankingPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import TakeQuizPage from "../pages/TakeQuizPage/TakeQuizPage";
import UserPage from "../pages/UserPage/UserPage";
import LayoutPublic from "../LayoutPublic/LayoutPublic";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutPublic />,
		errorElement: <NotFoundPage />,
        children: [
            {
                index: '/home',
                element: <HomePage  />
            },
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/register",
				element: <RegisterPage />,
			},
			{
				path: "/user",
				element: <UserPage />,
			},
			{
				path: "/ranking",
				element: <RankingPage />,
			},
			{
				path: "/search",
				element: <SearchPage />,
			},
			{
				path: "/create",
				element: <CreateQuizPage />,
			},
			{
				path: "/take-quiz",
				element: <TakeQuizPage />,
			},
			{
				path: "/final",
				element: <FinalQuizPage />,
			},
		],
	},
]);

export default router;
