import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

function Partfour(props) {
    return (
        <div className="Container">
            <header class="panel-heading">

                <h4 class="panel-title">BACKING AND PARKING:</h4>
            </header>
            <form>
                <div class="form-group form-row">

                    <label class="col-sm-3 control-label" for="w6-provide_age_proof">BACKING AND PARKING QUS-1:</label>
                    <div class="col-sm-3">
                        <div class="radio-custom radio-info">
                            <input id="provide_age_proof_yes" name="provide_age_proof" type="radio" value="Yes" required />
                            <label for="provide_age_proof_yes">Yes</label>
                        </div>
                        <div class="radio-custom radio-info">
                            <input id="provide_age_proof_no" name="provide_age_proof" type="radio" value="No" />
                            <label for="provide_age_proof_no">No</label>
                        </div>
                        <div class="radio-custom radio-info">
                            <input id="provide_age_proof_no" name="provide_age_proof" type="radio" value="No" />
                            <label for="provide_age_proof_no">N.A</label>
                        </div>
                    </div>
                    <label class="col-sm-3 control-label" for="w6-worked_before">BACKING AND PARKING QUS-2:</label>
                    <div class="col-sm-3">
                        <div class="radio-custom radio-info">
                            <input id="worked_before_yes" name="worked_before" type="radio" value="Yes" required />
                            <label for="worked_before_yes">Yes</label>
                        </div>
                        <div class="radio-custom radio-info">
                            <input id="worked_before" name="worked_before" type="radio" value="No" />
                            <label for="worked_before_no">No</label>
                        </div>
                        <div class="radio-custom radio-info">
                            <input id="provide_age_proof_no" name="provide_age_proof" type="radio" value="No" />
                            <label for="provide_age_proof_no">N.A</label>
                        </div>
                    </div>
                </div>
                <div class="form-group form-row">

                    <label class="col-sm-3 control-label" for="w6-provide_age_proof">BACKING AND PARKING QUS-3:</label>
                    <div class="col-sm-3">
                        <div class="radio-custom radio-info">
                            <input id="provide_age_proof_yes" name="provide_age_proof" type="radio" value="Yes" required />
                            <label for="provide_age_proof_yes">Yes</label>
                        </div>
                        <div class="radio-custom radio-info">
                            <input id="provide_age_proof_no" name="provide_age_proof" type="radio" value="No" />
                            <label for="provide_age_proof_no">No</label>
                        </div>
                        <div class="radio-custom radio-info">
                            <input id="provide_age_proof_no" name="provide_age_proof" type="radio" value="No" />
                            <label for="provide_age_proof_no">N.A</label>
                        </div>
                    </div>
                    <label class="col-sm-3 control-label" for="w6-worked_before">BACKING AND PARKING QUS-4:</label>
                    <div class="col-sm-3">
                        <div class="radio-custom radio-info">
                            <input id="worked_before_yes" name="worked_before" type="radio" value="Yes" required />
                            <label for="worked_before_yes">Yes</label>
                        </div>
                        <div class="radio-custom radio-info">
                            <input id="worked_before" name="worked_before" type="radio" value="No" />
                            <label for="worked_before_no">No</label>
                        </div>
                        <div class="radio-custom radio-info">
                            <input id="provide_age_proof_no" name="provide_age_proof" type="radio" value="No" />
                            <label for="provide_age_proof_no">N.A</label>
                        </div>
                    </div>
                </div>
                <div class="form-group form-row">

                    <label class="col-sm-3 control-label" for="w6-provide_age_proof">BACKING AND PARKING QUS-5:</label>
                    <div class="col-sm-3">
                        <div class="radio-custom radio-info">
                            <input id="provide_age_proof_yes" name="provide_age_proof" type="radio" value="Yes" required />
                            <label for="provide_age_proof_yes">Yes</label>
                        </div>
                        <div class="radio-custom radio-info">
                            <input id="provide_age_proof_no" name="provide_age_proof" type="radio" value="No" />
                            <label for="provide_age_proof_no">No</label>
                        </div>
                        <div class="radio-custom radio-info">
                            <input id="provide_age_proof_no" name="provide_age_proof" type="radio" value="No" />
                            <label for="provide_age_proof_no">N.A</label>
                        </div>
                    </div>
                    <label class="col-sm-3 control-label" for="w6-worked_before">BACKING AND PARKING QUS-6:</label>
                    <div class="col-sm-3">
                        <div class="radio-custom radio-info">
                            <input id="worked_before_yes" name="worked_before" type="radio" value="Yes" required />
                            <label for="worked_before_yes">Yes</label>
                        </div>
                        <div class="radio-custom radio-info">
                            <input id="worked_before" name="worked_before" type="radio" value="No" />
                            <label for="worked_before_no">No</label>
                        </div>
                        <div class="radio-custom radio-info">
                            <input id="provide_age_proof_no" name="provide_age_proof" type="radio" value="No" />
                            <label for="provide_age_proof_no">N.A</label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Comment Section:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </div>
    )
}
export default withRouter(Partfour)