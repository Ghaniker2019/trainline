import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";

class Date extends React.Component {
  state = {
    startDate: null,
    endDate: null
  };

  onChange = startDate => {
    this.setState({ startDate: startDate });
  };

  render() {
    return (
      <DayPickerRangeController
        onChange={this.onChange}
        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) =>
          this.setState({ startDate, endDate })
        } // PropTypes.func.isRequired,
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
      />
    );
  }
}
export default Date;
