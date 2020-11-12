import React from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  classes += props.liked === true ? "" : "-o";
  return (
    <i
      onClick={props.onToggleClick}
      className={classes}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
