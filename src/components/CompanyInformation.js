import React, { useState } from 'react';
import { connect } from 'react-redux';

function CompanyInformation(props) {

    return (

        <div className="container p-5">
            <header class="panel-heading">

                <h4 class="panel-title">CompanyInformation:</h4>
            </header>
            <form>

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

            </form>

        </div>
    )
}



export default CompanyInformation;