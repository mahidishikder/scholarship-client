import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Profile from "../pages/Profile/Profile";
import SignIn from "../pages/Login/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Secret/Secret";
import PrivateRoute from "../provider/PrivateRoute";
import Blog from "../pages/Blog/Blog";
import AllScholarships from "../pages/AllScholarships/AllScholarships";
import CardDetails from "../pages/AllScholarships/CardDetails/CardDetails";
import Error from "../pages/Error/Error";
import Payment from "../pages/Payment/Payment";


export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
      path:'/scholarsships',
      element:<AllScholarships></AllScholarships>
      },
      {
        path: '/scholarship/:id',
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/scholarship/${params.id}`),
      },
      // {
      //  path:'/shareReview',
      //  element:<ShareReview></ShareReview>
      // },
   
      {
        path:'/about',
        element:<About></About>
      },
      {
       path:'/payment',
       element:<Payment></Payment>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/signIn',
        element:<SignIn></SignIn>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'/secret',
        element:<PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ]
  },
]);