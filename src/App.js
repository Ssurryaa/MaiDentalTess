import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Beranda from './pages/Beranda';
import CariDokter from './pages/CariDokter';
import Blog from './pages/Blog';
import DetailBlog from './pages/DetailBlog';
import Login from './pages/Login';
import Regis from './pages/Regis';
import SistemPakar from './pages/SistemPakar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Beranda />}>
          <Route path="sistem-pakar" element={<SistemPakar />} />
          <Route path="/cari-dokter" element={<CariDokter />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/detail-blog" element={<DetailBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regis" element={<Regis />} />
        </Route>
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

