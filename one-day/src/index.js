import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contacth';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import News from './Components/Pages/News/News';
import NewDetails from './Components/Pages/NewsDetails/NewDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>





    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewDetails />} />


        <Route path="*" element={<div>Not Found</div>} />
      </Routes>


      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>
    </BrowserRouter>


  </>
);

