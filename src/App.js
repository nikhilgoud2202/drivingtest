import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import ExampleStepper from './components/ExampleStepper';

import logo from './logo.png'
import './App.css'
import Driverlog from './Driverlog';
import DriverInformation from './DriverInformation';

function HomeContent(props) {
  let LoginHandler = (e) => {
    props.history.push("/driver");
  }
  return (
    <div className="Container">
      <header class="panel-heading">

        <h2 class="panel-title">Login</h2>
      </header>
      <form onSubmit={LoginHandler}>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationTooltip03">User Name</label>
            <input type="text" class="form-control" id="validationTooltip03" autocomplete="off" placeholder="User Name" required />

          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationTooltip03">Password</label>
            <input type="password" class="form-control" id="validationTooltip03" autocomplete="off" placeholder="Password" required />

          </div>
        </div>

        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </div>

      </form>
    </div>
  )
}



function App(props) {

  return (
    <div className="App">
      <div className="App-header" style={{ backgroundColor: "#f6f6f6" }} >
        <img src={logo} style={{ height: "50px" }} />

      </div>

      <Container>

        <Row>
          <Col>
            <Switch>
              <Route exact path="/" component={HomeContent} />
              <Route exact path="/driverlogin" component={Driverlog} />
              <Route exact path="/drivingtest" component={DriverInformation} />
              <Route path="/stepper/:step" component={ExampleStepper} />
              <Route path="/stepper" render={() => <Redirect to="/stepper/0" />} />

            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


// const mapStateToProps = state => {
//   return {
//     // foo: state.foo,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     // foo: () => dispatch(foo()),
//   }
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
export default withRouter(App)