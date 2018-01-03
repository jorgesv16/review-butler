// import React from 'react';
// import 'whatwg-fetch';
// import { Redirect } from 'react-router-dom';
//
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { incrementProgress, decrementProgress } from '../../actions/progress.js';
// import { loginAttempt, loginSuccess, loginFailure } from '../../actions/authentication';
//
// import Login from './Login.js';
// var loggedIn;
//
// export class LoginContainer extends React.Component {
//   constructor(props) {
//     super(props);
//
//     // bound functions
//     this.attemptLogIn = this.attemptLogIn.bind(this);
//   }
//
//   async attemptLogIn(userData) {
//     const {
//       decrementProgressAction,
//       incrementProgressAction,
//       loginAttemptAction,
//       loginFailureAction,
//       loginSuccessAction,
//     } = this.props;
//
//     // turn on spinner
//     incrementProgressAction();
//
//     // contact login API
//     await fetch(
//       // where to contact
//       '/api/authentication/login',
//       // what to send
//       {
//         method: 'POST',
//         body: JSON.stringify(userData),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'same-origin',
//       },
//     ).then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       }
//       return null;
//     }).then((json) => {
//       if (json) {
//         loginSuccessAction(json);
//         loggedIn = true;
//       } else {
//         loginFailureAction(new Error('Authentication Failed'));
//         alert('Please enter a correct email address and password')
//       }
//     }).catch((error) => {
//       loginFailureAction(new Error(error));
//     });
//
//     // turn off spinner
//     decrementProgressAction();
//   }
//
//   render() {
//     if (loggedIn) {
//       return (
//         <Redirect to="/inbox" />
//       );
//     }
//     return (
//       <div>
//         <Login loginFunction={this.attemptLogIn} />
//       </div>
//     );
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     incrementProgressAction: incrementProgress,
//     decrementProgressAction: decrementProgress,
//     loginAttemptAction: loginAttempt,
//     loginFailureAction: loginFailure,
//     loginSuccessAction: loginSuccess,
//   }, dispatch);
// }
// export default connect(null, mapDispatchToProps)(LoginContainer);
