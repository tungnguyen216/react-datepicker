import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

export default class Default extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div className="row">
        <pre className="column example__code">
          <code className="jsx">
            {`
            <DatePicker
                selected={this.state.startDate}
                startOnMonday
                placeholderText='Weeks start on Sunday'
                onChange={this.handleChange}
            />
            `}
          </code>
        </pre>
        <div className="column">
          <DatePicker
            selected={this.state.startDate}
            startOnMonday
            locale='en-gb'
            placeholderText='Weeks starts on Sunday'
            onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}
