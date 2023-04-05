import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';


function Sub(props) {

  const handleClick = () => {
    props.formReset();
  }
  return (
      <>
      <div
      style={{
        fontSize: '2rem'
      }}
      onClick={handleClick}
      data-tooltip-id='reset' data-tooltip-content="Click To Reset">
      Thanks for Subscribing!
      </div>
      <ReactTooltip id="reset" />
      </>
    )
}
export default Sub;