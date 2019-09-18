import React from 'react';
import Loader from 'react-loader-spinner';

const ContentLoader = React.memo(props => (
  <div style={props.style || { margin: '15rem auto', width: '5%' }}>
    <Loader
      type={props.type || 'Puff'}
      color={props.color || '#39f'}
      height={props.h || 15}
      width={props.w || 15}
    />
  </div>
));
export default ContentLoader;
