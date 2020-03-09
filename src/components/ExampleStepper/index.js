import React, { Component } from 'react';
import { connect } from 'react-redux';
import { prevStep, nextStep, jumpStep } from '../../actions/index';
import { Link, Redirect } from 'react-router-dom';
import { Container, Row, Col, Progress } from 'reactstrap';
import './ExampleStepper.css';
import DriverDetails from '../DriverDetails';
import CompanyInformation from '../CompanyInformation';
import DriverInformation from '../../DriverInformation';
import Partone from './Partone';
import Parttwo from './Parttwo';
import Partthree from './Partthree';
import Partfour from './Partfour';
import Partfive from './Partfive';
import Partsix from './Partsix';
import Partseven from './Partseven';

const steps = [


  { label: "Part-1", content: <Partone /> },
  { label: "Part-2", content: <Parttwo /> },
  { label: "Part-3", content: <Partthree /> },
  { label: "Part-4", content: <Partfour /> },
  { label: "Part-5", content: <Partfive /> },
  { label: "Part-6", content: <Partsix /> },
  // { label: "Part-9", content: <p>I am some content 4!</p>, disabled: true },
  { label: "Part-7", content: <Partseven /> },

];

class ExampleStepper extends Component {
  renderSegments(steps) {
    console.log(this.props)
    const doneList = this.props.done || [];
    const current = this.props.match.params.step;
    const widthPercent = 100 / steps.length;

    var segments = [];
    for (var i = 0; i < steps.length; i++) {
      var color;
      if (doneList.includes(i)) {
        color = "done";
      }
      else if (i.toString() === current) {
        color = null;
      }
      else {
        color = "todo";
      }

      var label;
      if (i === current || steps[i].disabled) {
        label = steps[i].label;
      } else {
        const curIndex = i;
        label = (
          <Link to={`./${i}`} onClick={() => this.props.jumpStep(curIndex)} class="col-md-12 mb-6">
            {steps[i].label}
          </Link>
        );
      }

      var segment = (
        <Progress bar value={widthPercent} color={color} key={i}>
          {label}
        </Progress>
      );

      segments.push(segment);
    }

    return (
      <Progress multi>
        {segments}
      </Progress>
    )
  }

  hasPrev() {
    return this.props.current - 1 >= 0
  }

  hasNext() {
    return !(this.props.current + 1 >= steps.length)
  }

  render() {
    if (this.props.match.params.step !== this.props.current.toString()) {
      return <Redirect to={`/stepper/${this.props.current}`} />
    }

    return (
      <Container>
        <Row>
          <Col>
            {this.renderSegments(steps)}
          </Col>
        </Row>

        <Row>
          <Col>
            {steps[this.props.current].content}
          </Col>
        </Row>

        <Row>
          <Col>
            {this.hasPrev() && <button onClick={() => this.props.prevStep()} className="btn btn-default btn-lg">Prev</button>}
            {this.hasNext() && <button onClick={() => this.props.nextStep()} className="btn btn-primary btn-lg">Next</button>}
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  console.log("State:");
  console.log(state);
  return {
    current: state.stepper.get("current"),
    done: state.stepper.get("done")
  }
}

const mapDispatchToProps = dispatch => {
  return {
    prevStep: () => dispatch(prevStep()),
    nextStep: () => dispatch(nextStep(steps.length)),
    jumpStep: (step) => dispatch(jumpStep(step, steps.length)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleStepper)