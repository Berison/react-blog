import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom";
import BlogPage from './components/BlogPage/BlogPage';
import BlogPageSingle from './components/BlogPageSingle/BlogPageSingle';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<BlogPage />}/>
        <Route path="posts/:id" element={<BlogPageSingle />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('main')
);
