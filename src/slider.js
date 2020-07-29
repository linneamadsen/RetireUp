import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';
import React from 'react';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import SP500 from './SP500';

function findRange(){

  let range = {
    minRange: 1926,
    maxRange: 2020
  }
  range.minRange = document.querySelector("#minyear")
  range.maxRange = document.querySelector("#maxyear")
  console.log(range)
};

export default () => (
  <div>
    <div>
      <p>Select Year</p>
      <form class="multi-range-field my-5 pb-5">
        <input type="number" placeholder="minyear" value = "1926" id="minyear" />
        <input type="number" placeholder="maxyear" value = "2020" id="maxyear" />
        <input type="submit" onClick={findRange()} />
      </form>
    </div>
  </div>
);
