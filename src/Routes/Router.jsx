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
import ScholarshipForm from "../pages/ScholarshipFrom/ScholarshipForm";
import Dashboard from "../Layout/Dashboard";
import MyProfile from "../pages/MyProfile/MyProfile";
import Application from "../pages/Application/Application";
import Review from "../pages/Review/Review";
import UpdateApplicationForm from "../pages/UpdateApplicationForm/UpdateApplicationForm";
import UpdateReview from "../pages/updateReview/UpdateReview";
import AllUser from "../pages/AllUser/AllUser";
import AppledScholarship from "../pages/AppledScholarship/AppledScholarship";
import ManageScholarship from "../pages/ManageScholarship/ManageScholarship";
import ManageReview from "../pages/ManageReview/ManageReview";
import AddScholarship from "../pages/AddScholarship/AddScholarship";


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
        path:'/scholarshipForm',
        element:<ScholarshipForm></ScholarshipForm>
      },
      {
        path:'/AppliedScholarship/:id',
        element: <UpdateApplicationForm></UpdateApplicationForm>,
        loader: ({params}) => fetch(`http://localhost:5000/AppliedScholarship/${params.id}`)

      },
      {
        path:`/updateReview/:id`,
        element:<UpdateReview></UpdateReview>,
        loader:({params}) => fetch(`http://localhost:5000/review/${params.id}`)

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
  {
    path:'/dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      // normal user
      {
        path:'/dashboard/profile',
        element:<MyProfile></MyProfile>
      },
      {
        path:'/dashboard/applications',
        element:<Application></Application>
      },
      {
        path:'/dashboard/reviews',
        element:<Review></Review>
      },
      // admin user
      {
        path:'/dashboard/users',
        element:<AllUser></AllUser>
      },
      {
        path:'/dashboard/appliedScholarship',
        element:<AppledScholarship></AppledScholarship>
      },
      {
        path:'/dashboard/manageScholarship',
        element:<ManageScholarship></ManageScholarship>
      },
      {
        path:'/dashboard/manageReview',
        element:<ManageReview></ManageReview>
      },
      {
        path:'/dashboard/addScholarship',
        element:<AddScholarship></AddScholarship>
      }
    ]
  }
]);