import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import "../App.css";
import TableS from "./table";
import Statics from "./statics";
import "bootstrap/dist/css/bootstrap.min.css";
//import Paginations from './Pagination'


class index extends React.Component {
  constructor() {
    super();
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      // <body class="animsition">
      <div className="page-wrapper">
        <header className="header-desktop3 d-none d-lg-block">
          <div className="section__content section__content--p35">
            <div className="header3-wrap">
              <div className="header__logo">
                {/* <img
                  src={require("../images/SABIC-LOGO_tcm1010-14323.svg")}
                  alt="CoolAdmin"
                /> */}
              </div>
              <div className="header__navbar">
                <ul className="list-unstyled">
                  <li className="has-sub">
                    <a href="#">
                      <i className="fas fa-tachometer-alt"></i>Dashboard
                      <span className="bot-line"></span>
                    </a>
                    <ul className="header3-sub-list list-unstyled">
                      <li>
                        <a href="Index">Dashboard 1</a>
                      </li>
                      <li>
                        <a href="Index">Dashboard 2</a>
                      </li>
                      <li>
                        <a href="Index">Dashboard 3</a>
                      </li>
                      <li>
                        <a href="Index">Dashboard 4</a>
                      </li>
                    </ul>
                  </li>
                  {/* <li>
                    <a href="#">
                      <i className="fas fa-shopping-basket"></i>
                      <span className="bot-line"></span>eCommerce
                    </a>
                  </li> */}
                  <li>
                    <a href="charts">
                      {/* <i className="fas fa-trophy"></i> */}
                      <span className="bot-line"></span>Charts
                    </a>
                  </li>
                  <li className="has-sub">
                    <a href="#">
                      {/* <i className="fas fa-person"></i> */}
                      <span className="bot-line"></span>Profile
                    </a>
                    <ul className="header3-sub-list list-unstyled">
                      <li>
                        <a href="login">Login</a>
                      </li>
                      <li>
                        <a href="register">Register</a>
                      </li>
                      <li>
                        <a href="forget-pass">Forget Password</a>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="has-sub">
                    <a href="#">
                      <i className="fas fa-desktop"></i>
                      <span className="bot-line"></span>UI Elements
                    </a>
                    <ul className="header3-sub-list list-unstyled">
                      <li>
                        <a href="button">Button</a>
                      </li>
                      <li>
                        <a href="badge">Badges</a>
                      </li>
                      <li>
                        <a href="tab">Tabs</a>
                      </li>
                      <li>
                        <a href="card">Cards</a>
                      </li>
                      <li>
                        <a href="alert">Alerts</a>
                      </li>
                      <li>
                        <a href="progress-bar">Progress Bars</a>
                      </li>
                      <li>
                        <a href="modal">Modals</a>
                      </li>
                      <li>
                        <a href="switch">Switchs</a>
                      </li>
                      <li>
                        <a href="grid">Grids</a>
                      </li>
                      <li>
                        <a href="fontawesome">FontAwesome</a>
                      </li>
                      <li>
                        <a href="typo">Typography</a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>
              <div className="header__tool">
                <div className="header-button-item has-noti js-item-menu">
                  <div className="notifi-dropdown notifi-dropdown--no-bor js-dropdown">
                    <div className="notifi__title">
                      <p>You have 3 Notifications</p>
                    </div>
                    <div className="notifi__item">
                      <div className="bg-c1 img-cir img-40">
                        <i className="zmdi zmdi-email-open"></i>
                      </div>
                      <div className="content">
                        <p>You got a email notification</p>
                        <span className="date">April 12, 2018 06:50</span>
                      </div>
                    </div>
                    <div className="notifi__item">
                      <div className="bg-c2 img-cir img-40">
                        <i className="zmdi zmdi-account-box"></i>
                      </div>
                      <div className="content">
                        <p>Your account has been blocked</p>
                        <span className="date">April 12, 2018 06:50</span>
                      </div>
                    </div>
                    <div className="notifi__item">
                      <div className="bg-c3 img-cir img-40">
                        <i className="zmdi zmdi-file-text"></i>
                      </div>
                      <div className="content">
                        <p>You got a new file</p>
                        <span className="date">April 12, 2018 06:50</span>
                      </div>
                    </div>
                    <div className="notifi__footer">
                      <a href="#">All notifications</a>
                    </div>
                  </div>
                </div>
                <div className="header-button-item js-item-menu">
                  <i className="zmdi zmdi-settings"></i>
                  <div className="setting-dropdown js-dropdown">
                    <div className="account-dropdown__body">
                      <div className="account-dropdown__item">
                        <a href="#">
                          <i className="zmdi zmdi-account"></i>Account
                        </a>
                      </div>
                      <div className="account-dropdown__item">
                        <a href="#">
                          <i className="zmdi zmdi-settings"></i>Setting
                        </a>
                      </div>
                      <div className="account-dropdown__item">
                        <a href="#">
                          <i className="zmdi zmdi-money-box"></i>Billing
                        </a>
                      </div>
                    </div>
                    <div className="account-dropdown__body">
                      <div className="account-dropdown__item">
                        <a href="#">
                          <i className="zmdi zmdi-globe"></i>Language
                        </a>
                      </div>
                      <div className="account-dropdown__item">
                        <a href="#">
                          <i className="zmdi zmdi-pin"></i>Location
                        </a>
                      </div>
                      <div className="account-dropdown__item">
                        <a href="#">
                          <i className="zmdi zmdi-email"></i>Email
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="account-wrap">
                  <button
                    onClick={this.onLogoutClick}
                    className="btn btn-dark btn-md"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <header className="header-mobile header-mobile-2 d-block d-lg-none">
          <div className="header-mobile__bar">
            <div className="container-fluid">
              <div className="header-mobile-inner">
                <a className="logo" href="index">
                  <img src="images/icon/logo-white.png" alt="CoolAdmin" />
                </a>
                <button className="hamburger hamburger--slider" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <nav className="navbar-mobile">
            <div className="container-fluid">
              <ul className="navbar-mobile__list list-unstyled">
                <li className="has-sub">
                  <a className="js-arrow" href="#">
                    <i className="fas fa-tachometer-alt"></i>Dashboard
                  </a>
                  <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                    <li>
                      <a href="index">Dashboard 1</a>
                    </li>
                    <li>
                      <a href="index2">Dashboard 2</a>
                    </li>
                    <li>
                      <a href="index3">Dashboard 3</a>
                    </li>
                    <li>
                      <a href="index4">Dashboard 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="charts">
                    <i className="fas fa-chart-bar"></i>Charts
                  </a>
                </li>
                <li>
                  <a href="table">
                    <i className="fas fa-table"></i>Tables
                  </a>
                </li>
                <li>
                  <a href="form">
                    <i className="far fa-check-square"></i>Forms
                  </a>
                </li>
                <li>
                  <a href="calendar">
                    <i className="fas fa-calendar-alt"></i>Calendar
                  </a>
                </li>
                <li>
                  <a href="map">
                    <i className="fas fa-map-marker-alt"></i>Maps
                  </a>
                </li>
                <li className="has-sub">
                  <a className="js-arrow" href="#">
                    <i className="fas fa-copy"></i>Pages
                  </a>
                  <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                    <li>
                      <a href="login">Login</a>
                    </li>
                    <li>
                      <a href="register">Register</a>
                    </li>
                    <li>
                      <a href="forget-pass">Forget Password</a>
                    </li>
                  </ul>
                </li>
                <li className="has-sub">
                  <a className="js-arrow" href="#">
                    <i className="fas fa-desktop"></i>UI Elements
                  </a>
                  <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                    <li>
                      <a href="button">Button</a>
                    </li>
                    <li>
                      <a href="badge">Badges</a>
                    </li>
                    <li>
                      <a href="tab">Tabs</a>
                    </li>
                    <li>
                      <a href="card">Cards</a>
                    </li>
                    <li>
                      <a href="alert">Alerts</a>
                    </li>
                    <li>
                      <a href="progress-bar">Progress Bars</a>
                    </li>
                    <li>
                      <a href="modal">Modals</a>
                    </li>
                    <li>
                      <a href="switch">Switchs</a>
                    </li>
                    <li>
                      <a href="grid">Grids</a>
                    </li>
                    <li>
                      <a href="fontawesome">Fontawesome Icon</a>
                    </li>
                    <li>
                      <a href="typo">Typography</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="sub-header-mobile-2 d-block d-lg-none">
          <div className="header__tool">
            <div className="header-button-item has-noti js-item-menu">
              <div className="notifi-dropdown notifi-dropdown--no-bor js-dropdown">
                <div className="notifi__title">
                  <p>You have 3 Notifications</p>
                </div>
                <div className="notifi__item">
                  <div className="bg-c1 img-cir img-40">
                    <i className="zmdi zmdi-email-open"></i>
                  </div>
                  <div className="content">
                    <p>You got a email notification</p>
                    <span className="date">April 12, 2018 06:50</span>
                  </div>
                </div>
                <div className="notifi__item">
                  <div className="bg-c2 img-cir img-40">
                    <i className="zmdi zmdi-account-box"></i>
                  </div>
                  <div className="content">
                    <p>Your account has been blocked</p>
                    <span className="date">April 12, 2018 06:50</span>
                  </div>
                </div>
                <div className="notifi__item">
                  <div className="bg-c3 img-cir img-40">
                    <i className="zmdi zmdi-file-text"></i>
                  </div>
                  <div className="content">
                    <p>You got a new file</p>
                    <span className="date">April 12, 2018 06:50</span>
                  </div>
                </div>
                <div className="notifi__footer">
                  <a href="#">All notifications</a>
                </div>
              </div>
            </div>
            <div className="header-button-item js-item-menu">
              <i className="zmdi zmdi-settings"></i>
              <div className="setting-dropdown js-dropdown">
                <div className="account-dropdown__body">
                  <div className="account-dropdown__item">
                    <a href="#">
                      <i className="zmdi zmdi-account"></i>Account
                    </a>
                  </div>
                  <div className="account-dropdown__item">
                    <a href="#">
                      <i className="zmdi zmdi-settings"></i>Setting
                    </a>
                  </div>
                  <div className="account-dropdown__item">
                    <a href="#">
                      <i className="zmdi zmdi-money-box"></i>Billing
                    </a>
                  </div>
                </div>
                <div className="account-dropdown__body">
                  <div className="account-dropdown__item">
                    <a href="#">
                      <i className="zmdi zmdi-globe"></i>Language
                    </a>
                  </div>
                  <div className="account-dropdown__item">
                    <a href="#">
                      <i className="zmdi zmdi-pin"></i>Location
                    </a>
                  </div>
                  <div className="account-dropdown__item">
                    <a href="#">
                      <i className="zmdi zmdi-email"></i>Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="account-wrap">
              <div className="account-item account-item--style2 clearfix js-item-menu">
                <div className="image">
                  <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                </div>
                <div className="content">
                  <a className="js-acc-btn" href="#">
                    john doe
                  </a>
                </div>
                <div className="account-dropdown js-dropdown">
                  <div className="info clearfix">
                    <div className="image">
                      <a href="#">
                        <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                      </a>
                    </div>
                    <div className="content">
                      <h5 className="name">
                        <a href="#">john doe</a>
                      </h5>
                      <span className="email">johndoe@example.com</span>
                    </div>
                  </div>
                  <div className="account-dropdown__body">
                    <div className="account-dropdown__item">
                      <a href="#">
                        <i className="zmdi zmdi-account"></i>Account
                      </a>
                    </div>
                    <div className="account-dropdown__item">
                      <a href="#">
                        <i className="zmdi zmdi-settings"></i>Setting
                      </a>
                    </div>
                    <div className="account-dropdown__item">
                      <a href="#">
                        <i className="zmdi zmdi-money-box"></i>Billing
                      </a>
                    </div>
                  </div>
                  <div className="account-dropdown__footer">
                    <a href="#">
                      <i className="zmdi zmdi-power"></i>Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content--bgf7">
          <section className="au-breadcrumb2">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="au-breadcrumb-content">
                    <div className="au-breadcrumb-left">
                      <span className="au-breadcrumb-span">You are here:</span>
                      <ul className="list-unstyled list-inline au-breadcrumb__list">
                        <li className="list-inline-item active">
                          <a href="#">Home</a>
                        </li>
                        <li className="list-inline-item seprate">
                          <span>/</span>
                        </li>
                        <li className="list-inline-item">Dashboard</li>
                      </ul>
                    </div>
                    <form className="au-form-icon--sm" action="" method="post">
                      <input
                        className="au-input--w300 au-input--style2"
                        type="text"
                        placeholder="Search for datas &amp; reports..."
                      />
                      <button className="au-btn--submit2" type="submit">
                        <i className="zmdi zmdi-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Statics />
          <TableS />
          <section className="p-t-60 p-b-20">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div class="copyright"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(index);
