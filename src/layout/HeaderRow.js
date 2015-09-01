'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Spacer from './Spacer';

class HeaderRow extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
  }

  render() {
    let { className, title, ...otherProps } = this.props;

    let classes = classNames('mdl-layout__header-row', className);

    return (
      <div className={classes} {...otherProps}>
        {!title ? null : <span className="mdl-layout-title">{title}</span>}
        <Spacer />
        {this.props.children}
      </div>
    );
  }
}

export default HeaderRow;
