// eslint-disable-next-line no-unused-vars
import React from 'react';
import classnames from 'classnames';

import './modal.css';

const Modal = props => (
  <div
    className={classnames('uk-flex-top uk-modal', {
      'uk-flex uk-open': props.open,
    })}
    onClick={props.ontoggle}
  >
    <div
      className={classnames(
        'uk-modal-dialog uk-margin-auto-vertical modal-box-shadow slight-radius',
      )}
      style={{ width: props.width }}
      onClick={e => e.stopPropagation()}
    >
      {props.children}
    </div>
  </div>
);
export default Modal;
