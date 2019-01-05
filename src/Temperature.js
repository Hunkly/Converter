import React from 'react'
import './style.css';
export default class Temperature extends React.Component {
    state = {
      firstTempValue: "celsius",
      secondTempValue: "celsius",
      firstinputvalue: "",
      secondinputvalue: "",
    }

    converterTemperature = (firstValue,secondValue,input) => {
      var temperature_value = 0;
      if(firstValue === "celsius"){
        if(secondValue === "celsius") this.temperature_value = input;
        if(secondValue === "fahrenheit") this.temperature_value = (input*1.8)+32;
        if(secondValue === "kelvin") this.temperature_value = ((-1*input)-273.15)*-1;
      }
      if(firstValue === "fahrenheit"){
        if(secondValue === "celsius") this.temperature_value = (input-32)*0.555;
        if(secondValue === "fahrenheit") this.temperature_value = input;
        if(secondValue === "kelvin") this.temperature_value = (input-32)*0.555+273.15;
      }
      if(firstValue === "kelvin"){
        if(secondValue === "celsius") this.temperature_value = (input-273.15);
        if(secondValue === "fahrenheit") this.temperature_value = (input-273.15)*1.8+32;
        if(secondValue === "kelvin") this.temperature_value = input;
      }
      return temperature_value;
    }

    firstSelectChange = event =>
        this.setState({
        firstTempValue: event.target.value,

      });

    secondSelectChange = event =>
        this.setState({
        secondTempValue: event.target.value,
          });

    firstinputChange = event =>
        this.setState({
        secondinputvalue: event.target.value,
        temperature_value: this.converterTemperature(this.state.secondTempValue, this.state.firstTempValue,event.target.value),
        firstinputvalue: this.temperature_value,
      });

    secondinputChange = event =>
        this.setState({
        firstinputvalue: event.target.value,
        temperature_value: this.converterTemperature(this.state.firstTempValue, this.state.secondTempValue, event.target.value),
        secondinputvalue: this.temperature_value
      });


    render(){
        return (
          <div className="converter_block">
            <h1>Converter of temperature</h1>
            <div className="block_input_elements">
            <input
              type="text"
              name="firstvalue"
              value={this.state.firstinputvalue}
              onChange={this.secondinputChange}
            />
            <select
              name="firstTempValue"
              onChange={this.firstSelectChange}
            >
              <option value = "celsius">°C</option>
              <option value = "kelvin">K</option>
              <option value = "fahrenheit">°F</option>
            </select>
            =
            <input
              type="text"
              name="secondvalue"
              value={this.state.secondinputvalue}
              onChange={this.firstinputChange}
            />
            <select
              name="secondTempValue"
              onChange={this.secondSelectChange}
            >
              <option value = "celsius">°C</option>
              <option value = "kelvin">K</option>
              <option value = "fahrenheit">°F</option>
            </select>
            </div>
          </div>

    )
  }
}
