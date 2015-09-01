'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

class CardTitle extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    expand: PropTypes.bool,
  }

  render() {
    let { className, children, expand, ...otherProps } = this.props;

    let classes = classNames('mdl-card__title', {
      'mdl-card--expand': expand,
    }, className);

    let title = (typeof children === 'string')
      ? React.createElement('h2', { className: 'mdl-card__title-text' }, children)
      : children;

      return (
        <div className={classes} {...otherProps}>
          {title}
        </div>
      );
  }
}

export default CardTitle;
