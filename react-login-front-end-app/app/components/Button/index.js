/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import './styles.scss';

/* eslint-disable react/require-default-props */
function Button(props) {
  const buttonProps = Object.assign({}, props);
  const propsToDelete = ['primary', 'social'];

  propsToDelete.map((value) => delete buttonProps[value]);

  const label = !isEmpty(props.label) && !props.children ? <span>{props.label}</span> : props.children;

  return (
    <button
      className={`
        button
        ${props.primary && 'primary' }
        ${props.social === 'discord' && 'discord'}
        ${props.social === 'facebook' && 'primary'}
        ${props.social === 'github' && 'github'}
        ${props.social === 'google' && 'google'}
        ${props.social === 'microsoft' && 'microsoft'}
        ${props.social === 'twitch' && 'twitch'}
        ${props.social === 'twitter' && 'twitter'}
        ${props.social === 'vk' && 'vk'}
        ${props.social === 'auth0' && 'auth0'}
      `}
      type={props.type || 'button'}
      {...buttonProps}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any,
  label: PropTypes.string,
  primary: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
