import React, { Component } from 'react';
import { connect } from 'react-redux';

class CompanyInformation extends Component {
    render() {
        return (
            <div className="container p-5">
                <fieldset class="form-group">
                    <div class="row">
                        <legend class="col-form-label pt-0">Do you have a Learning license ? </legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                <label class="form-check-label" for="gridRadios1">
                                   Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                <label class="form-check-label" for="gridRadios2">
                                   No
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                <label class="form-check-label" for="gridRadios2">
                                    NA
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        )
    }
}


export default CompanyInformation;