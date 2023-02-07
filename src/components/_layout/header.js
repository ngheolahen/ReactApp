import React, { useState, useEffect } from 'react';
import { Outlet, NavLink } from "react-router-dom";
import Cookies from 'universal-cookie';
import { apiListRegion } from "../../api/apiLogin";
import LoadingPage from "../../isLoadingPage"
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const cookies = new Cookies();
  const [regionSelect, setRegionSelect] = useState(sessionStorage.getItem("regionID"));
  const [dataRegion, setData] = useState([]);
  const ddlRegion_selected = (item) => {
    setLoading(true);
    sessionStorage.setItem("regionID", item.target.value);
    setRegionSelect(item.target.value);
    console.log(item.target.value);
    setLoading(false);
    //navigate("/");
    window.location.reload();
    setLoading(true);
  };
  const getListRegion = async () => {
    const region = await apiListRegion();
    setData(region);
  }
  const googleTranslateElementInit = () => {
    cookies.set('googtrans', '/en/en', 1);
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "",
        autoDisplay: false,
        layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL
      },
      "google_translate_element"
    );
  };
  const [isLoad, setLoad] = useState(true);
  useEffect(() => {
    try {
      if (isLoad) {
        var addScript = document.createElement("script");
        addScript.setAttribute(
          "src",
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
        setLoad(false);
        toggle();
      }
      getListRegion();
    }
    catch (err) {
    }
  }, [isLoad]);
  const [addClass, isStatus] = useState(false);
  const toggle = () => {
    isStatus(!addClass);
    if (addClass) {
      document.body.classList.add("toggle-sidebar");
    }
    else {
      document.body.classList.remove("toggle-sidebar");
    }
  } 
  const btnLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
  }


  return (
    <>
      {LoadingPage(isLoading)}
      <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <img className='logo-Login' src={require("../../assets/img/logo-IDC-2.png")} alt="" />
            {/* <span className="d-none d-lg-block">Adminstrator</span> */}
          </a>
          <i className='bi bi-list toggle-sidebar-btn' onClick={toggle} />
        </div>
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">

            <li className="nav-item dropdown">
              <a className="nav-link nav-icon" href="/" data-bs-toggle="dropdown">
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 4 new notifications
                  <a href="/"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning"></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger"></i>
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-check-circle text-success"></i>
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary"></i>
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="../../index.html">Show all notifications</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link nav-icon">
                <select className="form-select" id="ddlRegion" value={regionSelect} onChange={ddlRegion_selected}>
                  {
                    dataRegion?.map((option) => (
                      <option key={option.reg_sn} value={option.reg_sn}>{option.reg_id}</option>
                    ))
                  }
                </select>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link nav-icon">
                <div id="google_translate_element"></div>
              </div>
            </li>

            <li className="nav-item dropdown pe-3">
              <a className="nav-link nav-profile d-flex align-items-center pe-0" href="../../index.html" data-bs-toggle="dropdown">
                <img src={require('../../assets/img/profile-img.jpg')} alt="Profile" className="rounded-circle" />
                <span className="d-none d-md-block dropdown-toggle ps-2">{sessionStorage.getItem("userID")}</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>Kevin Anderson</h6>
                  <span>Web Designer</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                    <i className="bi bi-question-circle"></i>
                    <span>Need Help?</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item d-flex align-items-center" onClick={btnLogout} to="/login">
                    <i className="bi bi-box-arrow-right"></i><span>Sign Out</span>
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
export default Header;