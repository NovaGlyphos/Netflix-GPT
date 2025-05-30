import Browse from "./Browse";
import Header from "./Header";
import Login from "./Login";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<Login />
    },
    {
        path:'/browse',
        element:<Browse />
    }
])

const Body = () => {
    return (
        <RouterProvider router={appRouter}/>
    )
}

export default Body;