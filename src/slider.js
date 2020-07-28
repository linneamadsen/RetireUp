
import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';
import React from 'react';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import SP500 from './SP500';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const { Handle } = Slider;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const wrapperStyle = { width: 400, margin: 50 };
var x = 8;


export default () => (
  <div>
    <div style={wrapperStyle}>
      <p>Select Range</p>
      <Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
    </div>
  </div>
);
