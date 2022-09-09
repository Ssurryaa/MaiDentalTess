import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from './component/Login';
import Regis from './component/Regis';
import CariDokter from './component/CariDokter';
import Blog from './component/Blog';
import DetailBlog from './component/DetailBlog';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cari-dokter" element={<CariDokter />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/detail-blog" element={<DetailBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regis" element={<Regis />} />
      </Routes>
    </div>
  );
}

export default App;

function Home() {
  return (
    <>
      <main>
        <Navbar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </main>
    </>
  );
}

