import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateCapsule from './pages/CreateCapsule';
import MyVault from './pages/MyVault';
import OpenCapsule from './pages/OpenCapsule';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCapsule />} />
        <Route path="/vault" element={<MyVault />} />
        <Route path="/capsule/:id" element={<OpenCapsule />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
