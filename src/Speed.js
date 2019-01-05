import React from 'react'
import './style.css';
export default class Speed extends React.Component {
    state = {
      firstSpeedValue: "km/h",
      secondSpeedValue: "km/h",
      firstinputvalue: "",
      secondinputvalue: "",
    }

    converterSpeed = (firstValue,secondValue) => {
      var speed_value = 0;
      if(firstValue === "km/h"){
        if(secondValue === "km/h") this.speed_value = 1;
        if(secondValue === "mile/h") this.speed_value = 0.621371;
        if(secondValue === "m/s") this.speed_value = 0.277778;
      }
      if(firstValue === "mile/h"){
        if(secondValue === "km/h") this.speed_value = 1.60934;
        if(secondValue === "mile/h") this.speed_value = 1;
        if(secondValue === "m/s") this.speed_value = 0.44704;
      }
      if(firstValue === "m/s"){
        if(secondValue === "km/h") this.speed_value = 3.6;
        if(secondValue === "mile/h") this.speed_value = 2.23694;
        if(secondValue === "m/s") this.speed_value = 1;
      }
      return speed_value;
    }

    firstSelectChange = event =>
        this.setState({
        firstSpeedValue: event.target.value,

      });

    secondSelectChange = event =>
        this.setState({
        secondSpeedValue: event.target.value,
          });

    firstinputChange = event =>
        this.setState({
        speed_value: this.converterSpeed(this.state.secondSpeedValue, this.state.firstSpeedValue),
        firstinputvalue: event.target.value * this.speed_value,
        secondinputvalue: event.target.value
          });

    secondinputChange = event =>
        this.setState({
        speed_value: this.converterSpeed(this.state.firstSpeedValue, this.state.secondSpeedValue),
        secondinputvalue: event.target.value * this.speed_value,
        firstinputvalue: event.target.value
          });


    render(){
        return (
          <div className="converter_block">
            <h1>Converter of speed</h1>
            <div className="block_input_elements">
            <input
              type="text"
              name="firstvalue"
              value={this.state.firstinputvalue}
              onChange={this.secondinputChange}
            />
            <select
              name="firstSpeedValue"
              onChange={this.firstSelectChange}
            >
              <option value = "km/h">km/h</option>
              <option value = "mile/h">mile/h</option>
              <option value = "m/s">m/s</option>
            </select>
             =
            <input
              type="text"
              name="secondvalue"
              value={this.state.secondinputvalue}
              onChange={this.firstinputChange}
            />
            <select
              name="secondSpeedValue"
              onChange={this.secondSelectChange}
            >
              <option value = "km/h">km/h</option>
              <option value = "mile/h">mile/h</option>
              <option value = "m/s">m/s</option>
            </select>
            </div>
          </div>

    )
  }
}
