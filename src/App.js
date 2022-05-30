import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import logo from './logo.svg';
import Microphone from './pages/microphone/microphone';

const Home = lazy(() => import('./pages/home/Home'));
const ShoppingList = lazy(() => import('./pages/shopping-list/ShoppingList'));
const Game = lazy(() => import('./pages/tic-tac-toc/Game'));
const Clock = lazy(() => import('./pages/clock/Clock'));
const Widgets = lazy(() => import('./pages/widgets/Widgets'));

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
            <li>
              <Link to="/clock">Clock</Link>
            </li>
            <li>
              <Link to="/widgets">Widgets</Link>
            </li>
            <li>
              <Link to="/microphone">Microphone</Link>
            </li>
          </ul>
        </nav>
        <div className="main">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/" element={<Home logo={logo} />}></Route>
              <Route path="/shopping-list" element={<ShoppingList name="Me" />}></Route>
              <Route path="/tic-tac-toc" element={<Game />}></Route>
              <Route path="/clock" element={<Clock />}></Route>
              <Route path="/widgets" element={<Widgets />}></Route>
              <Route path="/microphone" element={<Microphone />}></Route>
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}
