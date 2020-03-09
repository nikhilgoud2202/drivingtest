import React, { useState } from 'react';
import { connect } from 'react-redux';

function DriverInformation(props) {
    let DriverTest = (e) => {
        props.history.push("/stepper");
    }

    return (

        <div className="container p-5">
            <header class="panel-heading">

                <h4 class="panel-title">DriverInformation:</h4>
            </header>
            <form onSubmit={DriverTest}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">First name</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="First Name" required />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Last Name</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="Last Name" required />
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">License Number</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="License Number" required />
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">Expiry Date</label>
                        <input type="text" class="form-control" id="inputCity" placeholder="Expiry Date" required />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputState">Class Type</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>

                </div>
                <header class="panel-heading">

                    <h4 class="panel-title">CompanyInformation:</h4>
                </header>


                <div class="form-group">
                    <label for="inputAddress">Company Name</label>
                    <input type="text" class="form-control" id="input" placeholder="Company Name" required />
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Address</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Address" required />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputCity">Tractor</label>
                        <input type="text" class="form-control" id="inputCity" placeholder="Tractor" required />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">Triler</label>
                        <input type="text" class="form-control" id="inputCity" placeholder="Triler" required />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputZip">Straight Truck</label>
                        <input type="text" class="form-control" id="inputZip" placeholder="Straight Truck" required />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputCity">Start Time</label>
                        <input type="text" class="form-control" id="inputCity" placeholder="Start Time" required />
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



export default DriverInformation;