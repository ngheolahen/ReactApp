import React, { useEffect } from 'react';
import Header from './components/_layout/header';
import BodyLeft from './components/_layout/body-left';
import Footer from './components/_layout/footer';
import RenderBody from './router/renderBody';
import './App.css';
import { Outlet } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid text-center">
          <div className="row content">
            <BodyLeft />
            <div className=" text-left">
              <main id="main" className="main">
                <section className="section dashboard">
                  <div className="row">
                    <RenderBody />
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
        <Footer />
        <Outlet />
      </>
    );
  }
}