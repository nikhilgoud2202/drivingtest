import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

function Driverlog(props) {
    let DriverLog = (e) => {
        props.history.push("/drivingtestr");
    }
    return (
        <div className="Container">

            <header class="panel-heading">

                <h2 class="panel-title">Driver Login</h2>
            </header>



            <form onSubmit={DriverLog}>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationTooltip01">First name</label>
                        <input type="text" class="form-control" id="validationTooltip01" autocomplete="off" placeholder="First name" required />

                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationTooltip02">Last name</label>
                        <input type="text" class="form-control" id="validationTooltip02" autocomplete="off" placeholder="Last name" required />

                    </div>

                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="validationTooltip03">License Number</label>
                        <input type="text" class="form-control" id="validationTooltip03" autocomplete="off" placeholder="License Number" required />

                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>


            </form>
        </div>
    )
}
export default withRouter(Driverlog)