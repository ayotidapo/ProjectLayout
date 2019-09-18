import React from 'react';
import classnames from 'classnames';

import './navbar.css';

const Navigations = React.memo(props => {
  const { linkId, activeId, onChangeDescription, navigation } = props;
  return (
    <>
      <li
        className={classnames('mb-3 tx-c hand', {
          navi_active: linkId === activeId,
        })}
        onClick={() => onChangeDescription(navigation)}
      >
        <a>
          <span>
            <svg
              className={classnames(navigation.svgClass, {
                activ_color: linkId === activeId,
              })}
            >
              <use xlinkHref={`/uploads/${navigation.svgIcon}`} />
            </svg>
          </span>
          <br />
          <span
            className={classnames('tx-c mt-h', {
              activ_color: linkId === activeId,
            })}
          >
            {navigation.name}
          </span>
        </a>
      </li>
    </>
  );
});

export default Navigations;
// icons.svg#for-you
