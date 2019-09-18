import React from 'react';

const EmptyState = React.memo(props => (
  <>
    <div className="enrol-box-frame">
      <svg className="icon-24">
        <use xlinkHref="/uploads/icons.svg#folder" />
      </svg>
      <span className="font-14 mt-1">{props.msg}</span>
    </div>
  </>
));

export default EmptyState;

export const EmptyStateB = React.memo(props => (
  <>
    <div style={{ marginTop: '15rem' }}>
      <svg className="for-you-ll prefix is-wide d-flx mx-auto">
        <use xlinkHref="/uploads/icons.svg#for-you-illustration" />
      </svg>
      <p className="nanotext lh-157 co-black tx-c ff-regular mt-1h ">
        <span className="co-readablegray suffix is-wide">{props.msg}</span>
      </p>
    </div>
  </>
));
