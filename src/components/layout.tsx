import React from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';

const Layout = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
