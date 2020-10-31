import React from 'react';
import { MicroApp } from 'umi';

const SubApp = (props) => {
  const {app} = props.match.params;

  return (
    <div>
      <MicroApp name={app} />
    </div>
  );
}
export default SubApp;
