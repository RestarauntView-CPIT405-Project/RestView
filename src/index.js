import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom"

import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import ReviewPage from './pages/ReviewPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="reviewpage" element={<ReviewPage />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

