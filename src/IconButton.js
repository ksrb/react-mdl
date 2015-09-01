'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Button from './Button';
import Icon from './Icon';

class IconButton extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
  }

  render() {
    let { className, name, ...otherProps } = this.props;

    let classes = classNames('mdl-button--icon', className);

    return (
      <Button className={classes} {...otherProps}>
        <Icon name={name} />
      </Button>
    );
  }
}

export default IconButton;
