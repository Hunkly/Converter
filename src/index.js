import React from 'react'
import {render} from 'react-dom'
import './style.css'
import Range from './Range.js'
import Temperature from './Temperature.js'
import Speed from './Speed.js'

class Converter extends React.Component {
  render(){
    return(
        <div>
          <div className="tabs">
              <input type="radio" name="inset" value="" id="tab_1" checked/>
              <label id = "rn" for="tab_1">Range</label>

              <input type="radio" name="inset" value="" id="tab_2"/>
              <label id = "tm" for="tab_2">Temperature</label>

              <input type="radio" name="inset" value="" id="tab_3"/>
              <label id = "sp" for="tab_3">Speed</label>

              <div id="range"><Range/></div>
              <div id="temperature"><Temperature/></div>
              <div id="speed"><Speed/></div>
        </div>
      </div>
    )
  }
}
render(<Converter/>, document.getElementById('root'))
