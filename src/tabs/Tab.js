'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Tab extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
    tabId: PropTypes.number,
  }

  _handleClick = () => {
    this.props.onClick(this.props.tabId);
  }

  render() {
    let { active, className, tabId, onTabClick, style, ...otherProps } = this.props;

    let classes = classNames('mdl-tabs__tab', {
      'is-active': active,
    }, className);

    style = style || {};
    style.cursor = 'pointer';

    return <a className={classes} onClick={this._handleClick} style={style} {...otherProps}>{this.props.children}</a>;
  }
}

export default Tab;
