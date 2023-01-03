import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Series } from './pages/Series';

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/series' element={<Series />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

const Layout = ({ children }) => {
  return (
    <div className='app'>
      <nav className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/series'>Series</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/anime'>Animes</Link>
      </nav>
      <main className='main'>{children}</main>
    </div>
  );
};
