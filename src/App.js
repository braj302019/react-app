import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import logo from './logo.svg';

import Home from './home/Home';
import ShoppingList from './shopping-list/ShoppingList';
import Game from './tic-tac-toc/Game';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shopping-list">Shoppling List</Link>
            </li>
            <li>
              <Link to="/tic-tac-toc">Tic Tac Toc</Link>
            </li>
          </ul>
        </nav>
        <div className="main">
          <Routes>
            <Route exact path="/" element={<Home logo={logo} />}></Route>
            <Route path="/shopping-list" element={<ShoppingList name="Me"/>}></Route>
            <Route path="/tic-tac-toc" element={<Game />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
