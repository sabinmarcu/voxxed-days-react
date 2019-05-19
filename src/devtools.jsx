import React from 'react';

export default () => {
  let Renderer;
  if (process.env.NODE_ENV === 'development') {
    Renderer = require('mobx-react-devtools').default; //eslint-disable-line
  } else {
    Renderer = () => (<></>);
  }
  return (<Renderer />);
};
