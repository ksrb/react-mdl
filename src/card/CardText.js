'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

class CardText extends React.Component {

  render() {
    let { className, ...otherProps } = this.props;

    return (
      <div className={classNames('mdl-card__supporting-text', className)} {...otherProps}>
        {this.props.children}
      </div>
    );
  }
}

export default CardText;
