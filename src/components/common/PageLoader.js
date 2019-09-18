import React from 'react';
import Loader from 'react-loader-spinner';

export const ButtonLoader = () => null;
// {<Loader type="Oval" color="black" width="26" height="26" />}

export default props => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Loader
      type="Oval"
      color={props.color}
      width={props.width || '76'}
      height={props.height || '76'}
    />
  </div>
);
