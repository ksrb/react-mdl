'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

class CardMenu extends React.Component {

  render() {
    let { className, ...otherProps } = this.props;

    return (
      <div className={classNames('mdl-card__menu', className)} {...otherProps}>
        {this.props.children}
      </div>
    );
  }
}

export default CardMenu;
