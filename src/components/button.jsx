import React from "react";

function ButtonFeature(props) {
  return (
    <button className="emojis" onClick={props.clickProp}>
      <i class={props.emoji}></i>
    </button>
  );
}

export default ButtonFeature;
