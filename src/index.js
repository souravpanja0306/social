import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages...
import Layout from "./Layout/Layout"
import Home from "./Pages/Home/Home"
import ForgotPassword from "./Pages/Auth/ForgotPassword"
import Signin from "./Pages/Auth/Signin"
import Signup from "./Pages/Auth/Signup"
import Profile from "./Pages/Profile/Profile"
import FriendList from "./Pages/Friends/FriendList"
import FriendRequest from "./Pages/Friends/FriendRequest"
import NotificationList from "./Pages/Notification/NotificationList"
import Messages from "./Pages/Messages/Messages"
import FriendSearch from "./Pages/Friends/FriendSearch"
import UserProfile from './Pages/Profile/UserProfile';
import CreatePost from './Pages/Post/CreatePost';

const router = createBrowserRouter([
  { path: "/", element: <Layout><Home /></Layout> },
  { path: "/profile", element: <Layout><Profile /></Layout> },
  { path: "/user-profile", element: <Layout><UserProfile /></Layout> },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  { path: "/forget-password", element: <ForgotPassword /> },
  { path: "/friend-list", element: <Layout><FriendList /></Layout> },
  { path: "/friend-request", element: <Layout><FriendRequest /></Layout> },
  { path: "/notification-list", element: <Layout><NotificationList /></Layout> },

  { path: "/create-post", element: <CreatePost /> },
  { path: "/messages", element: <Messages /> },
  { path: "/search", element: <FriendSearch /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();