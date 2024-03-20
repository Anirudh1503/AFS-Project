import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Post from "./Post";
import Login from "./Login";
import Counter from "./Counter";
import ViewPosts from "./ViewPosts";
import Registeration from "./Registeration";
import CreatePost from "./CreatePost";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <h1>Page not Found</h1>,
  },
  {
    path: '/about',
    element: <About></About>,
  },
  {
    path: '/contact',
    element: <Contact></Contact>,
  },
  {
    path: '/post/:postId',
    element: <Post></Post>,
  },
  {
    path: '/post',
    element: <CreatePost></CreatePost>,
  },
  {
    path: '/posts',
    element: <ViewPosts></ViewPosts>,
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/counter',
    element: <Counter></Counter>
  },
  {
    path: '/register',
    element: <Registeration></Registeration>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
