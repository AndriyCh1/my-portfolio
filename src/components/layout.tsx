import React from 'react';
import Navigation from './navigation';
import Footer from './footer';
import Main from './main';

const Layout = () => {
  return (
    <div className="main-wrapper">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
