import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import "./globals.css"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-white text-black'>
        <Header />
<ToastContainer/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
