import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import './App.scss'
const NotFound = lazy(() => import(/*webpackChunkName: 'PageNotFound'*/"./components/notFound/NotFound"));
const Home = lazy(() => import(/*webpackChunkName: 'Home'*/"./components/home/Home"));
const About = lazy(() => import(/*webpackChunkName: 'About'*/"./components/about/About"));
const Posts = lazy(() => import(/*webpackChunkName: 'Posts'*/"./components/posts/Posts"));
const PostsDetails = lazy(() => import(/*webpackChunkName: 'PostsDetails'*/"./components/posts-details/PostsDetails"));
const Interceptors = lazy(() => import(/*webpackChunkName: 'Interceptors'*/"./components/interceptors/Interceptors"));

const App = () => (
  <Router>
    <Header />
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Interceptors />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/posts' element={<Posts />} />
          <Route exact path='/posts/:url' element={<PostsDetails />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  </Router>
);

export default App