import React from 'react'
import './style.css';
export default class Range extends React.Component {
    state = {
      firstRangeValue: "metres",
      secondRangeValue: "metres",
      firstinputvalue: "",
      secondinputvalue: "",
    }

    converterRange = (firstValue,secondValue) => {
      var rangevalue = 0;
      if(firstValue === "metres"){
        if(secondValue === "metres") this.rangevalue = 1;
        if(secondValue === "yards") this.rangevalue = 1.094;
        if(secondValue === "miles") this.rangevalue = 0.000621371;
      }
      if(firstValue === "yards"){
        if(secondValue === "metres") this.rangevalue = 0.9144;
        if(secondValue === "yards") this.rangevalue = 1;
        if(secondValue === "miles") this.rangevalue = 0.000568182;
      }
      if(firstValue === "miles"){
        if(secondValue === "metres") this.rangevalue = 1609.34;
        if(secondValue === "yards") this.rangevalue = 1760;
        if(secondValue === "miles") this.rangevalue = 1;
      }
      return rangevalue;
    }

    firstSelectChange = event =>
        this.setState({
        firstRangeValue: event.target.value,
      });

    secondSelectChange = event =>
        this.setState({
        secondRangeValue: event.target.value,
          });

    firstinputChange = event =>
        this.setState({
        rangevalue: this.converterRange(this.state.secondRangeValue, this.state.firstRangeValue),
        firstinputvalue: event.target.value * this.rangevalue,
        secondinputvalue: event.target.value
      });

    secondinputChange = event =>
        this.setState({
        rangevalue: this.converterRange(this.state.firstRangeValue, this.state.secondRangeValue),
        secondinputvalue: event.target.value * this.rangevalue,
        firstinputvalue: event.target.value
      });


    render(){
        return (
          <div className="converter_block">
            <h1>Converter of range</h1>
            <div className="block_input_elements">
            <input
              type="text"
              name="firstvalue"
              value={this.state.firstinputvalue}
              onChange={this.secondinputChange}
            />
            <select
              name="firstRangeValue"
              onChange={this.firstSelectChange}
            >
              <option value = "metres">metres</option>
              <option value = "yards">yards</option>
              <option value = "miles">miles</option>
            </select>
            =
            <input
              type="text"
              name="secondvalue"
              value={this.state.secondinputvalue}
              onChange={this.firstinputChange}
            />
            <select
              name="secondRangeValue"
              onChange={this.secondSelectChange}
            >
              <option value = "metres">metres</option>
              <option value = "yards">yards</option>
              <option value = "miles">miles</option>
            </select>
            </div>
          </div>
    )
  }
}
