import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SearchPage from "../pages/SearchPage";
import IndividualPage from "../pages/IndividualPage";
import ResultsPage from '../pages/ResultsPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <SearchPage />,
            },
            {
                path: '/species/:speciesId',
                element: <IndividualPage />,
            },
            {
                path: '/searchresults',
                element: <ResultsPage />,
            },
        ],
    },
]);