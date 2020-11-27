import React from 'react';

const Like = ({ liked, onToggleClick }) => {
  let classes = 'fa fa-heart';
  classes += liked === true ? '' : '-o';
  return (
    <i
      onClick={onToggleClick}
      className={classes}
      style={{ cursor: 'pointer' }}
    ></i>
  );
};

export default Like;
