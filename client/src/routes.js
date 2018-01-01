import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Inbox from "./pages/Inbox";
import Cover from "./pages/Cover";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Auth from './modules/Auth';


const routes = {
  // base component (wrapper for the whole application).
  component: Dashboard,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, Dashboard);
        } else {
          callback(null, Cover);
        }
      }
    },

    {
      path: '/settings',
      component: Settings
    },

    {
      path: '/inbox',
      component: Inbox
    },

    {
      path: '/login',
      component: Login
    },

    {
      path: '/signup',
      component: Signup
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }

  ]
};

export default routes;
