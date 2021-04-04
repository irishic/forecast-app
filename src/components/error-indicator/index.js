import React from 'react';
import PropTypes from 'prop-types';
import { ErrorIndicatorWrapper } from './error-indicator.sc';

export const ErrorIndictor = ({header, body}) => {
  return <ErrorIndicatorWrapper className='message is-danger'>
    <div className="message-body">
      <h3>{header}</h3>
      <p>{body}</p>
    </div>
  </ErrorIndicatorWrapper>;
};

ErrorIndictor.propTypes = {
  header: PropTypes.string,
  body: PropTypes.string,
};