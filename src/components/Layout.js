import React, { Fragment } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </Fragment>
  )
}

export default Layout;
