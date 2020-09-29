import React, { useState, useEffect, useRef } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';

// core components
import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import Footer from 'components/Footer/Footer.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import FixedPlugin from 'components/FixedPlugin/FixedPlugin.js';

import routes from 'routes.js';

import logo from 'assets/img/logo-footer.png';

var ps;

const Admin = props => {
  const [backgroundColor, setBackgroundColor] = useState('blue');
  const [sidebarOpened, setSidebarOpened] = useState(
    document.documentElement.className.indexOf('nav-open') !== -1
  );
  const mainPanel = useRef(null);

  useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      document.documentElement.className += ' perfect-scrollbar-on';
      document.documentElement.classList.remove('perfect-scrollbar-off');
      ps = new PerfectScrollbar(mainPanel, {
        suppressScrollX: true
      });
      let tables = document.querySelectorAll('.table-responsive');
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
        document.documentElement.className += ' perfect-scrollbar-off';
        document.documentElement.classList.remove('perfect-scrollbar-on');
      }
    };
  });

  // componentDidUpdate(e) {
  //     if (e.history.action === 'PUSH') {
  //         if (navigator.platform.indexOf('Win') > -1) {
  //             let tables = document.querySelectorAll('.table-responsive');
  //             for (let i = 0; i < tables.length; i++) {
  //                 ps = new PerfectScrollbar(tables[i]);
  //             }
  //         }
  //         document.documentElement.scrollTop = 0;
  //         document.scrollingElement.scrollTop = 0;
  //         this.refs.mainPanel.scrollTop = 0;
  //     }
  // }
  // this function opens and closes the sidebar on small devices
  const toggleSidebar = () => {
    document.documentElement.classList.toggle('nav-open');
    setSidebarOpened(!sidebarOpened);
  };

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === '/admin') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const handleBgClick = color => {
    setBackgroundColor(color);
  };
  const getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return 'Brand';
  };
  return (
    <>
      <div className="wrapper">
        <Sidebar
          {...props}
          routes={routes}
          bgColor={backgroundColor}
          logo={{
            outterLink: '#',
            text: 'ISGMS',
            imgSrc: logo
          }}
          toggleSidebar={toggleSidebar}
        />
        <div className="main-panel" ref={mainPanel} data={backgroundColor}>
          <AdminNavbar
            {...props}
            brandText={getBrandText(props.location.pathname)}
            toggleSidebar={toggleSidebar}
            sidebarOpened={sidebarOpened}
          />
          <Switch>
            {getRoutes(routes)}
            <Redirect from="*" to="/admin/dashboard" />
          </Switch>
          <Footer fluid />
        </div>
      </div>
      <FixedPlugin bgColor={backgroundColor} handleBgClick={handleBgClick} />
    </>
  );
};

export default Admin;
