import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GreenCard from './components/GreenCard';
import About from './components/About';
import Products from './components/Products';
import Stats from './components/Stats';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';

function HomePage() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <GreenCard />
        <About />
        <Products />
        <Stats />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products-detail" element={<ProductsPage />} />
      <Route path="/contacts" element={<ContactPage />} />
    </Routes>
  );
}

export default App;

